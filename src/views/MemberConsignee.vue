<template>
  <section class="mt-2 mt-md-0">
    <div
      class="d-flex justify-content-between border-bottom border-2 mt-2 border-secondary pb-3"
    >
      <h1 class="fs-5 fw-bold">常用收件人</h1>
      <!-- <button type="button" class="btn btn-primary text-white" @click="editConsignee('new')">新增常用收件人</button> -->
    </div>
    <div v-if="consignees.length === 0" class="bg-white pt-6">
      <p class="fs-3 text-center fw-bold">目前無常用收件人</p>
    </div>
    <div
      v-else
      class="border-top border-1 px-0 px-md-3 py-3"
      v-for="consignee in consignees"
      :key="consignee.id"
    >
      <div class="row">
        <div class="col-md-7 col-lg-6">
          <p class="text-secondary fs-6">
            <i class="bi bi-person-fill me-3"></i>姓名:<span class="me-2"></span
            >{{ consignee.consigneeName }}
          </p>
          <p class="text-secondary fs-6">
            <i class="bi bi-telephone-fill me-3"></i>手機號碼:<span
              class="me-2"
            ></span
            >{{ consignee.cellphone }}
          </p>
          <p class="text-secondary fs-6">
            <i class="bi bi-telephone-fill me-3"></i>電話:<span
              class="me-2"
            ></span
            >{{ consignee.consigneeAreaNo&&consignee.consigneePhoneNo?`${consignee.consigneeAreaNo}-${consignee.consigneePhoneNo}`:'' }}
          </p>
          <p class="text-secondary fs-6">
            <i class="bi bi-envelope-fill me-3"></i>電子郵件:{{
              consignee.consigneeEmail
            }}
          </p>
          <p class="text-secondary fs-6">
            <i class="bi bi-geo-alt-fill me-3"></i>地址:<span
              class="me-2"
            ></span
            >{{ consignee.cityName }}{{ consignee.districtName
            }}{{ consignee.otherAddress }}
          </p>
        </div>
        <div class="col-md-5 col-lg-6 mt-2 mt-md-0">
          <div
            class="updateBtn d-flex justify-content-end align-items-end h-100"
          >
            <button
              type="button"
              class="btn btn-outline-primary shadow-none me-2 px-3 px-lg-5"
              @click="removeConsignee(consignee.consigeeId)"
            >
              移除
            </button>
            <button
              type="button"
              class="btn btn-primary text-white shadow-none me-2 px-3 px-lg-5"
              @click.prevent="editConsignee('edit', consignee)"
            >
              編輯
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 新增 / 編輯常用收件人 -->
    <div
      class="modal fade"
      ref="editModal"
      id="editModal"
      data-bs-backdrop="static"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ consigneeInfo.consigeeId ? "編輯" : "新增" }}常用收件人
            </h5>
            <button
              type="button"
              class="btn-close"
              @click.prevent="closeModal"
            ></button>
          </div>
          <div class="modal-body">
            <Form v-slot="{ errors }" ref="editForm" @submit="submitConsignee">
              <div class="mb-3">
                <label for="consigneeName" class="form-label">姓名</label>
                <Field
                  type="text"
                  class="form-control"
                  name="姓名"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model.trim="consigneeInfo.consigneeName"
                ></Field>
                <error-message
                  name="姓名"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-3">
                <label for="memberPhone" class="form-label">手機號碼</label>
                <Field
                  name="手機"
                  type="tel"
                  class="form-control"
                  placeholder="請輸入手機號碼"
                  autoCompleteType="disabled"
                  :rules="isPhone"
                  :class="{ 'is-invalid': errors['手機'] }"
                  v-model.trim="consigneeInfo.cellphone"
                  autocomplete="off"
                ></Field>
                <error-message
                  name="手機"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-3">
                <label for="AreaNo" class="form-label">電話號碼</label>
                <div class="d-flex align-items-center">
                  <Field
                    name="區碼"
                    type="tel"
                    class="form-control w-20"
                    placeholder="區碼"
                    :class="{ 'is-invalid': errors['區碼'] }"
                    v-model.trim="consigneeInfo.consigneeAreaNo"
                    maxlength="4"
                    @keyup="consigneeInfo.consigneeAreaNo=consigneeInfo.consigneeAreaNo.replace(/[^\d]+/g, '')"
                  ></Field>
                  <span class="mx-2">-</span>
                  <Field
                    name="電話號碼"
                    type="tel"
                    class="form-control w-80"
                    placeholder="電話號碼"
                    :class="{ 'is-invalid': errors['電話號碼'] }"
                    v-model.trim="consigneeInfo.consigneePhoneNo"
                    @keyup="consigneeInfo.consigneePhoneNo=consigneeInfo.consigneePhoneNo.replace(/[^\d]+/g, '')"
                    maxlength="8"
                  ></Field>
                </div>
                <span class="error-msg">
                  {{errors['區碼']?errors['區碼']:errors['電話號碼']}}
                </span>
              </div>
              <div class="mb-3">
                <label for="memberEmail" class="form-label">Email</label>
                <Field
                  type="email"
                  class="form-control"
                  name="email"
                  :class="{ 'is-invalid': errors['email'] }"
                  rules="email|required"
                  placeholder="請輸入 Email"
                  v-model.trim="consigneeInfo.consigneeEmail"
                ></Field>
                <error-message
                  name="email"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-3">
                <label for="memberAddress" class="form-label"
                  >常用寄送地址</label
                >
                <div class="row g-2">
                  <div class="col-3">
                    <Field
                      name="縣市"
                      id="country"
                      class="form-select pe-2"
                      as="select"
                      rules="required"
                      v-model="consigneeInfo.city"
                      placeholder="縣市"
                      @change="
                        getTown();
                        consigneeInfo.district = '';
                      "
                      :class="{ 'is-invalid': errors['縣市'] }"
                    >
                      <option
                        :value="country.Country"
                        v-for="country in addressList.countryList"
                        :key="country"
                      >
                        {{ country.CountryName }}
                      </option>
                    </Field>
                    <ErrorMessage name="縣市" class="invalid-feedback">
                    </ErrorMessage>
                  </div>
                  <div class="col-3">
                    <Field
                      name="區名"
                      as="select"
                      id="town"
                      rules="required"
                      class="form-select pe-2"
                      v-model="consigneeInfo.district"
                      :class="{ 'is-invalid': errors['區名'] }"
                      placeholder="區名"
                    >
                      <option
                        v-for="town in addressList.townList"
                        :key="town"
                        :value="town.District"
                      >
                        {{ town.DistrictName }}
                      </option>
                    </Field>
                    <ErrorMessage name="區名" class="invalid-feedback">
                    </ErrorMessage>
                  </div>
                  <div class="col">
                    <Field
                      type="text"
                      class="form-control"
                      name="地址"
                      rules="required"
                      :class="{ 'is-invalid': errors['地址'] }"
                      v-model.trim="consigneeInfo.otherAddress"
                    ></Field>
                    <ErrorMessage
                      name="地址"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end mt-5">
                <button
                  type="button"
                  class="btn btn-secondary px-3 me-2"
                  @click.prevent="closeModal"
                >
                  取消
                </button>
                <button type="submit" class="btn btn-primary text-white px-3">
                  {{ consigneeInfo.consigeeId ? "編輯" : "新增" }}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import countryName from '@/assets/country.json'
