import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import store from '../../store'

const member = {
  // ? 新舊會員登入
  login: async function (apiUrl, loginInfo, loginModalDom) {
    const url = `${process.env.VUE_APP_API}/api/members/${apiUrl}`
    const res = await axios.post(url, loginInfo)
    if (res.data.rtnCode !== 0) {
      Swal.fire({
        title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
        allowOutsideClick: true,
        confirmButtonColor: '#F8412E',
        confirmButtonText: '確認',
        width: 400,
        customClass: {
          title: 'text-class',
          confirmButton: 'confirm-btn-class'
        }
      })
      return
    }
    store.dispatch('getCartNum')
    store.dispatch('loginSetCookie', res.data.info)
    if (loginModalDom) {
      loginModalDom.hide()
    }
    const { value: isConfirmed } = await Swal.fire({
      title: '歡迎登入',
      allowOutsideClick: false,
      confirmButtonColor: '#F8412E',
      confirmButtonText: '確認',
      width: 400,
      customClass: {
        title: 'text-class',
        confirmButton: 'confirm-btn-class'
      }
    })
    if (isConfirmed) {
      return true
    }
  },
  // ? 一般/卡友註冊
  register: async function (apiUrl, registerInfo) {
    const url = `${process.env.VUE_APP_API}/api/members/${apiUrl}`
    const res = await axios.post(url, registerInfo)
    if (res.data.rtnCode !== 0) {
      Swal.fire({
        title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
        allowOutsideClick: true,
        confirmButtonColor: '#F8412E',
        confirmButtonText: '確認',
        width: 400,
        customClass: {
          title: 'text-class',
          confirmButton: 'confirm-btn-class'
        }
      })
      return
    }
    store.dispatch('loginSetCookie', res.data.info)
    const { value: isConfirmed } = await Swal.fire({
      title: '註冊成功',
      allowOutsideClick: true,
      confirmButtonColor: '#F8412E',
      confirmButtonText: '確認',
      width: 400,
      customClass: {
        title: 'text-class',
        confirmButton: 'confirm-btn-class'
      }
    })
    if (isConfirmed) {
      return true
    }
  },
  // ? 註冊取得簡訊驗證碼
  getMsgCode: async function (msgInfo) {
    const url = `${process.env.VUE_APP_API}/api/members/CallNewsletter`
    const res = await axios.get(url, { params: msgInfo })
    if (res.data.rtnCode !== 0) {
      Swal.fire({
        title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
        allowOutsideClick: true,
        confirmButtonColor: '#F8412E',
        confirmButtonText: '確認',
        width: 400,
        customClass: {
          title: 'text-class',
          confirmButton: 'confirm-btn-class'
        }
      })
      return
    }
    Swal.fire({
      title: 'yesgogogo即食購商城驗證碼發送成功！！',
      allowOutsideClick: true,
      confirmButtonColor: '#F8412E',
      confirmButtonText: '確認',
      width: 400,
      customClass: {
        title: 'text-class',
        confirmButton: 'confirm-btn-class'
      }
    })
    //* 驗證碼倒數計時
    let count = 300
    store.commit('refreshRegisterMsgSecond', count)
    let timer = setInterval(() => {
      if (store.state.registerMsgSecond > 0 && store.state.registerMsgSecond <= 300) {
        count--
        store.commit('refreshRegisterMsgSecond', count)
      } else {
        clearInterval(timer)
        timer = null
      }
    }, 1000)

    return {
      transactionId: res.data.info.transactionId
    }
  },
  // ? 圖形驗證碼
  getValidateCode: async function () {
    const url = `${process.env.VUE_APP_API}/api/members/ValidateCode`
    const res = await axios.get(url)
    if (res.data.rtnCode === 0) {
      return {
        img: res.data.info.captcha,
        validTransactionId: res.data.info.validTransactionId
      }
    }
  },
  // ? 會員登出
  logout: async function (apiUrl) {
    const { value: isConfirmed } = await Swal.fire({
      title: '您確定要登出嗎?',
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: '#F8412E',
      cancelButtonColor: '#4D4D4D',
      confirmButtonText: '是',
      cancelButtonText: '否',
      allowOutsideClick: false,
      width: 400,
      customClass: {
        title: 'text-class',
        confirmButton: 'confirm-btn-class',
        cancelButton: 'confirm-btn-class'
      }
    })
    if (isConfirmed) {
      const url = `${process.env.VUE_APP_API}/api/members/${apiUrl}`
      const res = await axios.get(url)
      if (res.data.rtnCode !== 0) {
        Swal.fire({
          title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
        return
      }
      store.commit('refreshClickCart', false)
      store.dispatch('logoutRemoveCookie')
      store.commit('getcartIconNum', 0)
      store.commit('refreshCartPath', '')
      const { value: isclick } = await Swal.fire({
        title: '您已登出!',
        confirmButtonColor: '#F8412E',
        allowOutsideClick: false,
        customClass: {
          title: 'text-class'
        }
      })
      if (isclick) {
        return true
      }
    }
  }
}

export default member
