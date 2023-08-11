<template>
  <div class="memberwelfare">
    <h4 class="fw-bold fs-5 mt-2">我的愛心捐</h4>
    <div
      class="bg-primary text-white d-flex justify-content-left align-items-center mt-3"
      style="height: 80px;"
    >
      <h1 class="fs-6 fw-bold ms-3">
        目前累積愛心捐:
        <span class="text-white fs-3 ms-2"> {{ $currency.currency(sumDonation) }}</span>
      </h1>
    </div>
    <div class="col border-bottom pb-4"></div>
    <div class="container">
      <div class="row py-3 border-bottom" v-for="item in donation" :key="item.orderNo">
        <div class="col-10">
          <p>訂單日期: {{item.shoppingDate.split('T')[0]}}</p>
          <h5>訂單編號: {{item.orderNo}}</h5>
          <h5>捐款描述: {{item.description}}</h5>
          <h5>受贈單位: {{item.unit}}</h5>
        </div>
        <div class="col-2 d-flex align-items-center justify-content-end">
          <h5>${{$currency.currency(item.amount)}}</h5>
        </div>
      </div>
    </div>
    <!-- <table class="table ms-1" v-if="sumDonation">
      <tbody
        v-for="item in donation"
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
    </table> -->
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
// const { proxy } = getCurrentInstance()
// console.log(proxy.$currency)

const donation = ref([])
const sumDonation = ref(0)

async function getWelfare () {
  const url = `${process.env.VUE_APP_API}/api/members/LoveDonate`
  const res = await axios.get(url)
  console.log(res)
  if (res.data.rtnCode === 0) {
    donation.value = res.data.info
    donation.value.forEach((item) => {
      sumDonation.value += item.amount
    })
  }
}

onMounted(() => {
  getWelfare()
})
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
