<template>
  <nav ref="membermenu">
    <!-- 會員專區 menu -->
    <h2 class="h6 bg-primary text-white py-3 ps-3 ps-xl-4 mb-0">
      會員中心
    </h2>
    <div class="accordion member-accordion" id="memberMenuList">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button @click="toMemberinfo()"
            type="button"
            ref="memberinfoupdate"
            class="accordion-button collapsed fw-bold py-0 ps-3 ps-xl-4 pe-3"
            data-bs-toggle="collapse"
            data-bs-target="#category1"
            aria-expanded="true"
            aria-controls="menuListOne"
          >
            <span class="d-block w-100 ps-xl-2 py-3 pe-3">會員基本資料</span>
          </button>
        </h2>
        <div
          id="category1"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#memberMenuList"
        >
          <div class="accordion-body p-0">
            <ul class="list-group list-group-flush">
              <li ref="memberinfoupdate" class="list-group-item ps-3 ps-xl-4 py-0">
                <router-link to="/memberboard/memberinfoupdate" class="list-group-item-link text-secondary d-block ps-lg-2 py-2"  @click.prevent="addActive($event, 'memberinfoupdate')"
                  >會員基本資料修改
                </router-link>
              </li>
              <li ref="memberConsignee" class="list-group-item ps-3 ps-xl-4 py-0">
                <router-link to="/memberboard/memberConsignee" class="list-group-item-link text-secondary d-block ps-lg-2 py-2"  @click.prevent="addActive($event, 'memberConsignee')"
                  >常用收件人
                </router-link>
              </li>
              <li ref="memberupdatepwd" class="list-group-item ps-3 ps-xl-4 py-0">
                <router-link to="/memberboard/memberupdatepwd" class="list-group-item-link text-secondary d-block ps-lg-2 py-2"  @click.prevent="addActive($event, 'memberupdatepwd')"
                  >修改密碼
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button @click="this.$router.push('/memberboard/memberorder'); addActive($event, 'memberorder');"
            class="accordion-button collapsed fw-bold py-0 ps-3 ps-xl-4 pe-3"
            type="button"
            ref="memberorder"
            data-bs-toggle="collapse"
            data-bs-target="#category2"
            aria-expanded="true"
            aria-controls="menuListOne"
          >
            <span class="d-block w-100 ps-xl-2 py-3 pe-3">訂單查詢</span>
          </button>
        </h2>
        <div
          id="category2"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#memberMenuList"
        >
          <div class="accordion-body p-0">
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button @click="this.$router.push('/memberboard/membercollection'); addActive($event, 'membercollection');"
            class="accordion-button collapsed fw-bold py-0 ps-3 ps-xl-4 pe-3"
            type="button"
            ref="membercollection"
            data-bs-toggle="collapse"
            data-bs-target="#category3"
            aria-expanded="true"
            aria-controls="menuListOne"
          >
            <span class="d-block w-100 ps-xl-2 py-3 pe-3">追蹤清單</span>
          </button>
        </h2>
        <div
          id="category3"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#memberMenuList"
        >
          <div class="accordion-body p-0">
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed fw-bold py-0 ps-3 ps-xl-4 pe-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#category4"
            aria-expanded="true"
            aria-controls="menuListOne"
          >
            <span class="d-block w-100 ps-xl-2 py-3 pe-3">我的優惠券</span>
          </button>
        </h2>
        <div
          id="category4"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#memberMenuList"
        >
          <div class="accordion-body p-0">
            <ul class="list-group list-group-flush">
              <li ref="membercoupon" class="list-group-item ps-3 ps-xl-4 py-0">
                <router-link to="/memberboard/membercoupon" class="list-group-item-link text-secondary d-block ps-lg-2 py-2"  @click.prevent="addActive($event, 'membercoupon')"
                  >折價券</router-link
                >
              </li>
              <li ref="memberfeedback" class="list-group-item ps-3 ps-xl-4 py-0">
                <router-link to="/memberboard/memberfeedback" class="list-group-item-link text-secondary d-block ps-lg-2 py-2"  @click.prevent="addActive($event, 'memberfeedback')"
                  >購物金回饋</router-link
                >
              </li>
              <li ref="memberwelfare" class="list-group-item ps-3 ps-xl-4 py-0">
                <router-link to="/memberboard/memberwelfare" class="list-group-item-link text-secondary d-block ps-lg-2 py-2"  @click.prevent="addActive($event, 'memberwelfare')"
                  >福利金</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            ref="memberdonation"
            @click="this.$router.push('/memberboard/memberdonation');addActive($event, 'memberdonation');"
            class="accordion-button collapsed fw-bold py-0 ps-3 ps-xl-4 pe-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#category5"
            aria-expanded="true"
            aria-controls="menuListOne"
          >
            <span class="d-block w-100 ps-xl-2 py-3 pe-3">我的愛心捐</span>
          </button>
        </h2>
        <div
          id="category5"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#memberMenuList"
        >
          <div class="accordion-body p-0">
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed fw-bold py-0 ps-3 ps-xl-4 pe-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#category6"
            aria-expanded="true"
            aria-controls="menuListOne"
          >
            <span class="d-block w-100 ps-xl-2 py-3 pe-3">客服中心</span>
          </button>
        </h2>
        <div
          id="category6"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#memberMenuList"
        >
          <div class="accordion-body p-0">
            <ul class="list-group list-group-flush">
              <li ref="contactus" class="list-group-item ps-3 ps-xl-4 py-0">
                <router-link to="/memberboard/contactus" class="list-group-item-link text-secondary d-block ps-lg-2 py-2"  @click.prevent="addActive($event, 'contactus')"
                  >聯絡我們</router-link
                >
              </li>
              <li ref="questionrecord" class="list-group-item ps-3 ps-xl-4 py-0">
                <router-link to="/memberboard/questionrecord" class="list-group-item-link text-secondary d-block ps-lg-2 py-2"  @click.prevent="addActive($event, 'questionrecord')"
                  >會員提問記錄</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item d-md-none">
        <h2 class="accordion-header">
          <button @click.prevent="logOut"
            class="accordion-button collapsed fw-bold py-0 ps-3 ps-xl-4 pe-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#category6"
            aria-expanded="true"
            aria-controls="menuListOne"
          >
            <span class="d-block w-100 ps-xl-2 py-3 pe-3">登出</span>
          </button>
        </h2>
      </div>
    </div>
  </nav>
