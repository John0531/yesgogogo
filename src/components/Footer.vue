<template  v-once>
  <div class="bg-primary text-white pt-4 pb-3">
    <div class="container">
      <ul
        class="footer-list-group flex-wrap list-group list-group-horizontal justify-content-center mt-2 mb-3 mb-md-4"
      >
        <li class="list-group-item text-center bg-primary mt-2 px-0">
          <router-link
            to="/aboutus"
            class="d-block text-secondary text-white px-4 px-md-4 fs-6"
            >關於我們</router-link
          >
        </li>
        <li class="list-group-item bg-primary mt-2 px-0">
          <router-link
            to="/privacy"
            class="d-block text-secondary text-white px-4 px-md-4 fs-6"
            >隱私權聲明</router-link
          >
        </li>
        <li class="list-group-item bg-primary mt-2 px-0">
          <router-link
            to="/copyright"
            class="d-block text-secondary text-white px-4 px-md-4 fs-6"
            >著作權聲明</router-link
          >
        </li>
        <li class="list-group-item bg-primary mt-2 px-0">
          <router-link
            to="/anti_deceive"
            class="d-block text-secondary text-white px-4 px-md-4 fs-6"
            >反詐騙提醒</router-link
          >
        </li>
        <li class="list-group-item bg-primary mt-2 px-0">
          <router-link
            to="/paymentways"
            class="d-block text-secondary text-white px-4 px-md-4 fs-6"
            >付款方式</router-link
          >
        </li>
        <li class="list-group-item bg-primary mt-2 px-0">
          <router-link
            to="/returnexchangepolicy"
            class="d-block text-secondary text-white px-4 px-md-4 fs-6"
            >退換貨政策</router-link
          >
        </li>
        <li class="list-group-item bg-primary mt-2 px-0">
          <a
            href="#"
            class="d-block text-secondary text-white px-4 px-md-4 fs-6"
            @click.prevent="contactUs"
            >聯絡我們</a
          >
        </li>
        <li class="list-group-item bg-primary mt-2 px-0">
          <router-link
            to="/twca"
            class="d-block text-secondary text-white px-4 px-md-4 fs-6"
            >TWCA 認證</router-link
          >
        </li>
        <li class="list-group-item bg-primary mt-2 px-0">
          <router-link
            to="/questions"
            class="d-block text-secondary text-white px-4 px-md-4 fs-6"
            >常見問題</router-link
          >
        </li>
        <li class="list-group-item bg-primary mt-2 px-0">
          <router-link
            to="/rights"
            class="d-block text-secondary text-white px-4 px-md-4 fs-6"
            >會員權益聲明</router-link
          >
        </li>
      </ul>
      <p class="mb-0 text-center">
        <small class="fw-light"
          >本站最佳瀏覽環境使用 Google Chrome、Firefox、Edge 及 Safari
          以上版本</small
        >
      </p>
      <p class="mb-0 text-center">
        <small class="fw-light"
          >聯邦網通科技股份有限公司(統一編號：16614905)/版權所有/轉載必究 Copyright©2021. Union
          Information Technology Corp. All Rights Reserved.</small
        >
      </p>
    </div>
  </div>
</template>

<script>
import checkToken from '@/assets/js/checkToken.js'

export default {
  methods: {
    getToken () {
      // ?判斷是否有登入(token取得)
      const AccessToken = checkToken.getAccessToken()
      const RefreshToken = checkToken.getFreshToken()
      if (AccessToken || RefreshToken) {
        return true
      } else {
        return false
      }
    },
    contactUs () {
      // ?判斷是否有登入
      if (this.getToken()) {
        this.$router.push('/memberboard/contactus')
      } else {
        this.$swal
          .fire({
            title: '請先登入',
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
              if (document.body.clientWidth < 576) {
                // ? 手機版
                this.$router.push('/membermobilelogin')
              } else {
                // ? web 版
                this.$store.state.loginModal.show()
              }
            }
          })
      }
    }
  }
}
</script>
