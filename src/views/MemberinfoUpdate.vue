<template>
  <section class="mt-2 mt-md-0">
    <h1 class="fs-5 fw-bold mb-3 mt-2">會員資料修改</h1>
    <div class="border border-light mb-5">
      <div class="row justify-content-center px-3 px-lg-0 py-3 py-md-5">
        <div class="col-lg-8 col-xl-6">
          <!-- <div class="alert alert-success" role="alert" v-if="isUpdateSuccess">
            儲存已變更
          </div>
          <div class="alert alert-danger" role="alert" v-if="isUpdateError">
            {{ errorMsg }}
          </div> -->
          <Form v-slot="{ errors }" @submit="onSubmit">
            <div class="mb-3">
              <label for="memberName" class="form-label">姓名</label>
              <Field
                type="text"
                class="form-control"
                name="姓名"
                :class="{ 'is-invalid': errors['姓名'] }"
                :rules="isNameToLong"
                placeholder="請輸入姓名"
                v-model="memberInfo.fullName"
                id="memberName"
              ></Field>
              <error-message
                name="姓名"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="mb-3">
              <label for="memberPhone" class="form-label">手機號碼</label>
              <div v-if="memberInfo.phoneNum">
                <p>{{ memberInfo.phoneNum }}</p>
              </div>
              <div v-else>
                <Field
                  type="text"
                  class="form-control"
                  name="手機號碼"
                  :class="{ 'is-invalid': errors['手機號碼'] }"
                  :rules="isPhone"
                  placeholder="請輸入手機號碼"
                  v-model="memberPhone"
                  id="memberEmail"
                ></Field>
                <error-message
                  name="手機號碼"
                  class="invalid-feedback"
                ></error-message>
              </div>
            </div>
            <div class="mb-3">
              <label for="memberEmail">Email</label>
              <div v-if="memberInfo.email">
                <p>{{ memberInfo.email }}</p>
              </div>
              <div v-else>
                <Field
                  type="email"
                  class="form-control"
                  name="email"
                  :class="{ 'is-invalid': errors['email'] }"
                  rules="email"
                  placeholder="請輸入 Email"
                  v-model="memberEmail"
                  id="memberEmail"
                ></Field>
                <error-message
                  name="email"
                  class="invalid-feedback"
                ></error-message>
              </div>
            </div>
            <div class="mb-3">
              <p class="mb-2">性別</p>
              <Field
                class="form-check-input"
                name="memberGender"
                type="radio"
                id="male"
                value="1"
                v-model="memberInfo.userGender"
              ></Field>
              <label class="form-check-label me-5 ms-2" for="male">男性</label>
              <Field
                class="form-check-input"
                name="memberGender"
                id="female"
                type="radio"
                value="0"
                v-model="memberInfo.userGender"
              ></Field>
              <label class="form-check-label ms-2" for="female">女性</label>
              <error-message name="memberGender"></error-message>
            </div>
            <div class="mb-3">
              <label for="memberBirth" class="form-label">生日</label>
              <p v-if="memberInfo.userBirthday">
                {{ fullBirth }}
              </p>
              <div v-else class="row g-2">
                <div class="row g-2">
                  <div class="col">
                    <select
                      id="birthYear"
                      class="form-select"
                      v-model.number="memberBirth.year"
                      @change="getDay"
                    >
                      <option value="" selected>西元年</option>
                      <option :value="year" v-for="year in dateList.yearList" :key="year">
                        {{ year }}
                      </option>
                    </select>
                  </div>
                  <div class="col">
                    <select
                      id="birthMonth"
                      class="form-select"
                      v-model="memberBirth.month"
                      @change="getDay"
                    >
                      <option value="" selected>月份</option>
                      <option
                        :value="month"
                        v-for="month in dateList.monthList"
                        :key="month"
                      >
                        {{ month }}
                      </option>
                    </select>
                  </div>
                  <div class="col">
                    <select
                      id="birthDate"
                      class="form-select"
                      v-model="memberBirth.day"
                    >
                      <option value="" selected>日</option>
                      <option :value="day" v-for="day in dateList.dayList" :key="day">
                        {{ day }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="memberAddress" class="form-label">常用寄送地址</label>
              <div class="row g-2">
                <div class="col-3">
                  <select
                    id="country"
                    class="form-select pe-2"
                    v-model="memberInfo.city"
                    @change="getTown(); memberInfo.district = '';"
                  >
                    <option value="" selected>縣市</option>
                    <option
                      :value="country.Country"
                      v-for="country in addressList.countryList"
                      :key="country"
                      >{{ country.CountryName }}</option
                    >
                  </select>
                </div>
                <div class="col-3">
                  <select
                    id="town"
                    class="form-select pe-2"
                    v-model="memberInfo.district"
                  >
                    <option value="" selected>區名</option>
                    <option
                      v-for="town in addressList.townList"
                      :key="town"
                      :value="town.District"
                      >{{ town.DistrictName }}</option
                    >
                  </select>
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    v-model="memberInfo.otherAddress"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="mobileBarcode" class="form-label">手機載具</label>
              <Field
                type="text"
                class="form-control"
                name="手機載具"
                :class="{ 'is-invalid': errors['手機載具'] }"
                :rules="isMobileBarcode"
                placeholder="請輸入手機載具"
                v-model="memberInfo.cellphoneCarrier"
                id="mobileBarcode"
              ></Field>
              <error-message
                name="手機載具"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="mb-3">
              <input
                class="form-check-input"
                name="subscribe"
                id="subscribe"
                type="checkbox"
                v-model="memberInfo.isSubscribe"
              />
              <label class="form-check-label ms-2" for="subscribe">是否訂閱電子報</label>
            </div>
            <div class="mb-3">
              <span class="bg-light">發票兌獎會員編號： YESGO{{ memberInfo.memberId }}</span>
            </div>
            <div v-if="memberInfo.reclaimCode" class="mb-3">
              <span class="bg-light">發票歸戶認証碼： {{ memberInfo.reclaimCode }}</span>
            </div>
            <div class="d-grid gap-2 mt-5">
              <button
                class="btn btn-primary rounded-0 text-white py-2"
                type="submit"
              >
                確認變更
              </button>
            </div>
          </Form>
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
      memberInfo: {}, // ?查詢會員資料 API
      countryName, // ?縣市鄉鎮代碼 json
      addressList: { // ?地址選單
        countryList: [],
        townList: []
      },
      dateList: { // ?日期選單
        yearList: [],
        monthList: [],
        dayList: []
      },
      memberBirth: { // ?使用者輸入的出生年月日
        year: '',
        month: '',
        day: ''
      },
      memberPhone: '', // ?使用者輸入的手機
      memberEmail: '' // ?使用者輸入的 Email
    }
  },
  methods: {
    getMemberInfo () {
      // ?取得會員資料
      const url = `${process.env.VUE_APP_API}/api/members/SelectMemberInfo`
      this.axios.get(url).then(res => {
        if (res.data.rtnCode === 0) {
          this.memberInfo = res.data.info
          if (this.memberInfo.userGender !== 2) {
            this.memberInfo.userGender = this.memberInfo.userGender.toString()
          }

          // ?產生生日年月日
          this.getYearMonth()
          // if (this.memberInfo.userBirthday) {
          //   const birthAry = this.memberInfo.userBirthday.split('')
          //   this.memberBirth.year = birthAry.slice(0, 4).join('')
          //   this.memberBirth.month = birthAry.slice(4, 6).join('')
          //   this.getDay()
          //   this.memberBirth.day = this.memberInfo.userBirthday.split('').slice(6).join('')
          // }
          // ?地址縣市鄉鎮選單
          this.getCountry()
          this.getTown()
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
    },
    getCountry () {
      // ? 產生縣市清單
      const list = new Set()
      this.countryName.forEach(item => {
        list.add(item.CountryName)
      })
      const listAry = [...list]
      const list2 = []
      listAry.forEach(item => {
        const num = this.countryName.findIndex(item2 => item2.CountryName === item)
        list2.push({
          Country: this.countryName[num].Country,
          CountryName: item
        })
      })
      this.addressList.countryList = list2
    },
    getTown () {
      // ? 產生鄉鎮清單
      this.addressList.townList = this.countryName.filter(
        item => item.Country === this.memberInfo.city
      )
    },
    getYearMonth () {
      // ? 產生生日"年"、"月"選單
      const year = new Date()
      for (let i = 1930; i < year.getFullYear() + 1; i++) {
        this.dateList.yearList.push(i)
      }
      for (let i = 1; i < 13; i++) {
        if (i < 10) {
          this.dateList.monthList.push('0' + i)
        } else {
          this.dateList.monthList.push(i)
        }
      }
    },
    getDay () {
      // ? 產生生日"日"選單
      this.dateList.dayList = []
      // ?清空西元年，月日一併清空
      if (!this.memberBirth.year) {
        this.memberBirth.month = ''
        this.memberBirth.day = ''
        return
      }
      // ?清空月，日一併清空
      if (!this.memberBirth.month) {
        this.memberBirth.day = ''
        return
      }
      const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (this.memberBirth.year % 4 === 0) {
        days[1] = 29
      }
      for (let i = 1; i < days[parseInt(this.memberBirth.month) - 1] + 1; i++) {
        if (i < 10) {
          this.dateList.dayList.push('0' + i)
        } else {
          this.dateList.dayList.push(i)
        }
      }
      // ?月對應的天數如比前一個天數少，清空日
      if (this.dateList.dayList.length < this.memberBirth.day) {
        this.memberBirth.day = ''
      }
    },
    isPhone (value) {
      // ? 驗證手機格式
      if (value) {
        const phoneNumber = /^(09)[0-9]{8}$/
        return phoneNumber.test(value) ? true : '請輸入正確的手機格式'
      } else {
        return true
      }
    },
    isNameToLong (value) {
      // ? 驗證姓名長度不超過 5
      if (value) {
        const nameString = /^.{0,5}$/
        return nameString.test(value) ? true : '長度請勿超過 5 個字'
      } else {
        return true
      }
    },
    isMobileBarcode (value) {
      // ?驗證手機載具格式
      if (value) {
        const vehicleNumber = /^\/[0-9A-Z.+-]{7}$/
        return vehicleNumber.test(value) ? true : '請輸入含/8碼載具格式'
      } else {
        return true
      }
    },
    onSubmit () {
      // ?變更會員資料 API 傳送
      // ?判斷地址填寫完整(且三個可留空)
      if ((!this.memberInfo.city && !this.memberInfo.district && !this.memberInfo.otherAddress) || (this.memberInfo.city && this.memberInfo.district && this.memberInfo.otherAddress)) {
      } else {
        this.$swal.fire({
          title: '請填寫完整地址',
          confirmButtonColor: '#F8412E',
          customClass: {
            title: 'text-class'
          }
        })
        return
      }
      // ?第一次填生日 + 判斷生日填寫完整(且三個可留空)
      if (!this.memberInfo.userBirthday) {
        if ((!this.memberBirth.year && !this.memberBirth.month && !this.memberBirth.day) || (this.memberBirth.year && this.memberBirth.month && this.memberBirth.day)) {
          this.memberInfo.userBirthday = `${this.memberBirth.year}${this.memberBirth.month}${this.memberBirth.day}`
        } else if (!this.memberBirth.year &&
            !this.memberBirth.month &&
            !this.memberBirth.day) {
          this.memberInfo.userBirthday = ''
        } else {
          this.$swal.fire({
            title: '請填寫完整生日',
            confirmButtonColor: '#F8412E',
            customClass: {
              title: 'text-class'
            }
          })
          return
        }
      }
      // ?判斷生日填寫完整(且三個可留空)
      // if ((!this.memberBirth.year && !this.memberBirth.month && !this.memberBirth.day) || (this.memberBirth.year && this.memberBirth.month && this.memberBirth.day)) {
      //   this.memberInfo.userBirthday = `${this.memberBirth.year}${this.memberBirth.month}${this.memberBirth.day}`
      // } else {
      //   this.$swal.fire({
      //     title: '請填寫完整生日',
      //     confirmButtonColor: '#F8412E',
      //     customClass: {
      //       title: 'text-class'
      //     }
      //   })
      //   return
      // }

      // ?第一次填手機
      if (!this.memberInfo.phoneNum) {
        this.memberInfo.phoneNum = this.memberPhone
      }
      // ?第一次填 Email
      if (!this.memberInfo.email) {
        this.memberInfo.email = this.memberEmail
      }

      // ?轉換縣市、鄉鎮代碼為中文
      // let cityName = ''
      // if (this.memberInfo.city) {
      //   cityName = this.countryName[this.countryName.findIndex(item => item.Country === this.memberInfo.city)].CountryName
      // }
      // let district = ''
      // if (this.memberInfo.district) {
      //   district = this.countryName[this.countryName.findIndex(item => item.District === this.memberInfo.district)].DistrictName
      // }

      const updateInfo = {
        userGender: parseInt(this.memberInfo.userGender),
        userBirthday: this.memberInfo.userBirthday,
        email: this.memberInfo.email,
        phoneNum: this.memberInfo.phoneNum,
        fullName: this.memberInfo.fullName,
        city: this.memberInfo.city,
        district: this.memberInfo.district,
        otherAddress: this.memberInfo.otherAddress,
        isSubscribe: this.memberInfo.isSubscribe,
        cellphoneCarrier: this.memberInfo.cellphoneCarrier
      }

      const url = `${process.env.VUE_APP_API}/api/members/EditMemberInfo`
      this.$http.post(url, updateInfo)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.$swal.fire({
              title: '修改成功',
              confirmButtonColor: '#F8412E',
              customClass: {
                title: 'text-class'
              }
            })
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
.form-select{
  background-position: right 0.25rem center;
}
</style>
