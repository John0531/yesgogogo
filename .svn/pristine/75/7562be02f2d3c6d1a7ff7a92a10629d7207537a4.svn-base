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
      //* 引入 moment
      const moment = document.createElement('script')
      moment.setAttribute(
        'src',
        `${process.env.VUE_APP_WEBVIEW}/vendors/moment.min.js?${getRandomString(3)}`
      )
      moment.async = true
      document.head.appendChild(moment)

      const url = `${process.env.VUE_APP_WEBVIEW}/2023_birthday.html`
      this.$http.get(url)
        .then((res) => {
          this.pageContent = res.data

          //* 引入 js 執行 vue
          const scriptJs = document.createElement('script')
          scriptJs.setAttribute(
            'src',
            `${process.env.VUE_APP_WEBVIEW}/service/2023_birthday.js?${getRandomString(3)}`
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
            `${process.env.VUE_APP_WEBVIEW}/css/2023_birthday.min.css?${getRandomString(3)}`
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
    const unscriptJs = document.querySelector('script[src*="2023_birthday.js"]')
    unscriptJs.remove()
  }
}
</script>
