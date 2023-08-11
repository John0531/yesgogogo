
import moment from 'moment'
import checkToken from '@/assets/js/checkToken.js'

// ? webView 固定資訊交換寫法

const webView = {
  // ? 在當前瀏覽器添加監聽器
  AddHandler: function (productId, click) {
    window.addEventListener('flutterInAppWebViewPlatformReady', webView[click](productId))
  },
  // ?在webview傳產品id值給app
  ClickBuy: function (productId) {
    if (productId) {
      const args = [productId]
      window.flutter_inappwebview.callHandler('productHandler', ...args)
    }
  },
  // ?在webview前往app會員註冊
  ClickRegister: function () {
    window.flutter_inappwebview.callHandler('registerHandler')
  },
  // ?在webview前往app更換密碼
  ClickChangePwd: function () {
    window.flutter_inappwebview.callHandler('changePwdHandler')
  },
  // *在webview前往app領取折價券或者是共享App的token?
  // ?在webview前往app會員登入或者是共享App的token?
  ClickLogin: function () {
    // *拿取App的token並存入local
    webView.CheckToken()
    // *拿Local的token
    const appToken = checkToken.getAccessToken()
    if (!appToken) {
      // *沒有則強迫登入
      window.flutter_inappwebview.callHandler('loginHandler')
    }
  },
  ClickCoupon: function () {
    // *拿取App的token
    const appToken = ''
    if (appToken) {
      // *如果有token，share給webView
      localStorage.setItem('yesgo', appToken.memberAccessToken)
      const deadline = moment().add(appToken.tokenAccessExpiredSeconds - 100, 'seconds').format('YYYY/MM/DD HH:mm:ss')
      localStorage.setItem('yesgotime', deadline)
      if (appToken.memberRefreshToken) {
        localStorage.setItem('refreshyesgo', appToken.memberRefreshToken)
        const refreshdeadline = moment().add(appToken.tokenRefreshExpiredSeconds - 100, 'seconds').format('YYYY/MM/DD HH:mm:ss')
        localStorage.setItem('refreshyesgotime', refreshdeadline)
      }
    } else {
      // *沒有則強迫登入前往
      window.flutter_inappwebview.callHandler('couponHandler')
    }
  },
  RemoveHandler: function (click) {
    // *卸載EventListener
    window.removeEventListener('flutterInAppWebViewPlatformReady', webView[click])
  },
  CheckAppToken: function () {
    // ?2022/12/23 取出App的cookie給Web使用
    const Token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    const memberRefreshToken = Token.accToken
    const memberAccessToken = Token.refToken
    const tokenAccessExpiredSeconds = 7200
    const tokenRefreshExpiredSeconds = 1209600
    const token = { memberAccessToken, memberRefreshToken, tokenAccessExpiredSeconds, tokenRefreshExpiredSeconds }
    if (token) {
    // ?2022/12/26 將已取出App的cookie放在localStorage供檢查使用
      this.$store.dispatch('loginSetCookie', token)
    }
    alert(token)
  }
}
export default webView
