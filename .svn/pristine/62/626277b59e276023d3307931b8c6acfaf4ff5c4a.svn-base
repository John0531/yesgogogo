import axios from 'axios'
import checkToken from '@/assets/js/checkToken.js'

async function getGiftEvent () {
  try {
    let code = ''
    if (sessionStorage.getItem('couponCode')) {
      code = 'couponCode'
    } else if (sessionStorage.getItem('pointCode')) {
      code = 'pointCode'
    } else if (sessionStorage.getItem('cardCode')) {
      code = 'cardCode'
    }
    switch (code) {
      // ?贈點數活動
      case 'pointCode': {
        const url = `${process.env.VUE_APP_API}/api/widgets/EventSmoneyCode?Code=${sessionStorage.getItem('pointCode')}`
        const rsp = await axios.get(url)
        sessionStorage.removeItem('pointCode')
        if (rsp === null || rsp.data === null) {
          return {
            isSuccess: false,
            message: '系統錯誤，請洽客服人員',
            rtnCode: null
          }
        }
        // ?已領過此活動優惠(3601)
        if (rsp.data.rtnCode === 3601) {
          return {
            isSuccess: false,
            message: '你已領過囉！<br>(活動期間每會員帳號限領一次)',
            rtnCode: rsp.data.rtnCode
          }
        }
        // ?活動代碼不在期間內(3604)
        if (rsp.data.rtnCode === 3604) {
          return {
            isSuccess: false,
            message: '活動已結束',
            rtnCode: rsp.data.rtnCode
          }
        }
        // ?查無此活動代碼(3602),活動代碼未啟用(3603),活動代碼確認錯誤(3699)
        if (rsp.data.rtnCode !== 0) {
          return {
            isSuccess: false,
            message: '活動代碼錯誤',
            rtnCode: rsp.data.rtnCode
          }
        }
        // ?領取成功
        if (rsp.data.rtnCode === 0) {
          return {
            isSuccess: true,
            message: '你已獲得購物金，記得使用喔！',
            rtnCode: rsp.data.rtnCode
          }
        }
        break
      }
      case 'couponCode': {
        // ?贈折價券活動
        sessionStorage.removeItem('couponCode')
        break
      }
      // ?卡友專屬活動
      case 'cardCode': {
        // API
        const url = `${process.env.VUE_APP_API}/api/Activity/SetActivity`
        // !dev
        // const url = 'https://dev.yesgogogo.com/emall/api/Activity/SetActivity'
        const activity = {
          ActivityCode: 'CityCafe711_UBCard'
        }
        const res = await axios.post(url, activity)
        if (!res || !res.data) {
          return {
            isSuccess: false,
            message: '系統錯誤，請洽客服人員',
            rtnCode: null
          }
        }
        // ?領取失敗，以狀態訊息顯示
        if (res.data.rtnCode !== 0) {
          return {
            isSuccess: false,
            message: res.data.rtnMsg,
            rtnCode: res.data.rtnCode
          }
        }
        // ?領取成功
        if (res.data.rtnCode === 0) {
          return {
            isSuccess: true,
            message: `恭喜您已完成登記~</br>
            每月10日將於【yesgogogo】FB粉絲專頁</br>
            公布得獎名單並通知得獎者，祝您中獎~ `,
            rtnCode: res.data.rtnCode
          }
        }
        sessionStorage.removeItem('cardCode')
        break
      }
      default: {
        return {
          isSuccess: false,
          message: '無此優惠活動',
          rtnCode: ''
        }
        // eslint-disable-next-line no-unreachable
        break
      }
    }
  } catch (err) {
    if (err.response.status === 401) {
      const token = checkToken.getAccessToken()
      if (token) {
        getGiftEvent()
      }
    }
  }
}

export default getGiftEvent
