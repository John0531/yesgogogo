import moment from 'moment'

// ? 檢查 access & refresh token
const token = {
  // ?yesgo
  getAccessToken: function () {
    const yesgotime = localStorage.getItem('yesgotime')
    const now = moment().format('YYYY/MM/DD HH:mm:ss')

    if (moment(now, 'YYYY/MM/DD HH:mm:ss').isAfter(yesgotime)) {
      // 過期
      localStorage.removeItem('yesgo')
      localStorage.removeItem('yesgotime')
      return ''
    } else {
      // 未過期
      return localStorage.getItem('yesgo') || ''
    }
  },
  getFreshToken: function () {
    const refreshyesgotime = localStorage.getItem('refreshyesgotime')
    const now = moment().format('YYYY/MM/DD HH:mm:ss')
    if (moment(now, 'YYYY/MM/DD HH:mm:ss').isAfter(refreshyesgotime)) {
      // 過期
      localStorage.removeItem('refreshyesgo')
      localStorage.removeItem('refreshyesgotime')
      return ''
    } else {
      // 未過期
      return localStorage.getItem('refreshyesgo') || ''
    }
  },
  removeAccessToken: function () {
    localStorage.removeItem('yesgo')
    localStorage.removeItem('yesgotime')
  },
  // ?AppId
  getAppId: function () {
    return localStorage.getItem('appId') || ''
  }
}

export default token