import Modal from 'bootstrap/js/dist/modal'
import ValidSvc from '@/assets/js/validate-service.js'

export default {
  data () {
    return {
      consignees: [],
      countryName,
      addressList: {
        // ?地址選單
        countryList: [],
        townList: []
      },
      consigneeInfo: {},
      editModal: ''
      // hasConsignee: false
    }
  },
  watch: {
    editModal: {
      handler (n) {
        if (n._isShown) {
          this.$refs.editForm.setErrors({})
        }
      },
      deep: true
    }
  },
  methods: {
    getConsigees () {
      const url = `${process.env.VUE_APP_API}/api/Consignee/List`
      this.$http.get(url).then((res) => {
        if (res.data.rtnCode === 0) {
          this.consignees = res.data.info
          this.getAddress()
          this.getCountry()
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
    getAddress () {
      this.consignees.forEach((item) => {
        if (item.city || item.district) {
          item.cityName =
            this.countryName[
              this.countryName.findIndex((item1) => item1.Country === item.city)
            ].CountryName
          item.districtName =
            this.countryName[
              this.countryName.findIndex(
                (item1) => item1.District === item.district
              )
            ].DistrictName
        }
      })
    },
    getCountry () {
      // ? 產生縣市清單
      const list = new Set()
      this.countryName.forEach((item) => {
        list.add(item.CountryName)
      })
      const listAry = [...list]
      const list2 = []
      listAry.forEach((item) => {
        const num = this.countryName.findIndex(
          (item2) => item2.CountryName === item
        )
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
        (item) => item.Country === this.consigneeInfo.city
      )
    },
    isPhone (value) {
      return ValidSvc.CheckMobileNum(value)
    },
    editConsignee (type, item) {
      if (type === 'new') {
        this.consigneeInfo = {}
      } else if (type === 'edit') {
        this.consigneeInfo = { ...item }
        this.getTown()
      }
      this.editModal.show()
    },
    closeModal () {
      this.editModal.hide()
    },
    removeConsignee (id) {
      this.$swal
        .fire({
          title: '確定要刪除嗎?',
          showCancelButton: true,
          reverseButtons: true,
          confirmButtonColor: '#F8412E',
          cancelButtonColor: '#4D4D4D',
          confirmButtonText: '是',
          cancelButtonText: '否',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class',
            cancelButton: 'confirm-btn-class'
          }
        })
        .then((result) => {
          if (result.isConfirmed) {
            const url = `${process.env.VUE_APP_API}/api/consignee/remove`
            this.$http.get(url, { params: { consigneeId: id } }).then((res) => {
              if (res.data.rtnCode === 0) {
                this.$swal.fire({
                  title: '已刪除',
                  confirmButtonColor: '#F8412E',
                  customClass: {
                    title: 'text-class'
                  }
                })
                this.getConsigees()
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
        })
    },
    submitConsignee () {
      // 檢查是否填寫完整地址
      if (
        (!this.consigneeInfo.city &&
          !this.consigneeInfo.district &&
          !this.consigneeInfo.otherAddress) ||
        (this.consigneeInfo.city &&
          this.consigneeInfo.district &&
          this.consigneeInfo.otherAddress)
      ) {
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
      // 修改常用收件人 API
      const obj = {
        consigneeId: this.consigneeInfo.consigeeId,
        consigneeName: this.consigneeInfo.consigneeName,
        consigneeCellphone: this.consigneeInfo.cellphone,
        consigneeCity: this.consigneeInfo.city,
        consigneeDistrict: this.consigneeInfo.district,
        consigneeOtherAddress: this.consigneeInfo.otherAddress,
        consigneeEmail: this.consigneeInfo.consigneeEmail,
        consigneeAreaNo: this.consigneeInfo.consigneeAreaNo,
        consigneePhoneNo: this.consigneeInfo.consigneePhoneNo
      }

      if (this.consigneeInfo.consigeeId) {
        const url = `${process.env.VUE_APP_API}/api/consignee/update`
        this.$http.post(url, obj).then((res) => {
          if (res.data.rtnCode === 0) {
            this.$swal.fire({
              title: '已編輯',
              confirmButtonColor: '#F8412E',
              customClass: {
                title: 'text-class'
              }
            })
            this.editModal.hide()
            this.getConsigees()
          } else {
            this.$swal.fire({
              title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
              confirmButtonColor: '#F8412E',
              customClass: {
                title: 'text-class'
              }
            })
            this.editModal.hide()
          }
        })
      } else {
        const url = `${process.env.VUE_APP_API}/api/consignee/add`
        this.$http.post(url, this.consigneeInfo).then((res) => {
          if (res.data.rtnCode === 0) {
            this.$swal.fire({
              title: '已新增常用收件人',
              confirmButtonColor: '#F8412E',
              customClass: {
                title: 'text-class'
              }
            })
            this.editModal.hide()
            this.getConsigees()
          } else {
            this.$swal.fire({
              title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
              confirmButtonColor: '#F8412E',
              customClass: {
                title: 'text-class'
              }
            })
            this.editModal.hide()
          }
        })
      }
    }
  },
  mounted () {
    this.getConsigees()
    this.editModal = new Modal(this.$refs.editModal)
  }
}
</script>

<style lang="scss" scoped>
// 改寫button hover樣式
.updateBtn {
  .btn-outline-primary:hover {
    color: #fff !important;
  }
}
.error-msg{
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}
</style>
