<template v-once>
  <!-- 網站最上方即時公告 -->
  <h2 v-if="announce" class="text-nowrap overflow-hidden text-center fs-7 fs-md-6 fw-normal py-2" :style="`background-color: ${bg_color}`">
    <a class="" :href="link" :style="`color: ${text_color}`">{{ announce }}</a>
  </h2>
</template>

<script>
export default ({
  data () {
    return {
      announce: '',
      space: '',
      link: '', // ?banner連結
      bg_color: '', // ?banner色碼
      text_color: '' // ?banner文字顏色
    }
  },
  methods: {
    getAnnounce () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=announce`
      this.$http.get(url)
        .then(res => {
          if (res.data.rtnCode === 0) {
            this.announce = res.data.info[0].title // ?banner文字
            this.link = res.data.info[0].link // ?banner連結
            this.bg_color = res.data.info[0].description // ?banner色碼
            this.text_color = res.data.info[0].name // ?banner文字顏色

            // ?有公告文字加入 announce 樣式撐高 header 的高度
            if (this.announce) {
              this.space.classList.add('announce')
            }
          }
        })
    }
  },
  mounted () {
    this.space = document.querySelector('.space')
    this.getAnnounce()
  }
})
</script>

<style lang="scss" scoped>
h2{
  &:hover{
    text-decoration: underline;
  }
}
.bg-new {
  background-color: #ffe757;
}
</style>
