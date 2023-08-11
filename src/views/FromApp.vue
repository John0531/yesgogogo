<template>
  <div>
    <h1 class="text-center mt-5 display-2 fw-bold">ipasspay 前導頁面</h1>
    <loading :active="isLoading" class="bottom-fixed" id="overlay" backgroundColor= 'transparent' blur="">
      <h2 class="text-center lh-base">正在前往 yesgogogo 即時購<br>請稍後</h2>
      <div class="loadingio-spinner-ellipsis-4hx2p6xfr9s start-50 translate-middle" style="">
        <div class="ldio-2rhuifu0dvy">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </loading>
  </div>
</template>

<script>
import checkToken from '@/assets/js/checkToken.js'

export default {
  data () {
    return {
      isLoading: true
    }
  },
  created () {
    const appId = this.$route.params.appId
    localStorage.setItem('appId', appId)
  },
  mounted () {
    const refreshToken = checkToken.getFreshToken()
    if (refreshToken) {
      // ? 清除 AccessToken
      checkToken.removeAccessToken()
      const url = `${process.env.VUE_APP_API}/api/members/RefreshToken`
      this.axios({
        method: 'get',
        url: url,
        headers: { Authorization: `Bearer ${refreshToken}` }
      })
        .then((res) => {
          this.$store.dispatch('loginSetCookie', res.data.info)
          setTimeout(() => {
            this.$router.push('/')
          }, 1000)
        })
    } else {
      setTimeout(() => {
        this.$router.push('/membermobilelogin')
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .loadingio-spinner-ellipsis-4hx2p6xfr9s {
  width: 200px;
  height: 150px;
  display: inline-block;
  overflow: hidden;
  position: absolute;
  // left:53.5%;
  // top:70%;
  // // background: #ffffff;
  // // opacity: 0.6;
  // @media (max-width: 768px){
  //      left:50%;
  //       top:68%;
  //   }
  // @media (max-width: 576px){
  //      left:50%;
  //       top:50%;
  //   }
}

.ldio-2rhuifu0dvy div {
  @media (max-width: 576px){
      width: 25px;
      height: 25px;
    }
}
</style>
