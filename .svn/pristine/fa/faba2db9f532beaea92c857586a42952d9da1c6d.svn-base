<template>
  <div class="userboard">
    <Header></Header>
    <div class="breakline shadow-sm d-none d-sm-block"></div>
    <div class="container">
      <div class="row my-3">
        <div class="col-md-3">
          <Menu></Menu>
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
import { defineAsyncComponent } from 'vue'
const Header = defineAsyncComponent(() => import(/* webpackChunkName: "header" */'@/components/Header.vue'))
const Footer = defineAsyncComponent(() => import(/* webpackChunkName: "footer" */'@/components/Footer.vue'))
const Menu = defineAsyncComponent(() => import(/* webpackChunkName: "menu" */'@/components/Menu.vue'))

export default {
  components: {
    Menu,
    Header,
    Footer
  }
}
</script>
<style lang="scss" scoped>
  .container {
    min-height: calc(100vh - 300px);
  }
</style>
