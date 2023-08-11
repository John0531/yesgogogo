<template>
  <section class="my-5">
    <div class="card rounded-0">
      <div class="card-header bg-gray px-4 py-3">
        <h4>訂單資訊</h4>
      </div>
      <div class="card-body py-1 px-2 px-md-4 py-4">
        {{ msg || '請到會員專區 - 訂單查詢確認' }}
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-md-6">
        <div class="d-grid gap-2">
          <router-link to="/" class="btn btn-primary text-white">
            繼續購物
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    this.msg = this.$route.params.msg
  }
}
</script>
