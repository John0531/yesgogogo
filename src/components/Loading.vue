<template>
  <!-- loading 動畫 -->
  <loading :active="$store.state.isLoading" class="position-fixed top-50 start-50 translate-middle w-100 h-100" id="overlay" backgroundColor= '#eee' blur="">
    <div class="loadingio-spinner-ellipsis-4hx2p6xfr9s loading-position" style="">
      <div class="ldio-2rhuifu0dvy">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </loading>
</template>

<style lang="scss" scoped>
  .loading-position{
    width: 200px;
    height: 150px;
    display: inline-block;
    overflow: hidden;
    position: fixed;
    left:45%;
    top:43%;
    @media (max-width: 1399px){
      left:44%;
    }
    @media (max-width: 1299px){
      left:42%;
    }
    @media (max-width: 991px){
      left:41%;
    }
    @media (max-width: 767px){
      left:37%;
    }
    @media (max-width: 575px){
      left:35vw;
      top:40%;
    }
    @media (max-width: 430px){
      left:26vw;
      top:40%;
    }
  }
</style>
