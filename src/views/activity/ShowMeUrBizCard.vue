<template>
        <div class="body">
          <!-- 大Banner -->
          <div class="d-none d-lg-block bg-top ">
            <img
              src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/chungYuanPuTuBizCard/KV.jpg"
              class="img-center"
              alt="桌機背景"
            />
          </div>
          <div class="d-block d-lg-none">
            <img
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/chungYuanPuTuBizCard/KV_mb.jpg"
            class="img-fluid"
            style="width:100%"
            alt="手機背景"
            />
          </div>
        <main class="body bg-light-green" >
              <article class="container ">
                <div class="row justify-content-center">
                  <div class="col-10 bg-light-yellow py-4 py-md-6 px-4 px-sm-5 px-lg-9 mt-4 mt-md-5">
                  <!-- 活動簡述 -->
                    <div class="description  fw-bolder">
                        <div class="title text-center d-inline-block border-line py-1 fs-5 fs-md-2 fs-lg-1  ">
                          活動說明
                        </div>
                        <ol class="dtl-notes py-4 fs-md-3 ps-0" style="list-style:none;">
                          <li class="text-justify font-scale pb-1">
                            活動日期：7/15-8/12
                          </li>
                          <li class=" text-justify font-scale pb-1">
                          活動對象：誠心普渡的所有企業與個人
                          </li>
                          <li class=" text-justify font-scale font-scale break pb-1">
                            活動內容：於本活動頁上傳個人名片，<span class="text-deep">立即領取2000元普渡禮券</span>，可享全站商品購物優惠。
                          </li>
                        </ol>
                    </div>
                  <!-- 傳基本資料和上傳名片(含表單驗證)-->
                    <div class="upload ">
                        <div class="title text-center d-inline-block border-line py-1 fs-5 fs-md-2 fs-lg-1">
                          領取禮券
                        </div>
                        <!-- 表單部分 -->
                        <Form enctype="multipart/form-data" class="py-4"
                              v-slot="{ errors }"
                              @submit="bizCardApplyForCoupon">
                        <!-- 表單頭 -->
                          <!-- 步驟1 -->
                          <div class="w-60 w-sm-100 d-flex justify-content-start mb-2 mb-md-4 py-1">
                            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/chungYuanPuTuBizCard/step1.png" alt="步驟一-填寫基本資料" class="d-block img-fluid">
                          </div>
                          <div class="form  fw-bolder">
                            <!-- 公司 -->
                            <div class="form-group p-1 p-md-2 ps-0 justify-content-start align-items-center">
                              <label for="company" class=" form-label px-1 px-sm-3 pe-0 py-0 py-md-1 d-block mb-font fs-6 fs-md-5">公司名稱</label>
                              <div class="d-flex w-75">
                                <input type="text" id="company" name="company" placeholder="公司名稱(選填)" class="input px-2 py-0 py-md-1 ms-1 ms-md-2 mb-font fs-6 fs-md-5" v-model="form.company">
                              </div>
                            </div>
                            <!-- 姓名 -->
                            <div class="form-group p-1 p-md-2 ps-0 justify-content-start align-items-center">
                              <label for="name" class="form-label-sm px-1 px-sm-3 pe-0 py-0 py-md-1 d-block mb-font fs-6 fs-md-5">姓名</label>
                              <div class="d-flex w-80">
                                <Field type="text" id="name" name="姓名" placeholder="姓名(必填)" class="input px-2 py-0 py-md-1 ms-1 ms-md-2 mb-font fs-6 fs-md-5" :rules="nameRequired" :class="{ 'is-invalid': errors['姓名'] }" v-model="form.name"></Field>
                                <ErrorMessage  name="姓名" class="invalid-feedback ps-1 ps-md-2 py-0 py-md-1  error-font fs-7 fs-md-5 "></ErrorMessage>
                              </div>
                            </div>
                            <!-- 手機 -->
                            <div class="form-group p-1 p-md-2 ps-0 justify-content-start align-items-center">
                              <label for="phone" class="form-label-sm px-1 px-sm-3 pe-0 py-0 py-md-1 d-block mb-font fs-6 fs-md-5">手機</label>
                              <div class="d-flex w-80">
                                <Field type="text" id="phone" name="手機" placeholder="手機(必填)" class="input px-2 py-0 py-md-1 ms-1 ms-md-2 mb-font fs-6 fs-md-5" :rules="isPhone" :class="{ 'is-invalid': errors['手機'] }" v-model="form.phone"></Field>
                                <ErrorMessage  name="手機" class="invalid-feedback ps-1 ps-md-2 py-0 py-md-1 error-font fs-7 fs-md-5"></ErrorMessage>
                              </div>
                            </div>
                            <!-- E-MAIL -->
                            <div class="form-group p-1 p-md-2 ps-0 justify-content-start align-items-center">
                              <label for="e-mail" class="form-label-md px-1 px-sm-3 pe-0 py-0 py-md-1 d-block mb-font fs-6 fs-md-5">E-MAIL</label>
                              <div class="d-flex w-80">
                                <Field type="text" id="e-mail" name="E-MAIL" placeholder="E-MAIL(必填)" class="input px-2 py-0 py-md-1 ms-1 ms-md-2 mb-font fs-6 fs-md-5" :rules="checkEmail" :class="{ 'is-invalid': errors['E-MAIL'] }" v-model="form.email"></Field>
                                <ErrorMessage  name="E-MAIL" class="invalid-feedback ps-1 ps-md-2 py-0 py-md-1 error-font fs-7 fs-md-5"></ErrorMessage>
                              </div>
                            </div>
                          </div>
                          <!-- 勾選部分 -->
                          <div class="form-check pt-3 pb-2 ps-0 fs-md-5">
                            <input class="check-input " type="checkbox" v-model="form.isSubscribe" id="marketing" >
                            <label class=" ps-md-3 d-block check-input" for="marketing">
                            </label>
                            <p class="d-block mb-font fs-md-5 ms-2 ms-md-3 break">我願意提供行銷用途，可收到好康優惠</p>
                          </div>
                          <div class="form-check pt-2 pb-3 mb-3 mb-md-5 ps-0 fs-md-5">
                            <input class="check-input" type="checkbox" v-model="must" id="privacy" >
                            <label class="ps-md-3 d-block check-input" for="privacy">
                            </label>
                            <p class="d-block mb-font fs-md-5 ms-2 ms-md-3">我閱讀<a class="link-line" data-bs-toggle="modal" data-bs-target="#privacyModal" onclick.prevent >個資法</a>並同意於本活動使用</p>
                          </div>
                          <!-- 步驟2 -->
                          <div class="w-50 w-sm-100 d-flex justify-content-start py-1">
                            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/chungYuanPuTuBizCard/step2.png" alt="步驟二-上傳名片" class="d-block img-fluid">
                          </div>
                          <!-- 上傳圖片區 -->
                          <div class="d-flex flex-column justify-content-center">
                              <div class="d-flex position-relative dropzone " @drop.prevent="dragFiles" @dragover.prevent>
                                  <!-- 居中預覽區 -->
                                  <transition class="preview position-absolute top-50 start-50 translate-middle " style="z-index:5;" name="fade" mode="out-in">
                                    <img  alt=""  ref="preview" id="preview" class="limit-img" v-show="form.photo.length !== 0">
                                  </transition>
                                  <input  type="file" multiple="multiple" accept="image/*,.heic,.heif" id="upImg" @change.prevent="pickFiles">
                                  <label class="position-absolute  top-50 start-50 translate-middle fs-md-4 mx-1 d-flex justify-content-center" for="upImg" style="z-index:10;">
                                    <div class="d-flex flex-column justify-content-center align-items-center" v-if="form.photo.length === 0">
                                      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/chungYuanPuTuBizCard/camera.png" alt="camera" class="d-block w-30 img-fluid mb-2">
                                      <p class="d-block dropzone-words fs-7 fs-md-6 mb-0 mb-md-1">點擊此區拍攝或上傳名片，</p>
                                      <p class="d-block dropzone-words fs-7 fs-md-6">完成後，會出現名片縮圖</p>
                                    </div>
                                  </label>
                              </div>
                              <div class="d-flex justify-content-center align-items-center">
                                  <button class="d-block btn fs-md-4  mx-1" type="submit">
                                    <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/chungYuanPuTuBizCard/BUTTON.png" alt="send" class="img-fluid w-80">
                                  </button>
                              </div>
                          </div>
                          <!-- 表單尾 -->
                        </Form>
                    </div>
                  </div>
                </div>
              </article>
                <!-- 活動辦法與注意事項 -->
              <aside class="dtl-notes pt-5 pb-6">
                <div class="container ">
                  <div class="row justify-content-center">
                    <div class="col-10 px-0">
                      <div class="dtl-details  py-1 text-center d-inline-block text-light-white">
                        注意事項
                      </div>
                      <ol class="dtl-notes fs-md-5 text-light-white ps-3 ps-md-4">
                        <li class="p-1 text-justify">
                          參加本活動者視為同意提供個人資料以參加活動資格判斷，我們將於活動贈獎結束3個月內刪除或銷毀所提供個人資料。
                        </li>
                        <li class="p-1 text-justify">
                          2000元普渡禮券，每會員帳號限領一次，券面效期至2022/8/12。使用方式以各券面說明為準，面額包含90元(消費滿$688可使用)、180元(消費滿$1200可使用)、250元(消費滿$1500可使用)、480元(消費滿$2500可使用)、1000元(消費滿$5000可使用)。
                        </li>
                        <li class="p-1 text-justify">
                          特別加碼：上傳名片中的姓名有 「中」、「元」、「普」、「渡」任一個字，即有機會獲得福飽安康普渡箱。活動期間7/15-8/8周周抽出3名，共9名。將於每周二7/26、8/2、8/9於官方粉絲團公告得獎者。
                        </li>
                        <li class="p-1 text-justify">
                          活動頁呈現之商品名稱、價格、顏色、規格、數量，若與購物車之呈現有所不符，以購物車之內容為準。
                        </li>
                        <li class="p-1 break text-justify">
                          活動事項皆載明於網頁中，參加本活動者視為同意接受本活動注意事項之規範，參加人不符合或違反本活動規定事項者，不可歸責於本公司，本公司保有取消其參加資格之權利，並對於任何破壞本活動之行為保留相關權利。
                        </li>
                        <li class="p-1 text-justify">
                          如有其他未盡事宜，本公司保留隨時變更、修改或終止本活動及約定條款之權利，若有異動，修改後的活動內容及約定條款將公佈在yesgogogo網站上，若您於任何修改或變更後繼續使用本服務時，視為您已閱讀、瞭解並同意接受該等修改或變更。
                        </li>
                        <li class="p-1 text-justify">
                          參加者若因會員資料填寫不完整者，或活動後變更資料(如姓名、手機、地址等)，或手機收訊不良、電信業者遺漏或阻擋企業訊息等情況，導致無法收到商品或簡訊，信件無人領取等，恕不補發。
                        </li>
                        <li class="p-1 text-justify">
                          本活動公佈中獎名單後，請依規定完成兌獎流程，以利贈品寄送或發送，逾期兌獎恕不補發贈品。
                        </li>
                        <li class="p-1 text-justify">
                          如上傳名片時異常，請以JPG與PNG的圖片格式上傳。
                        </li>
                      </ol>
                      <div class="my-2 my-md-5">
                        <router-link to="/activity/zhongyuan" class="d-flex justify-content-center">
                          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/chungYuanPuTuBizCard/1.jpg" alt="banner" class="d-none d-md-block img-fluid">
                          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/chungYuanPuTuBizCard/1mb.jpg" alt="banner" class="d-block d-md-none img-fluid">
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <!-- ===modal=== -->
              <!-- Modal -->
              <div class="modal fade" id="privacyModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">個資法</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
                    </div>
                    <div class="modal-body py-2 px-4 text-justify break">
                      <div class="d-flex"><span class="d-block" style="font-size: 1.5em;line-height: 1rem;">&#32;</span><p class="d-block">親愛的客戶您好，由於個人資料之蒐集涉及您的隱私權益，請於申請前詳閱以下說明，以確保您的權益。</p></div>
                      <div class="d-flex"><span class="d-block" >●</span><p class="d-block">聯邦網通科技股份有限公司(以下稱本公司)為向您蒐集個人資料並為處理與利用，依據個人資料保護法(以下稱個資法)第八條規定應告知下列事項：</p></div>
                      <div class="d-flex"><span class="d-block" >●</span><p class="d-block">蒐集之目的：本公司將在履行「上傳名片領普渡禮券活動」之範圍內蒐集、處理、利用您的個人資料。</p></div>
                      <div class="d-flex"><span class="d-block" >●</span><p class="d-block">個人資料之類別：公司名片、中、英文姓名或其他可證明身份之文件影本。</p></div>
                      <div class="d-flex"><span class="d-block" >●</span><p class="d-block">資料利用之期間：於活動開始至活動贈獎結束後3個月內。</p></div>
                      <div class="d-flex"><span class="d-block" >●</span><p class="d-block">資料利用之地區：台灣地區與使用服務地域並包含以下利用對象之國內外所在地。</p></div>
                      <div class="d-flex"><span class="d-block" >●</span><p class="d-block">資料利用之對象：本公司及您所同意之對象（包含本公司共同行銷單位(詳見本公司網站)或本公司合作推廣業務之單位）。</p></div>
                      <div class="d-flex"><span class="d-block" >●</span><p class="d-block">資料利用之方式：符合個資法相關法令以自動化機器或其他非自動化之利用方式。</p></div>
                      <div class="d-flex"><span class="d-block" >●</span><p class="d-block">依據個資法第三條所訂您就本公司保有您的個人資料得行使下列權利，有關如何行使之方式，得向本公司客服詢問或於本公司網站查詢：</p></div>
                      <ol>
                        <li>除有個資法第十條所規定之例外情形外，得向本公司查詢、請求閱覽或請求製給複製本，惟本公司依個資法第十四條規定得酌收必要成本費用。</li>
                        <li>得向本公司請求補充或更正，惟依個資法施行細則第十九條規定，應適當釋明其原因及事實。</li>
                        <li>本公司如有違反個資法規定蒐集、處理或利用您之個人資料，依個資法第十一條第四項規定，得向本公司請求停止蒐集。</li>
                        <li>依個資法第十一條第二項規定，個人資料正確性有爭議者，得向本公司請求停止處理或利用您之個人資料。惟依該項但書規定，本公司因執行業務所必須並註明其爭議或經您書面同意者，不在此限。</li>
                        <li>依個資法第十一條第三項規定，個人資料蒐集之特定目的消失或期限屆滿時，得向本公司請求刪除、停止處理或利用您之個人資料。惟依該項但書規定，本公司因執行業務所必須或經您書面同意者，不在此限。</li>
                      </ol>
                      <div class="d-flex"><span class="d-block" >●</span><p class="d-block">您得自由選擇是否提供上開個人資料及類別，惟如拒絕提供之資料為審核或作業所需之資料，本公司可能無法進行必要之審核或作業而無法提供您相關服務或無法提供較佳之服務，敬請見諒。</p></div>
                      <div class="d-flex"><span class="d-block" >●</span><p class="d-block">您理解並同意本公司得依電子簽章法規定經由本公司電子服務為本人蒐集個人資料，並同意電磁紀錄得為電子文件表示方式，且得做為書面同意之依據。</p></div>
                    </div>
                    <!-- <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Understood</button>
                    </div> -->
                  </div>
                </div>
              </div>
        </main>
      </div>
