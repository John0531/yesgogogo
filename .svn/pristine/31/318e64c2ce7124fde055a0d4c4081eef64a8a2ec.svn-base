<template >
  <div class="bg-white" v-once>
    <div class="container">
      <ul
        class="header-list-group list-group list-group-horizontal d-none d-sm-flex flex-nowrap"
      >
        <li class="list-group-item flex-fill text-center border-top-0">
          <router-link
            to="/productboard/productList/S0726"
            class="text-secondary px-1"
            @click.prevent="sendCategoryId('S0726')"
          >
            <img
              src="../assets/img/yesgo_even-icon.svg"
              alt="instantFood"
              class="listIcon"
            />
            <img
              src="../assets/img/yesgo_even-icon_hover.svg"
              alt="instantFood"
              class="listIconHover"
            />
            熱門活動
          </router-link>
        </li>
        <li class="list-group-item flex-fill">
          <router-link
            to="/productboard/productList/S0702"
            class="text-secondary px-1"
            @click.prevent="sendCategoryId('S0702')"
          >
            <img
              src="../assets/img/yesgo_icon06.svg"
              alt="instantFood"
              class="listIcon"
            />
            <img
              src="../assets/img/yesgo_icon14.svg"
              alt="instantFood"
              class="listIconHover"
            />
            料理美食
          </router-link>
        </li>
        <li class="list-group-item flex-fill">
          <router-link
            to="/productboard/productList/S0703"
            class="text-secondary px-1"
            @click.prevent="sendCategoryId('S0703')"
          >
          <img
              src="../assets/img/yesgo_icon11.svg"
              alt="instantFood"
              class="listIcon"
            />
            <img
              src="../assets/img/yesgo_icon19.svg"
              alt="instantFood"
              class="listIconHover"
            />
            生鮮蔬果
          </router-link>
        </li>
        <li class="list-group-item flex-fill">
          <router-link
            to="/productboard/productList/S0704"
            class="text-secondary px-1"
            @click.prevent="sendCategoryId('S0704')"
          >
          <img
              src="../assets/img/yesgo_icon12.svg"
              alt="instantFood"
              class="listIcon"
            />
            <img
              src="../assets/img/yesgo_icon20.svg"
              alt="instantFood"
              class="listIconHover"
            />
            零食甜點
          </router-link>
        </li>
        <li class="list-group-item flex-fill">
          <router-link
            to="/productboard/productList/S0705"
            class="text-secondary px-1"
            @click.prevent="sendCategoryId('S0705')"
          >
          <img
              src="../assets/img/yesgo_icon13.svg"
              alt="instantFood"
              class="listIcon"
            />
            <img
              src="../assets/img/yesgo_icon21.svg"
              alt="instantFood"
              class="listIconHover"
            />
            沖泡飲品
          </router-link>
        </li>
        <li class="list-group-item flex-fill">
          <router-link
            to="/productboard/productList/S0706"
            class="text-secondary px-1"
            @click.prevent="sendCategoryId('S0706')"
          >
            <img
              src="../assets/img/yesgo_even_icon22.svg"
              alt="instantFood"
              class="listIcon"
            />
            <img
              src="../assets/img/yesgo_icon22_hover.svg"
              alt="instantFood"
              class="listIconHover"
            />
            食材南北貨
          </router-link>
        </li>
        <li class="list-group-item flex-fill">
          <router-link
            to="/productboard/productList/S0707"
            class="text-secondary px-1"
            @click.prevent="sendCategoryId('S0707')"
          >
            <img
              src="../assets/img/yesgo_even_icon23.svg"
              alt="instantFood"
              class="listIcon"
            />
            <img
              src="../assets/img/yesgo_icon23_hover.svg"
              alt="instantFood"
              class="listIconHover"
            />
            營養保健
          </router-link>
        </li>
        <li class="list-group-item flex-fill">
          <router-link
            to="/productboard/productList/S0708"
            class="text-secondary px-1"
            @click.prevent="sendCategoryId('S0708')"
          >
            <img
              src="../assets/img/yesgo_even_icon24.svg"
              alt="instantFood"
              class="listIcon"
            />
            <img
              src="../assets/img/yesgo_icon24_hover.svg"
              alt="instantFood"
              class="listIconHover"
            />
            日用家電
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default ({
  methods: {
    sendCategoryId (id) {
      this.$store.commit('getCategoryId', id)
      this.$store.commit('getCategory', '')
      this.$store.commit('getSubCategoryId', '')
      this.$store.commit('getSubCategory', '')
    }
  }
})
</script>
