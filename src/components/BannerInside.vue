<template>
  <div class="banner" v-if="productImg.image">
    <a :href="productImg.targetUrl">
      <img :src="productImg.image" alt="" style="width:100%;">
    </a>
  </div>
</template>

<script>
// import moment from 'moment'
export default ({
  data () {
    return {
      text: '',
      productImg: {
        targetUrl: '',
        image: ''
      }
    }
  },
  methods: {
    async getProductImage () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=ProductInfo_Img`
      await this.axios.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.productImg = res.data.info[0]
          } else {
            this.productImg = ''
          }
        })
    }
  },
  mounted () {
    this.getProductImage()
  }
})
</script>

<style lang="scss" scoped>
</style>
