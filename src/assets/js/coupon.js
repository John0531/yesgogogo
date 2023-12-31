import checkToken from '@/assets/js/checkToken.js'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import router from '../../router'
import axios from 'axios'
import store from '../../store'

const coupon = {
  // * 領折價券
  async getCoupon (code) {
    const AccessToken = checkToken.getAccessToken()
    const RefreshToken = checkToken.getFreshToken()
    if (!AccessToken && RefreshToken) {
      Swal.fire({
        title: '頁面逾時，請重新整理',
        allowOutsideClick: false,
        confirmButtonColor: '#F8412E',
        confirmButtonText: '確認',
        width: 400,
        customClass: {
          title: 'text-class',
          confirmButton: 'confirm-btn-class'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          router.go()
        }
      })
      return
    }
    if (!AccessToken && !RefreshToken) {
      Swal.fire({
        title: '您好，請登入後再領取優惠',
        allowOutsideClick: true,
        confirmButtonColor: '#F8412E',
        confirmButtonText: '確認',
        backdrop: true,
        width: 400,
        customClass: {
          title: 'text-class',
          confirmButton: 'confirm-btn-class'
        }
      }).then(result => {
        if (result.isConfirmed) {
          if (document.body.clientWidth < 576) {
          // ? 手機版
            router.push('/membermobilelogin')
          } else {
          // ? web 版
            store.state.loginModal.show()
          }
        }
      })
      return
    }

    try {
      const postData = {
        CouponCodeList: code
      }

      const url = `${process.env.VUE_APP_API}/api/coupon/SetCoupon`
      const res = await axios.post(url, postData)

      if (res.data.rtnCode !== 0) {
        if (res.data.rtnCode === 1022) {
          Swal.fire({
            title: '您已領取過了，無法重複領券!',
            allowOutsideClick: false,
            confirmButtonColor: '#de0a19',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
        } else if (res.data.rtnCode === 4004) {
          Swal.fire({
            title: '查無此優惠券代碼!',
            allowOutsideClick: false,
            confirmButtonColor: '#de0a19',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
        } else {
          Swal.fire({
            title: `領取失敗(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#de0a19',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
        }
        return
      }
      if (res.data.rtnCode === 0) {
        Swal.fire({
          title: '優惠券領取成功，請至會員專區查閱',
          allowOutsideClick: false,
          confirmButtonColor: '#de0a19',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
        return true
      }
    } catch (err) {
      if (err.response.status === 401) {
        const token = checkToken.getAccessToken()
        if (token) {
          return coupon.getCoupon()
        }
      }
    }
  }
}
export default coupon
