<template>
  <div ref="memberfeedback" class="memberfeedback">
    <h4 class="fw-bold fs-5 mt-2">購物金回饋</h4>
    <div
      class="bg-primary text-white d-flex justify-content-left align-items-center my-3"
      style="height: 80px;"
    >
      <h1 class="fs-6 fw-bold ms-3">
        目前可使用之回饋購物金:
        <span class="text-white fs-3 ms-2"> {{ feedBackSumMoney }}</span>
      </h1>
    </div>
    <!-- 購物金歸戶 -->
    <div class="ps-2 ps-md-3">
      <h2 class="fs-5 mb-3">購物金歸戶</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="input-group mb-3">
            <input type="text" class="form-control border-0 bg-lightgray py-1" placeholder="請輸入 yesgogogo 購物金序號" v-model="eventCode">
            <button class="btn btn-secondary py-1 px-3" type="button" @click.prevent="getEventFeedBack(eventCode)">歸戶</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <ul class="nav nav-tabs mt-3 nav-justified" id="myTab" role="tablist">
      <li class="nav-item" role="presentation" style="border-right: none;">
        <button
          class="nav-link btn active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          @click="notOverDue"
        >
          未過期
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link btn"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected=""
          @click="overDue"
        >
          已過期
        </button>
      </li>
    </ul> -->
    <!-- <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
        v-if="notExpireDate"
      >
        <table class="table ms-1">
          <tbody v-for="item in notExpireDate" :key="item">
            <tr>
              <th width="60%" style="border-bottom: none;" class="fs-5">
                {{ item.description }}
              </th>
              <td
                colspan="5"
                align="right"
                style="border-bottom-color: white;"
                class="fw-bold fs-5"
              >
                {{ item.rewardPoint }}
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">訂單編號: {{ item.orderNo }}</td>
            </tr>
            <tr>
              <td>{{ item.createDate.split('T')[0] }}</td>
              <td colspan="7" align="right" width="40%">
                到期日: {{ !item.dueDate.isValid() ? '' : formatDate(item.dueDate) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
        v-if="expireDate"
      >
        <table class="table ms-1">
          <tbody v-for="item in expireDate" :key="item">
            <tr>
              <th width="60%" style="border-bottom: none;" class="fs-5">
                {{ item.description }}
              </th>
              <td
                colspan="5"
                align="right"
                style="border-bottom-color: white;"
                class="fw-bold fs-5"
              >
                {{ item.rewardPoint }}
              </td>
            </tr>
            <tr>
              <td style="border-bottom: none;">訂單編號: {{ item.orderNo }}</td>
            </tr>
            <tr>
              <td>{{ item.createDate.split('T')[0] }}</td>
              <td colspan="7" align="right" width="40%">
                到期日: {{ formatDate(item.dueDate) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> -->
    <table class="table ms-md-1">
      <tbody v-for="item in feedBack" :key="item">
        <tr>
          <th width="60%" style="border-bottom: none;" class="fs-5">
            {{ item.description }}
          </th>
          <td
            colspan="5"
            align="right"
            style="border-bottom-color: white;"
            class="fw-bold fs-5"
          >
            <span v-if="item.rewardPoint>0">+</span>{{ item.rewardPoint }}
          </td>
        </tr>
        <tr>
          <td style="border-bottom: none;height: 40px;">
            <span v-if="item.orderNo&&item.orderNo!=='N9999999999'">訂單編號: {{ item.orderNo }}</span>
          </td>
        </tr>
        <tr>
          <td class="ps-2 py-0">{{ item.createDate.split('T')[0] }}</td>
          <td class="pe-2 py-0" colspan="7" align="right" width="40%">
            <span v-if="item.dueDate.isValid()">效期: {{ !item.dueDate.isValid() ? '' : formatDate(item.dueDate) }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      feedBack: [],
      feedBackSumMoney: 0,
      moment: new Date(),
      expireDate: '',
      notExpireDate: '',
      emptyDate: '',
      matchExpire: '',
      matchExpired: '',
      eventCode: ''
    }
  },
  methods: {
    //* 回饋點數api */
    getFeedBack () {
      const url = `${process.env.VUE_APP_API}/api/members/rewardpointrecords`
      this.axios.get(url).then(res => {
        if (res.data.info.smoneys.length === 0) {
          this.feedBack = []
        } else {
          this.feedBack = res.data.info.smoneys
          // * 去除重複資訊
          this.feedBack.forEach((item) => {
            if (item.description.includes('(')) {
              if (item.description.split('(')[1].replace(')', '') === item.description.split('(')[0]) {
                item.description = item.description.split('(')[0]
              }
            }
          })
          this.feedBack = this.feedBack.reverse()
          //* 金額加總
          this.feedBackSumMoney = res.data.info.totalPoint
          this.overDue()
          this.notOverDue()
        }
      })
    },
    // 未過期
    notOverDue () {
      const now = moment()
      // 未過期notExpireDate
      this.notExpireDate = this.feedBack.filter(item => {
        item.dueDate = moment(item.dueDate)
        // || !不是有效的
        return item.dueDate.isAfter(now) || !item.dueDate.isValid()
      })
    },
    // 已過期
    overDue () {
      const now = moment()
      // 已過期expireDate
      this.expireDate = this.feedBack.filter(item => {
        item.dueDate = moment(item.dueDate)
        return item.dueDate.isBefore(now)
      })
    },
    // 到期日正確格式
    formatDate (date) {
      return moment(date).format('YYYY-MM-DD')
    },
    getEventFeedBack (code) {
      const url = `${process.env.VUE_APP_API}/api/widgets/EventSmoneyCode?Code=${code}`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode !== 0) {
            let msg = ''
            if (res.data.rtnCode === 3601) {
              // ?已領過此活動優惠(3601)
              msg = '你已領過囉！<br>(活動期間每會員帳號限領一次)'
            } else if (res.data.rtnCode === 3604) {
              // ?活動代碼不在期間內(3604)
              msg = '活動已結束'
            } else {
              // ?查無此活動代碼(3602),活動代碼未啟用(3603),活動代碼確認錯誤(3699)
              msg = '活動代碼錯誤'
            }
            this.$swal.fire({
              title: `${msg}(${res.data.rtnCode})`,
              allowOutsideClick: false,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            })
          } else if (res.data.rtnCode === 0) {
            // ?領取成功
            this.$swal.fire({
              title: '你已獲得購物金，記得使用喔！',
              allowOutsideClick: false,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            })
            this.getFeedBack()
          }

          this.eventCode = ''
          sessionStorage.removeItem('pointCode')
          sessionStorage.removeItem('path')
        })
    }
  },
  mounted () {
    if (document.body.clientWidth < 576) {
      setTimeout(() => {
        window.scrollTo({ top: this.$refs.memberfeedback.offsetTop, behavior: 'smooth' })
      }, 500)
    }
    this.getFeedBack()
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
    color: #000;
  }
  tbody {
    color: #000;
  }
}

select {
  &:first-child {
    color: #999;
  }
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #f8412e;
}

.nav-link {
  color: #495057;
  background-color: #fff;
}

.nav-item:first-child {
  border-right: none;
}
</style>
