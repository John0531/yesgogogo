import Swal from 'sweetalert2/dist/sweetalert2.js'

// ? yesgogogo驗證分類

const validate = {
  // ? 檢查姓名格式
  CheckName: function (name) {
    const nameRule = /^.{0,5}$/
    return nameRule.test(name) ? true : '姓名請勿超過5個字'
  },
  // ? 檢查Email格式
  CheckEmail: function (email) {
    const emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    return emailRule.test(email) ? true : '格式錯誤'
  },
  // ? 檢查密碼格式
  CheckPwd: function (pwd) {
    const pwdRule = /^(?=.*\d)(?=.*[a-zA-Z])(?!.*[^\x21-\x7e]).{6,}$/
    return pwdRule.test(pwd) ? true : '至少6碼且要英數字混合'
  },
  // ? 密碼確認
  ConfirmPwd: function (confirmPwd, pwd) {
    if (confirmPwd === '') {
      return '確認密碼為必填'
    }
    if (confirmPwd !== pwd) {
      return '與密碼不一致'
    }
    return true
  },
  // ? 新密碼第一個欄位確認(修改密碼用)
  CheckNewPwd: function (newPwd, pwd) {
    const pwdRule = /^(?=.*\d)(?=.*[a-zA-Z])(?!.*[^\x21-\x7e]).{6,}$/
    if (!pwdRule.test(newPwd)) {
      return '至少6碼而且要英數字混合'
    }
    if (newPwd === pwd) {
      return '與原密碼一致'
    }
    return true
  },
  // ? 新密碼第二個欄位確認(修改密碼用)
  ConfirmFinalPwd: function (confirm, pwd) {
    if (confirm === '') {
      return '確認密碼為必填'
    }
    if (confirm !== pwd) {
      return '與新密碼不一致'
    }
    return true
  },
  // ? 手機格式
  CheckMobileNum: function (phoneNum) {
    const mobileNumRule = /^(09)[0-9]{8}$/
    return mobileNumRule.test(phoneNum) ? true : '格式錯誤'
  },
  // ? 勾選我同意才可submit
  registerSubmit: function (terms) {
    if (terms === false) {
      Swal.fire({
        title: '請勾選我同意',
        allowOutsideClick: true,
        confirmButtonColor: '#F8412E',
        confirmButtonText: '確認',
        width: 400,
        customClass: {
          title: 'text-class',
          confirmButton: 'confirm-btn-class'
        }
      })
      return false
    } else {
      return true
    }
  },
  // ? 舊會員帳號登入驗證 (身分證/Email/手機號碼)
  CheckAccount: function (Account) {
    // ? 身分證驗證
    const idRule = /^[a-z](1|2)\d{8}$/i
    // ? Email驗證
    const emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    // ? 手機驗證
    const phoneNumber = /^(09)[0-9]{8}$/
    // ? 三個驗證判斷
    if (idRule.test(Account)) {
      return 'id'
    }
    if (emailRule.test(Account)) {
      return true
    }
    if (phoneNumber.test(Account)) {
      return true
    }
    return '請輸入正確的帳號'
  },
  // ? 生日驗證
  CheckBirth: function (birth) {
    if (!birth.year || !birth.month || !birth.day) {
      Swal.fire({
        title: '生日為必填',
        allowOutsideClick: true,
        confirmButtonColor: '#F8412E',
        confirmButtonText: '確認',
        width: 400,
        customClass: {
          title: 'text-class',
          confirmButton: 'confirm-btn-class'
        }
      })
      return false
    } else {
      return true
    }
  },
  // *卡友註冊身分證驗證
  CheckId: function (id) {
    const idRule = /^[a-z](1|2)\d{8}$/i
    if (idRule.test(id)) {
      return true
    }
    return '請輸入身分證正確格式'
  }
}

export default validate
