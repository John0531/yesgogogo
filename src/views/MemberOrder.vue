<template >
          <div class="fw-bolder text-dark fs-5 fw-bold mb-3 mt-2">訂單查詢</div>
          <div class="center pb-md-5" style="background-color:#F0F0F2; ">
            <div class="declare ps-2 pe-1 py-3">
              <span class="d-none d-md-block text-secondary opacity-75 fs-6 p-2 p-md-0" style="text-align:justify;">依照消費者保護法規定，消費者均享有產品到貨七天猶豫期之權益(注意！猶豫期非試用期)，如欲退回產品，請確保商品必須是未使用過、全新狀態且包裝完整(特殊提供試用品或其他退貨限制，會另於網頁標示)，否則恕不接受退貨。
            此頁面僅顯示到貨後，七天猶豫期內之訂單，超過時間則不接受退貨/換貨服務。<br>如單筆訂單內二項(含)以上商品，恕不提供單項商品取消/退貨。若有特殊需求，請聯絡客服我們將有專人盡速為您處理。
              </span></div>
                <!-- 查詢區間 -->
            <div class="" >
              <div class=" fw-bolder ps-2 pe-1 py-3  duration" style="">
                近一年消費紀錄<br class="d-inline d-md-none"><span>({{startDate}}~{{endDateClient}})</span>
              </div>
              <!-- 下拉選單 -->
              <div class="bg-primary rounded-3 menuShadow ">
                <div class="d-flex py-2 py-md-3 mb-3">
                  <div class="d-flex justify-content-center align-items-center py-md-2 w-md-15" style="width:25%;">
                      <img class="img-fluid" src="@/assets/img/yesgo_icon03_white.svg" alt="" >
                  </div>
                  <div class="d-flex w-md-85" style="width:75%;">
                    <select class="form-select rounded-3 bg-white border border-primary fw-bolder fs-md-5 styled-1 px-2 px-md-3 " v-model="orderSelected" @change="pickOrderStatus" style="width:90%;">
                        <option class="dropdown-item fw-bolder" href="#" value="5" selected>近期訂單</option>
                        <option class="dropdown-item fw-bolder" href="#" value="1">付款狀態確認中</option>
                        <option class="dropdown-item fw-bolder" href="#" value="2" >訂單已付款</option>
                        <option class="dropdown-item fw-bolder" href="#" value="3">已出貨</option>
                        <option class="dropdown-item fw-bolder" href="#" value="4" >訂單未成立</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- 訂單編號Accordionclick -->
              <div class="circle" >
                <div class="pt-2 pb-5" v-for="(item, orderNo) in orderSelectedChanged" :key="orderNo+'1'">
                  <div class="rounded-3 bg-white border-none p-2 position-relative cardShadow arrow">
                      <table class="table table-hover table-borderless m-0 ">
                        <tbody>
                          <tr>
                            <th scope="row" class="table-width-left">訂單日期 </th>
                            <td class="text-secondary table-width-include-image">{{item.shoppingDate.split('T')[0]}}</td>
                          </tr>
                          <tr>
                            <th scope="row" class="table-width-left">訂單編號 </th>
                            <td class="table-width-include-image">{{item.orderNo}}</td>
                          </tr>
                          <tr>
                            <th scope="row" class="table-width-left">訂單金額 </th>
                            <td class="table-width-include-image">${{item.payableAmount.toLocaleString()}}</td>
                          </tr>
                          <tr>
                            <th scope="row" class="table-width-left">付款方式 </th>
                            <td class="table-width-include-image">
                              <span>{{item.paymentMethodName}}:實付金額(${{item.paidAmount.toLocaleString()}})</span>
                              <span v-if="item.bonus">+紅利折抵(${{item.bonus.toLocaleString()}})</span>
                              <span v-if="item.couponDiscountAmount">+折價券折抵(${{item.couponDiscountAmount.toLocaleString()}})</span>
                              <span v-if="item.pointDiscount">+購物金折抵(${{item.pointDiscount.toLocaleString()}})</span>
                              <span v-if="item.rewardMoney">+福利金折抵(${{item.rewardMoney.toLocaleString()}})</span>
                            </td>
                          </tr>
                          <tr v-if="item.vAccount">
                            <th scope="row" class="table-width-left">轉帳帳號 </th>
                            <td class="table-width-include-image">803-{{item.vAccount}}</td>
                          </tr>
                          <tr>
                            <th scope="row" class="table-width-left">發票編號 </th>
                            <td v-if="item.invoiceNo" class="table-width-right">{{item.invoiceNo}}</td>
                            <td v-else class="table-width-include-image">發票未開立</td>
                          </tr>
                          <tr>
                            <th scope="row" class="table-width-left">收件地址 </th>
                            <td v-if="item.address" class="table-width-include-image" style="white-space: break-spaces;">{{item.city}}{{item.district}}{{item.address}}</td>
                            <td v-else class="table-width-include-image">發票未開立</td>
                          </tr>
                          <tr>
                            <th scope="row" class="table-width-left">訂單狀態 </th>
                            <td class="table-width-include-image">{{item.orderStatusName}}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="d-flex justify-content-end mt-3">
                        <div class=" fit-button justify-content-center bg-lightgray cancelbutton p-0 me-1 rounded-pill text-secondary" v-if="item.canCancelOrder">
                          <div class="d-flex justify-content-center p-1"  data-bs-toggle="modal" data-bs-target="#cancelOrder" href="#" @click.prevent="callCancelList(item.orderNo)" >
                            <div class="fw-bolder  p-1  fs-6 fs-md-7 fs-xxl-6  rounded-3 fw-bolder btn-sm" type="button">X取消訂單</div>
                          </div>
                        </div>
                        <div class="d-flex fit-button justify-content-center bg-lightgray cancelbutton p-0 me-1 rounded-pill text-secondary" v-else-if="item.paymentMethod === pamentMethod">
                          <div class="d-flex p-1 "  data-bs-toggle="modal" data-bs-target="#cancelOrder" href="#" @click.prevent="callCancelList(item.orderNo)" >
                            <div class="fw-bolder p-1 fs-6 fs-md-7 fs-xxl-6 fw-bolder btn-sm" type="button">X取消訂單</div>
                          </div>
                        </div>
                        <div class=" d-flex fit-button justify-content-center align-items-center bg-lightgray cancelbutton p-0 me-1 rounded-pill text-secondary " >
                          <div  class="d-block p-1 fw-bold fs-6 fs-md-7 fs-xxl-6 fw-bolder btn-sm" type="button"  @click.prevent="sendDoubtOrder(item)">詢問訂單</div>
                        </div>
                        <div class=" d-flex justify-content-center accordion-button  collapsed p-0 fit-button bg-lightgray rounded-pill me-1" id="accordion-button_1" type="button" data-bs-toggle="collapse" :data-bs-target="`#${item.orderNo}`">
                          <div class=" p-1 fw-bold  fs-6 fs-md-7 fs-xxl-6 fw-bolder btn-sm" type="button">訂單詳情</div>
                        </div>
                      </div>
                  </div>
                  <!-- 訂單展開Accordion-已購項目 -->
                  <div class="accordion  position-relative">
                    <div class="col-autoaccordion money">
                      <div class="accordion-collapse collapse" :id="`${item.orderNo}`">
                        <div class="  p-2  ">
                          <div class="pt-4 pb-2 " >
                            <div class="fw-bolder text-white orderHeader px-3 py-2 rounded-top ">已購項目</div>
                            <div class=" rounded-bottom bg-white border-none p-2  cardShadow tableBottomLIne" v-for="(product) in item.product" :key="product.categoryCode + '1'">
                                <table class="table table-hover table-borderless  m-0 ">
                                  <tbody>
                                    <tr>
                                      <th scope="row" class=" order-detail">商品名稱 </th>
                                    </tr>
                                    <tr class="">
                                      <th scope="row" colspan="2" class="pb-4 overflow-auto  prd-name table-width-left fw-bold text-primary"  >
                                        <a href="#" class="d-block" style="color:#2a7efb;" @click.prevent="this.$router.push(`/productboard/product/${product.id}`)" >{{product.productNo}}</a>
                                      </th>
                                      <!-- <td class=" table-width-right"></td> -->
                                      <td class=" table-width-include-image" >
                                        <a href="#" style="color:#2a7efb;" @click.prevent="this.$router.push(`/productboard/product/${product.id}`)" >
                                          <img :src="product.image" alt="抱歉，該產品沒有拍攝照片" style="display:block" class=" resize-image rounded">
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row"  class=" order-detail table-width-left">商品數量 </th>
                                      <td  class="order-detail table-width-right">x{{product.quantity}}</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"  class=" order-detail table-width-left">小計&#12288;&#12288; </th>
                                      <td  class="order-detail table-width-right">${{product.price.toLocaleString()}}</td>
                                    </tr>
                                    <tr v-if="product.shippingNo">
                                      <th scope="row"  class=" order-detail table-width-left">物流編號 </th>
                                      <td  class="order-detail table-width-right">{{product.shippingNo}}</td>
                                    </tr>
                                    <!-- <tr > -->
                                    <tr v-if="product.shipping">
                                      <th scope="row"  class=" order-detail table-width-left">配送物流 </th>
                                      <td style="table-width-right"><a href="#" :class="{ 'text-secondary': !product.shippingUrl }" @click.prevent="urlOpen(product.shippingUrl)">{{product.shipping}}</a></td>
                                    </tr>
                                    <tr v-if="product.shipmentStatus">
                                      <th scope="row"  class=" order-detail table-width-left" style="white-space: nowrap;">物流狀態 </th>
                                      <td  class="order-detail table-width-right" style="white-space: nowrap;">{{product.shipmentStatus}}</td>
                                    </tr>
                                    <tr v-if="product.shipoutDate">
                                      <th scope="row"  class=" order-detail table-width-left">物流寄送時間 </th>
                                      <td class="order-detail table-width-right">{{product.shipoutDate.split('T')[0]}}</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div class="d-flex ">
                                  <a href="#" class="ask fw-bolder order-detail  p-2">&#12288;</a>
                                  <a href="#" @click.prevent="this.$router.push(`/productboard/product/${product.id}`)" class="d-flex justify-content-end text-right " style="width:50%;">
                                    <div class="d-flex fit-thumb justify-content-center bg-primary cancelbutton p-0 me-1 rounded-pill text-secondary">
                                      <div class="d-flex justify-content-center py-0 py-md-1 px-2"   >
                                          <div class="d-flex justify-content-center fw-bolder fs-6 p-0 rounded-3 fw-bolder btn-sm" type="button" >
                                            <div class="m-1 d-flex justify-content-center align-items-center">
                                              <img class="d-block img-fluid " alt="再買一次" src="@/assets/img/thumbsUp.svg">
                                            </div>
                                            <p class="d-block m-1 text-white fs-6 fs-md-7 fs-xxl-6" style="white-space: nowrap;line-height: 2em;">再買一次</p>
                                          </div>
                                        </div>
                                    </div>
                                  </a>
                                </div>
                            </div>
                          </div>
                          <div class="d-flex justify-content-center  accordion-button down  collapsed p-0" >
                            <div class="  px-4  me-1 fw-bold fs-6 fs-md-5 text-center text-secondary" id="accordion-button_1" type="button" style="z-index:2" data-bs-toggle="collapse" :data-bs-target="`#${item.orderNo}`">
                              收合
                            </div>
                          </div>
                          <!-- 訂單展開Accordion-付款資訊 -->
                          <!-- <div class="py-2 " >
                            <div class="fw-bolder text-white orderHeader px-3 py-2 rounded-top ">付款資訊</div>
                            <div class="rounded-bottom bg-white border-none p-2 cardShadow ">
                                    <table class="table table-hover table-borderless m-0 ">
                                      <tbody>
                                        <tr>
                                          <th scope="row" style="width:50%;" class="order-detail">總計&#12288;&#12288;&#12288;&#12288;&#12288; </th>
                                          <td style="width:50%;" class="order-detail">${{item.payableAmount}}</td>
                                        </tr>
                                        <tr v-if="item.bonus !== 0">
                                          <th scope="row" style="width:50%;" class="order-detail">紅利折抵&#12288;&#12288;&#12288; </th>
                                          <td style="width:50%;" class="order-detail">{{item.bonus}}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row" style="width:50%;" class="order-detail">折價券折抵&#12288;&#12288; </th>
                                          <td style="width:50%;" class="order-detail">{{item.couponDiscountAmount}}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row" style="width:50%;" class="order-detail">購物金折抵&#12288;&#12288;</th>
                                          <td style="width:50%;" class="order-detail">{{item.pointDiscount}}</td>
                                        </tr>
                                        <tr v-if="item.rewardMoney !== 0">
                                          <th scope="row" style="width:50%;" class="order-detail">福利金折抵&#12288;&#12288; </th>
                                          <td style="width:50%;" class="order-detail">{{item.rewardMoney}}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row" style="width:50%;" class="order-detail">發票金額&#12288;&#12288;&#12288; </th>
                                          <td style="width:50%;" class="order-detail">${{item.paidAmount}}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div class="d-flex">
                                      <a href="#" class="ask fw-bolder order-detail  p-2"  @click.prevent="sendDoubtOrder(item)"><i class="bi bi-question-diamond"></i>詢問訂單</a>
                                    </div>
                              </div>
                          </div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 手機板將保護說明移至下方 -->
              <div class="declareMobile">
                <span class="d-block text-secondary opacity-75 fs-6 p-2 p-md-0" style="text-align:justify;">依照消費者保護法規定，消費者均享有產品到貨七天猶豫期之權益(注意！猶豫期非試用期)，如欲退回產品，請確保商品必須是未使用過、全新狀態且包裝完整(特殊提供試用品或其他退貨限制，會另於網頁標示)，否則恕不接受退貨。
                      此頁面僅顯示到貨後，七天猶豫期內之訂單，超過時間則不接受退貨/換貨服務。<br>如單筆訂單內二項(含)以上商品，恕不提供單項商品取消/退貨。若有特殊需求，請聯絡客服我們將有專人盡速為您處理。
                </span>
              </div>
              <!-- Modal returnedPurchase 取消訂單彈窗-->
              <div class="modal fade" id="cancelOrder" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog modal-dialog-centered ">
                  <div class="modal-content p-3">
                    <div class="modal-header d-flex " style="align-item:center;justify-content:center">
                      <p class="modal-title fs-6 fw-bolder" id="exampleModalLabel" >我們立即為您辦理退貨申請，並請您留意以下資訊</p>
                      <button type="button " class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                    <div class="modal-body p-2">
                      <form class="d-flex flex-column justify-content-center align-items-center">
                        <div class="mb-3 d-flex flex flex-column">
                          <div class="d-flex"><label for="" class="pt-1">1.</label><label for="recipient-name" class="col-form-label text-break m-0 text-secondary pt-1" style="">網站僅提供退貨申請服務，無提供換貨。</label></div>
                          <div class="d-flex"><label for="" class="pt-1">2.</label><label for="recipient-name" class="col-form-label text-break m-0 text-secondary pt-1">若已收到產品，請務必將商品恢復為寄出時的包裝，所有訂購商品、配件、贈品及包裝盒也需完整置入原外裝箱中。我們將請貨運到府回收。</label></div>
                          <div class="d-flex"><label for="" class="pt-1">3.</label><label for="recipient-name" class="col-form-label text-break m-0 text-secondary pt-1">整筆訂單如有參加折價券、滿額折抵活動，部分商品申請退貨後將按折扣金額等比例退還。</label></div>
                          <div class="d-flex"><label for="" class="pt-1">4.</label><label for="recipient-name" class="col-form-label text-break m-0 text-secondary pt-1">請留意訂單取消/退貨後，則該優惠活動將無法重新享有(例折價券、購物金等..)</label></div>
                          <div class="d-flex"><label for="" class="pt-1">5.</label><label for="recipient-name" class="col-form-label text-break m-0 text-secondary pt-1">待貨運收回商品，確認商品無誤後，將儘速為您辦理退款。</label></div>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center" style="width:100%">
                          <div class="row d-flex justify-content-left align-items-center m-2" style="width:100%;">
                            <div class="col-3 p-2"><i class="bi bi-chat-left-text-fill pe-1"></i>申請理由</div>
                            <select name="" id="" class="col-9 styled-1 form-control" v-model="cancelOrder.cancelCode" >
                              <option value="">請選擇</option>
                              <option v-for="item in cancelList" :key="item.cancelCode+1" :value="item.cancelCode">{{item.cancelDescription}}</option>
                            </select>
                            <div class="col-6 p-2 "><i class="bi bi-chat-fill pe-1"></i>說明</div>
                            <textarea
                            type="text" rows="3"
                            class="form-control" id="receiverMemo"
                            maxlength="100"  placeholder="內容限100字"
                            style="resize: none;"
                            v-model="cancelOrder.cancelReason"
                            />
                          </div>
                          <button class="btn  btn-outline-primary text-primary shadow-none" data-bs-dismiss="modal" @click.prevent="returnedPurchase">確定</button>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer border-top-0">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
