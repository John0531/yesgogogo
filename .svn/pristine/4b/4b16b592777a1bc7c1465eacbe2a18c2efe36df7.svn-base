<template>
  <div class="memberwelfare">
    <h4 class="fw-bold fs-5 mt-2">福利金</h4>
    <div
      class="bg-primary text-white d-flex justify-content-left align-items-center mt-3"
      style="height: 80px;"
    >
      <h1 class="fs-6 fw-bold ms-3">
        目前可使用之福利金:
        <span class="text-white fs-3 ms-2"> {{ this.sumMoney }}</span>
      </h1>
    </div>
    <div class="col border-bottom pb-4"></div>
    <table class="table ms-1" v-if="sumMoney">
      <tbody
        v-for="item in welfare"
        :key="item"
      >
        <tr>
          <th width="50%" style="border-bottom: none;" class="fs-5">
            {{ item.description }}
          </th>
          <td
            colspan="5"
            align="right"
            style="border-bottom-color: white;"
            class="fw-bold fs-5"
            width="40%"
          >
          {{ item.rewardMoney }}
          </td>
        </tr>
        <tr>
          <td style="border-bottom: none; width: 70%;">訂單編號: {{ item.orderNo }}</td>
        </tr>
        <tr>
          <td style="width: 50%;">{{ item.createDate.split('T')[0] }}</td>
          <td style="width: 50%;"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      welfare: [],
      sumMoney: 0
    }
  },
  methods: {
    getWelfare () {
      const url = `${process.env.VUE_APP_API}/api/members/rewardmoneyrecords`
      this.axios.get(url).then(res => {
        if (res.data.info.length === 0) {
          this.welfare = []
        } else {
          this.welfare = res.data.info
          this.welfare = this.welfare.reverse()
          //* 金額加總
          this.sumMoney = 0
          res.data.info.forEach(item => {
            this.sumMoney += item.rewardMoney
          })
        }
      })
    }
  },
  mounted () {
    this.getWelfare()
  }
}
</script>

<style lang="scss" scoped>
.table > :not(:last-child) > :last-child > * {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  padding: 0 0 0 0.5rem;
}
.table {
  margin: auto;
  padding: 5px;
  border-collapse: separate;
  border-spacing: 0;
  thead {
    // background-color: #3C6997;
    color: #000;
  }
  tbody {
    // background-color: #B3BFB8;
    color: #000;
    tr {
      @media screen and (max-width: 768px) {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
