<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content}` : `SITE_NAME` }}</template>
  </metainfo>
  <router-view/>
</template>

<script>

export default {
  watch: {
    '$route' (to) {
      const title = to.meta.title
      if (title) {
        document.title = title
      }
      const sharelink = document.querySelector('link[rel="canonical"]')
      sharelink.setAttribute('href', `https://www.yesgogogo.com${to.fullPath}`)
    }
  },
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}
</script>
