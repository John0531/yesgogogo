<template>
  <section class="mt-2 mt-md-0">
    <h1 class="fs-5 fw-bold mb-3 mt-2">修改密碼</h1>
    <div class="d-flex  justify-content-end ">
        <a class="btn" @click.prevent="backEvent()">
          <figure >
            <img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardPromotion/Go_Back.png"
            alt="返回上一頁按鈕">
          </figure>
        </a>
      </div>
    <div class="border border-light mb-5">
      <div class="row justify-content-center px-3 px-lg-0 py-3 py-md-5">
        <div class="col-lg-8 col-xl-6">
          <!-- <div class="alert alert-success" role="alert" v-if="isUpdateSuccess">
            儲存已變更
          </div>
          <div class="alert alert-danger" role="alert" v-if="isUpdateError">
            {{ errorMsg }}
          </div> -->
          <Form v-slot="{ errors }" @submit="submitPasswordInfo">
            <div class="mb-3">
              <label for="oldPassword">原密碼</label>
              <div class="position-relative">
                <Field type="password" class="form-control" id="oldPassword" name="原密碼" :class="{ 'is-invalid': errors['原密碼'] }" :rules="checkPwd" placeholder="請輸入至少6碼且英數混合" v-model="oldPassword"></Field>
                <a
                  href="#"
                  @click.prevent="isOldShow = !isOldShow; changePwdStatus(isOldShow, $event)"
                  class="passwordImage position-absolute d-block"
                >
                  <img v-if="isOldShow" src="../assets/img/yesgo_icon26.svg" />
                  <img v-else src="../assets/img/yesgo_icon25.svg" />
                </a>
                <error-message name="原密碼" class="invalid-feedback"></error-message>
              </div>
            </div>
            <div class="mb-3">
              <label for="newPassword">新密碼</label>
              <div class="position-relative">
                <Field type="password" class="form-control" id="newPassword" name="新密碼" :class="{ 'is-invalid': errors['新密碼'] }" :rules="confirmOldPwd" placeholder="請輸入至少6碼且英數混合" v-model="newPassword"></Field>
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
                <Field type="password" class="form-control" id="confirmPassword" name="確認密碼" :class="{ 'is-invalid': errors['確認密碼'] }" :rules="confirmPwd" placeholder="請再次輸入新密碼" v-model="confirmPassword"></Field>
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
            <div class="mb-3">
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
            <div class="d-grid gap-2 mt-5">
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
  </section>
</template>

<script>

// !引入Token確認function
import checkToken from '@/assets/js/checkToken.js'
import moment from 'moment'

export default {
  data () {
    return {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      captcha: '',
      isOldShow: true, // ?原密碼明碼顯示切換,
      isNewShow: true, // ?新密碼明碼顯示切換,
      isConfirmShow: true, // ?確認密碼明碼顯示切換,
      validateCode: '' // ?驗證碼 API 資料,
      // isUpdateSuccess: false,
      // isUpdateError: false,
      // errorMsg: ''
    }
  },
  methods: {
    /* 密碼 * 切換 */
    changePwdStatus (status, $event) {
      if (status) {
        $event.currentTarget.previousSibling.setAttribute('type', 'password')
      } else {
        $event.currentTarget.previousSibling.setAttribute('type', 'text')
      }
    },
    checkPwd (password) {
      const passw = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/
      return passw.test(password)
        ? true
        : '至少6碼且英數混合'
    },
    confirmPwd (confirmpassword) {
      if (!confirmpassword) {
        return '確認密碼為必填'
      } else {
        return confirmpassword === this.newPassword ? true : '與新密碼不一致'
      }
    },
    confirmOldPwd (confirmoldpassword) {
      const passw = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[0-9])(?!.*[<>'"/;` ,.%!@#$%^&*]).{6,}$/
      if (!passw.test(confirmoldpassword)) {
        return '至少6碼且英數混合'
      } else {
        if (confirmoldpassword === this.oldPassword) {
          return '與原密碼一致'
        } else {
          return true
        }
      }
    },
    submitPasswordInfo (values, { resetForm }) {
      const updatePwd = {
        oldSecretCode: this.oldPassword,
        newSecretCode: this.newPassword,
        captcha: this.captcha,
        validTransactionId: this.validateCode.validTransactionId
      }
      const url = `${process.env.VUE_APP_API}/api/members/ChangeSecretCode`
      this.$http.post(url, updatePwd)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.$swal.fire({
              title: '修改成功，下次請使用新密碼登入',
              confirmButtonColor: '#F8412E',
              customClass: {
                title: 'text-class'
              }
            })
            resetForm()
            this.getVerifyCode()
            if (sessionStorage.getItem('cardEvent')) {
              // ?卡友事件修改完畢回活動頁
              setTimeout(() => {
                this.$router.push('/activity/cardpromotionSecondHalf')
              }, 600)
            }
          } else if (res.data.rtnCode === 1002) {
            // ?輸入的原密碼與目前密碼不一致
            this.$swal.fire({
              title: '原密碼輸入錯誤',
              confirmButtonColor: '#F8412E',
              customClass: {
                title: 'text-class'
              }
            })
            this.getVerifyCode()
          } else {
            this.$swal.fire({
              title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
              confirmButtonColor: '#F8412E',
              customClass: {
                title: 'text-class'
              }
            })
            this.getVerifyCode()
          }
        })
    },
    getVerifyCode () {
      const url = `${process.env.VUE_APP_API}/api/members/ValidateCode`
      this.$http.get(url)
        .then((res) => {
          this.validateCode = res.data.info
        })
    },
    getToken () {
      // ?呼叫checkToken.js
      // ?判斷是否有登入(token取得)
      const accessToken = checkToken.getAccessToken()
      const freshToken = checkToken.getFreshToken()
      if (accessToken || freshToken) {
        return true
      } else {
        return false
      }
    },
    backEvent () {
      if (sessionStorage.getItem('cardEvent')) {
        // ?移除活動參數
        const now = moment().format('YYYY/MM/DD HH:mm:ss')
        setTimeout(() => {
          // ?有事件回活動頁
          if (moment(now, 'YYYY/MM/DD HH:mm:ss').isAfter('2023-06-30 23:59:59')) {
            this.$router.push('/activity/cardMemberGiftSecondHalf')
          } else {
            this.$router.push('/activity/cardMemberGift')
          }
        }, '600')
      } else {
        // ?無事件回上一頁
        setTimeout(() => {
          this.$router.go(-1)
        }, '600')
      }
    }
  },
  mounted () {
    this.getVerifyCode()
    // ? [卡友修改密碼事件]強迫登入
    if (this.$route.query.cardEvent) {
      if (this.getToken() === false) {
        this.$store.state.loginModal.show()
      }
    }
  },
  unmounted () {
    // ?有[卡友修改密碼事件]刷新畫面移除session
    if (sessionStorage.getItem('cardEvent')) {
      sessionStorage.removeItem('cardEvent')
    }
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
</style>
