<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="row justify-content-center my-5">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-6">
              <Form
                class="form_registration pe-lg-4 pe-md-3"
                v-slot="{ errors }"
                @submit="registerSubmitCreditCard"
              >
                <div class="title">
                  <span class="registraion text-primary fs-5"
                    >聯邦卡友專屬會員註冊</span
                  >
                </div>
                <div class="form_detail">
                  <div class="row phone">
                    <div class="col-md-12">
                      <label class="form-label">會員帳號(手機號碼)</label>
                      <span class="text-primary">*</span>
                      <Field
                        name="手機"
                        type="tel"
                        class="form-control"
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
                  <div class="row verification">
                    <div class="col-md-7 mt-1">
                      <Field
                        name="手機驗證碼"
                        type="number"
                        rules="required"
                        class="form-control"
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
                    <div class="col-md-5 mb-3 mt-1">
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
                  <div class="row name d-flex align-items-end">
                    <div class="col-md-12 mb-3">
                      <label for="inputEmail4" class="form-label"
                        >姓名</label
                      >
                      <span class="text-primary">*</span>
                      <Field
                        name="姓名"
                        placeholder="姓名"
                        :rules="nameLimit"
                        class="form-control"
                        :class="{ 'is-invalid': errors['姓名'] }"
                        v-model="form.Name"
                        autocomplete="off"
                        type="text"
                      ></Field>
                      <ErrorMessage
                        name="姓名"
                        class="invalid-feedback"
                      ></ErrorMessage>
                    </div>
                  </div>
                  <div class="row identityCard d-flex align-items-end">
                    <div class="col-md-12 mb-3">
                      <label for="inputEmail4" class="form-label"
                        >身分證字號</label
                      >
                      <span class="text-primary">*</span>
                      <Field
                        name="身分證字號"
                        placeholder="身分證字號"
                        :rules="idCard"
                        class="form-control"
                        :class="{ 'is-invalid': errors['身分證字號'] }"
                        v-model="form.IdNo"
                        autocomplete="off"
                        type="text"
                        style="text-transform: uppercase;"
                        @change="uppercase"
                      ></Field>
                      <ErrorMessage
                        name="身分證字號"
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
                  <div class="mb-3">
                    <label for="memberBirth" class="form-label">生日</label>
                    <span class="text-primary">*</span>
                    <div class="row g-2">
                      <div class="col">
                        <select
                          id="birthYear"
                          class="form-select"
                          v-model="memberBirth.year"
                          @change="getDay"
                        >
                          <option value="" selected >西元年</option>
                          <option
                            :value="year"
                            v-for="year in dateList.yearList"
                            :key="year"
                          >
                            {{ year }}
                          </option>
                        </select>
                      </div>
                      <div class="col">
                        <select
                          id="birthMonth"
                          class="form-select"
                          v-model="memberBirth.month"
                          @change="getDay"
                        >
                          <option value="" selected>月份</option>
                          <option
                            :value="month"
                            v-for="month in dateList.monthList"
                            :key="month"
                          >
                            {{ month }}
                          </option>
                        </select>
                      </div>
                      <div class="col">
                        <select
                          id="birthDate"
                          class="form-select"
                          v-model="memberBirth.day"
                        >
                          <option value="" selected>日</option>
                          <option
                            :value="day"
                            v-for="day in dateList.dayList"
                            :key="day"
                          >
                            {{ day }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row password">
                    <div class="col-md-12 mb-3">
                      <label class="form-label" for="newPassword">密碼</label>
                      <span class="text-primary">*</span>
                      <div id="f">
                        <Field
                          name="密碼"
                          type="password"
                          :rules="checkPwdRule"
                          class="form-control form_password"
                          placeholder="至少6碼且英數字混合"
                          :class="{ 'is-invalid': errors['密碼'] }"
                          autocomplete="off"
                          v-model="form.SecretCode "
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
                          class="form-control form_confirm_password"
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
                    <div class="col-md-12 mt-2">
                      <div class="form-check py-1">
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
                      <div class="confirm">
                        <button type="submit" class="btn btn-primary" @click="checkConfirm">
                          確認
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
                  <span>聯邦卡友專屬優惠</span>
                </div>
                <div class="member_discount">
                  <template v-if="cardGift[0]">
                    <a :href="cardGift[0].targetUrl">
                      <img :src="cardGift[0].image" class="img-fluid"/>
                    </a>
                  </template>
                  <div class="badge bg-secondary">貼心提醒</div>
                  <div class="remind pt-3">
                    1.請定期更新密碼，以保障個人資料安全。
                    <br />
                    2.本購物網不會主動要求您透露ATM存款餘額，或是要求您提供個人帳號密碼資料，若您接到不名可疑電話，請拒絕回應，
                    並盡速與本公司客服中心連結，以確保您的權益。
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
      //* 卡友註冊會員api
      form: {
        Name: '',
        IdNo: '',
        BirthDay: '',
        PhoneNum: '',
        SecretCode: '',
        TransactionId: '',
        OtpCode: '',
        Email: '',
        RememberMe: false
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
      memberInfo: {}, // ?查詢會員資料 API
      dateList: {
        // ?日期選單
        yearList: [],
        monthList: [],
        dayList: []
      },
      memberBirth: {
        // ?使用者輸入的出生年月日
        year: '',
        month: '',
        day: ''
      },
      moment: new Date(),
      cardGift: ''
    }
  },
  methods: {
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
    checkPwdRule (password) {
      const passw = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[0-9])(?!.*[<>'"/;` ,.%!@#$%^&*]).{6,}$/
      return passw.test(password) ? true : '至少6碼且英數字混合'
    },
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
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    checkEmail (value) {
      const emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      return emailRule.test(value) ? true : '請填入 Email 格式'
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
            // get params用法
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
              //* 有成功打入API才算
              // this.clickValidCode++
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
    //* 身分證字號 */
    idCard (value) {
      const id = /^[a-z](1|2)\d{8}$/i
      if (id.test(value)) {
        return true
      } else {
        return '請輸入正確的格式'
      }
    },
    //* 身分證第一個字大寫
    uppercase () {
      this.form.IdNo = this.form.IdNo.toUpperCase()
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
    registerSubmitCreditCard () {
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
      } if ((this.memberBirth.year || this.memberBirth.month || this.memberBirth.day) === '') {
        this.$swal.fire({
          title: '請填寫完整生日',
          confirmButtonColor: '#F8412E',
          customClass: {
            title: 'text-class'
          }
        })
      } else {
        //* 註冊API
        // 回傳memberToken, timeExpiredSeconds
        this.form.BirthDay = `${this.memberBirth.year}${this.memberBirth.month}${this.memberBirth.day}`
        const url = `${process.env.VUE_APP_API}/api/members/RegisterForUB`
        this.axios.post(url, this.form).then(res => {
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
            }).then(result => {
              if (result.isConfirmed) {
                this.count = 0
              }
            })
          } else {
            this.cookieToken = res.data.info
            this.$store.dispatch('loginSetCookie', res.data.info)
            this.$swal.fire({
              title: '註冊成功',
              allowOutsideClick: true,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            }).then(result => {
              if (result.isConfirmed) {
                if (this.$store.state.isClickCart === true) {
                  this.$router.push('/checkoutboard/checkoutcartlist')
                } else {
                  this.$router.push('/')
                }
              }
            })
          }
        })
      }
    },
    getMemberInfo () {
      // ? 取得會員註冊資料
      this.getYearMonth()
    },
    getYearMonth () {
      // ? 產生生日"年"、"月"選單
      const year = new Date()
      for (let i = 1930; i < year.getFullYear() + 1; i++) {
        this.dateList.yearList.push(i)
      }
      for (let i = 1; i < 13; i++) {
        if (i < 10) {
          this.dateList.monthList.push('0' + i)
        } else {
          this.dateList.monthList.push(i)
        }
      }
    },
    getDay () {
      // ? 產生生日"日"選單
      this.dateList.dayList = []
      // ?清空西元年，月日一併清空
      if (!this.memberBirth.year) {
        this.memberBirth.month = ''
        this.memberBirth.day = ''
        return
      }
      // ?清空月，日一併清空
      if (!this.memberBirth.month) {
        this.memberBirth.day = ''
        return
      }
      // ? 產生生日"日"選單
      const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (this.memberBirth.year % 4 === 0) {
        days[1] = 29
      }
      for (let i = 1; i < days[parseInt(this.memberBirth.month) - 1] + 1; i++) {
        if (i < 10) {
          this.dateList.dayList.push('0' + i)
        } else {
          this.dateList.dayList.push(i)
        }
      }
      if (this.memberBirth === '') {
        this.$swal.fire({
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
      }
    },
    // ? 檢查是否是 webview
    checkFromApp () {
      const appId = checkToken.getAppId()
      if (appId === 'ipasspay') {
        this.form.RememberMe = true
      }
    },
    // ? 聯邦卡友專屬優惠圖片
    getDiscount () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=cardMemberGift`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.cardGift = res.data.info
          }
        })
    }
  },
  mounted () {
    this.checkPwdRule()
    this.getYearMonth()
    this.checkFromApp()
    this.getDiscount()
  }
}
</script>

<style lang="scss" scoped>
.title,
.discount {
  border-bottom: 3px solid gray;
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

//會員註冊
.name,
.identityCard,
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
</style>
