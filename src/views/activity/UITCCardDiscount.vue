<template>
  <div class="body" v-html="`${pageContent}`">
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageContent = ref([])
function getContent () {
  try {
    const url = `${process.env.VUE_APP_STATIC}/yesgoevent/uitccarddiscount/html/${route.params.fileName}.html`
    axios.get(url)
      .then((res) => {
        // *取得HTML
        // console.log(res.data)
        // const dom = document.createElement('html')
        // dom.innerHTML = res.data
        // pageContent.value = dom.querySelector('.content').innerHTML
        pageContent.value = res.data
        console.log(pageContent)
      })
  } catch (err) {
    return err
  }
}

const url = ref([`${process.env.VUE_APP_STATIC}/yesgoevent/uitccarddiscount/css/uitc.css`])
function getCss () {
  url.value.forEach((item) => {
    const cssLink = document.createElement('link')
    cssLink.setAttribute('rel', 'stylesheet')
    cssLink.setAttribute('type', 'text/css')
    cssLink.setAttribute('href', item)
    document.head.appendChild(cssLink)
  })
}

onMounted(() => {
  getContent()
  getCss()
})

</script>

<style lang="scss" src="@/assets/scss/activity/_hover.min.scss" scoped>
</style>
