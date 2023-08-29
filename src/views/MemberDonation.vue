<template>
  <div class="memberwelfare">
    <p class="d-flex justify-content-between  mt-2">
      <span class="fw-bold fs-5">我的愛心捐</span>
      <a href="#" class="donation-explain d-flex align-items-center " @click.prevent="donativeModal.openModal">愛心捐說明<img src="@/assets/img/yesgo_icon-info.svg" alt="愛心品info" class="ms-1 info-icon-style "></a>
    </p>
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
    <table class="table ms-md-1">
      <tbody v-for="item in donation" :key="item">
        <tr>
          <th width="60%" style="border-bottom: none;" class="fs-4">
            <span v-if="item.description===1">購物金轉作愛心捐</span>
            <span v-if="item.description===2">愛心品平台加碼捐</span>
          </th>
          <td
            colspan="5"
            align="right"
            style="border-bottom-color: white;"
            class="fw-bold fs-4"
          >
            +{{ item.amount }}
          </td>
        </tr>
        <tr>
          <td class="py-0" style="border-bottom: none;">
            <span>訂單日期: {{ item.shoppingDate.split('T')[0] }}</span>
          </td>
        </tr>
        <tr>
          <td class="py-0" style="border-bottom: none;">
            <span>訂單編號: {{ item.orderNo }}</span>
          </td>
        </tr>
        <tr>
          <td class="ps-2 pt-0"><span>受贈單位: {{ item.unit }}</span></td>
          <td class="pe-2 pt-0" colspan="7" align="right" width="40%">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <DonativeModal ref="donativeModal"></DonativeModal>
</template>

<script setup>
import DonativeModal from '../components/DonativeModal.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'
// const { proxy } = getCurrentInstance()
// console.log(proxy.$currency)

const donation = ref([])
const sumDonation = ref(0)

async function getWelfare () {
  const url = `${process.env.VUE_APP_API}/api/members/LoveDonate`
  const res = await axios.get(url)
  if (res.data.rtnCode === 0) {
    donation.value = res.data.info.reverse()
    donation.value.forEach((item) => {
      sumDonation.value += item.amount
    })
  }
}
onMounted(() => {
  getWelfare()
})

const donativeModal = ref(null)
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
.donation-explain{
  color: #9c9c9c;
  text-decoration: underline;
}
</style>
