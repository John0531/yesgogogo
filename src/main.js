import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import SwiperCore, { Autoplay, Virtual, Navigation, Pagination, EffectCube } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/swiper-bundle.min.css'

import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { currency } from './assets/js/currency.js'
import { alert } from './assets/js/alert.js'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import '../src/assets/scss/helpers/_alert.scss'

// ?vue-meta
import { createMetaManager } from 'vue-meta'

// ?vue-gtag-next
import VueGtag from 'vue-gtag-next'

import checkToken from '@/assets/js/checkToken.js'

import VueLazyload from 'vue-lazyload' // 圖片懒加载插件

AOS.init({
  delay: 500,
  duration: 1000
})

// ?axios timeout 設定
axios.defaults.timeout = 30000
axios.defaults.retry = 0 // ?最多可請求的次數
axios.defaults.retryDelay = 1000 // ?重新發出請求的間隔
// ?axios 設定
// 記住我的登出也是直接接取getAccessToken()
axios.interceptors.request.use(
  config => {
    const token = checkToken.getAccessToken()
    if (config.url.includes('UITCCardDiscount')) {
      store.commit('refreshLoading', true)
      return config
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    store.commit('refreshLoading', true)
    return config
    // }
  }
)
// ?設定cross跨域 並設定訪問許可權 允許跨域攜帶cookie資訊
axios.defaults.withCredentials = false

axios.interceptors.response.use(
  config => {
    store.commit('refreshLoading', false)
    return config
  },
  err => {
    store.commit('refreshLoading', false)
    // ?如果登入Modal的data-shown屬性不等於shown(關閉狀態)，則跳出登入Modal
    if (store.state.loginModalDom.getAttribute('data-shown') !== 'shown') {
      // ?非 200 或非 401 的狀態顯示(ex. 500 時顯示)
      if (err.response && (err.response.status !== 200 && err.response.status !== 401)) {
        Swal.fire({
          title: `${err.response.status} 請重新整理頁面`,
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          backdrop: true,
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
        return Promise.reject(err)
      }
      // 如果401表示沒有token，就會要求user請先登入
      if (err.response && err.response.status === 401) {
        // ? refresh_token 重新拿新的一組token，並重打API
        const refreshToken = checkToken.getFreshToken()
        if (refreshToken) {
          const url = `${process.env.VUE_APP_API}/api/members/RefreshToken`
          const rftk = axios({
            method: 'get',
            url: url,
            headers: { Authorization: `Bearer ${refreshToken}` }
          })
            .then((res) => {
              store.dispatch('loginSetCookie', res.data.info)
              // console.log(err.config)
              // ? 取得 token 後，重新整理頁面
              router.go()
              return Promise.reject(err)
            })
            .catch((error) => {
              store.commit('refreshIsLogOut', true)
              localStorage.removeItem('refreshyesgo')
              localStorage.removeItem('refreshyesgotime')
              return Promise.reject(error)
            })
          return Promise.all([rftk])
        }
        store.commit('getcartIconNum', 0)
        // process.env.VUE_APP_SingleModal
        if (document.body.clientWidth < 576) {
          Swal.fire({
            title: '請先登入',
            allowOutsideClick: true,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            backdrop: true,
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          }).then((result) => {
            if (result.isConfirmed) {
              store.commit('refreshUpdateRandomNum', true)
              // var md = new bootstrap.Modal(store.state.loginModalDom)
              router.push('/membermobilelogin')
              // 記錄前一頁的路由，在登入後導回該頁面
              router.beforeEach((to, from, next) => {
                store.commit('refreshCartPath', from.fullPath)
                next()
              })
            }
          })
        } else {
          store.commit('refreshIsLogOut', true)
          store.commit('refreshUpdateRandomNum', false)
          Swal.fire({
            title: '請先登入',
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            backdrop: true,
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          }).then((result) => {
            if (result.isConfirmed) {
              store.commit('refreshUpdateRandomNum', true)
              // var md = new bootstrap.Modal(store.state.loginModalDom)
              // 記錄前一頁的路由，在登入後導回該頁面
              if (store.state.isOldLogin) {
                // ?若需用舊會員登入(isOldLogin)，跳出舊會員登入視窗
                store.state.oldloginModal.show()
              } else {
                // ?若不須用舊會員登入(isOldLogin)，跳出新會員登入視窗
                store.state.loginModal.show()
              }
            }
          })
        }
        return Promise.reject(err)
      }
      // ?axios timeout 超時
      const config = err.config
      if (!config || !config.retry) return Promise.reject(err)
      // ?設定重新發出請求次數
      config._retryCount = config._retryCount || 0
      // ?檢查是否達到最多的請求次數
      if (config._retryCount >= config.retry) {
        Swal.fire({
          title: '連線逾時',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          backdrop: true,
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
        return Promise.reject(err)
      }
      config._retryCount += 1
      // ?重新發出請求
      const backoff = new Promise((resolve) => {
        setTimeout(() => resolve(), config.retryDelay || 1)
      })
      return backoff.then(() => {
        return axios(config)
      })
    }
    return Promise.reject(err)
  }
)

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

SwiperCore.use([Autoplay, Virtual, Navigation, Pagination, EffectCube])

const app = createApp(App)
// ?自訂全域屬性
app.config.globalProperties.$currency = {
  currency
}
app.config.globalProperties.$custom = {
  alert
}

app.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'error.png',
  // loading: 'loading.gif',
  attempt: 1,
  listenEvents: ['scroll', 'mousewheel'],
  lazyComponent: true
})

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(VueSweetalert2)
app.provide('axios', axios)
app.provide('store', store)
// app.provide('router', router)
app.provide('Swal', Swal)
app.use(createMetaManager())

// ? GA 追蹤碼設定
if (window.location.href.includes('www')) {
  app.use(VueGtag, {
    property: [
      { id: 'G-XVW7SKD91W' }, // ? yesgogogo
      { id: 'UA-55590701-3' }, // ? yesgogogo
      { id: 'AW-735017195' },
      { id: 'AW-11034505753' } // ? 新廣告商 傑思愛德威
    ]
  })
} else {
  app.use(VueGtag, {
    property: [
      { id: 'G-YHB905WF6N' }, // ? sheng
      { id: 'UA-192759883-1' } // ? sheng
    ]
  })
}
app.component('Loading', VueLoading)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

app.mount('#app')
