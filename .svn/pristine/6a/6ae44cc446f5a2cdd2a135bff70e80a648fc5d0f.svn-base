import { createStore } from 'vuex'
import axios from 'axios'
import moment from 'moment'

export default createStore({
  state: {
    category: '',
    categoryId: '',
    subCategory: '',
    subCategoryId: '',
    menuList: [],
    menuFreeList: [],
    loginModal: null,
    oldloginModal: null,
    registerModal: null,
    loginModalDom: null,
    cartIconNum: 0, // *購物車icon顯示的產品總數量
    isLogOut: true, //* 是否登出
    updateRandomNum: false,
    checkoutCartList: {
      items: [],
      limitShipping: []
    }, // ? 購物車第0頁傳給第1頁的商品資訊
    checkoutCart: {
      items: [],
      payInfo: {},
      activities: []
    },
    isClickCart: false, //* 是否點擊購物車icon
    clickCartPath: '', //* 手機版記錄購物車前次路徑
    isClickCollection: false, //* 是否點擊購物車icon
    clickCollectionPath: '', //* 手機版記錄購物車前次路徑
    checkInfo: [], //* 將訂單資訊暫存，避免返回頁面重新KEYIN
    recordReadHeight: '', //* 紀錄消費者目前瀏覽商品高度
    recordHomeReadHeight: '', //* 記錄消費者目前在首頁瀏覽商品高度
    recordEventReadHeight: '', //* 記錄消費者目前在活動頁瀏覽商品高度
    recordDataHeight: '', //* 紀錄消費者該頁商品資料高度
    recordReadData: '', //* 顯示消費者目前瀏覽商品數量
    pageData: '', //* 顯示消費者目前瀏覽頁面商品總數
    storeOrder: {}, //* 會員訂單頁拋出有疑問訂單
    storeProduct: {}, //* 會員訂單頁拋出有疑問產品
    datatoGA: [], //* 傳給GA的參數
    isOldLogin: false, //* 用舊會員登入
    BirthdayData: {}, // * 生日活動頁資訊
    isLoginFromBirthday: false, // ! 是否從生日活動頁登入
    cartBarInfo: {}, // * 購物車活動資訊
    registerMsgSecond: 0,
    isLoading: false
  },
  mutations: {
    refreshLoading (state, payload) {
      state.isLoading = payload
    },
    getRegisterModal (state, dom) {
      state.registerModal = dom
    },
    refreshRegisterMsgSecond (state, second) {
      state.registerMsgSecond = second
    },
    getCartBarInfo (state, payload) {
      state.cartBarInfo = payload
    },
    getcheckoutCartList (state, payload) {
      state.checkoutCartList = payload
    },
    getCategory (state, category) {
      state.category = category
    },
    getCategoryId (state, Id) {
      state.categoryId = Id
    },
    getSubCategory (state, subcategory) {
      state.subCategory = subcategory
    },
    getSubCategoryId (state, id) {
      state.subCategoryId = id
    },
    setMenu (state, list) {
      state.menuList = list
    },
    setFreeMenu (state, list) {
      state.menuFreeList = list
    },
    getLoginModal (state, modal) {
      state.loginModal = modal
    },
    getLoginModalDom (state, modal) {
      state.loginModalDom = modal
    },
    getcartIconNum (state, allProductNum) {
      state.cartIconNum = allProductNum
    },
    refreshIsLogOut (state, LogOut) {
      state.isLogOut = LogOut
    },
    refreshUpdateRandomNum (state, RandomNum) {
      state.updateRandomNum = RandomNum
    },
    getCheckoutCartInfo (state, CartInfo) {
      state.checkoutCart = CartInfo
    },
    refreshClickCart (state, clickCart) {
      state.isClickCart = clickCart
    },
    refreshClickCollection (state, clickCollection) {
      state.isClickCollection = clickCollection
    },
    refreshCartPath (state, clickCart) {
      state.clickCartPath = clickCart
    },
    refreshCollectionPath (state, clickCollection) {
      state.clickCollectionPath = clickCollection
    },
    getCheckInfo (state, checkOrder) {
      state.checkInfo = checkOrder
    },
    getRecordHeight (state, recordHeight) {
      state.recordReadHeight = recordHeight
    },
    getHomeRecordHeight (state, recordHeight) {
      state.recordHomeReadHeight = recordHeight
    },
    getEventRecordHeight (state, recordHeight) {
      state.recordEventReadHeight = recordHeight
    },
    getDataHeight (state, dataHeigh) {
      state.recordDataHeight = dataHeigh
    },
    getReadData (state, viewData) {
      state.recordReadData = viewData
    },
    getPageData (state, totalData) {
      state.pageData = totalData
    },
    askOrder (state, order) {
      state.storeOrder = order
    },
    askProduct (state, product) {
      state.storeProduct = product
    },
    refreshDatatoGA (state, data) {
      state.datatoGA = data
    },
    getoldLoginModal (state, modal) {
      state.oldloginModal = modal
    },
    goToOldLogin (state, oldlogin) {
      state.isOldLogin = oldlogin
    },
    getBirthdayData (state, data) {
      state.BirthdayData = data
    },
    refreshLoginFromBirthday (state, login) {
      state.isLoginFromBirthday = login
    }
  },
  actions: {
    getMenu ({ dispatch, commit }) {
      const url = `${process.env.VUE_APP_API}/api/widgets/category`
      axios.get(url)
        .then(res => {
          if (res.status === 200) {
            const list = res.data.info
            commit('setMenu', list)
            dispatch('getCategoryWord')
            dispatch('getSubCategoryWord')
          }
        })
      // TODO滿額出貨選單(測試環境)
      if (!window.location.href.includes('www.yesgogogo.com')) {
        const urlFree = `${process.env.VUE_APP_API}/api/widgets/freedelivery`
        axios.get(urlFree)
          .then((res) => {
            if (res.data.rtnCode === 0) {
              commit('setFreeMenu', res.data.info)
              dispatch('getCategoryWord')
              dispatch('getSubCategoryWord')
            }
          })
      }
    },
    // ?在麵包屑館別的名稱，從getMenu撈取所有的資料
    // ?比對大館的中文名稱，只會有大館的名稱
    getCategoryWord ({ commit, state }) {
      // 取得 id 對應的中文
      state.menuList.forEach(item => {
        if (item.categoryCode === state.categoryId) {
          commit('getCategory', item.name)
        }
      })
    },
    // ?在麵包屑館別的名稱，從getMenu撈取所有的資料
    // ? 比對大館跟小館的中文名稱
    getSubCategoryWord ({ commit, state }) {
      // 取得 id 對應的中文
      // ?因為有兩層，所以要跑兩次迴圈
      state.menuList.forEach(item => {
        item.subCategories.forEach((item2) => {
          if (item2.categoryCode === state.subCategoryId) {
            // ?大館名稱
            commit('getCategory', item.name)
            // ?大管id
            commit('getCategoryId', item.categoryCode)
            // ?小館名稱
            commit('getSubCategory', item2.name)
          }
        })
      })
    },
    getCartNum ({ dispatch, commit }) {
      const url = `${process.env.VUE_APP_API}/api/newCart/myCart`
      axios.get(url)
        .then((res) => {
          if (res.data.rtnCode !== 0 && res.data.rtnCode !== 5003) {
            localStorage.setItem('cartErrorStatus', `${res.data.rtnMsg}(${res.data.rtnCode})`)
          }
          // dispatch呼叫countCartNum這個action裡的countCartNum function
          dispatch('countCartNum', res)
        })
    },
    // * 計算購物車商品總量
    countCartNum ({ commit }, res) {
      let cartIconNum = 0
      if (res.data.info) {
        if (res.data.info.items.length !== 0) {
          res.data.info.items.forEach((item) => {
            cartIconNum += item.quantity
          })
        }
      }
      // commit到 mutations裡的 getcartIconNum，getcartIconNum的cartIconNum在改變它的值
      commit('getcartIconNum', cartIconNum)
    },
    // ? 4種登入、3種註冊(手機、桌機、卡友)設置cookie
    loginSetCookie (context, payload) {
      const cookieToken = payload
      // const time = new Date()
      // const getTimer = time.getTime()
      // time.setTime(getTimer + 1000 * (cookieToken.tokenAccessExpiredSeconds - 100))
      // const utc = time.toUTCString()
      // document.cookie = `LoginToken=${cookieToken.memberAccessToken}; expires=${utc};path=/`
      // ?存進 localStorage 內
      localStorage.setItem('yesgo', cookieToken.memberAccessToken)
      const deadline = moment().add(cookieToken.tokenAccessExpiredSeconds - 100, 'seconds').format('YYYY/MM/DD HH:mm:ss')
      localStorage.setItem('yesgotime', deadline)
      if (cookieToken.memberRefreshToken) {
        // time.setTime(getTimer + 1000 * (cookieToken.tokenRefreshExpiredSeconds - 100))
        // const utc2 = time.toUTCString()
        // document.cookie = `RefreshToken=${cookieToken.memberRefreshToken};expires=${utc2};path=/`
        localStorage.setItem('refreshyesgo', cookieToken.memberRefreshToken)
        const refreshdeadline = moment().add(cookieToken.tokenRefreshExpiredSeconds - 100, 'seconds').format('YYYY/MM/DD HH:mm:ss')
        localStorage.setItem('refreshyesgotime', refreshdeadline)
      }
    },
    // ? 2種登出移除cookie
    logoutRemoveCookie () {
      // document.cookie = 'LoginToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/'
      localStorage.removeItem('yesgo')
      localStorage.removeItem('yesgotime')
      // const RefreshToken = document.cookie.replace(/(?:(?:^|.*;\s*)RefreshToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (localStorage.getItem('refreshyesgo')) {
        // document.cookie = 'RefreshToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/'
        localStorage.removeItem('refreshyesgo')
        localStorage.removeItem('refreshyesgotime')
      }
    }
  }
})
