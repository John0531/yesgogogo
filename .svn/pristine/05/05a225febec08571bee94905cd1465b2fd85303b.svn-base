<template >
  <div v-html="pageContent">
  </div>
</template>

<script >
import { getRandomString } from '@/assets/js/randomString.js'

export default {
  data () {
    return {
      pageContent: ''
    }
  },
  methods: {
    getSource () {
      const url = `${process.env.VUE_APP_WEBVIEW}/${this.$route.params.fileName}.html`
      this.axios.get(url)
        .then((res) => {
          //* 抓取檔案html
          this.pageContent = res.data
          //* 引入JS，在Cli中再次引入VUE
          const scriptJs = document.createElement('script')
          scriptJs.setAttribute(
            'src',
            `${process.env.VUE_APP_WEBVIEW}/service/${this.$route.params.fileName}.js?${getRandomString(3)}`
          )
          scriptJs.setAttribute(
            'type',
            'module'
          )
          //* 讓JS異步載入
          scriptJs.async = true
          // *script放在最後一個節點
          document.body.appendChild(scriptJs)

          //* 引入 css
          const style = document.createElement('link')
          style.setAttribute(
            'href',
            `${process.env.VUE_APP_WEBVIEW}/css/${this.$route.params.fileName}.min.css?${getRandomString(3)}`
          )
          style.setAttribute(
            'rel',
            'stylesheet'
          )
          document.head.appendChild(style)
        })
        .catch(() => {
          // *若無對應路由則回首頁
          this.$router.push('/')
        })
    }
  },
  mounted () {
    this.getSource()
  },
  unmounted () {
    const unscriptJs = document.querySelector(`script[src*="${this.$route.params.fileName}.js"]`)
    if (unscriptJs) {
      unscriptJs.remove()
    }
  }
}
</script>
