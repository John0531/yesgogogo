<template>
  <div class="body" v-html="`${pageContent}`"></div>
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
  // @import '@/assets/scss/activity/_hover.min.scss';
  // @import '@/assets/scss/activity/_uitc.scss';
  .row {
    padding: -12px;
  }
  .banner {
    .mobile {
      display: none;
      @media screen and (max-width:768px) {
      display:block;
    }
    }
    .pc {
      @media screen and (max-width:768px) {
        display: none;
      }
    }
  }
  .imglink_1 {
      display: flex ;
    @media screen and (max-width:1024px) {
      display: none;
    }
  }
  .imglink_2{
    display: none ;
    @media screen and (max-width:1024px) {
      display: flex;
    }
  }
  .title1 {
    border: 1px solid #46aabe
  }
  .detail {
    text-align:justify ;
    // padding: .25rem;
  }
  .tableContainer {
    @media screen and (max-width:768px) {
      display: none !important;
    }
  }
  .tablerowrow {
    display:table-row;
    padding: 0;
  }
  .tablerow {
    display:table;
    padding: 0;
  }
  .vertical {
    vertical-align: middle;
  }
  .cell {
    display: table-cell;
    border: .25px solid #C7E5EB;
    border-collapse: collapse;
    border-spacing: 0px;
  }
  .tableMobileContainer {
    display: none ;
    @media screen and (max-width:768px) {
      display: flex;
      flex-direction: column;
    }
    .tableMobile {
      border: .5px solid #C7E5EB;
    }
    .mobileCell {
      border: .5px solid #C7E5EB;
      border-top:none;
      border-left: none;
    }
    .table_1 {
      // display: table;
      // border-collapse:collapse;
      border: .5px solid #C7E5EB;
      border-bottom: none;
      border-right: none;
    }
    .table_2 {
      // display: table;
      // border-collapse:collapse;
      border: .5px solid #C7E5EB;
      border-bottom: none;
      border-right: none;
    }
  }

  .buttonGroup {
    height: 6rem;
    @media screen and (max-width:768px) {
      width: 80% !important;
    }
  }

  .btn_2 {
    background-color: #46aabe;
    border-radius: 30px 30px 30px 30px ;
  }

</style>