</template>

<script>

import ValidSvc from '../../assets/js/validate-service'
// !引入Token確認function
import checkToken from '@/assets/js/checkToken.js'

export default {
  data () {
    return {
      // ?待轉換表單
      form: {
        company: '',
        name: '',
        phone: '',
        email: '',
        isSubscribe: true,
        photo: []
      },
      // ?送出表單
      FormSend: {
        Memo: '',
        Name: '',
        PhoneNumber: '',
        Mail: '',
        IsAgreed: '',
        FileBase64: []
      },
      // ?個資同意必勾
      must: false,
      imagesFiles: []
    }
  },
  methods: {
    async dragFiles (e) {
      if (document.body.clientWidth > 992) {
        // ?清空占存照片
        this.form.photo = []
        // base64照片
        const reader = new FileReader()
        const file = e.dataTransfer.files[0]
        if (file) {
          await reader.readAsDataURL(file)
          setTimeout(() => {
            // ?與click事件區隔
            if (this.form.photo.length === 0) {
              this.form.photo.push(reader.result)
              this.$refs.preview.src = this.form.photo[0]
            }
          }, 800)
        }
      }
      // ?不須取base64值的寫法
      // this.form.photo = e.dataTransfer.files
      // console.log(this.form.photo)
      // if (e.dataTransfer.files) {
      //   this.$refs.preview.src = URL.createObjectURL(this.form.photo[0])
      // }
    },
    async pickFiles (e) {
      // ?清空占存照片
      this.form.photo = []
      // base64照片
      const reader = new FileReader()
      const file = e.target.files[0]
      if (file) {
        await reader.readAsDataURL(file)
        setTimeout(() => {
          this.form.photo.push(reader.result)
          this.$refs.preview.src = this.form.photo[0]
        }, 800)
      }
      // ?for高階android用戶提醒訊息
      setTimeout(() => {
        if (this.form.photo.length !== 0) {
          this.$swal.fire({
            title: '您的照片已上傳成功',
            showConfirmButton: false,
            // confirmButtonText: '瞭解',
            timer: 700,
            // confirmButtonColor: '#12753e',
            width: 200,
            customClass: {
              title: 'text-class'
            }
          })
        }
      }, 800)
      // ?不須取base64值的寫法
      // this.form.photo = e.target.files
      // console.log(this.form.photo)
      // if (e.target.files) {
      //   this.$refs.preview.src = URL.createObjectURL(this.form.photo[0])
      // }
    },
    removeImg () {
      this.form.photo = []
      this.$refs.preview.src = ''
    },
    // ===呼叫驗證方法===
    checkEmail (email) {
      return ValidSvc.CheckEmail(email)
    },
    isPhone (phone) {
      return ValidSvc.CheckMobileNum(phone)
    },
    getToken () {
      // ?呼叫checkToken.js
      // ?判斷是否有登入(token取得)
      const accessToken = checkToken.getAccessToken()
      const freshToken = checkToken.getFreshToken()
      if (accessToken || freshToken) {
        return true
      } else {
        return false
      }
    },
    async bizCardApplyForCoupon () {
      if (!this.must) {
        this.$swal.fire({
          title: '請勾選個資同意聲明',
          showConfirmButton: true,
          confirmButtonText: '瞭解',
          timer: 2500,
          confirmButtonColor: '#12753e',
          width: 400,
          customClass: {
            title: 'text-class'
          }
        })
      } else if (this.form.photo.length === 0) {
        this.$swal.fire({
          title: '照片上傳為必須',
          showConfirmButton: true,
          timer: 2500,
          confirmButtonColor: '#12753e',
          confirmButtonText: '瞭解',
          width: 400,
          customClass: {
            title: 'text-class'
          }
        })
      } else {
        const url = `${process.env.VUE_APP_API}/api/activity/GetCoupon_NT2000`
        // !dev
        // const url = 'https://dev.yesgogogo.com/emall/api/activity/GetCoupon_NT2000'
        // ?轉換資料
        this.FormSend.Memo = this.form.company
        this.FormSend.Name = this.form.name
        this.FormSend.PhoneNumber = this.form.phone
        this.FormSend.Mail = this.form.email
        this.FormSend.IsAgreed = this.form.isSubscribe
        this.FormSend.FileBase64 = this.form.photo
        // ?轉換完畢
        await this.axios({
          method: 'post',
          url: url,
          data: this.FormSend
        }).then(res => {
          if (res.request.status === 200 && res.data.rtnCode === 0) {
            // ?清空占存照片
            this.form.photo = []
            this.$swal.fire({
              position: 'center',
              title: `${res.data.rtnMsg}`,
              showConfirmButton: true,
              confirmButtonColor: '#f8412e',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class'
              }
            }).then((result) => {
              if (result.isConfirmed) {
                sessionStorage.setItem('putuEvent', 'putu')
                // *非會員
                if (res.data.info.type === 1) {
                  // console.log('沒領過非會員')
                  this.$router.push('/memberboard/register')
                // *是會員
                } else {
                  // console.log('沒領過是會員')
                  if (this.getToken()) {
                    this.$router.push('/memberboard/membercoupon')
                  } else {
                    if (document.body.clientWidth < 576) {
                      // ? 手機版
                      this.$router.push('/membermobilelogin')
                    } else {
                      // ? web 版
                      // 因首頁判斷過多，多塞一個cardEvent供活動判斷
                      this.$router.push('/?putuEvent=putu')
                    }
                  }
                }
              }
            })
          } else if (res.request.status === 200 && res.data.rtnCode === 4006) {
            // ?清空占存照片
            this.form.photo = []
            this.$swal.fire({
              position: 'center',
              title: `${res.data.rtnMsg}`,
              showConfirmButton: true,
              confirmButtonColor: '#f8412e',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class'
              }
            }).then((result) => {
              if (result.isConfirmed) {
                // *非會員
                sessionStorage.setItem('putuEvent', 'putu')
                if (res.data.info.type === 1) {
                  // console.log('已領過非會員')
                  this.$router.push('/memberboard/register')
                // *是會員
                } else {
                  // console.log('已領過是會員')
                  sessionStorage.setItem('putuEvent', 'putu')
                  if (this.getToken()) {
                    this.$router.push('/memberboard/membercoupon')
                  } else {
                    if (document.body.clientWidth < 576) {
                      // ? 手機版
                      this.$router.push('/membermobilelogin')
                    } else {
                      // ? web 版
                      // 因首頁判斷過多，多塞一個cardEvent供活動判斷
                      this.$router.push('/?putuEvent=putu')
                    }
                  }
                }
              }
            })
          } else {
            this.diverseTradeUnsucess(res.data)
          }
        })
      }
    },
    diverseTradeUnsucess (data) { // ?帶入後端回應各種交易失敗情境
      this.$swal.fire({
        title: `${data.rtnMsg}(${data.rtnCode})`,
        width: 500,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonColor: '#12753e',
        CancelButtonColor: '#4D4D4D',
        confirmButtonText: '瞭解',
        cancelButtonText: '返回首頁',
        // reverseButtons: true,
        customClass: {
          title: 'text-class',
          showConfirmButton: 'center',
          showCancelButton: 'center'
        }
      }).then((result) => {
        if (result.isConfirmed) { // ?user選擇回到購物車
          this.$router.go()
        } else if (result.dismiss === this.$swal.DismissReason.cancel) { // ?user選擇回到首頁
          this.$router.push('/')
        }
      })
    },
    // ?客制required
    nameRequired: function (name) {
      const nameRule = /(?!^$)([^\s])/
      if (nameRule.test(name)) {
        return true
      }
      return '必填'
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/activity/chungYuanPuTuBizCard/_site.scss';

</style>
