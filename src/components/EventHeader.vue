<template>
  <!-- nav bar -->
  <nav
    class="navbar navbar-dark bg-primary navbar-expand-lg px-3 py-0 z-index-10"
  >
    <div class="container-xl px-0 px-md-3 w-100">
      <div class="d-block d-lg-flex justify-content-between align-items-center w-100">
        <div class="d-flex justify-content-between align-items-center">
          <router-link to="/" class="navbar-brand p-0 m-0">
            <img
              src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/logo/yesgo_logo_white.png"
              class="img-fluid"
            />
          </router-link>
          <div class="d-lg-none">
            <!-- 行動版 search icon -->
            <button
              class="navbar-toggler border-0 p-0 me-3 me-sm-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#searchEventContent"
            >
              <img class="icon_m" src="../assets/img/activity/search-01.svg" alt="行動版 search icon">
            </button>
            <!-- 行動版 登入/註冊, 登出/會員中心連結 icon -->
            <a href="#" class="me-3 me-sm-4" @click.prevent="activityLogin">
              <img v-if="isLogOut" class="icon_m" src="../assets/img/activity/login.svg" alt="登入/註冊連結 icon(沒有token)">
              <img v-else class="icon_m" src="../assets/img/yesgo_icon34.svg" alt="登出/會員中心連結 icon(有token)">
            </a>
            <!-- 行動版 漢堡選單按鈕 -->
            <button
              class="navbar-toggler px-0 border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <!-- 網頁版 search bar -->
        <div
          class="searchBar input-group position-relative d-none d-lg-flex w-40"
        >
          <input
            type="text"
            class="form-control border border-primary rounded-1"
            v-model="keyword"
            @keyup.enter="goToSearch"
          />
          <a
            href="#"
            class="btn border-0 position-absolute end-0 py-1"
            @click.prevent="goToSearch"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24.502 24.497" style="overflow: visible;">
              <g id="yesgo_icon元件_工作區域_1" data-name="yesgo_icon元件_工作區域 1" transform="translate(-0.355 -0.36)">
                <line id="Line_29" data-name="Line 29" x2="6.82" y2="6.82" transform="translate(17.33 17.33)" fill="none" stroke="#f8412e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <path id="Path_140" data-name="Path 140" d="M17.33,3.68a9.65,9.65,0,1,1-13.65,0,9.65,9.65,0,0,1,13.65,0Z" fill="none" stroke="#f8412e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
              </g>
            </svg>
          </a>
        </div>
        <!-- 漢堡選單內 -->
        <div ref="eventList" class="eventList collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="activityNav navbar-nav align-items-md-center">
            <li class="nav-item">
              <router-link class="nav-link nav-item-link text-white text-nowrap" to="/activity/2023_memberbonus" @click.prevent="closeMenu">
                現領 $800
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link nav-item-link text-white text-nowrap" to="/activity/2023_memberbonus/tenpercent" @click.prevent="closeMenu">
                下單送 10%
              </router-link>
            </li>
            <li class="nav-item mx-0 mx-lg-1 mx-xl-3">
              <a href="http://line.me/ti/p/@yesgogogo" @click.prevent="closeMenu">
                <img src="../assets/img/activity/line.png"/>
              </a>
            </li>
            <li v-if="!isLogOut" class="nav-item d-lg-none mx-0 mx-lg-1 mx-xl-3">
              <a href="#" @click.prevent="logOut" class="nav-link text-white text-nowrap">
                登出
              </a>
            </li>
            <!-- PC 登入/註冊連結 -->
            <li v-if="isLogOut" class="nav-item d-none d-md-flex justify-content-center align-items-center mx-0 mx-md-2 mx-xl-3">
              <img src="../assets/img/activity/login.svg" alt="login">
              <ul class="list-unstyled d-none d-md-flex flex-nowrap mb-0">
                <li>
                  <a href="#" class="nav-item-link registerStyle text-white text-nowrap lh-1 py-0 px-0 px-md-1 px-xl-2" @click="register">註冊</a>
                  <!-- <router-link to="/register" class="nav-item-link registerStyle text-white text-nowrap lh-1 py-0 px-0 px-md-1 px-xl-2">
                    註冊
                  </router-link> -->
                </li>
                <li>
                  <a href="#" class="nav-item-link text-white text-nowrap lh-1 py-0 px-md-1 px-xl-2" @click="activityLogin">登入</a>
                  <!-- <router-link :to="{ name: '首頁', params: { event: 'fromEvent' } }" class="nav-item-link text-white text-nowrap lh-1 py-0 px-md-1 px-xl-2">
                    登入
                  </router-link> -->
                </li>
              </ul>
            </li>
            <li v-else class="nav-item d-none d-md-flex justify-content-center align-items-center mx-0 mx-md-2 mx-xl-3">
              <img src="../assets/img/yesgo_icon34.svg" alt="login">
              <ul class="list-unstyled d-none d-md-flex flex-nowrap mb-0">
                <li>
                  <a href="#" @click.prevent="logOut" class="nav-item-link registerStyle text-white text-nowrap lh-1 py-0 px-md-1 px-xl-2">登出</a>
                </li>
                <li>
                  <router-link to="/memberboard/memberinfoupdate" class="nav-item-link text-white text-nowrap lh-1 py-0 px-0 px-md-1 px-xl-2">
                    會員中心
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- 下拉選單搜尋列 -->
        <div
          ref="searchbar"
          class="collapse search-collapse bg-primary position-absolute top-100 start-0 p-2 w-100"
          id="searchEventContent"
        >
          <div class="d-flex">
            <button
              type="button"
              class="bg-primary border-0 ps-0 pe-2"
              @click.prevent="closeMenu"
            >
              <i class="bi bi-x-lg text-white"></i>
            </button>
            <div class="searchBar input-group">
              <input
                type="text"
                class="form-control border border-primary rounded-1"
                v-model="keyword"
              />
              <a
                href="#"
                class="btn border-0 position-absolute end-0 top-0"
                @click.prevent="goToSearch"
              >
                <img src="../assets/img/yesgo_icon01.svg" alt="search button" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <LoginModal></LoginModal>
