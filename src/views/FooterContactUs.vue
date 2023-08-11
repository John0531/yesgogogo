<template>
  <div class="row copyright">
    <!-- <div class="row"> -->
      <div class="mb-2">
        <!-- 2021/12/2提出需求先註解 -->
        <!-- <div class="text" style="">
          <h4 class="pt-lg-3 pb-3 pb-lg-4">
            <font face="Medium">訂單查詢</font>
          </h4>
          <div style="color: (77, 77, 77);">
            <font face="Normal">
              <div>
                <p>
                  客服電話：(02)6601-2888#3827
                </p>
              </div>
              <div>
                <p>
                  客服信箱：yesgogogo@uitc.com.tw
                </p>
              </div>
              <div>
                <p>
                  服務時間：週一至週五 09:00-12:00, 13:30-18:00
                  (例假日/國定假日休息)
                  <br />
                  ※我們將盡快回覆您的問題
                </p>
              </div>
            </font>
          </div>
        </div> -->
        <div>
          <h4 class="pb-3 pb-lg-4 mt-2">
            <font face="Medium">聯絡我們</font>
          </h4>
          <div style="color: (77, 77, 77);">
            <font face="Normal">
              <div>
                <p>
                  親愛的客戶您好！
                </p>
              </div>
              <div>
                <p>
                  您可於本頁提出問題或建議，提問前請先選擇問題類型，並於最下方【意見欄】概述問題內容或建議， 我們將儘速以e-mail方式回覆您，同時亦可在
                  <router-link to="/memberboard/questionrecord"
                    >【會員提問記錄】</router-link
                  >中查閱相關回覆，謝謝！也可加入yesgogogo即食購
                  <a href="http://line.me/ti/p/@yesgogogo">
                  LINE官方帳號
                  </a>
                  聯繫線上客服，將儘速為您服務。
                  <br>
                  ※ LINE客服服務時間:週一至週五 09:00-12:00, 13:30-18:00 (例假日/國定假日休息)
                </p>
              </div>
            </font>
          </div>
        </div>
        <Form v-slot="{ errors }" ref="disabledd" @submit="questionConfirm">
          <!-- {{ errors }} 監測slot用-->
          <!--問題類別 -->
          <div class="rounded-0 mt-3 mt-md-4">
            <div
              class="card-header fw-bold bg-gray px-4 py-3"
              style="border-radius: 0;"
            >
              <h5>問題類別</h5>
            </div>
            <table class="table">
              <tbody>
                <tr>
                  <td
                    class="text-nowrap"
                    style="border-width: 1px; text-align: right; width: 20%; vertical-align: middle; border-right: 1px solid white;"
                    data-title="訂單問題"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="訂單問題"
                      id="orderQuestion"
                      value="訂單問題"
                      v-model="checkInfoQuestion"
                      checked
                    />
                    <label class="form-check-label" for="orderQuestion">
                      訂單問題
                    </label>
                  </td>
                  <td
                    class="text-nowrap"
                    style="border-width: 1px;"
                    data-title="訂單編號"
                  >
                    <div class="row align-items-center">
                      <div class="col-lg-2 col-md-3">
                        <label
                          class="form-check-label flex-fill"
                          for="orderNumber"
                        >
                          訂單編號 :
                        </label>
                      </div>
                      <div class="col-lg-5 col-md-6">
                        <Field
                          type="text"
                          class="form-control vehicle-input "
                          name="訂單編號"
                          :rules="isOrdered"
                          :class="{ 'is-invalid': errors['訂單編號'] }"
                          v-model="orderNo"
                          style="border-radius: 0;"
                        >
                        </Field>
                        <ErrorMessage
                          name="訂單編號"
                          class="orderNumber invalid-feedback"
                        >
                        </ErrorMessage>
                      </div>
                      <div class="col-md-3">
                        <div>
                          <button
                            class="d-block btn btn-primary text-light me-md-2 me-1 shadow-none mt-2 mt-md-0 fs-6 btn-sm ms-sm-0 ms-auto"
                            @click.prevent="checkOrder"
                            style="border-radius: 0;"
                          >
                            查詢訂單
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    style="border-width: 1px; text-align: right; vertical-align: middle; border-right: 1px solid white;"
                    scope="row"
                    data-title="商品問題"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="商品問題"
                      id="productQuestion"
                      value="商品問題"
                      v-model="checkInfoQuestion"
                    />
                    <label class="form-check-label" for="productQuestion">
                      商品問題
                    </label>
                  </td>
                  <td
                    class="text-nowrap"
                    style="border-width: 1px;"
                    data-title="商品編號"
                  >
                    <div class="row align-items-center">
                      <div class="col-lg-2 col-md-3">
                        <label
                          class="form-check-label flex-fill"
                          for="productNumber"
                        >
                          商品編號 :
                        </label>
                      </div>
                      <div class="col-lg-5 col-md-6">
                        <Field
                          type="text"
                          class="form-control vehicle-input "
                          name="商品編號"
                          :rules="goodsNumber"
                          :class="{ 'is-invalid': errors['商品編號'] }"
                          v-model="productNo"
                          style="border-radius: 0;"
                        >
                        </Field>
                        <ErrorMessage
                          name="商品編號"
                          class="productNumber invalid-feedback"
                        >
                        </ErrorMessage>
                      </div>
                      <div class="col-md-3">
                        <div
                          class="col-xl-1 d-lg-block justify-content-end align-items-center"
                        >
                          <button
                            class="d-block btn btn-primary px-4 me-md-2 me-1 shadow-none text-nowrap text-light mt-2 mt-md-0 fs-6 btn-sm ms-sm-0 ms-auto"
                            @click.prevent="productInfoNumber"
                            style="border-radius: 0;"
                          >
                            <i class="bi bi-file-earmark-text-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    style="border-width: 1px; text-align: right; border-right: 1px solid white;"
                    scope="row"
                    data-title="活動問題"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="活動問題"
                      id="activeQuestion"
                      value="活動問題"
                      v-model="checkInfoQuestion"
                    />
                    <label class="form-check-label" for="activeQuestion">
                      活動問題
                    </label>
                  </td>
                  <td style="border-width: 1px;" data-title="折價劵購物金相關">
                    <label class="form-check-label" for="coupon">
                      折價劵、購物金相關
                    </label>
                  </td>
                </tr>
                <tr>
                  <td
                    style="border-width: 1px; text-align: right; border-right: 1px solid white;"
                    scope="row"
                    data-title="異業合作"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="異業合作"
                      id="cooperationQuestion"
                      value="異業合作"
                      v-model="checkInfoQuestion"
                    />
                    <label class="form-check-label" for="cooperationQuestion">
                      異業合作
                    </label>
                  </td>
                  <td
                    style="border-width: 1px;"
                    data-title="商品上架販售行政配合事項相關"
                  >
                    <label class="form-check-label" for="coupon">
                      商品上架販售、行政配合事項相關
                    </label>
                  </td>
                </tr>
                <tr>
                  <td
                    style="border-width: 1px; text-align: right; border-right: 1px solid white;"
                    scope="row"
                    data-title="其他問題"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="其他問題"
                      id="otherQuestion"
                      value="其他問題"
                      v-model="checkInfoQuestion"
                    />
                    <label class="form-check-label" for="otherQuestion">
                      其他問題
                    </label>
                  </td>
                  <td
                    style="border-width: 1px;"
                    data-title="非上述四項問題類型"
                  >
                    <label class="form-check-label" for="coupon">
                      非上述四項問題類型
                    </label>
                  </td>
                </tr>
                <tr>
                  <td
                    style="border-width: 1px; text-align: right; border-right: 1px solid white;"
                    scope="row"
                    data-title="意見欄"
                    id="comment"
                  >
                    <label class="form-check-label" for="comment">
                      意見欄
                    </label>
                  </td>
                  <td style="border-width: 1px;" data-title="意見欄填寫區">
                    <textarea
                      rows="5"
                      style="resize: none; width: 100%;"
                      name="意見欄"
                      id="comment"
                      v-model="comment"
                      class="textInput"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <p class="p-2 mt-2">
              備註：送出問題後請留意您的信箱。提醒您，部份免費信箱或公司信箱，因安全機制關係，將可能導致無法正常收取，請務必確認收件匣及垃圾信件匣。
            </p>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-4">
              <div class="d-grid gap-2">
                <button
                  class="btn btn-primary text-white"
                  type="submit"
                  style="border-radius: 0;"
                >
                  確定送出
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      //* 會員提問api
      submitQuestion: {
        QuestionType: '', //* 選取的類別(radio)
        Question: '' //* 意見欄、訂單編號+意見欄
      },
      contactQuestion: false,
      orderNo: '',
      productNo: '',
      productNumber: '',
      productQuestion: '',
      checkInfoQuestion: '', //* 問題型態(radio)
      orderNumberName: '', //* 訂單編號(label)
      checkInfoNumber: '', //* 訂單編號(數字)
      comment: '', //* 意見欄
      //* 訂單問題label
      productNum: {
        訂單問題: '訂單編號',
        商品問題: '商品編號',
        活動問題: '折價劵、購物金相關',
        異業合作: '商品上架販售、行政配合事項相關',
        其他問題: '非上述四項問題類型'
      }
    }
  },
  methods: {
    checkOrder () {
      this.$router.push('/memberboard/memberorder')
    },
    productInfoNumber () {
      this.$router.push('/memberboard/memberorder')
    },
    isOrdered (value) {
      if (this.checkInfoQuestion === '訂單問題') {
        return value ? true : '請輸入訂單編號'
      } else {
        return true
      }
    },
    goodsNumber (value) {
      if (this.checkInfoQuestion === '商品問題') {
        return value ? true : '請輸入商品編號'
      } else {
        return true
      }
    },
    //* 確定送出
    questionConfirm () {
      if (this.comment === '') {
        this.$swal.fire({
          title: '意見欄為必填',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
      } else {
        if (this.productNo !== '') {
          this.checkInfoNumber = this.productNo
        } else if (this.orderNo !== '') {
          this.checkInfoNumber = this.orderNo
        }
        //* 問題型態(radio)
        this.submitQuestion.QuestionType = this.checkInfoQuestion
        this.orderNumberName = this.productNum[this.checkInfoQuestion]
        // this.submitQuestion.Question = this.orderNumberName + this.checkInfoNumber + '意見欄:' + this.comment
        // 樣板字串值
        this.submitQuestion.Question = `${this.orderNumberName}${this.checkInfoNumber}
        意見欄:${this.comment}`
        const url = `${process.env.VUE_APP_API}/api/members/OnlineAskQuestion`
        this.axios.post(url, this.submitQuestion).then(res => {
          if (res.data.rtnCode !== 0) {
            this.$swal.fire({
              title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
              allowOutsideClick: true,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            })
          }
        })
        this.$swal
          .fire({
            title: '提問已傳送',
            allowOutsideClick: true,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          .then(result => {
            if (result.isConfirmed) {
              this.$router.push('/memberboard/questionrecord')
            } else {
              this.$router.go()
            }
          })
      }
    }
  },
  watch: {
    checkInfoQuestion (n) {
      if (n !== '訂單問題') {
        this.orderNo = ''
      } else if (n !== '商品問題') {
        this.productNo = ''
      }
    }
  },
  mounted () {
    //* 訂單編號與商品編號傳值過來
    //* 訂單編號與商品編號存放在store
    if (this.$store.state.storeOrder.orderNo) {
      // 訂單編號input
      this.checkInfoQuestion = '訂單問題'
      this.orderNo = this.$store.state.storeOrder.orderNo
    } else if (this.$store.state.storeProduct.id) {
      this.checkInfoQuestion = '商品問題'
      this.productNo = this.$store.state.storeProduct.id
    }
  }
}
</script>

<style lang="scss" scoped>
.copyright {
  min-height: calc(100vh - 297px);
}

.table td {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.form-check-label {
  padding-left: .2rem;
}
</style>
