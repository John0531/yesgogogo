<template>
  <div>
    <!-- 會員登入 Modal -->
    <div
      class="modal"
      id="exampleModalToggle2"
      ref="loginDom"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row justify-content-center my-3 my-lg-5">
                <div class="col-lg-6">
                  <Form
                    class="form_registration"
                    method="POST"
                    v-slot="{ errors }"
                    @submit="oldMemberLogin"
                  >
                    <div class="form_detail">
                      <div class="text-center">
                        <img
                          src="../assets/img/yesgo_icon02.svg"
                          alt=""
                          id="logInImage"
                          class="d-block mx-auto"
                        />
                        <span class="registraion">會員登入</span>
                      </div>
                      <div class="row phone">
                        <div class="col-md-12">
                          <label class="form-label">帳號</label>
                          <Field
                            type="text"
                            v-model="oldLogin.Account"
                            class="form-control"
                            :rules="isaccount"
                            :class="{ 'is-invalid': errors['舊帳號'] }"
                            placeholder="請輸入手機號碼/身分證字號/Email"
                            name="舊帳號"
                            autocomplete="off"
                            tabindex="1"
                          ></Field>
                          <ErrorMessage
                            name="舊帳號"
                            class="invalid-feedback"
                          ></ErrorMessage>
                        </div>
                      </div>
                      <div class="row password">
                        <div class="col-md-12">
                          <label class="form-label">密碼</label>
                          <div class="eye">
                            <Field
                              name="舊會員登入密碼"
                              type="password"
                              :rules="checkPwdRule"
                              class="form-control form_password"
                              placeholder="請輸入密碼"
                              :class="{
                                'is-invalid': errors['舊會員登入密碼']
                              }"
                              v-model.trim="oldLogin.SecretCode"
                              autocomplete="off"
                              tabindex="2"
                            ></Field>
                            <ErrorMessage
                              name="舊會員登入密碼"
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
                                v-if="isOldShow"
                                src="../assets/img/yesgo_icon26.svg"
                              />
                              <img
                                v-else
                                src="../assets/img/yesgo_icon25.svg"
                              />
                            </a>
                          </div>
                          <div class="d-flex justify-content-between">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="rememberOldAccount"
                                v-model="oldLogin.RememberMe"
                              />
                              <label
                                class="form-check-label"
                                for="rememberOldAccount"
                              >
                                記住帳號
                              </label>
                            </div>
                            <a
                              class="forgot-password"
                              href="#"
                              @click.prevent="toForgetPassword"
                            >
                              忘記密碼
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="row verification">
                        <div class="col-md-12">
                          <label for="inputState" class="form-label"
                            >驗證碼</label
                          >
                          <div class="input-group">
                            <Field
                              type="text"
                              class="form-control z-index-10"
                              v-model="oldLogin.Captcha"
                              maxlength="4"
                              tabindex="3"
                              autocomplete="off"
                              rules="required"
                              name="驗證碼"
                              :class="{ 'is-invalid': errors['驗證碼'] }"
                            />
                            <button
                              class="verifyBtn btn border"
                              type="button"
                              @click.prevent="getValidCode"
                            >
                              <span></span>
                              <img
                                :src="validate.img"
                                id="imgInitOldValidCode"
                                style="width: 100px; height: 30px; margin-right: 8px;"
                              />
                              <img
                                src="../assets/img/yesgo_icon27.svg"
                              />
                            </button>
                            <ErrorMessage
                              name="驗證碼"
                              class="invalid-feedback"
                            ></ErrorMessage>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-end text-muted fs-7 mb-2">
                        驗證碼不須區分大小寫
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <button
                            type="submit"
                            class="btn btn-primary col-12 text-white"
                          >
                            登入
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
                <!-- 10%會員回饋-->
                <div class="col-lg-6 mt-3 mt-lg-0 ps-lg-4 ps-md-3">
                  <div class="member_discount">
                    <div class="ratio ratio-4x3">
                      <a href="https://www.yesgogogo.com/activity/2023_memberbonus/tenpercent">
                        <img
                          :src="`${eventbonus.link}?${getRandomString(6)}`"
                          alt="10%回饋"
                          class="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 註冊 Modal -->
    <div
      class="modal"
      id="exampleModalToggle3"
      ref="registerDom"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row justify-content-center mb-lg-4">
                <div class="col-md-1"></div>
                <div class="col-lg-10">
                  <div class="row">
                    <div class="col-lg-6">
                      <Form
                        class="form_registration pe-lg-4 pe-md-3"
                        v-slot="{ errors }"
                        @submit="registerSubmit"
                      >
                      <div class="d-flex justify-content-between">
                        <div class="title col-md-8 col-lg-8">
                          <span class="registraion text-primary fs-5">會員註冊</span>
                        </div>
                        <div class="titleCard col-md-4 col-lg-4 text-center ">
                          <a class="btn btn-outline-secondaries cardBtn" @click.prevent="toRegisterCreditCard" href="#">
                            <span class="registraion fs-5">卡友註冊
                              <i class="bi bi-chevron-right seeMoreIcon"></i>
                            </span>
                          </a>
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
                                :rules="checkName"
                                class="form-control py-2"
                                :class="{ 'is-invalid': errors['姓名'] }"
                                v-model="register.FullName"
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
                                v-model="register.Email"
                              ></Field>
                              <ErrorMessage
                                name="信箱"
                                class="invalid-feedback"
                              ></ErrorMessage>
                              <!-- <p class="text-primary">{{ checkEmailMsg }}</p> -->
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
                                v-model="register.PhoneNum"
                                autocomplete="off"
                                maxlength="10"
                              ></Field>
                              <ErrorMessage
                                name="手機"
                                class="invalid-feedback"
                              ></ErrorMessage>
                              <!-- <span id="uidt" class="text-primary"></span> -->
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
                                v-model="register.OtpCode"
                              ></Field>
                              <ErrorMessage
                                name="手機驗證碼"
                                class="invalid-feedback"
                              ></ErrorMessage>
                            </div>
                            <div class="col-md-5 col-lg-5 mb-3">
                              <button
                                type="submit"
                                class="btn btn-primary text-light w-100"
                                @click.prevent="countMsg"
                                :disabled="$store.state.registerMsgSecond"
                              >
                                <span v-if="!$store.state.registerMsgSecond"
                                  >獲取驗證碼</span
                                >
                                <span v-else class="count"
                                  >{{ $store.state.registerMsgSecond }} 秒後
                                  重新發送</span
                                >
                              </button>
                            </div>
                          </div>
                          <div class="row password">
                            <div class="col-md-12 mb-3">
                              <label class="form-label" for="newPassword">密碼</label>
                              <span class="text-primary">*</span>
                              <div class="eye">
                                <Field
                                  name="密碼"
                                  type="password"
                                  :rules="checkPwdRule"
                                  class="form-control form_password py-2"
                                  placeholder="至少6碼且英數字混合"
                                  :class="{ 'is-invalid': errors['密碼'] }"
                                  autocomplete="off"
                                  v-model="register.SecretCode"
                                  id="newPassword"
                                ></Field>
                                <ErrorMessage
                                  name="密碼"
                                  class="invalid-feedback"
                                ></ErrorMessage>
                                <a
                                  href="#"
                                  @click.prevent="
                                    isRegisterPwdShow = !isRegisterPwdShow;
                                    pwdCheck(isRegisterPwdShow, $event)
                                  "
                                  class="passwordImage position-absolute d-block"
                                >
                                  <img
                                    src="../assets/img/yesgo_icon26.svg"
                                    v-if="isRegisterPwdShow"
                                  />
                                  <img v-else src="../assets/img/yesgo_icon25.svg" />
                                </a>
                              </div>
                              <!-- <p class="text-primary">{{ password }}</p> -->
                            </div>
                          </div>
                          <div class="row doublecheck">
                            <div class="col-md-12 mb-3">
                              <label for="confirmPassword" class="form-label"
                                >確認密碼</label
                              >
                              <span class="text-primary">*</span>
                              <div class="eye">
                                <Field
                                  name="確認密碼"
                                  type="password"
                                  :rules="confirmPwd"
                                  class="form-control form_confirm_password py-2"
                                  placeholder="至少6碼且英數字混合"
                                  :class="{ 'is-invalid': errors['確認密碼'] }"
                                  autocomplete="off"
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
                              <!-- <p class="text-primary">{{ confirmNotSame }}</p> -->
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
                                  <router-link @click="$store.state.registerModal.hide()" to="/rights" class="text-primary"
                                    >約定條款</router-link
                                  >
                                  以確保權益
                                </label>
                              </div>
                              <div class="confirm mt-2">
                                <button type="submit" class="btn btn-primary text-light col-12" @click="checkConfirm">
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
                    <div class="col-lg-6">
                      <div class="ps-lg-4 pt-4 pt-lg-0">
                        <div class="title text-primary fs-5">
                          <span>會員優惠</span>
                        </div>
                        <div class="member_discount mt-4">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import member from '../assets/js/member'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import ValidSvc from '../assets/js/validate-service.js'
