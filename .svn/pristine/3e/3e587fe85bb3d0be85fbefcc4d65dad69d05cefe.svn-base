<template>
  <section class="mt-2 mt-md-0">
    <h1 class="fs-5 fw-bold mb-3 mt-2">會員基本資料</h1>
    <div class="border border-light mb-5">
      <div class="row justify-content-center px-2 px-md-0 py-3 py-md-5">
        <div class="col-md-10 col-lg-8">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th scope="row">姓名</th>
                <td>{{ memberInfo.fullName }}</td>
              </tr>
              <tr>
                <th scope="row">手機號碼</th>
                <td>{{ memberInfo.phoneNum }}</td>
              </tr>
              <tr>
                <th scope="row">電子郵件</th>
                <td>{{ memberInfo.email }}</td>
              </tr>
              <tr>
                <th scope="row">性別</th>
                <td>{{ memberInfo.userGender }}</td>
              </tr>
              <tr>
                <th scope="row">生日</th>
                <td>{{ fullBirth }}</td>
              </tr>
              <tr>
                <th scope="row">常用寄送地址</th>
                <td>{{ memberInfo.city }}{{ memberInfo.district }}{{ memberInfo.otherAddress }}</td>
              </tr>
            </tbody>
          </table>
          <!-- <form class="w-100">
            <div class="row mb-3">
              <label for="memberName" class="col-sm-3 col-form-label"
                >姓名</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="memberName"
                  value="王致凱"
                  readonly
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="memberPhone" class="col-sm-3 col-form-label"
                >手機號碼</label
              >
              <div class="col-sm-9">
                <input
                  type="number"
                  class="form-control"
                  id="memberPhone"
                  value="0987654321"
                  readonly
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="memberEmail" class="col-sm-3 col-form-label"
                >電子郵件</label
              >
              <div class="col-sm-9">
                <input
                  type="email"
                  class="form-control"
                  id="memberEmail"
                  value="kaiwang@gmail.com"
                  readonly
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="memberGender" class="col-sm-3 col-form-label"
                >性別</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="memberGender"
                  :value="memberGender === 1 ? '男' : '女'"
                  readonly
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="memberBirth" class="col-sm-3 col-form-label"
                >生日</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="memberBirth"
                  v-model="fullBirth"
                  readonly
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="memberAddress" class="col-sm-3 col-form-label"
                >常用寄送地址</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="memberAddress"
                  value="台北市內湖區瑞光393巷8號"
                  readonly
                />
              </div>
            </div>
          </form> -->
          <!-- <p class="text-primary fw-bold mb-4">
              立即填寫會員資料，就有機會享專屬優惠
            </p>
            <p class="text-primary fw-bold mb-4">
              恭喜您！請至「我的優惠券」查看會員專屬禮遇
            </p> -->
          <!-- <p class="mt-4 mb-2">生日</p>
            <div class="row g-2 mb-5">
              <div class="col">
                <select
                  id="birthYear"
                  class="form-select"
                  v-model="memberBirth.year"
                >
                  <option value="" disabled selected hidden>西元年</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
              <div class="col">
                <select
                  id="birthMonth"
                  class="form-select"
                  v-model="memberBirth.month"
                >
                  <option value="" disabled selected hidden>月份</option>
                  <option>10</option>
                  <option>11</option>
                </select>
              </div>
              <div class="col">
                <select
                  id="birthDate"
                  class="form-select"
                  v-model="memberBirth.date"
                >
                  <option value="" disabled selected hidden>日</option>
                  <option>13</option>
                  <option>14</option>
                </select>
              </div>
            </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import countryName from '@/assets/country.json'

export default {
  data () {
    return {
      memberInfo: '', // ?會員資料(API)
      countryName
    }
  },
  methods: {
    getMemberInfo () {
      // ?取得會員資料
      const url = `${process.env.VUE_APP_API}/api/members/SelectMemberInfo`
      this.axios.get(url).then(res => {
        if (res.data.rtnCode === 0) {
          this.memberInfo = res.data.info
          this.memberInfo.userGender = this.memberInfo.userGender === 1 ? '男' : (this.memberInfo.userGender === 0 ? '女' : '')
          // ?取得的 API 資料縣市、鄉鎮中文轉為代碼
          if (this.memberInfo.city && this.memberInfo.district) {
            this.memberInfo.city = this.countryName[this.countryName.findIndex(item => item.Country === this.memberInfo.city)].CountryName
            this.memberInfo.district = this.countryName[this.countryName.findIndex(item => item.District === this.memberInfo.district)].DistrictName
          }
        } else {
          this.$swal.fire({
            title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
            confirmButtonColor: '#F8412E',
            customClass: {
              title: 'text-class'
            }
          })
        }
      })
    }
  },
  computed: {
    fullBirth () {
      if (this.memberInfo.userBirthday) {
        const birthAry = this.memberInfo.userBirthday.split('')
        const year = birthAry.slice(0, 4).join('')
        const month = birthAry.slice(4, 6).join('')
        const date = birthAry.slice(6).join('')
        return `${year} 年 ${month} 月 ${date} 日`
      }
      return ''
    }
  },
  mounted () {
    this.getMemberInfo()
  }
}
</script>

<style lang="scss" scoped>
select {
  &:first-child {
    color: #999;
  }
}
table th, td {
  padding-bottom: 12px;
  padding-top: 12px;
}
</style>
