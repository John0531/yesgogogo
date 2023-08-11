<template>
  <div class="forgetpassword">
    <Header></Header>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9">
          <div class="text-primary mt-md-5">
            <i class="bi bi-question-circle"></i> 忘記密碼
          </div>
          <div
            class="row mt-md-1 border-top border-bottom border-2 py-md-4 d-md-flex justify-content-md-between"
          >
            <div class="col-md-6">
              <div class="text pe-md-5 pt-3 pt-md-0">
                <ul>
                  <li>請填寫手機號碼/email/身份證字號任一個資訊後送出，系統將寄出重新啟用帳號的訊息至您的信箱或手機。</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <Form
                class="form ps-md-5 align-self-stretch d-flex flex-column mt-3 mt-md-0"
                v-slot="{ errors }"
                @submit="confirm"
              >
                <div>
                  <p class="mb-md-1">會員帳號</p>
                  <Field
                    type="text"
                    name="忘記密碼"
                    v-model="MemberCode"
                    :class="{ 'is-invalid': errors['忘記密碼'] }"
                    class="form-control z-index-10"
                    :rules="forgetPassword"
                    id="exampleFormControlInput1"
                    placeholder="請輸入手機號碼 或 email 或 身分證字號"
                  ></Field>
                  <ErrorMessage name="忘記密碼" class="invalid-feedback"></ErrorMessage>
                </div>
                <!-- <div class="mb-3">
                  <p class="text-primary">* 提醒:企業會員請輸入員工編號</p>
                </div> -->
                <p class="mb-md-1">驗證碼</p>
                <div class="flex-grow-1 mb-3">
                  <div class="input-group">
                    <Field
                      :class="{ 'is-invalid': errors['驗證碼'] }"
                      type="text"
                      name="驗證碼"
                      class="form-control z-index-10"
                      v-model="forgetPass.ValidCode"
                      maxlength="4"
                      tabindex="3"
                      autocomplete="off"
                      rules="required"
                      placeholder="請輸入驗證碼"
                    ></Field>
                    <button
                      class="verifyBtn btn border"
                      type="button"
                      @click.prevent="getRandomNum"
                    >
                      <img
                        src=""
                        id="imgForgetPasswordValidCode"
                        style="width: 80px; height: 30px; margin-right: 8px;"
                      />
                      <img src="../assets/img/yesgo_icon27.svg" />
                    </button>
                    <ErrorMessage name="驗證碼" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="d-flex justify-content-end text-muted fs-7">
                    驗證碼不須區分大小寫
                  </div>
                </div>
                <button type="submit" class="btn btn-primary text-light w-100">
                  確認送出
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const Header = defineAsyncComponent(() => import(/* webpackChunkName: "header" */'@/components/Header.vue'))
const Footer = defineAsyncComponent(() => import(/* webpackChunkName: "footer" */'@/components/Footer.vue'))

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      MemberCode: '',
      forgetPass: {
        ValidCode: '',
        ValidTransactionId: ''
      },
      postToAPI: {
        MemberCode: '',
        Captcha: '',
        ValidTransactionId: ''
      }
    }
  },
  methods: {
    confirm (value, { resetForm }) {
      const id = /^[a-z](1|2)\d{8}$/i
      if (id.test(this.MemberCode)) {
        this.MemberCode = this.MemberCode.toUpperCase()
      }
      this.postToAPI.MemberCode = this.MemberCode
      this.postToAPI.Captcha = this.forgetPass.ValidCode
      this.postToAPI.ValidTransactionId = this.forgetPass.ValidTransactionId
      const url = `${process.env.VUE_APP_API}/api/members/ForgetSecretCode`
      this.axios.post(url, this.postToAPI)
        .then((res) => {
          resetForm() // ?把表單重置成預設值
          this.getRandomNum()
          if (res.data.rtnCode === 0) {
            this.$swal.fire({
              title: '我們已經將查詢資料寄送到您填寫的手機號碼或 Email!',
              allowOutsideClick: true,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 500,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            })
          } else {
            this.$swal.fire({
              title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
              allowOutsideClick: true,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 500,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            })
          }
        })
    },
    forgetPassword (value) {
      /* 手機驗證 */
      const phoneNumber = /^(09)[0-9]{8}$/
      /* 身分證驗證 */
      const id = /^[a-z](1|2)\d{8}$/i
      /* Email驗證 */
      const emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      /* 企業員邊驗證 */
      const staffpwd = /^\d{6,7}$/
      /* 三個驗證判斷 */
      if (phoneNumber.test(value)) {
        return true
      } else {
        if (id.test(value)) {
          return true
        } else {
          if (emailRule.test(value)) {
            return true
          } else {
            if (staffpwd.test(value)) {
              return true
            } else {
              return '請輸入正確的帳號'
            }
          }
        }
      }
    },
    // 圖形驗證碼
    getRandomNum () {
      const url = `${process.env.VUE_APP_API}/api/members/ValidateCode`
      this.axios.get(url).then(res => {
        const transactionId = res.data.info.validTransactionId
        this.forgetPass.ValidTransactionId = transactionId

        // 會員登入傳入src
        var pictureContentCode = res.data.info.captcha
        document.getElementById('imgForgetPasswordValidCode').src = pictureContentCode
      })
    }
  },
  mounted () {
    this.getRandomNum()
  }
}
</script>
<style lang="scss" scoped>
  .container {
    min-height: calc(100vh - 300px);
  }
</style>
