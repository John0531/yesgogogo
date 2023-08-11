<template>
  <div v-html="pageContent">
  </div>
</template>

<script>
import { getRandomString } from '@/assets/js/randomString.js'

export default {
  data () {
    return {
      pageContent: ''
    }
  },
  methods: {
    getSource () {
      const url = `${process.env.VUE_APP_WEBVIEW}/newyeargift.html`
      this.axios.get(url)
        .then((res) => {
          // * 抓取 html
          this.pageContent = res.data

          //* 引入 js 執行 vue
          const scriptJs = document.createElement('script')
          scriptJs.setAttribute(
            'src',
            `${process.env.VUE_APP_WEBVIEW}/service/newyeargift.js?${getRandomString(3)}`
          )
          scriptJs.setAttribute(
            'type',
            'module'
          )
          scriptJs.async = true
          document.body.appendChild(scriptJs)

          //* 引入 css
          const style = document.createElement('link')
          style.setAttribute(
            'href',
            `${process.env.VUE_APP_WEBVIEW}/css/newyeargift.min.css?${getRandomString(3)}`
          )
          style.setAttribute(
            'rel',
            'stylesheet'
          )
          document.head.appendChild(style)
        })
    }
  },
  mounted () {
    this.getSource()
  },
  unmounted () {
    const unscriptJs = document.querySelector('script[src*="newyeargift.js"]')
    unscriptJs.remove()
  }
}
</script>