// import checkToken from '@/assets/js/checkToken.js'
import { getRandomString } from '@/assets/js/randomString.js'

export default {
  data () {
    return {
      myModal: '',
      myOldModal: '',
      myRegisterModal: '',
      isOldShow: true,
      isShow: true,
      isRegisterPwdShow: true,
      isConfirmShow: true,
      showConfirm: false,
      validate: {},
      newLogin: {
        Account: '',
        SecretCode: '',
        Captcha: '',
        ValidTransactionId: '',
        RememberMe: false
      },
      oldLogin: {
        Account: '',
        SecretCode: '',
        Captcha: '',
        ValidTransactionId: '',
        RememberMe: false
      },
      register: {
        FullName: '',
        Email: '',
        PhoneNum: '',
        SecretCode: '',
        TransactionId: '',
        OtpCode: '',
        RememberMe: false,
        IsSubscribe: true
      },
      memberCard: '',
      terms: false,
      eventbonus: ''
    }
  },
  methods: {
    getRandomString, //* 產生亂數
    // ? 切換為舊會員登入modal
    toOldLoginModal () {
      this.$store.state.loginModal.hide()
      this.$store.state.oldloginModal.show()
    },
    // ? 前往忘記密碼頁
    toForgetPassword () {
      this.$store.state.loginModal.hide()
      this.$store.state.oldloginModal.hide()
      this.$router.push('/forgetpassword')
    },
    // ? 前往註冊頁
    toRegister () {
      this.$store.state.loginModal.hide()
      this.$store.state.registerModal.show()
    },
    // ?前往卡友註冊
    toRegisterCreditCard () {
      this.$store.state.registerModal.hide()
      this.$router.push('/registercreditcard')
    },
    // ? 密碼切換
    pwdCheck (status, $event) {
      if (status) {
        // 上上個DOM元素
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
    //* 10%回饋圖片
    getEventBonus () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=getBonus`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.eventbonus = res.data.info[0]
          }
        })
    },
    checkConfirm () {
      if (this.register.FullName === '' || this.register.Email === '' || this.register.PhoneNum === '' || this.register.OtpCode === '' || this.register.SecretCode === '' || this.register.confirmPassword || this.register.Captcha === '') {
        this.showConfirm = true
      } else {
        // eslint-disable-next-line no-return-assign
        return this.showConfirm = false
      }
    },
    // ? 新會員登入
    async login () {
      if (await member.login('LogIn', this.newLogin, this.myModal)) {
        this.$router.go()
      } else {
        this.getValidCode()
      }
    },
    // ? 舊會員登入
    async oldMemberLogin () {
      if (await member.login('LogIn', this.oldLogin, this.myOldModal)) {
        this.$router.go()
      } else {
        this.getValidCode()
      }
    },
    // ? 會員註冊
    async registerSubmit () {
      const response = ValidSvc.registerSubmit(this.terms)
      if (response === false) {
        return
      }
      if (await member.register('register', this.register)) {
        this.$router.go()
      } else {
        this.getValidCode()
        this.checkConfirm()
      }
    },
    // ? 取得圖形驗證碼
    async getValidCode () {
      this.validate = await member.getValidateCode()
      this.newLogin.ValidTransactionId = this.validate.validTransactionId
      this.oldLogin.ValidTransactionId = this.validate.validTransactionId
    },
    //* 姓名格式
    checkName (value) {
      return ValidSvc.CheckName(value)
    },
    //* 檢查email格式
    checkEmail (email) {
      return ValidSvc.CheckEmail(email)
    },
    //* 檢查密碼格式
    checkPwdRule (password) {
      return ValidSvc.CheckPwd(password)
    },
    //* 密碼確認格式
    confirmPwd (confirmPwd, pwd) {
      return ValidSvc.ConfirmPwd(confirmPwd, this.register.SecretCode)
    },
    //* 檢查卡友密碼格式
    /* confirmCardPwd (confirmPwd, pwd) {
      return ValidSvc.ConfirmPwd(confirmPwd, this.cardForm.SecretCode)
    }, */
    //* 手機號碼格式
    isPhone (phoneNum) {
      return ValidSvc.CheckMobileNum(phoneNum)
    },
    //* 舊會員登入驗證(身分證/Email/手機號碼)
    isaccount (Account) {
      const oldAccounts = ValidSvc.CheckAccount(Account)
      if (oldAccounts === 'id') {
        this.oldLogin.Account = this.oldLogin.Account.toUpperCase()
        // ? 告知可以通過此驗證
        return true
      } else {
        return oldAccounts
      }
    },
    //* 身分證格式驗證(自動變成大寫)
    checkId (id) {
      if (ValidSvc.CheckId(id)) {
        this.cardForm.IdNo = this.cardForm.IdNo.toUpperCase()
      }
      return ValidSvc.CheckId(id)
    },
    memberDiscountCardMobile () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=member_card_A`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.memberCard = res.data.info
          }
        })
    },
    // * 亂數
    makeid () {
      let result = ''
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      const charactersLength = characters.length
      for (let i = 0; i < 3; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        )
      }
      return result
    },
    async countMsg () {
      const res = await member.getMsgCode({
        phoneNumber: this.register.PhoneNum,
        otpType: '1'
      })
      this.register.TransactionId = res.transactionId
    },
    showModal () {
      this.myModal.show()
    },
    hideModal () {
      this.myModal.hide()
    }
  },
  mounted () {
    this.getValidCode()
    this.getEventBonus()
    this.memberDiscountCardMobile()
    this.myModal = new bootstrap.Modal(this.$refs.loginDom, { backdrop: 'static' })
    // this.myOldModal = new bootstrap.Modal(this.$refs.oldLoginDom, { backdrop: 'static' })
    this.myRegisterModal = new bootstrap.Modal(this.$refs.registerDom, { backdrop: 'static' })
    this.$store.commit('getLoginModal', this.myModal)
    // commit(  ,  )第一個參數是mutation的，第二個參數是要傳遞的值
    // this.$store.commit('getoldLoginModal', this.myOldModal)
    this.$store.commit('getRegisterModal', this.myRegisterModal)
    // // ?如果登入Modal為跳出狀態(shown.bs.modal)，在DOM元素中加入屬性data-shown="shown"
    // this.$refs.loginDom.addEventListener('shown.bs.modal', function () {
    //   this.setAttribute('data-shown', 'shown')
    // })
    // // ?如果登入Modal為關閉狀態(hidden.bs.modal)，在DOM元素中加入屬性data-shown="hidden"
    // this.$refs.loginDom.addEventListener('hidden.bs.modal', function () {
    //   this.setAttribute('data-shown', 'hidden')
    // })
  }
}
</script>

<style lang="scss" scoped>
.eye{
  position: relative;
  .form-control.is-invalid{
    background-image: none;
  }
}
.title {
  border-bottom: 3px solid gray;
  line-height: 2.5;
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