</template>

<script>
import member from '../assets/js/member'

export default {
  data () {
    return {
      nav: '',
      routePath: '',
      activeDom: ''
    }
  },
  methods: {
    toMemberinfo () {
      this.$router.push('/memberboard/memberinfoupdate')
      // active的方法找不到，之前應該是可以放入active
      this.$refs.memberinfoupdate.classList.add('active')
    },
    addActive ($event, path) {
      // 清除所以選單開過的樣式，全部關掉再判斷要開哪一個
      const lists = document.querySelectorAll('.member-accordion .list-group-item')
      lists.forEach(item => {
        item.classList.remove('active')
      })
      // 打開後collapsed移除，再加上active, 但active現在沒有
      $event.target.classList.remove('collapsed')
      $event.target.parentNode.classList.add('active')
      if (document.body.clientWidth < 768) {
        // ? 手機版在點擊選單後，視窗會跳到選單下方(顯示切換後畫面)
        setTimeout(() => {
          // offsetHeight是整個選單的高度
          window.scrollTo({ top: this.nav.offsetTop + this.nav.offsetHeight - 100, behavior: 'smooth' })
        }, 500)
      }
    },
    // ? 會員登出
    // logOut () {
    //   this.$swal.fire({
    //     title: '您確定要登出嗎?',
    //     showCancelButton: true,
    //     reverseButtons: true,
    //     confirmButtonColor: '#F8412E',
    //     cancelButtonColor: '#4D4D4D',
    //     confirmButtonText: '是',
    //     cancelButtonText: '否',
    //     width: 400,
    //     customClass: {
    //       title: 'text-class',
    //       confirmButton: 'confirm-btn-class',
    //       cancelButton: 'confirm-btn-class'
    //     }
    //   }).then((result) => {
    //     //* 登出後，isClickCart變回false
    //     this.$store.commit('refreshClickCart', false)
    //     if (result.isConfirmed) {
    //       this.$store.dispatch('logoutRemoveCookie')
    //       this.$swal.fire({
    //         title: '您已登出!',
    //         confirmButtonColor: '#F8412E',
    //         customClass: {
    //           title: 'text-class'
    //         }
    //       })
    //       this.$store.commit('getcartIconNum', 0)
    //       this.$store.commit('refreshCartPath', '')
    //       if (this.$route.fullPath === '/') {
    //         this.$router.go()
    //       } else {
    //         this.$router.push('/')
    //       }
    //     }
    //   })
    // },
    async logOut () {
      if (await member.logout('Logout')) {
        if (this.$router.fullPath === '/') {
          this.$router.go()
        } else {
          this.$router.push('/')
        }
      }
    },
    // 要換到別的頁面，旁邊的手風琴的開關跟樣式也要更換
    getActiveTheme () {
      // 要先清空所有的值
      const lists = document.querySelectorAll('.member-accordion .list-group-item')
      const listsButton = document.querySelectorAll('.member-accordion .accordion-header button.accordion-button')
      const listShow = document.querySelectorAll('.member-accordion .accordion-collapse.collapse')
      lists.forEach(item => {
        item.classList.remove('active')
      })
      listsButton.forEach(item => {
        item.classList.add('collapsed')
      })
      listShow.forEach(item => {
        item.classList.remove('show')
      })
      // 再判斷要打開哪個位置跟樣式，再用js一個個找，找到最接近的那一層放入show, 因為再選單要展開，所以再把coolapsed移除
      this.routePath = this.$route.fullPath.split('/')[2]
      this.activeDom = this.$refs[this.routePath]
      if (this.activeDom) {
        this.activeDom.classList.add('active')
        this.activeDom.classList.remove('collapsed')
        if (this.activeDom.closest('.accordion-collapse')) {
          const collapsedList = this.activeDom.closest('.accordion-collapse')
          collapsedList.classList.add('show')
          collapsedList.previousElementSibling.children[0].classList.remove('collapsed')
        }
      }
    }
  },
  watch: {
    '$route' (to) {
      // 在memberboard監聽，監聽完成再重新觸發
      if (to.fullPath.match('/memberboard/')) {
        this.getActiveTheme()
      }
    }
  },
  mounted () {
    // 整個選單塞入this.nav
    this.nav = this.$refs.membermenu
    this.getActiveTheme()
  }
}
</script>

<style lang="scss" scoped>
.accordion-header{
  span{
    margin-right: -20px;
    border-bottom: 1px dotted #adb5bd;
  }
}
</style>