import moment from 'moment'
import shippingSupplier from '@/assets/shippingUrl.json'
import countryName from '@/assets/country.json'
// import moment from 'moment'
export default {
  data () {
    return {
      moment: new Date(),
      today: '',
      oldday: '',
      order: [], // ?原始訂單
      order1: [], // ? S01[尚未付款] 且 包含第三方支付成功但款項確認期間 => 付款狀態確認中
      pre_order2: [], // ? 訂單處理中拆分是否已出貨預處理
      order2: [], // ? S04[付款完成] 但 未出貨 => 訂單已付款
      order3: [], // ? S04[付款完成] 且 已回壓出貨時間;S05[訂單完成] => 統稱已出貨
      order4: [], // ? S02[刷卡失敗],S03[訂單失效],S06[訂單取消],S07[已退款] => 統稱訂單未成立
      order365: [], // ?近1年原始訂單
      order5: [], // ? 近1年原始訂單
      orderSelected: '5', // ? 訂單查詢預設為近1年原始訂單
      orderSelectedChanged: '', // ? 訂單查詢切換狀態
      id: '',
      year: '',
      month: '',
      day: '',
      startDate: '',
      endDate: '',
      startDateThreeMonths: '',
      endDateThreeMonths: '',
      endDateClient: '',
      cancelList: [],
      cancelOrder: {
        orderNo: '',
        cancelCode: 'R08',
        cancelReason: ''
      },
      shippingSupplier: shippingSupplier, // ? 物流廠商Json檔
      // isRouterAlive: true // ?頁面刷新判斷值
      countryName, // 縣市鄉鎮代碼 json
      addressList: { // 地址選單
        countryList: [],
        townList: []
      },
      consignee: {
        consigneeCity: [],
        consigneeTown: []
      },
      pamentMethod: 'P10'
    }
  },
  // inject: ['reload'],
  computed: {
  //
  },
  methods: {
    getTime () { // ?獲取本機時間並運算轉換
      const startDate = moment().add(-364, 'days').format('YYYY-MM-DD')
      const endDate = moment().add(1, 'days').format('YYYY-MM-DD')
      const startDateThreeMonths = moment().add(-364, 'days').format('YYYY-MM-DD')
      const endDateThreeMonths = moment().add(1, 'days').format('YYYY-MM-DD')
      this.endDateClient = moment().add(0, 'days').format('YYYY-MM-DD')
      this.startDate = startDate
      this.endDate = endDate
      this.startDateThreeMonths = startDateThreeMonths
      this.endDateThreeMonths = endDateThreeMonths
    },
    async getOrder () { // ?後端拉單
      const url = `${process.env.VUE_APP_API}/api/members/orders?startdate=${this.startDate}&enddate=${this.endDate}`
      await this.axios.get(url).then(res => {
        if (res.data.rtnCode === 0) {
          this.order = res.data.info
          this.order.forEach(item => {
            if (item.city) {
              // !比對縣市代碼
              item.city = this.countryName.filter(item2 => {
                return item.city === item2.Country
              })
              if (item.city.length > 0) {
                // !篩選並替代為中文資料
                // ? 選第一筆作取用
                item.city = item.city[0].CountryName
              } else {
                item.city = ''
              }
            }
            if (item.district) {
              // !比對鄉鎮代碼
              item.district = this.countryName.filter(item3 => {
                return item.district === item3.District
              })
              if (item.district.length > 0) {
                // !篩選並替代為中文資料
                // ? 選第一筆作取用
                item.district = item.district[0].DistrictName
              } else {
                item.district = ''
              }
            }
          })
          this.order.forEach(item => {
            if (item.orderStatus === 'S01') {
              this.order1.push(item)
            } else if (item.orderStatus === 'S04') {
              this.pre_order2.push(item)
            } else if (item.orderStatus === 'S05') {
              this.order3.push(item)
            } else {
              this.order4.push(item)
            }
          })
          this.pre_order2.forEach(item => {
            const notesnd = item.product.filter(item2 => !item2.shipoutDate)
            if (notesnd.length > 0) { // !廠商沒有回壓出貨時間
              this.order2.push(item)
            } if (notesnd.length === 0) { // !廠商有回壓出貨時間
              this.order3.push(item)
            }
          })
          this.order3.forEach(item => { // !timeOrder為自定義屬性，供訂單彙整後排序時間用
            item.timeOrder = parseInt(item.orderNo.split('N')[1])
          })
          this.order3.sort((a, b) => { // !重組後時間排序
            return b.timeOrder - a.timeOrder
          })
          // !顯示目前所篩選訂單
          setTimeout(() => {
            this.pickOrderStatus()
          }, 300)
        } else if (res.data.rtnCode === 1398) {
          this.order = []
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
    async getRecentOrder () { // ?拉出近期訂單
      const url = `${process.env.VUE_APP_API}/api/members/orders?startdate=${this.startDateThreeMonths}&enddate=${this.endDateThreeMonths}`
      await this.axios({
        method: 'get',
        url: url
      }).then(res => {
        if (res.data.rtnCode === 0) {
          this.order365 = res.data.info
          this.order365.forEach(item => {
            if (item.city) {
              // !比對縣市代碼
              item.city = this.countryName.filter(item2 => {
                return item.city === item2.Country
              })
              if (item.city.length > 0) {
                // !篩選並替代為中文資料
                item.city = item.city[0].CountryName
              } else {
                item.city = ''
              }
            }
            if (item.district) {
              // !比對鄉鎮代碼
              item.district = this.countryName.filter(item3 => {
                return item.district === item3.District
              })
              if (item.district.length > 0) {
                // !篩選並替代為中文資料
                // ? 選第一筆作取用
                item.district = item.district[0].DistrictName
              } else {
                item.district = ''
              }
            }
          })
          setTimeout(() => {
            this.order5 = JSON.parse(JSON.stringify(this.order365))
          }, 200)
        } else if (res.data.rtnCode === 1398) {
          this.order365 = []
        } else {
          this.$swal.fire({
            title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
            confirmButtonColor: '#F8412E',
            width: 400,
            customClass: {
              title: 'text-class'
            }
          })
        }
        setTimeout(() => {
          this.pickOrderStatus()
        }, 300)
      })
    },
    pickOrderStatus () { // ? 顯示目前所篩選訂單
      this.orderSelectedChanged = this[`order${this.orderSelected}`]
      // console.log(this.orderSelected1)
      // this.orderSelectedChanged[0].product[0].shipping = '大智通'
      // this.orderSelectedChanged[0].product[0].shippingNo = '123123'
      this.getShippingUrl()
    },
    callCancelList (orderNo) { // ?呼叫刪除訂單彈窗API
      this.cancelOrder.orderNo = orderNo
      const url = `${process.env.VUE_APP_API}/api/order/cancelList`
      this.axios.get(url).then(res => {
        this.cancelList = res.data.info
      })
    },
    async returnedPurchase () { // ?確定刪除訂單
      const url = `${process.env.VUE_APP_API}/api/order/cancel`
      const res = await this.$http.post(url, this.cancelOrder)
      if (res.data.rtnCode === 0) {
        this.$swal.fire({
          position: 'center',
          title: '您的訂單已取消',
          showConfirmButton: true,
          confirmButtonColor: '#F8412E',
          customClass: {
            title: 'text-class'
          }
        })
          .then(result => {
            if (result.isConfirmed) {
              this.$router.go() // ?訂單取消刷新頁面
            }
          })
      } else {
        setTimeout(() => {
          this.$swal.fire({
            position: 'center',
            title: `${res.data.rtnMsg}(錯誤代碼${res.data.rtnCode})`,
            showConfirmButton: true,
            confirmButtonColor: '#F8412E',
            customClass: {
              title: 'text-class'
            }
          })
        }, 100)
      }
    },
    goToEreceipt () { // ?電子發票彈窗
      const receiptRoute = this.$router.resolve({ path: '/ereceipt' })
      window.open(receiptRoute.href, '_blank')
    },
    sendDoubtOrder (order) { // ?訂單帶入連絡欄位
      this.$swal.fire({
        title: '是否詢問該筆訂單',
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonColor: '#4D4D4D',
        confirmButtonColor: '#F8412E',
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        customClass: {
          title: 'text-class'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeout(() => {
            this.$router.push('/memberboard/contactus')
            this.$store.commit('askOrder', order)
            this.$swal.fire({
              title: '已將該項產品帶入問題欄位',
              showConfirmButton: true,
              confirmButtonColor: '#F8412E',
              customClass: {
                title: 'text-class'
              }
            })
          }, 1000)
        }
      })
    },
    sendDoubtItem (item) { // ?訂單內產品帶入連絡欄位
      this.$swal.fire({
        title: '已將該項產品帶入問題欄位',
        showConfirmButton: true,
        confirmButtonColor: '#F8412E',
        customClass: {
          title: 'text-class'
        }
      })
      setTimeout(() => {
        this.$router.push('/memberboard/contactus')
        this.$store.commit('askProduct', item)
      }, 2000)
    },
    getShippingUrl () { // ? 引入Json檔進行出貨廠商資料比對
      this.orderSelectedChanged.forEach((item1) => {
        item1.product.forEach((item2) => {
          if (item2.shipping) { // !shippingUrl為自定義屬性，供訂單彙整後排序用
            item2.shippingUrl = shippingSupplier[item2.shipping]
          }
        })
      })
    },
    urlOpen (url) { // ? 另開視窗前往廠商頁面進行包裹查詢
      if (url) {
        window.open(url, '_blank')
      }
    }
  },
  created () {
    this.getTime()
  },
  mounted () {
    this.getOrder()
    this.getRecentOrder()
  }
}
</script>

<style lang="scss" scoped>
  //查詢區間灰底
  .duration {
    background-color: #F0F0F2;
  }
  // .accordion-list {
  //   background-color: #0000;
  //   box-shadow: none;
  //   width: 7rem !important;
  //   top:90%;
  // }
  //取消訂單點擊文字
  table {
    padding: 0.3rem 0.5rem !important;
  }
  .btn-close {
    // margin: 0 93%;原本的樣式
    padding: .2rem .2rem;
    width: 1.5em;
    height: 1.5em;
    opacity: 0.8;
  }
  //更改彈窗XX樣式
  .modal-header .btn-close {
    margin:-3rem -1rem -2rem auto;
  @media screen and (max-width: 768px) {
    margin:-6rem -1.8rem -1rem auto;
  }
  }
  //更改Accordion箭頭樣式
  .accordion-button {
    background-color: #F0F0F2;
    border-radius: 5px;
    // padding: 0;
    color:#4D4D4D !important;
  }
  .accordion-button:not(.collapsed) {
      color: white !important;
      background-color: #4D4D4D !important;
    &:after{
      transform: rotate(0deg) !important;
      background-image: url(../assets/img/chevron-up.svg);
      translate: 0 30%;
    }
  }
  .accordion-button:focus {
    background: none;
  }
  .accordion-button::after {
    translate: 0 -22%;
    transform: rotate(180deg) !important;
    margin-left:-5% !important;
    background-image: url(../assets/img/chevron-up.svg);
    width: 1.2em;
    height: 1.2em;
    background-size: 1em;
  }
  .down::after{
    translate: 0 20% !important;
    transform: rotate(0deg) !important;
    margin-left: -3% !important;
    background-image: url(/img/chevron-up.a497c067.svg);
    width: 1.2em;
    height: 1.2em;
    background-size: 1em;
  }

  .space { /* 訂單編號推空間手機板消失 */
    display: none;
  }
// *手風琴表格樣式
  .center {
    margin-right: -12px;
    margin-left: -12px;
    padding-left: 12px;
    padding-right: 12px;
  }
  .btn { /* 按鈕hover效果 */
      &:hover{
        color: #fff!important;
    }
  }
  .sendDoubtOrder {
    justify-content: center;
    @media screen and (max-width: 768px) {
      justify-content: end;
    }
  }
  .sendDoubtItem {
    justify-content: center;
    @media screen and (max-width: 768px) {
      justify-content: end;
    }
  }
  .declare {
    display: flex;
    @media screen and (max-width:768px) {
      display: none;
    }
  }
  .declareMobile {
    display: none;
    @media screen and (max-width:768px) {
      display: flex;
    }
  }
  .dropdown-toggle::after {
    margin-left: 65% !important;
  }
  .styled-1  {
    &:focus{
      outline: none;
    }
  }
  .cardShadow {
    box-shadow: 4px 4px 2px 4px #adb5bd;
  }
  .menuShadow {
    box-shadow: 4px 3px 2px 2px #adb5bd;
  }
  .orderHeader {
    background-color: #707070;
  }
  // *訂單迴圈線條樣式
  .circle  {
      .arrow {
        &::after{
          content: '' ;
          // z-index: 0;
          width: 100%;
          border-bottom: 1.5px solid #ced4da;
          position: absolute;
          left: 50%;
          bottom:-10%;
          transform: translate(-50%, -50%);
        }
        // &:last-of-type {
        //   &::after{
        //     content: '';
        //     background-image: none;
        //     position: absolute;
        //   }
        // }
      }
      .money {
        .show{
          &::after{
            content: '';
            z-index: 0;
            width: 100%;
            border-bottom: 5.5px solid #F8412E;
            border-radius: 4px;
            position: absolute;
            bottom: -2%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 4px 2px 1.5px #adb5bd;
          }
        }
      }
  }
  .table {
    color: #4D4D4D;
    td {
      text-align: justify;
    }
  }
  .table-width-left {
    width: 15% !important;
    @media (max-width: 768px){
    width: 30% !important;
    }
  }
  .table-width-right {
    width: 15% !important;
    @media (max-width: 768px){
    width: 30% !important;
    }
  }
  .table-width-include-image {
    width: 75% !important;
    @media (max-width: 768px){
    width:  70% !important;
    }
  }
  .tableBottomLIne:last-child div {
      position: relative;
        // &::after {
        //   position: absolute;
        //   top: 100%;
        //   left: 5%;
        //   content: "";
        //   border-radius: 2px 2px 2px 2px;
        //   width: 90%;
        //   border: none;
        // }
  }
  .cancelbutton {
    &:hover{
      color: white !important;
      background-color: #4D4D4D !important;
    }
  }
  .fit-button {
    width: 12% ;
    box-shadow: 0px 1px 0px 1px #adb5bd;
    color:#4D4D4D !important;
    @media (max-width: 1200px){
    width:16%;
    }
    @media (max-width: 768px){
    width:30%;
    }
  }
  .fit-thumb {
    width: 26% ;
    box-shadow: 0px 1px 0px 1px #adb5bd;
    color:#4D4D4D !important;
    @media (max-width: 1200px){
    width:28%;
    }
    @media (max-width: 900px){
    width:38%;
    }
    @media (max-width: 820px){
    width:38%;
    }
    @media (max-width: 720px){
    width:50%;
    }
    @media (max-width: 500px){
    width:66%;
    }
    @media (max-width: 400px){
    width:65%;
    }
    @media (max-width: 375px){
    width: 71%;
    }
  }
  .resize-image {
    width: 100px;
    @media (max-width: 390px){
      width: 120px;
    }
    @media (max-width: 380px){
      width: 80px;
    }
  }

.ask {
  width:50%;
  &:hover {
    color: #2a7efb !important;
  }
}

.buyAgain {
  box-shadow: 5px 5px 4px -3px #adb5bd;
  &:hover {
    color: #F8412E !important;
  }
}

.prd-name {
  font-weight: bolder;
}

.order-detail {
  color:#707070;
}

</style>