</template>

<script>
import checkToken from '@/assets/js/checkToken.js'
import LoginModal from '@/components/LoginModal.vue'
import member from '../assets/js/member'

export default {
  components: {
    LoginModal
  },
  data () {
    return {
      keyword: '',
      isLogOut: true
    }
  },
  methods: {
    goToSearch () {
      if (this.keyword !== '') {
        this.$router.push(`/productboard/productsearch/${this.keyword}`)
        // 清空麵包屑
        this.$store.commit('getSubCategoryId', '')
      }
    },
    // 如果要到別頁面，下拉選單的收起(漢堡選單)
    closeMenu () {
      this.$refs.eventList.classList.remove('show')
      this.$refs.searchbar.classList.remove('show')
    },
    // mobileLogin () {
    //   if (sessionStorage.getItem('path')) {
    //     this.$store.commit('refreshCartPath', sessionStorage.getItem('path'))
    //   } else {
    //     this.$store.commit('refreshCartPath', '/memberboard/memberinfoupdate')
    //   }
    //   const AccessToken = checkToken.getAccessToken()
    //   const RefreshToken = checkToken.getFreshToken()
    //   if (AccessToken || RefreshToken) {
    //     this.$router.push('/memberboard/memberinfoupdate')
    //   } else {
    //     this.$store.commit('refreshCartPath', this.$route.fullPath)
    //     this.$router.push('/membermobilelogin')
    //     localStorage.setItem('fromEvent', 'event')
    //     this.getRandomNum()
    //   }
    // },
    activityLogin () {
      const AccessToken = checkToken.getAccessToken()
      const RefreshToken = checkToken.getFreshToken()
      if (AccessToken || RefreshToken) {
        this.$router.push('/memberboard/memberinfoupdate')
      } else {
        this.$store.state.loginModal.show()
      }
    },
    register () {
      this.$store.state.registerModal.show()
    },
    // ?會員登出
    async logOut () {
      if (await member.logout('Logout')) {
        this.$router.go()
      }
    },
    //* 檢查是否有 token
    checkCookie () {
      const AccessToken = checkToken.getAccessToken()
      const RefreshToken = checkToken.getFreshToken()
      if (AccessToken || RefreshToken) {
        // 因為有token, 所以isLogOut是false, !isLogOut就會變成true, 在html就會顯示登出
        this.isLogOut = false
      } else {
        // 因為沒有token, 所以是isLogOut
        this.isLogOut = true
      }
    }
  },
  watch: {
    // 監聽路由，到不同活動頁判斷是否有token，如果沒有了token，頁首的人頭就要變
    '$route' () {
      this.checkCookie()
    }
  },
  mounted () {
    this.checkCookie()
  }
}
</script>

<style lang="scss" scoped>
.activityNav{
  .nav-item{
    .nav-link{
      line-height: 1;
      padding: 8px 0;
      @media (min-width: 992px) {
        padding: 0 4px;
      }
      @media (min-width: 1100px) {
        padding: 0 8px;
      }
      @media (min-width: 1400px) {
        padding: 0 16px;
      }
    }
    img{
      width: 24px;
      height: 24px;
      margin: 8px 0;
    }
    .registerStyle{
      border-right: 1px solid white;
    }
    .nav-item-link{
      &:hover{
        color: white;
        text-decoration: underline;
      }
    }
  }
}

.eventList{
  flex-grow: unset;
}

.icon_m{
  width: 24px;
}
</style>
