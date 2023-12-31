<template>
  <div>
    <Header></Header>
    <div class="breakline shadow-sm d-none d-sm-block"></div>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h1 class="fs-5 fw-medium border-bottom border-light mb-3 pb-2 text-primary">
            <i class="bi bi-question-circle me-1"></i>
            密碼變更
          </h1>
          <Form v-slot="{ errors }" @submit="changePwd">
            <div class="mb-3">
              <label for="newPassword">新密碼</label>
              <div class="position-relative">
                <Field type="password" class="form-control" id="newPassword" name="新密碼" :class="{ 'is-invalid': errors['新密碼'] }" :rules="checkPwd" placeholder="至少6碼且英數字混合" v-model="newPassword"></Field>
                <a
                  href="#"
                  @click.prevent="isNewShow = !isNewShow; changePwdStatus(isNewShow, $event)"
                  class="passwordImage position-absolute d-block"
                >
                  <img v-if="isNewShow" src="../assets/img/yesgo_icon26.svg" />
                  <img v-else src="../assets/img/yesgo_icon25.svg" />
                </a>
                <error-message name="新密碼" class="invalid-feedback"></error-message>
              </div>
            </div>
            <div class="mb-3">
              <label for="confirmPassword">確認密碼</label>
              <div class="position-relative">
                <Field type="password" class="form-control" id="confirmPassword" name="確認密碼" :class="{ 'is-invalid': errors['確認密碼'] }" :rules="confirmPwd" placeholder="請再次輸入新密碼" v-model="mima"></Field>
                <a
                  href="#"
                  @click.prevent="isConfirmShow = !isConfirmShow; changePwdStatus(isConfirmShow, $event)"
                  class="passwordImage position-absolute d-block"
                >
                  <img v-if="isConfirmShow" src="../assets/img/yesgo_icon26.svg" />
                  <img v-else src="../assets/img/yesgo_icon25.svg" />
                </a>
                <error-message name="確認密碼" class="invalid-feedback"></error-message>
              </div>
            </div>
            <div class="mb-2">
              <label for="confirmCode" class="form-label">驗證碼</label>
              <div class="input-group">
                <Field type="text" class="form-control" id="confirmCode" name="驗證碼" :class="{ 'is-invalid': errors['驗證碼'] }"  rules="required" placeholder="請輸入驗證碼" v-model="captcha"></Field>
                <button
                  class="verifyBtn btn border"
                  type="button"
                  @click.prevent="getVerifyCode"
                >
                  <img class="verifyImg pe-2" :src="validateCode.captcha" alt="verifyCode image">
                  <img class="refreshImg" src="../assets/img/yesgo_icon27.svg" />
                </button>
                <error-message name="驗證碼" class="invalid-feedback"></error-message>
              </div>
              <div class="d-flex justify-content-end text-muted fs-7">
                驗證碼不須區分大小寫
              </div>
            </div>
            <div class="d-grid gap-2 mt-4">
              <button
                class="btn btn-primary rounded-0 text-white py-2"
                type="submit"
              >
                確認變更
              </button>
            </div>
          </Form>
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
  data () {
    return {
      newPassword: '', // ?使用者輸入的新密碼
      mima: '', // ?使用者輸入的確認密碼
      captcha: '', // ?使用者輸入的驗證碼
      validateCode: [], // ?驗證碼 API 資料
      isNewShow: true, // ?新密碼明碼顯示切換
      isConfirmShow: true, // ?確認密碼明碼顯示切換
      sendMTD: '', // ?手機或 Email發送傳來的 MTD
      sendId: '' // ?手機或 Email發送傳來的 id
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    changePwdStatus (status, $event) {
      // ?密碼 * 切換
      if (status) {
        $event.currentTarget.previousSibling.setAttribute('type', 'password')
      } else {
        $event.currentTarget.previousSibling.setAttribute('type', 'text')
      }
    },
    checkPwd (password) {
      // ?驗證密碼是否符合格式
      const passw = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[0-9])(?!.*[<>'"/;` ,.%!@#$%^&*]).{6,}$/
      return passw.test(password)
        ? true
        : '至少6碼且要英數字混合'
    },
    confirmPwd (confirmpassword) {
      // ?確認密碼與新密碼一致
      if (!confirmpassword) {
        return '確認密碼為必填'
      } else {
        return confirmpassword === this.newPassword ? true : '與新密碼不一致'
      }
    },
    getVerifyCode () {
      // ?圖形驗證碼
      const url = `${process.env.VUE_APP_API}/api/members/ValidateCode`
      this.$http.get(url)
        .then((res) => {
          this.validateCode = res.data.info
        })
    },
    changePwd (value, { resetForm }) {
      // ?密碼變更 API1
      const pwd = {
        NewMiMa: this.mima,
        captcha: this.captcha,
        validTransactionId: this.validateCode.validTransactionId,
        MTD: this.sendMTD,
        id: this.sendId
      }
      // 送出變更密碼 API
      const url = `${process.env.VUE_APP_API}/api/members/ForgetSecret_Change`
      this.$http.post(url, pwd)
        .then((res) => {
          resetForm() // ?把表單重置成預設值
          if (res.data.rtnCode === 0) {
            this.$swal.fire({
              title: '修改成功，請使用新密碼登入',
              confirmButtonColor: '#F8412E',
              customClass: {
                title: 'text-class'
              }
            })
            // ?回首頁
            this.$router.push('/')
            // ?開啟登入頁面
            if (document.body.clientWidth < 576) {
              // ?兼容App寫法
              window.location.assign('https://www.yesgogogo.com/membermobilelogin')
            } else {
              // ? web 版
              this.$store.state.loginModalDom.show()
            }
          } else {
            this.$swal.fire({
              title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
              confirmButtonColor: '#F8412E',
              customClass: {
                title: 'text-class'
              }
            })
          }
        })
    }
  },
  mounted () {
    // ?手機或 Email發送傳來的 MTD 及 id
    this.sendMTD = this.$route.params.key.split('&')[0]
    this.sendId = this.$route.params.key.split('&')[1]
    this.getVerifyCode()
  }
}
</script>

<style lang="scss" scoped>
.verifyBtn {
  .refreshImg {
    width: 20px;
    height: 20px;
  }
}
.passwordImage {
  top: 5px;
  right: 5px;
  img {
    width: 30px;
  }
}
.form-control.is-invalid{
  background-image: none;
}

.verifyImg{
  width: 100px;
  height: 25px;
}

.passwordImage{
  img{
    width: 24px;
  }
}

.container {
    min-height: calc(100vh - 396px);
  }
</style>
