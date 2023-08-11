<template>
  <div v-if="!isClose" class="survey position-fixed bottom-0 start-50 translate-middle-x z-index-11">
    <a href="#" @click.prevent="clossSurvey" class="d-block closeSurvey position-absolute">
      <img src="../assets/img/homesurvey_close.png" alt="關閉使用者問卷" class="img-fluid">
    </a>
    <a href="https://www.surveycake.com/s/7M8mN" class="d-block" target="_blank">
      <img src="../assets/img/homesurvey.jpg" alt="使用者問卷回覆" class="img-fluid">
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isClose: false
    }
  },
  methods: {
    clossSurvey () {
      this.isClose = true
      sessionStorage.setItem('yesgogogoSurveyClose', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.survey{
  width: 67%;
  @media (min-width: 410px) {
    width: 70%;
  }
  @media (min-width: 768px) {
    width: auto;
  }
}
.closeSurvey{
  top: 0px;
  right: 5px;
  width: 20px;
  height: 20px;
  @media (min-width: 576px) {
    top: 7px;
    right: 7px;
    width: 28px;
    height: 28px;
  }
  @media (min-width: 768px) {
    top: 10px;
    right: 10px;
    width: 33px;
    height: 33px;
  }
  @media (min-width: 992px) {
    top: 15px;
    right: 15px;
    width: 33px;
    height: 33px;
  }
}
</style>
