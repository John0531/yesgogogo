<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="row justify-content-center my-5">
        <div class="col-md-1"></div>
        <div class="col-lg-10">
          <div class="row">
            <div class="col-md-6">
              <Form
                class="form_registration pe-lg-4 pe-md-3"
                v-slot="{ errors }"
                @submit="registerSubmit"
              >
                <div class="d-flex justify-content-between">
                  <div class="title col-md-8 col-lg-7">
                    <span class="registraion text-primary fs-5">會員註冊</span>
                  </div>
                  <div class="titleCard col-md-4 col-lg-5 text-center ">
                    <router-link to="/registercreditcard" class="btn btn-outline-secondaries cardBtn">
                      <span class="registraion fs-5 ">聯邦卡友註冊
                        <i class="bi bi-chevron-right seeMoreIcon"></i>
                      </span>
                    </router-link>
                  </div>
                </div>
                <div class="form_detail mt-4">
                  <div class="row name d-flex align-items-end">
                    <div class="col-md-12 mb-3">
                      <label for="inputEmail4" class="form-label">姓名</label>
                      <span class="text-primary">*</span>
                      <Field
                        name="姓名"
                        placeholder="姓名"
                        :rules="nameLimit"
                        class="form-control py-2"
                        :class="{ 'is-invalid': errors['姓名'] } "
                        v-model="form.FullName"
                        autocomplete="off"
                      ></Field>
                      <ErrorMessage
                        name="姓名"
                        class="invalid-feedback"
                      ></ErrorMessage>
                    </div>
                  </div>
                  <div class="row email">
                    <div class="col-md-12 mb-3">
                      <label for="inputAddress" class="form-label"
                        >電子郵件</label
                      >
                      <span class="text-primary">*</span>
                      <Field
                        name="信箱"
                        placeholder="請輸入email"
                        :rules="checkEmail"
                        type="text"
                        class="form-control py-2"
                        id="memberEmail"
                        autocomplete="off"
                        :class="{ 'is-invalid': errors['信箱'] }"
                        v-model="form.Email"
                      ></Field>
                      <ErrorMessage
                        name="信箱"
                        class="invalid-feedback"
                      ></ErrorMessage>
                      <p class="text-primary">{{ checkEmailMsg }}</p>
                    </div>
                  </div>
                  <div class="row phone">
                    <div class="col-md-12">
                      <label class="form-label">手機</label>
                      <span class="text-primary">*</span>
                      <Field
                        name="手機"
                        type="tel"
                        class="form-control py-2"
                        placeholder="請輸入手機號碼"
                        autoCompleteType="disabled"
                        :rules="isPhone"
                        :class="{ 'is-invalid': errors['手機'] }"
                        v-model="form.PhoneNum"
                        autocomplete="off"
                        maxlength="10"
                      ></Field>
                      <ErrorMessage
                        name="手機"
                        class="invalid-feedback"
                      ></ErrorMessage>
                      <span id="uidt" class="text-primary"></span>
                    </div>
                  </div>
                  <div class="row verification mt-2">
                    <div class="col-md-7 col-lg-7 mb-1">
                      <Field
                        name="手機驗證碼"
                        type="number"
                        rules="required"
                        class="form-control py-2"
                        placeholder="請輸入驗證碼(每日限定傳送3次)"
                        autoCompleteType="disabled"
                        autocomplete="off"
                        :class="{ 'is-invalid': errors['手機驗證碼'] }"
                        v-model="form.OtpCode"
                      ></Field>
                      <ErrorMessage
                        name="手機驗證碼"
                        class="invalid-feedback"
                      ></ErrorMessage>
                    </div>
                    <div class="col-md-5 col-lg-5 mb-3">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        @click.prevent="getMsgCode"
                        :disabled="!show"
                      >
                        <span v-show="show">獲取驗證碼</span>
                        <span v-show="!show" class="count"
                          >{{ count }} 秒後 重新發送</span
                        >
                      </button>
                    </div>
                  </div>
                  <div class="row passwshoword">
                    <div class="col-md-12 mb-3">
                      <label class="form-label" for="newPassword">密碼</label>
                      <span class="text-primary">*</span>
                      <div id="f">
                        <Field
                          name="密碼"
                          type="password"
                          :rules="checkPwdRule"
                          class="form-control form_password py-2"
                          placeholder="至少6碼且英數字混合"
                          :class="{ 'is-invalid': errors['密碼'] }"
                          autocomplete="off"
                          v-model="form.SecretCode"
                          id="newPassword"
                        ></Field>
                        <ErrorMessage
                          name="密碼"
                          class="invalid-feedback"
                        ></ErrorMessage>
                        <a
                          href="#"
                          @click.prevent="
                            isOldShow = !isOldShow;
                            pwdCheck(isOldShow, $event)
                          "
                          class="passwordImage position-absolute d-block"
                        >
                          <img
                            src="../assets/img/yesgo_icon26.svg"
                            v-if="isOldShow"
                          />
                          <img v-else src="../assets/img/yesgo_icon25.svg" />
                        </a>
                      </div>
                      <p class="text-primary">{{ password }}</p>
                    </div>
                  </div>
                  <div class="row doublecheck">
                    <div class="col-md-12 mb-3">
                      <label for="confirmPassword" class="form-label"
                        >確認密碼</label
                      >
                      <span class="text-primary">*</span>
                      <div id="f">
                        <Field
                          name="確認密碼"
                          type="password"
                          :rules="confirmPwd"
                          class="form-control form_confirm_password py-2"
                          placeholder="至少6碼且英數字混合"
                          :class="{ 'is-invalid': errors['確認密碼'] }"
                          autocomplete="off"
                          v-model="confirmPassword"
                          id="confirmPassword"
                        ></Field>
                        <ErrorMessage
                          name="確認密碼"
                          class="invalid-feedback"
                        ></ErrorMessage>
                        <a
                          href="#"
                          @click.prevent="
                            isConfirmShow = !isConfirmShow;
                            pwdCheck(isConfirmShow, $event)
                          "
                          class="passwordImage position-absolute d-block"
                        >
                          <img
                            v-if="isConfirmShow"
                            src="../assets/img/yesgo_icon26.svg"
                          />
                          <img v-else src="../assets/img/yesgo_icon25.svg" />
                        </a>
                      </div>
                      <p class="text-primary">{{ confirmNotSame }}</p>
                    </div>
                  </div>
                  <div class="row term">
                    <div class="col-md-12">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineFormCheck"
                          v-model="terms"
                        />
                        <label class="form-check-label" for="inlineFormCheck">
                          我已詳閱並同意
                          <router-link to="/rights" class="text-primary"
                            >約定條款</router-link
                          >
                          以確保權益
                        </label>
                      </div>
                      <div class="confirm mt-2">
                        <button
                        type="submit"
                        class="btn btn-primary"
                        @click="checkConfirm"
                        >
                          <span>確認</span>
                          <ErrorMessage
                            name="確認"
                            class="invalid-feedback"
                          ></ErrorMessage>
                        </button>
                        <div class="mb-3">
                          <!-- 先不露出顯示 -->
                          <span class="text-primary" v-show="showConfirm">提醒您，請確認資料填寫正確。</span>
                          <span class="text-primary" v-show="!showConfirm"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
            <div class="col-md-6">
              <div class="ps-lg-4 ps-md-3">
                <div class="discount text-primary fs-5">
                  <span>會員優惠</span>
                </div>
                <div class="member_discount">
                  <div>
                    <a
                      v-if="memberCard[0]"
                      :href="memberCard[0].targetUrl">
                      <img
                        :src="memberCard[0].image"
                        class="w-100 mb-2"
                        alt="現折$500"
                      />
                    </a>
                    <a
                    v-if="memberCard[2]"
                    :href="memberCard[2].targetUrl"
                    >
                      <img
                      :src="memberCard[2].image"
                      class="w-100 mb-2"
                      alt="現折$500"
                      >
                    </a>
                  </div>
                  <div class="ratio ratio-2x1">
                    <a
                    v-if="memberCard[1]"
                    :href="memberCard[1].targetUrl"
                    >
                      <img
                        :src="memberCard[1].image"
                        class="w-100"
                        alt="回饋10%"
                      />
                    </a>
                    <a
                    v-if="memberCard[3]"
                    :href="memberCard[3].targetUrl"
                    >
                      <img
                        :src="memberCard[3].image"
                        class="w-100"
                        alt="回饋10%"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import getGiftEvent from '@/assets/js/giftevent.js'
