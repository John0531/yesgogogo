<template>
  <div class="memberboard">
    <Header></Header>
    <div class="breakline shadow-sm d-none d-sm-block"></div>
    <div class="container">
      <div class="row my-3">
        <div class="col-md-3">
          <MemberMenu></MemberMenu>
        </div>
        <div class="col-md-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import MemberMenu from '@/components/MemberMenu.vue'
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

export default {
  data () {
    return {
      loginModal: ''
    }
  },
  components: {
    Header,
    Footer,
    MemberMenu
  }
}
</script>
<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 300px);
}
</style>
