<template>
  <section class="d-none d-md-block">
    <!-- 館別/商品分類 menu -->
    <h2 class="h6 bg-primary text-white rounded py-3 ps-3 ps-xl-4 mb-0">
      <span class="ps-lg-2">全站商品分類</span>
    </h2>
    <div class="accordion menu-accordion" id="categoryList">
      <!-- 滿額出貨區 -->
      <div class="accordion-item" v-if="this.$store.state.menuFreeList.length !== 0">
        <h2 class="accordion-header">
          <button
            class="accordion-button fw-bold py-0 ps-3 ps-xl-4 pe-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#categoryFree"
            aria-expanded="true"
            aria-controls="menuListOne"
            :class="{
              collapsed: !(!this.$store.state.subCategoryId.match('S') && this.$store.state.subCategoryId)
            }"
          >
            <span class="d-block w-100 ps-xl-2 py-3 pe-3">滿額出貨區</span>
          </button>
        </h2>
        <div
          id="categoryFree"
          class="accordion-collapse collapse"
          data-bs-parent="#categoryList"
          :class="{ show: !this.$store.state.subCategoryId.match('S') && this.$store.state.subCategoryId }"
        >
          <div class="accordion-body p-0">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item list-group-menu ps-3 ps-xl-4 py-0"
                v-for="item in this.$store.state.menuFreeList"
                :key="item.code + '1'"
                :class="{ active: menuSubCategory === item.code }"
              >

                <router-link
                  :to="{
                    path: `/productboard/productlistfullshipment/${item.code}`
                  }"
                  @click.prevent="this.$store.commit('getCategoryId', ''); this.$store.commit('getCategory', ''); this.$store.commit('getSubCategoryId', item.code); this.$store.commit('getSubCategory', '');"
                  class="list-group-item-link text-secondary d-block ps-lg-2 py-2"
                  >{{ item.name }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 一般館別 -->
      <div class="accordion-item" v-for="menu in this.$store.state.menuList" :key="menu.id + '1'">
        <h2 class="accordion-header">
          <router-link :to="{ path: `/productboard/productList/${menu.categoryCode}` }" @click.prevent="this.$store.commit('getCategoryId', menu.categoryCode); this.$store.commit('getSubCategory', ''); this.$store.commit('getSubCategoryId', '');">
            <button
              class="accordion-button fw-bold py-0 ps-3 ps-xl-4 pe-3"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#category${menu.categoryCode}`"
              aria-expanded="true"
              aria-controls="menuListOne"
              :class="{ collapsed: !this.$store.state.subCategoryId.match(menu.categoryCode) && this.$store.state.categoryId !== menu.categoryCode }"
            >
              <span class="d-block w-100 ps-xl-2 py-3 pe-3">{{ menu.name }}</span>
            </button>
          </router-link>
        </h2>
        <div
          :id="`category${menu.categoryCode}`"
          class="accordion-collapse collapse"
          data-bs-parent="#categoryList"
          :class="{ show: this.$store.state.subCategoryId.match(menu.categoryCode) || this.$store.state.categoryId === menu.categoryCode}"
        >
          <div class="accordion-body p-0">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item list-group-menu ps-3 ps-xl-4 py-0"
                :class="{ active: menuSubCategory === `${item.categoryCode}` }"
                v-for="item in menu.subCategories"
                :key="item.categoryCode + '1'"
              >
                <router-link
                  :to="{
                    path: `/productboard/productList/${item.categoryCode}`
                  }"
                  @click.prevent=" this.$store.commit('getSubCategoryId', item.categoryCode);"
                  class="list-group-item-link text-secondary d-block ps-lg-2 py-2"
                  > {{ item.name }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      // isActive: '',
      menuList: [],
      categoryId: ''
    }
  },
  methods: {
    // addActive (id) {
    //   this.isActive = id
    // }
  },
  mounted () {
    this.$store.dispatch('getMenu')
    this.$store.dispatch('getCategoryWord')
    this.$store.dispatch('getSubCategoryWord')
  },
  computed: {
    //! 用computed取state.subCategoryId才會是最新值
    menuSubCategory () {
      return this.$store.state.subCategoryId
    }

  },
  watch: {
    /* 監聽路由變化，重渲染館別頁面 */
    '$route' (to) {
      // if (!this.menuSubCategory) {
      //   this.isActive = ''
      // }

      if (to.fullPath.match('/productboard/productList/')) {
        this.$store.commit('getSubCategory', '')
        this.$store.dispatch('getSubCategoryWord')
        this.$store.commit('getCategory', '')
        this.$store.dispatch('getCategoryWord')
      }

      if (to.fullPath.match('/productboard/productsearch/')) {
        //! 當路由為productsearch頁時 清空 館別&子館別ID
        this.$store.commit('getSubCategoryId', '')
        this.$store.commit('getCategoryId', '')
      }
    }
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