import checkToken from '@/assets/js/checkToken.js'
const Header = defineAsyncComponent(() => import(/* webpackChunkName: "header" */'@/components/Header.vue'))
const Footer = defineAsyncComponent(() => import(/* webpackChunkName: "footer" */'@/components/Footer.vue'))

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      isOldShow: true,
      isConfirmShow: true,
      checkEmailMsg: '',
      confirmNotSame: '',
      confirmPassword: '',
      password: '',
      timer: 0,
      show: true,
      count: 0,
      terms: false,
      showConfirm: false,
      //* 註冊 json格式
      form: {
        FullName: '',
        Email: '',
        PhoneNum: '',
        TransactionId: '',
        OtpCode: '',
        RememberMe: false,
        IsSubscribe: true
      },
      //* 簡訊驗證碼
      msg: {
        phoneNumber: '',
        otpType: '1'
      },
      mobileMsg: {
        mobileMsgCode: []
      },
      register: {
        registerSuccess: []
      },
      cookieToken: {},
      clickValidCode: 0,
      transactionInfo: {},
      memberCard: ''
    }
  },
  methods: {
    //* 姓名
    nameLimit (value) {
      // ? 驗證姓名長度不超過 5
      if (value) {
        const nameString = /^.{1,5}$/
        return nameString.test(value) ? true : '長度請勿超過 5 個字'
      } else {
        return '請填入姓名'
      }
    },
    //* 密碼
    pwdCheck (status, $event) {
      if (status) {
        $event.currentTarget.previousSibling.previousSibling.setAttribute(
          'type',
          'password'
        )
      } else {
        $event.currentTarget.previousSibling.previousSibling.setAttribute(
          'type',
          'text'
        )
      }
    },
    //* 檢查email格式
    checkEmail (value) {
      const emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      return emailRule.test(value) ? true : '請填入 Email 格式'
    },
    //* 檢查密碼格式
    checkPwdRule (password) {
      const passw = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[0-9])(?!.*[<>'"/;` ,.%!@#$%^&*]).{6,}$/
      return passw.test(password) ? true : '至少6碼且要英數字混合'
    },
    //* 密碼確認格式
    confirmPwd (confirmpassword) {
      if (confirmpassword !== this.form.SecretCode) {
        return '與密碼不一致'
      } else {
        if (confirmpassword === '') {
          return '確認密碼 為必填'
        } else {
          return true
        }
      }
    },
    //* 手機號碼格式
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    //* 手機驗證碼
    getMsgCode () {
      //* 確認手機是否有填寫
      this.msg.phoneNumber = this.form.PhoneNum
      var reg = /^(09)[0-9]{8}$/
      if (this.msg.phoneNumber === '') {
        this.$swal.fire({
          title: '請輸入手機號碼',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
        //* 確認手機是否有正確的格式
      } else if (!reg.test(this.msg.phoneNumber)) {
        this.$swal.fire({
          title: '手機格式不正確',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
      } else {
        const url = `${process.env.VUE_APP_API}/api/members/CallNewsletter`
        this.axios
          .get(url, {
            //* get params用法
            params: this.msg
          })
          .then(res => {
            if (res.data.rtnCode !== 0) {
              this.$swal.fire({
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
            } else {
              //* 有成功打入API才計算
              // this.clickValidCode++
              //* transactionId為手機簡訊，要按下才會有，不然會回傳null
              this.form.TransactionId = res.data.info.transactionId
              this.$swal.fire({
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
              this.count = 300
              this.show = false
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= 300) {
                  this.count--
                } else {
                  this.show = true
                  clearInterval(this.timer)
                  this.timer = null
                }
              }, 1000)
            }
          })
      }
    },
    checkConfirm () {
      if (this.form.FullName === '' || this.form.Email === '' || this.form.PhoneNum === '' || this.form.OtpCode === '' || this.form.SecretCode === '' || this.form.confirmPassword) {
        this.showConfirm = true
      } else {
        // eslint-disable-next-line no-return-assign
        return this.showConfirm = false
      }
    },
    //* 確認註冊後，會員直接登入
    registerSubmit () {
      if (this.terms === false) {
        this.checkConfirm()
        this.$swal.fire({
          title: '請勾選權益說明書',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
      } else {
        // ? Facebook pixel 註冊事件
        window.fbq('track', 'CompleteRegistration')
        //* 註冊API
        //* 回傳memberToken, timeExpiredSeconds
        const url = `${process.env.VUE_APP_API}/api/members/register`
        this.axios.post(url, this.form).then(res => {
          if (res.data.rtnCode !== 0) {
            this.$swal
              .fire({
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
              .then(result => {
                if (result.isConfirmed) {
                  this.count = 0
                }
              })
          } else {
            this.cookieToken = res.data.info
            this.$store.dispatch('loginSetCookie', res.data.info)
            this.$swal
              .fire({
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
              .then(result => {
                if (result.isConfirmed) {
                  if (localStorage.getItem('fromEvent') === 'event') {
                    // ?從活動頁點擊登入，要導回活動頁
                    localStorage.removeItem('fromEvent')
                    this.$router.go(-1)
                  } else if (this.$store.state.isClickCart === true) {
                    this.$router.push('/checkoutboard/checkoutcartlist')
                  } else if (sessionStorage.getItem('path')) {
                    this.eventGift()
                  } else if (sessionStorage.getItem('putuEvent')) {
                    sessionStorage.removeItem('putuEvent', 'putu')
                    this.$router.push('/memberboard/membercoupon')
                  } else {
                    this.$router.go(-1)
                  }
                }
              })
          }
        })
      }
    },
    // ? 檢查是否是 webview
    checkFromApp () {
      const appId = checkToken.getAppId()
      if (appId === 'ipasspay') {
        this.form.RememberMe = true
      }
    },
    cardAd () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=member_card_A`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.memberCard = res.data.info
          }
        })
    },
    //* 贈點或贈折價券的活動
    eventGift () {
      getGiftEvent().then((data) => {
        if (!data.isSuccess) {
          this.$swal.fire({
            title: `${data.message}(${data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
        } else {
          this.$swal.fire({
            title: `${data.message}`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
        }
        this.$router.push(sessionStorage.getItem('path'))
        sessionStorage.removeItem('path')
      })
    }
  },
  mounted () {
    this.checkPwdRule()
    this.checkFromApp()
    this.cardAd()
  }
}
</script>

<style lang="scss" scoped>

.title,
.discount {
  border-bottom: 3px solid gray;
  line-height: 2.5;
}

.titleCard {
  border-radius: 50rem;
  line-height: 2.5;
}

.form_detail {
  margin-top: 2%;
}

.passwordImage {
  top: 5px;
  right: 5px;
  img {
    width: 24px;
  }
}

//* 會員註冊
.name,
.email,
.phone,
.verification,
.password,
.doublecheck,
.term {
  line-height: 1.5;
  margin-top: 1%;
}

.form-control {
  border-radius: 0rem;
}

.col-md-6 {
  line-height: 1;
}

.btn-primary {
  border-radius: 0rem;
  width: 100%;
  color: #fff;
}

#f {
  position: relative;
}
#eyeOpen,
#eyeClose {
  position: absolute;
  left: 93%;
  top: 30%;
  z-index: 2;
  opacity: 0.8;
  font-style: 20px;
  width: 5%;
}

.form_password,
.form_confirm_password {
  background-image: none;
}

//會員優惠
.former_member,
.join {
  border: 1px solid gray;
  background-color: gray;
  margin-top: 4%;
  text-align: center;
  height: 30%;
  font-size: 2rem;
  line-height: 1.5;
}

.member_discount {
  margin: 3% 0 3% 0;
}

.bg-secondary {
  margin-top: 3%;
  font-size: 1rem;
  border-radius: 0rem;
  width: 100%;
}

.remind {
  line-height: 1.5;
}

.btn-outline-secondaries {
  border-radius: 50rem;
}

.cardBtn {
  color: #F8412E;
  &:hover {
    color: #fff;
  }
}

.btn {
  &:hover{
    background-color: #F8412E;
    border-color: #F8412E;
    color: #fff;
  }
}

.verifyBtn {
  &:hover{
    background-color: #fff;
  }
}
</style>
