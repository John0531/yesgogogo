<template>
  <div class="checkoutcart position-relative">
    <div class="row justify-content-center">
      <!-- 步驟圖 -->
      <CardProgress :step="status">
          <template #step1>
          </template>
          <template #step2>
          </template>
          <template #step3>

          </template>
      </CardProgress>
      <Form
        v-slot="{errors}"
        ref="myForm"
        @submit="toCheckoutInfo"
        @invalid-submit="onInvalidSubmit"
      >
      <!-- 購物車明細(常溫、低溫) -->
      <div class="col-md-12 mb-5" v-if="(cartData.items.length!==0||isEmpty)&&limitShippingCart.length===0">
        <div class="border">
          <h4 class="bg-gray px-4 py-3">購物車({{ ProductNum }}件)</h4>
          <!-- 購物車無商品 -->
            <div class="p-6 bg-white" v-if="!this.$store.state.checkoutCartList||isEmpty" style="height:280px">
                <h3 class="text-center">目前購物車內無任何商品</h3>
            </div>
          <!-- 購物車有商品 -->
          <div v-if="cartData.items.length!==0&&!isEmpty">
            <div class="px-3 px-xl-4 pt-4 bg-white" v-if="cartData.shippingInfo.length>0">
              <div class="bg-primary text-white px-2 fs-5 " style="width:fit-content;">{{cartData.shippingInfo[0].shippingTypeName}}</div>
              <div class="d-flex align-items-center mt-2">
                <i class="fas fa-bullhorn fs-6 me-2 text-secondary"></i>
                <h6 class="fs-6 text-primary">商品未滿${{cartData.shippingInfo[0].limitPrice}}，運費${{cartData.shippingInfo[0].shippingFee}}</h6>
              </div>
            </div>
            <!-- 桌機版商品列表 -->
            <table class="table table-borderless bg-white align-middle m-0 d-none d-lg-block" >
              <thead class="border-bottom">
                <tr>
                  <th scope="col" class="ps-xl-5 py-md-3">商品資料</th>
                  <th scope="col" class="py-md-3 text-center">單價</th>
                  <th scope="col" class="py-md-3 text-center w-25 w-xxl-20">數量</th>
                  <th
                    scope="col"
                    class="py-md-3 text-center d-none d-md-table-cell"
                    width="10%"
                  >
                    小計
                  </th>
                  <th
                    scope="col"
                    class="text-nowrap py-md-3 text-center d-none d-md-table-cell"
                  >
                    加入追蹤
                  </th>
                  <th
                    scope="col"
                    class="pe-xl-4 text-nowrap py-md-3 text-center d-none d-md-table-cell"
                  >
                    刪除品項
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-bottom" v-for="(item) in cartData.items" :key="item.productId">
                  <th
                    scope="row"
                    class="ps-xl-5 py-md-4 py-2"
                  >
                    <div class="row align-items-center product-content">
                      <div class="col-lg-3 pe-0">
                        <a href="#" @click.prevent="toProduct(item)">
                          <div
                            class="ratio ratio-1x1 d-none d-lg-block product-img"
                          >
                            <img
                              :src="item.imageUrl"
                              alt=""
                              class="d-block"
                            />
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-9 ps-3 ps-lg-4">
                        <a href="#" @click.prevent="toProduct(item)" class="text-dark product-name"
                          >{{item.productName}}-{{item.optionName}}<br>
                          <div class="d-flex align-items-center mt-2" v-if="item.gift!==null">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19.63" height="20.13" viewBox="0 0 19.63 20.13">
                              <g id="yesgo_icon元件-32" transform="translate(-0.435 -0.435)">
                                <path id="Path_1" data-name="Path 1" d="M18.35,4.43a1,1,0,0,1,1,1V7.71a1,1,0,0,1-1,1H2.15a1,1,0,0,1-1-1V5.43a1,1,0,0,1,1-1h16.2m0,0H2.15a1.07,1.07,0,0,0-1.09,1V7.71a1.07,1.07,0,0,0,1.09,1h16.2a1.07,1.07,0,0,0,1.09-1V5.43A1.07,1.07,0,0,0,18.35,4.43Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                                <path id="Path_2" data-name="Path 2" d="M2.46,8.76v10a1.21,1.21,0,0,0,1.25,1.15H16.79A1.21,1.21,0,0,0,18,18.76v-10" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                                <line id="Line_1" data-name="Line 1" y2="15.56" transform="translate(10.25 4.38)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                                <path id="Path_3" data-name="Path 3" d="M10.25,4.41H8.06A2.06,2.06,0,0,1,5.82,2.66c0-.94,1.06-1.69,2.29-1.59C10,1.23,10.25,3.47,10.25,4.41Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                                <path id="Path_4" data-name="Path 4" d="M10.25,4.41h2.19a2.06,2.06,0,0,0,2.24-1.75c0-.94-1.06-1.69-2.29-1.59C10.46,1.23,10.25,3.47,10.25,4.41Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                              </g>
                            </svg>
                            <small class="text-muted ms-1 ms-md-0">{{item.gift.giftName}}</small>
                          </div>
                        </a>
                        <a v-if="item.isLoveProduct  " class="d-inline-block  py-1" @click="openDonativeModal()" href="#">
                          <a  class="d-inline-block bg-primary text-white  fs-6 rounded rounded-3 py-lg-1 px-2 h-50 flex-shrink-0" href="#">愛心品</a>
                          <p class="d-inline-block inline-center fs-6 px-1 text-gray-dark text-center" ><span class="inline-center ">平台加碼捐10%</span><img src="@/assets/img/yesgo_icon-info.svg" alt="愛心品info" class="inline-center info-icon-style ms-1"></p>
                        </a>
                        <div class="v-else">
                          <p class="fs-7 rounded rounded-3 px-2 h-50" style="color:transparent" > 無折價券 </p>
                        </div>
                        <span class="text-primary" v-if="!item.canUseCoupon">*本商品不適用部分折價券</span>
                        <router-link style="color:rgb(26, 115, 232);text-decoration: underline;width:fit-content;" to="/activity/newyeargift" class="d-block" v-if="item.productActivityArea">
                        {{cartData.activities.canUse[0].activityName}}
                        <span v-if="cartData.activities.canUse[0].isConform" style="color:#6cc236;"><img class="mb-1" src="@/assets/img/cart_confirm.svg" alt="" style="width:16px;height:auto;">已符合</span>
                        <span v-else style="color:#1479fb;">( ! )未符合 差{{cartData.activities.canUse[0].difference}}件享優惠</span>
                        </router-link>
                      </div>
                    </div>
                  </th>
                  <td class="text-center text-nowrap">$ {{$currency.currency(item.price)}}</td>
                  <td>
                    <div class="input-group d-flex justify-content-center">
                      <button
                        class="btn border border-dark d-none d-lg-block"
                        type="button"
                        @click.prevent="numMinus(item)"
                      >
                        <i class="bi bi-dash-lg"></i>
                      </button>
                      <input
                        type="number"
                        class="border border-dark text-center num-input"
                        v-model.number="item.quantity"
                        min="1"
                        onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
                        @change="numInput(item)"
                      />
                      <button
                        class="btn border border-dark d-none d-lg-block border-start-0"
                        type="button"
                        @click.prevent="numPlus(item)"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </button>
                    </div>
                    <p class="text-center">本次可買數量: {{item.stock}}</p>
                  </td>
                  <td class="text-center d-none d-md-table-cell text-nowrap">$ {{$currency.currency(item.price*item.quantity)}}</td>
                  <td class="p-0 text-center">
                    <a class="" href="#" @click.prevent="addToTracklist(item)" v-if="!item.isAddToTrack"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.808" height="17.918" viewBox="0 0 19.808 17.918">
                        <path id="yesgo_icon元件-28" d="M19.44,6a4.8,4.8,0,0,0-9.19-1.9A4.8,4.8,0,1,0,2.51,9.47l7.74,8.29L18,9.47A4.8,4.8,0,0,0,19.44,6Z" transform="translate(-0.307 -0.517)" fill="none" stroke="#4d4d4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35"/>
                        </svg></a
                      >
                    <a href="#" @click.prevent="removeFromTracklist(item)" v-if="item.isAddToTrack"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" width="19.808" height="18.233" viewBox="0 0 19.808 18.233">
                        <path id="yesgo_icon元件-29" d="M19.44,5.88a4.8,4.8,0,0,0-9.19-1.94A4.8,4.8,0,1,0,2.51,9.31l7.74,8.29L18,9.31A4.78,4.78,0,0,0,19.44,5.88Z" transform="translate(-0.307 -0.355)" fill="#f8412e" stroke="#f8412e" stroke-miterlimit="10" stroke-width="1.35"/>
                      </svg></a
                    >
                  </td>
                  <td class="p-0 pe-xl-4 text-center">
                    <button
                        type="button"
                        class="btn fs-4 ps-0 ps-xl-2 pe-2 pe-xl-0"
                        @click.prevent="deleteProduct(item)"
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- 手機版商品列表 -->
            <div class="bg-white d-lg-none py-2 px-md-2">
              <div class="row py-3 border-bottom mx-2" v-for="(item) in cartData.items" :key="item.productId">
                <div class="col-4">
                  <a href="#" @click.prevent="toProduct(item)">
                    <div
                      class="ratio ratio-1x1"
                    >
                      <img
                        :src="item.imageUrl"
                        alt=""
                        class="d-block"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-8">
                  <div class="mb-4">
                    <a href="#" @click.prevent="toProduct(item)" class="text-dark product-name"
                      >{{item.productName}}-{{item.optionName}}<br>
                      <div class="d-flex align-items-center mt-2" v-if="item.gift!==null">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.63" height="20.13" viewBox="0 0 19.63 20.13">
                          <g id="yesgo_icon元件-32" transform="translate(-0.435 -0.435)">
                            <path id="Path_1" data-name="Path 1" d="M18.35,4.43a1,1,0,0,1,1,1V7.71a1,1,0,0,1-1,1H2.15a1,1,0,0,1-1-1V5.43a1,1,0,0,1,1-1h16.2m0,0H2.15a1.07,1.07,0,0,0-1.09,1V7.71a1.07,1.07,0,0,0,1.09,1h16.2a1.07,1.07,0,0,0,1.09-1V5.43A1.07,1.07,0,0,0,18.35,4.43Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                            <path id="Path_2" data-name="Path 2" d="M2.46,8.76v10a1.21,1.21,0,0,0,1.25,1.15H16.79A1.21,1.21,0,0,0,18,18.76v-10" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                            <line id="Line_1" data-name="Line 1" y2="15.56" transform="translate(10.25 4.38)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                            <path id="Path_3" data-name="Path 3" d="M10.25,4.41H8.06A2.06,2.06,0,0,1,5.82,2.66c0-.94,1.06-1.69,2.29-1.59C10,1.23,10.25,3.47,10.25,4.41Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                            <path id="Path_4" data-name="Path 4" d="M10.25,4.41h2.19a2.06,2.06,0,0,0,2.24-1.75c0-.94-1.06-1.69-2.29-1.59C10.46,1.23,10.25,3.47,10.25,4.41Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                          </g>
                        </svg>
                        <small class="text-muted ms-1 ms-md-0">{{item.gift.giftName}}</small>
                      </div>
                    </a>

                    <span class="text-primary" v-if="!item.canUseCoupon">*本商品不適用部分折價券</span>
                    <router-link style="color:rgb(26, 115, 232);text-decoration: underline;width:fit-content;" to="/activity/newyeargift" class="d-block" v-if="item.productActivityArea">
                        {{cartData.activities.canUse[0].activityName}}
                        <span v-if="cartData.activities.canUse[0].isConform" style="color:#6cc236;"><img class="mb-1" src="@/assets/img/cart_confirm.svg" alt="" style="width:16px;height:auto;">已符合</span>
                        <span v-else style="color:#1479fb;">( ! )未符合 差{{cartData.activities.canUse[0].difference}}件享優惠</span>
                        </router-link>
                  </div>
                  <p class="mb-2 mb-md-4">$ {{$currency.currency(item.price)}}</p>
                  <a v-if="item.isLoveProduct " class="d-inline-block  py-1" @click="openDonativeModal()" href="#">
                    <a  class="d-inline-block bg-primary text-white fs-6 rounded rounded-3 py-lg-1 px-2 h-50 flex-shrink-0" href="#">愛心品</a>
                    <p class="d-inline-block fs-7 px-1 text-gray-dark" ><span class="inline-center ">平台加碼捐10%</span><img src="@/assets/img/yesgo_icon-info.svg" alt="愛心品info" class="inline-center info-icon-style ms-1"></p>
                  </a>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="input-group d-flex justify-content-center" style="width:fit-content;">
                      <button
                        class="btn border border-dark"
                        type="button"
                        @click.prevent="numMinus(item)"
                      >
                        <i class="bi bi-dash-lg"></i>
                      </button>
                      <input
                        type="number"
                        class="border border-dark text-center num-input"
                        v-model.number="item.quantity"
                        min="1"
                        onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
                        @change="numInput(item)"
                      />
                      <button
                        class="btn border border-dark border-start-0"
                        type="button"
                        @click.prevent="numPlus(item)"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </button>
                    </div>
                    <a class="pb-1" href="#" @click.prevent="addToTracklist(item)" v-if="!item.isAddToTrack"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.808" height="17.918" viewBox="0 0 19.808 17.918">
                        <path id="yesgo_icon元件-28" d="M19.44,6a4.8,4.8,0,0,0-9.19-1.9A4.8,4.8,0,1,0,2.51,9.47l7.74,8.29L18,9.47A4.8,4.8,0,0,0,19.44,6Z" transform="translate(-0.307 -0.517)" fill="none" stroke="#4d4d4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35"/>
                        </svg></a
                      >
                    <a class="pb-1" href="#" @click.prevent="removeFromTracklist(item)" v-if="item.isAddToTrack"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" width="19.808" height="18.233" viewBox="0 0 19.808 18.233">
                        <path id="yesgo_icon元件-29" d="M19.44,5.88a4.8,4.8,0,0,0-9.19-1.94A4.8,4.8,0,1,0,2.51,9.31l7.74,8.29L18,9.31A4.78,4.78,0,0,0,19.44,5.88Z" transform="translate(-0.307 -0.355)" fill="#f8412e" stroke="#f8412e" stroke-miterlimit="10" stroke-width="1.35"/>
                      </svg></a
                    >
                    <button
                        type="button"
                        class="btn fs-4 p-0"
                        @click.prevent="deleteProduct(item)"
                      >
                        <i class="far fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white px-5 py-3">
            <div class="col-12 d-flex justify-content-between">
              <router-link
                href="#"
                to="/checkoutboard/checkoutcartlist"
                > &lt; 回上一步</router-link
              >
              <a
                href="#"
                class="text-secondary text-decoration-underline"
                @click.prevent="toHome"
                >繼續購物</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 購物車明細(滿額出貨) -->
      <div class="col-md-12 mb-5" v-if="limitShippingCart.length!==0||isEmpty">
        <div class="border">
          <h4 class="bg-gray px-4 py-3">購物車({{ ProductNum }}件)</h4>
          <!-- <div class="p-6 bg-white" v-if="cartData.items.length===0||isEmpty" style="height:280px">
              <h3 class="text-center">目前購物車內無任何商品</h3>
          </div> -->
          <div v-for="limitInfo in limitShippingCart" :key="limitInfo.areaCode" class="pb-3 border-bottom">
            <div class="px-3 px-xl-4 pt-4 bg-white d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
              <div>
                <div class="bg-primary text-white px-2 fs-5" style="width:fit-content;">{{limitInfo.shippingTypeName}}</div>
                <div class="d-flex align-items-center mt-2">
                  <i class="fas fa-bullhorn fs-6 me-2 text-secondary"></i>
                  <h6 v-if="limitInfo.limitPrice===999999">本區優惠商品，運費<span class="text-primary">${{limitInfo.shippingFee}}元</span></h6>
                  <h6 v-else class="fs-6 text-primary">商品滿${{limitInfo.limitPrice}}元免運
                    <span class="ms-2" v-if="!limitInfo.isConform">(目前運費${{limitInfo.shippingFee}}，尚差 ${{limitInfo.balancePrice}} 免運)</span>
                    <span class="ms-2 text-success" v-else>(已達免運門檻)</span>
                  </h6>
                </div>
              </div>
              <div class="mt-3 mt-lg-0">
                <router-link :to="`/productboard/productlistfullshipment/${limitInfo.shippingType}`">
                  <div class="alert alert-danger mb-0 d-flex align-items-center" role="alert">
                    <span style="text-decoration: underline;">加購此活動商品請按此</span>
                  </div>
                </router-link>
              </div>
            </div>
            <!-- 桌機版商品列表 -->
            <table class="table table-borderless bg-white align-middle m-0 d-none d-lg-block" >
              <thead class="border-bottom">
                <tr>
                  <th scope="col" class="ps-xl-5 py-md-3">商品資料</th>
                  <th scope="col" class="py-md-3 text-center">單價</th>
                  <th scope="col" class="py-md-3 text-center w-25 w-xxl-20">數量</th>
                  <th
                    scope="col"
                    class="py-md-3 text-center d-none d-md-table-cell"
                    width="10%"
                  >
                    小計
                  </th>
                  <th
                    scope="col"
                    class="text-nowrap py-md-3 text-center d-none d-md-table-cell"
                  >
                    加入追蹤
                  </th>
                  <th
                    scope="col"
                    class="pe-xl-4 text-nowrap py-md-3 text-center d-none d-md-table-cell"
                  >
                    刪除品項
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-bottom" v-for="(item) in limitInfo.items" :key="item.productId">
                  <th
                    scope="row"
                    class="ps-xl-5 py-md-4 py-2"
                  >
                    <div class="row align-items-center product-content">
                      <div class="col-lg-3 pe-0">
                        <a href="#" @click.prevent="toProduct(item)">
                          <div
                            class="ratio ratio-1x1 d-none d-lg-block product-img"
                          >
                            <img
                              :src="item.imageUrl"
                              alt=""
                              class="d-block"
                            />
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-9 ps-3 ps-lg-4">
                        <a href="#" @click.prevent="toProduct(item)" class="text-dark product-name"
                          >{{item.productName}}-{{item.optionName}}<br>
                          <div class="d-flex align-items-center mt-2" v-if="item.gift!==null">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19.63" height="20.13" viewBox="0 0 19.63 20.13">
                              <g id="yesgo_icon元件-32" transform="translate(-0.435 -0.435)">
                                <path id="Path_1" data-name="Path 1" d="M18.35,4.43a1,1,0,0,1,1,1V7.71a1,1,0,0,1-1,1H2.15a1,1,0,0,1-1-1V5.43a1,1,0,0,1,1-1h16.2m0,0H2.15a1.07,1.07,0,0,0-1.09,1V7.71a1.07,1.07,0,0,0,1.09,1h16.2a1.07,1.07,0,0,0,1.09-1V5.43A1.07,1.07,0,0,0,18.35,4.43Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                                <path id="Path_2" data-name="Path 2" d="M2.46,8.76v10a1.21,1.21,0,0,0,1.25,1.15H16.79A1.21,1.21,0,0,0,18,18.76v-10" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                                <line id="Line_1" data-name="Line 1" y2="15.56" transform="translate(10.25 4.38)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                                <path id="Path_3" data-name="Path 3" d="M10.25,4.41H8.06A2.06,2.06,0,0,1,5.82,2.66c0-.94,1.06-1.69,2.29-1.59C10,1.23,10.25,3.47,10.25,4.41Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                                <path id="Path_4" data-name="Path 4" d="M10.25,4.41h2.19a2.06,2.06,0,0,0,2.24-1.75c0-.94-1.06-1.69-2.29-1.59C10.46,1.23,10.25,3.47,10.25,4.41Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                              </g>
                            </svg>
                            <small class="text-muted ms-1 ms-md-0">{{item.gift.giftName}}</small>
                          </div>
                        </a>
                        <span class="text-primary" v-if="!item.canUseCoupon">*本商品不適用部分折價券</span>
                      </div>
                    </div>
                  </th>
                  <td class="text-center text-nowrap">$ {{$currency.currency(item.price)}}</td>
                  <td>
                    <div class="input-group d-flex justify-content-center">
                      <button
                        class="btn border border-dark d-none d-lg-block"
                        type="button"
                        @click.prevent="numMinus(item)"
                      >
                        <i class="bi bi-dash-lg"></i>
                      </button>
                      <input
                        type="number"
                        class="border border-dark text-center num-input"
                        v-model.number="item.quantity"
                        min="1"
                        onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
                        @change="numInput(item)"
                      />
                      <button
                        class="btn border border-dark d-none d-lg-block border-start-0"
                        type="button"
                        @click.prevent="numPlus(item)"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </button>
                    </div>
                    <p class="text-center">本次可買數量: {{item.stock}}</p>
                  </td>
                  <td class="text-center d-none d-md-table-cell text-nowrap">$ {{$currency.currency(item.price*item.quantity)}}</td>
                  <td class="p-0 text-center">
                    <a class="" href="#" @click.prevent="addToTracklist(item)" v-if="!item.isAddToTrack"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.808" height="17.918" viewBox="0 0 19.808 17.918">
                        <path id="yesgo_icon元件-28" d="M19.44,6a4.8,4.8,0,0,0-9.19-1.9A4.8,4.8,0,1,0,2.51,9.47l7.74,8.29L18,9.47A4.8,4.8,0,0,0,19.44,6Z" transform="translate(-0.307 -0.517)" fill="none" stroke="#4d4d4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35"/>
                        </svg></a
                      >
                    <a href="#" @click.prevent="removeFromTracklist(item)" v-if="item.isAddToTrack"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" width="19.808" height="18.233" viewBox="0 0 19.808 18.233">
                        <path id="yesgo_icon元件-29" d="M19.44,5.88a4.8,4.8,0,0,0-9.19-1.94A4.8,4.8,0,1,0,2.51,9.31l7.74,8.29L18,9.31A4.78,4.78,0,0,0,19.44,5.88Z" transform="translate(-0.307 -0.355)" fill="#f8412e" stroke="#f8412e" stroke-miterlimit="10" stroke-width="1.35"/>
                      </svg></a
                    >
                  </td>
                  <td class="p-0 pe-xl-4 text-center">
                    <button
                        type="button"
                        class="btn fs-4 ps-0 ps-xl-2 pe-2 pe-xl-0"
                        @click.prevent="deleteProduct(item)"
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- 手機版商品列表 -->
            <div class="bg-white d-lg-none py-2 px-md-2">
              <div class="row py-3 border-bottom mx-2" v-for="(item) in limitInfo.items" :key="item.productId">
                <div class="col-4">
                  <a href="#" @click.prevent="toProduct(item)">
                    <div
                      class="ratio ratio-1x1"
                    >
                      <img
                        :src="item.imageUrl"
                        alt=""
                        class="d-block"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-8">
                  <div class="mb-4">
                    <a href="#" @click.prevent="toProduct(item)" class="text-dark product-name"
                      >{{item.productName}}-{{item.optionName}}<br>
                      <div class="d-flex align-items-center mt-2" v-if="item.gift!==null">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.63" height="20.13" viewBox="0 0 19.63 20.13">
                          <g id="yesgo_icon元件-32" transform="translate(-0.435 -0.435)">
                            <path id="Path_1" data-name="Path 1" d="M18.35,4.43a1,1,0,0,1,1,1V7.71a1,1,0,0,1-1,1H2.15a1,1,0,0,1-1-1V5.43a1,1,0,0,1,1-1h16.2m0,0H2.15a1.07,1.07,0,0,0-1.09,1V7.71a1.07,1.07,0,0,0,1.09,1h16.2a1.07,1.07,0,0,0,1.09-1V5.43A1.07,1.07,0,0,0,18.35,4.43Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                            <path id="Path_2" data-name="Path 2" d="M2.46,8.76v10a1.21,1.21,0,0,0,1.25,1.15H16.79A1.21,1.21,0,0,0,18,18.76v-10" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                            <line id="Line_1" data-name="Line 1" y2="15.56" transform="translate(10.25 4.38)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                            <path id="Path_3" data-name="Path 3" d="M10.25,4.41H8.06A2.06,2.06,0,0,1,5.82,2.66c0-.94,1.06-1.69,2.29-1.59C10,1.23,10.25,3.47,10.25,4.41Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                            <path id="Path_4" data-name="Path 4" d="M10.25,4.41h2.19a2.06,2.06,0,0,0,2.24-1.75c0-.94-1.06-1.69-2.29-1.59C10.46,1.23,10.25,3.47,10.25,4.41Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                          </g>
                        </svg>
                        <small class="text-muted ms-1 ms-md-0">{{item.gift.giftName}}</small>
                      </div>
                    </a>
                    <span class="text-primary" v-if="!item.canUseCoupon">*本商品不適用部分折價券</span>
                  </div>
                  <p class="mb-2 mb-md-4">$ {{$currency.currency(item.price)}}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="input-group d-flex justify-content-center" style="width:fit-content;">
                      <button
                        class="btn border border-dark"
                        type="button"
                        @click.prevent="numMinus(item)"
                      >
                        <i class="bi bi-dash-lg"></i>
                      </button>
                      <input
                        type="number"
                        class="border border-dark text-center num-input"
                        v-model.number="item.quantity"
                        min="1"
                        onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
                        @change="numInput(item)"
                      />
                      <button
                        class="btn border border-dark border-start-0"
                        type="button"
                        @click.prevent="numPlus(item)"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </button>
                    </div>
                    <a class="pb-1" href="#" @click.prevent="addToTracklist(item)" v-if="!item.isAddToTrack"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.808" height="17.918" viewBox="0 0 19.808 17.918">
                        <path id="yesgo_icon元件-28" d="M19.44,6a4.8,4.8,0,0,0-9.19-1.9A4.8,4.8,0,1,0,2.51,9.47l7.74,8.29L18,9.47A4.8,4.8,0,0,0,19.44,6Z" transform="translate(-0.307 -0.517)" fill="none" stroke="#4d4d4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35"/>
                        </svg></a
                      >
                    <a class="pb-1" href="#" @click.prevent="removeFromTracklist(item)" v-if="item.isAddToTrack"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" width="19.808" height="18.233" viewBox="0 0 19.808 18.233">
                        <path id="yesgo_icon元件-29" d="M19.44,5.88a4.8,4.8,0,0,0-9.19-1.94A4.8,4.8,0,1,0,2.51,9.31l7.74,8.29L18,9.31A4.78,4.78,0,0,0,19.44,5.88Z" transform="translate(-0.307 -0.355)" fill="#f8412e" stroke="#f8412e" stroke-miterlimit="10" stroke-width="1.35"/>
                      </svg></a
                    >
                    <button
                        type="button"
                        class="btn fs-4 p-0"
                        @click.prevent="deleteProduct(item)"
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white px-5 py-3">
            <div class="col-12 d-flex justify-content-between">
              <router-link
                href="#"
                to="/checkoutboard/checkoutcartlist"
                > &lt; 回上一步</router-link
              >
              <a
                href="#"
                class="text-secondary text-decoration-underline"
                @click.prevent="toHome"
                >繼續購物</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 活動折抵、折價券與購物金選擇 -->
      <div class="col-md-10 w-100" v-if="!isEmpty">
        <div>
          <h4 class="bg-gray px-4 py-3">
            我要折抵會員優惠 <span class="text-primary">※ 僅可擇一使用</span>
          </h4>
          <div class="bg-white text-center" v-if="isLimitShipping">
            <h4 class="py-4 text-primary">滿額出貨商品不適用折價券與購物金</h4>
          </div>
          <div class="accordion accordion-flush mb-3 border" id="accordionFlushExample" v-if="!isLimitShipping">
            <div class="accordion-item">
              <div class="accordion-header d-flex justify-content-between px-3 px-md-7 px-lg-5" id="flush-headingOne">
                <div class="d-flex align-items-center">
                  <input id="coupon" class="form-check-input discount-input me-2" type="radio" name="discount" v-model="discountSelect" value="coupon" @click="discountRadioSingleClick('coupon')" :disabled="cartData.coupons.canUse.length===0">
                  <label for="coupon" class="fs-5 text-primary" :class="{'disabled':cartData.coupons.canUse.length===0}">折價券&nbsp;&nbsp;|&nbsp;&nbsp;</label>
                  <small class="text-muted fs-6"> (已排除不適用優惠券)</small>
                </div>
                <button
                  class="accordion-button collapsed bg-white px-lg-5 w-10"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <!-- 折價券<small class="text-muted">(已排除不適用優惠券)</small> -->
                </button>
              </div>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="border-top" v-if="cartData.coupons.canUse.length===0&&productsCanUseCoupon">
                  <div class="row justify-content-center">
                    <div class="col-lg-10">
                      <h5 class="ps-3 py-3">目前無折價券可以使用</h5>
                    </div>
                  </div>
                </div>
                <div class="border-top" v-if="cartData.coupons.canUse.length===0&&!productsCanUseCoupon">
                  <div class="row justify-content-center">
                    <div class="col-lg-10">
                      <h5 class="ps-3 py-3 text-primary">購物車內因部分商品不適用折價券，訂單如要使用折價券, 請分開各別購買</h5>
                    </div>
                  </div>
                </div>
                <div class="accordion-body border-top px-md-5 px-lg-9" v-for="(item, index) in cartData.coupons.canUse" :key="item">
                  <div
                    class="d-flex justify-content-between m-auto align-items-center"
                  >
                    <span class="w-75">
                      <span class="fw-bold">NT${{item.discountAmount}} / {{item.couponName}}</span>
                      (使用期限至{{item.endDate}})
                    </span>
                    <span>
                      <label
                        class="form-check-label pe-3 d-none d-md-inline-block"
                        :for="`${item.couponId}-${index}`"
                      >
                        本次使用
                      </label>
                      <input
                        class="form-check-input coupon-radio"
                        type="radio"
                        name="flexRadioDefault"
                        :id="`${item.couponId}-${index}`"
                        :value="`${item.couponId}-${index}`"
                        v-model="radioselect"
                        @click="rdoSingleClick(item.couponId,index)"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-white border px-md-4 px-lg-5 py-md-3 d-flex justify-content-between align-items-lg-center flex-column flex-lg-row mb-3"
             v-if="!isLimitShipping"
          >
            <div class="d-flex align-items-top align-items-lg-center pt-3 px-3 pt-lg-0 px-lg-0">
              <input id="rewards" class="form-check-input discount-input me-2 mt-1 mt-lg-0" type="radio" name="discount" v-model="discountSelect" value="rewards" @click="discountRadioSingleClick('rewards')" :disabled="cartData.rewardPoint.canUse===0">
              <label for="rewards" class="fs-5 text-primary text-nowrap" :class="{'disabled':cartData.rewardPoint.canUse===0}">購物金&nbsp;&nbsp;|&nbsp;&nbsp;</label>
              <span class="w-60 w-sm-70 w-xxl-auto"
              ><span class="text-primary me-md-2">本次可使用 {{$currency.currency(cartData.rewardPoint.canUse)}} 元</span
              >(目前共有 {{cartData.rewardPoint.total}} 元，最高折抵商品總金額25%)
              <br>
              <span>本次剩餘 {{$currency.currency(cartData.rewardPoint.canUse-rewards)}} 元可使用</span>
              </span>
            </div>
            <span class="px-3 px-md-0 pb-4 pb-md-0 ps-lg-5 ps-xl-0 text-end mt-4"
              ><span>本次使用</span>
              <input @change="useRewards" v-model="rewards" type="number" ref="rewardsInputDom" class="mx-2 w-lg-50 text-end" />元</span
            >
          </div>
          <div class="bg-white px-3 ps-md-7 ps-lg-5 pe-md-5 pe-lg-9 py-3 border d-flex justify-content-between flex-column flex-lg-row mb-3" v-if="!isLimitShipping&&cartData.activities.canUse.length!==0">
            <div class="d-flex align-items-top align-items-lg-center">
              <input id="event" class="form-check-input discount-input me-2 mt-1 mt-lg-0" type="radio" name="discount"  v-model="discountSelect" value="event" @click="discountRadioSingleClick('event')" :disabled="!cartData.activities.canUse[0].isConform">
              <label for="event" class="fs-5 text-primary text-nowrap" :class="{'disabled':!cartData.activities.canUse[0].isConform}">活動折扣&nbsp;&nbsp;|&nbsp;&nbsp;</label>
              <span class="w-60 w-sm-70 w-xxl-auto">
                {{cartData.activities.canUse[0].activityName}}
                <span v-if="cartData.amountResult.activityDiscount">(折扣金額 ${{$currency.currency(cartData.amountResult.activityDiscount)}} 元)</span>
                <br>
                <span v-if="cartData.activities.canUse[0].isConform" style="color:#6cc236;"><img class="mb-1" src="@/assets/img/cart_confirm.svg" alt="" style="width:16px;height:auto;">已符合</span>
                <span v-if="!cartData.activities.canUse[0].isConform&&cartData.activities.canUse[0].discountType!=='D3'" style="color:#1479fb;">( ! )未符合 差{{cartData.activities.canUse[0].difference}}元享優惠</span>
                <router-link to="/activity/newyeargift" v-if="!cartData.activities.canUse[0].isConform&&cartData.activities.canUse[0].discountType==='D3'" style="color:#1479fb;text-decoration:underline">( ! )未符合 差{{cartData.activities.canUse[0].difference}}件享優惠</router-link>
              </span>
              <input
                v-if="cartData.activities.canUse[0].isConform"
                class="form-check-input coupon-radio ms-auto mt-2 d-md-none"
                type="radio"
                value="event"
                v-model="discountSelect"
                @click="discountRadioSingleClick('event')"
              />
            </div>
            <span class="text-end mt-4 mt-lg-3 d-none d-md-inline" v-if="cartData.activities.canUse[0].isConform">
              <label
                class="form-check-label pe-3"
                for="event2"
              >
                本次使用
              </label>
              <input
                id="event2"
                class="form-check-input coupon-radio"
                type="radio"
                value="event"
                v-model="discountSelect"
                @click="discountRadioSingleClick('event')"
              />
            </span>
          </div>
        </div>
      </div>
      <!-- 愛心捐區塊 -->
      <div class="col-md-10 w-100 mt-5 mb-3" >
        <div>
          <h4 class="bg-gray px-4 py-3">
            愛心捐
          </h4>
          <div class="bg-white d-flex justify-content-between flex-column px-3 px-md-5 py-3">
            <!-- 愛心捐規則 -->
            <div class="d-flex flex-column flex-lg-row ustify-content-between  py-md-3  py-2">
              <div class="bg-primary text-white p-1 me-2 fs-5 flex-shrink-0 " style="width:fit-content;">
                消費回饋
              </div>
              <h5 class="px-0 py-2  px-md-2">
                本次訂單獲得10%購物金
              </h5>
              <span class="fs-7 fs-md-6 px-0 py-1 py-md-2 px-md-2 text-gray-dark">
                (1購物金 = 1元，可用於下次折抵訂單金額25%)
              </span>
            </div>
            <!-- 愛心捐規則結束 -->
            <div class="d-flex flex-column custom-border py-3">
                <!-- 購物金是否愛心捐選擇 -->
                <div class="d-flex flex-column flex-md-row py-2">
                  <!-- <span class="fs-5 fw-bold pb-2 ">
                    我要將購物金轉作「愛心捐」?
                  </span> -->
                  <div class="d-flex flex-column px-0">
                    <div class="d-flex flex-column flex-md-row ">
                      <div class="d-flex flex-column flex-md-row py-1">
                        <Field
                        name="參加愛心捐"
                        id="love"
                        class="ms-3 p-2 form-check-input checked"
                        :class="{ 'is-invalid': errors['愛心捐'] }"
                        type="radio"
                        value="true"
                        v-model="donate.IsDonate"
                        rules="required"
                        ></Field>
                        <label for="love" class="fs-6  py-2 py-md-0 ms-3">我願意將部分/全部購物金轉作「愛心捐<img @click="openDonativeModal()" src="@/assets/img/yesgo_icon-info.svg" alt="愛心品info" class="info-icon-style ms-1"> 」</label>
                      </div>
                      <div class="d-flex flex-column flex-md-row py-1">
                        <Field
                        name="不參加愛心捐"
                        id="dontlove"
                        class="ms-3 p-2 py-md-0 form-check-input"
                        :class="{ 'is-invalid': errors['愛心捐'] }"
                        type="radio"
                        value="false"
                        v-model="donate.IsDonate"
                        rules="required"
                        ></Field>
                        <label for="dontlove" class="fs-6  py-2 py-md-0 ms-3">購物金很好用，請全數保留</label>
                      </div>
                    </div>
                    <div v-if="errors['愛心捐']" class="d-flex text-center field-error my-1">
                      <div>{{errors['愛心捐']}}</div>
                    </div>
                  </div>
                </div>
                <!-- 購物金是否愛心捐選擇結束 -->
                <div v-if="donate.IsDonate === 'true'">
                  <div class="d-flex flex-column flex-md-row py-2 ">
                    <span class=" fs-5 fw-bold pb-2" >
                      請選擇捐出的購物金比例%
                    </span>
                    <input
                    id="five-percent" value="5"
                    v-model="donate.DonatePercent"
                    class="ms-3 p-2 form-check-input checked"
                    type="radio"
                    >
                    <label for="five-percent" class="fs-6 py-2 py-md-0 ms-3">捐出5%，保留購物金5%</label>
                    <input
                    id="ten-percent" value="10"
                    v-model="donate.DonatePercent"
                    class="ms-3 p-2 form-check-input"
                    type="radio"
                    >
                    <label for="ten-percent" class="fs-6 py-2 py-md-0 ms-3">捐出10%，無保留購物金5%</label>
                  </div>
                </div>
                <div class="d-flex flex-column flex-md-row py-2 " v-if="isLove">
                    <div
                    class="bg-primary text-white my-2 my-md-1 p-1 me-2 fs-5 h-50 flex-shrink-0">
                      愛心品平台加碼
                    </div>
                    <span class=" fs-5 fw-bold my-2" >
                      即日起凡購買指定愛心品，平台加碼捐愛心品結帳總金額10%給非營利組織
                    </span>
                </div>
                <div class="row py-2 mx-0 align-items-center" v-if="isLove || donate.IsDonate === 'true'">
                  <span class="col-6 col-md-auto fs-5 fw-bold px-0 py-2">
                    贈與愛心單位
                  </span>
                  <select
                  class="col-6 col-md-3 form-select w-80 w-md-50 w-lg-30 ms-2" name=""
                  v-model="donate.DonateTo"
                  @change="donate.DonateTo = transNumber(donate.DonateTo)"
                  >
                    <option
                    v-for="group in donateList" :key="group+1" :value="group.id"
                    >
                      {{group.name}}
                    </option>
                  </select>
                </div>
                <!-- <div class="row flex-column flex-md-row py-2 mx-0 align-items-center">
                    <div class="d-flex flex-column px-0">
                      <div class="d-flex flex-column flex-md-row ">
                        <span class="col col-md-auto col-md-auto fs-5 fw-bold px-0">
                          填寫捐贈者姓名/公司抬頭
                        </span>
                        <div class="col col-md-6 flex-column">
                          <Field
                          name="捐贈者"
                          class=" mx-0 form-control w-90 w-lg-50 ms-0 ms-md-2 underLine-border"
                          :class="{ 'is-invalid': errors['捐贈者'] }"
                          id="" type="text"
                          v-model="donate.DonateFrom"
                          rules="required"
                          ></Field>
                          <ErrorMessage name="捐贈者" class="invalid-feedback">
                          </ErrorMessage>
                        </div>
                      </div>
                    </div>
                  </div> -->
                <div>
                <span class="fs-7 fs-md-6 px-0 py-1 py-md-2 text-gray-dark">
                  本站將捐出「愛心捐 」給您指定的非營利組織，感謝您的參與!
                </span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 福利金使用 -->
      <div class="col-md-10 w-100 mt-5 mb-3" v-if="!isEmpty&&cartData.rewardMoney.canUse!==0">
        <div>
          <h4 class="bg-gray px-4 py-3">
            福利金使用
          </h4>
          <div
            class="bg-white d-flex justify-content-between flex-column flex-md-row pb-1 pb-md-0"
          >
            <span class="ps-md-5 py-md-3 ps-3 pt-2"><span class="text-primary">福利金 : 本次可使用 {{$currency.currency(cartData.rewardMoney.canUse)}} 元</span> (目前共有 {{$currency.currency(cartData.rewardMoney.total)}} 元)<br>本次剩餘 {{$currency.currency(cartData.rewardMoney.canUse-eMoney)}} 元可使用</span>
            <span class="pe-md-5 py-md-3 ps-3 py-2 text-end">
              本次使用 <input @change="useEmoney()" type="number" ref="eMoneyInputDom" v-model="eMoney" class="w-50 mx-2 text-end" /> 元
            </span>
          </div>
        </div>
      </div>
      <!-- 計算金額UI -->
      <div class="col-md-10 w-100" v-if="!isEmpty">
        <div class="bg-white border px-4 px-lg-5 py-4">
            <div class="d-flex justify-content-between mb-1 ps-md-9 ms-md-3"><span>本次訂單共買商品</span><span>{{ProductNum}}項</span></div>
            <div class="d-flex justify-content-between mb-1 ps-md-9 ms-md-3"><span>商品總金額</span><span>${{$currency.currency(cartData.amountResult.payableAmount)}}元</span></div>
            <div v-if="cartData.amountResult.usedRewardMoney!==0" class="d-flex justify-content-between mb-1 ps-md-9 ms-md-3"><span>福利金折抵</span><span>-${{$currency.currency(cartData.amountResult.usedRewardMoney)}}元</span></div>
            <div v-if="cartData.amountResult.activityDiscount!==0" class="d-flex justify-content-between mb-1 ps-md-9 ms-md-3"><span>活動折扣</span><span>-${{$currency.currency(cartData.amountResult.activityDiscount)}}元</span></div>
            <div v-if="cartData.amountResult.couponDiscount!==0" class="d-flex justify-content-between mb-1 ps-md-9 ms-md-3"><span>折價券折扣</span><span>-${{$currency.currency(cartData.amountResult.couponDiscount)}}元</span></div>
            <div v-if="cartData.amountResult.pointDiscount!==0" class="d-flex justify-content-between mb-1 ps-md-9 ms-md-3"><span>購物金折扣</span><span>-${{$currency.currency(cartData.amountResult.pointDiscount)}}元</span></div>
            <!-- 常溫、低溫運費 -->
            <div v-if="!isLimitShipping" class="d-flex justify-content-between pb-1 ps-md-9 ms-md-3">
              <span>運費</span>
              <div class="text-end">
                <span>${{cartData.shippingInfo[0].shippingFee}}元</span>
                <br>
                <span v-if="!cartData.shippingInfo[0].isConform" class="text-primary px-1" style="font-size:14px;background-color:rgba(248,65,46,0.25);">(再湊${{cartData.shippingInfo[0].balancePrice}}免運)</span>
              </div>
            </div>
            <!-- 滿額出貨運費 -->
            <div v-if="cartData.amountResult.totalShippingFee&&isLimitShipping" class="d-flex justify-content-between pb-1 ps-md-9 ms-md-3">
              <span>運費</span>
              <div class="text-end">
                <span>${{cartData.amountResult.totalShippingFee}}元</span>
              </div>
            </div>
            <!-- 常溫、低溫運費折抵 -->
            <div v-if="cartData.shippingInfo[0].isConform&&!isLimitShipping" class="d-flex justify-content-between mb-1 ps-md-9 ms-md-3"><span>運費折抵</span><span>-${{cartData.shippingInfo[0].shippingFee}}元</span></div>
            <h5 class="text-end border-top">總結帳金額<span class="text-primary fs-2"> ${{$currency.currency(cartData.amountResult.paidAmount)}}</span>元</h5>
          </div>
      </div>
      <!-- 付款方式選擇 -->
      <div class="col-md-10 w-100 mt-5 payment">
        <div class="border">
          <h4 class="bg-gray px-4 py-3">
            選擇付款方式及紅利折抵
            <small class="fs-6">
              <span class="me-3 my-1 my-md-0 d-block d-md-inline">
                <a href="https://card.ubot.com.tw/eCard/bonus/bonus_query.aspx" style="color:#1a73e8;text-decoration: underline" target="_blank">※聯邦信用卡紅利點數查詢</a>
              </span>
              <span class="d-block d-md-inline"><router-link to="/questions?anchor=bonus" style="color:#1a73e8;text-decoration: underline" target="_blank">※聯邦紅利兌換說明</router-link></span>
            </small>
          </h4>
          <div v-for="(item) in cartData.paymentMethods.canUse" :key="item.paymentCode">
            <div class="bg-white px-3 py-2 px-md-5 py-md-3 border-bottom">
              <div class="form-check">
                <input
                  class="form-check-input me-3"
                  type="radio"
                  name="flexRadioDefault2"
                  :id="item.paymentCode"
                  v-model="paymentMethod"
                  :value="item.paymentCode"
                />
                <label class="form-check-label" :for="item.paymentCode">
                  <!-- <span v-html="item.listname"></span> -->
                  <span>{{item.paymentName}}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5 my-5 w-100"  v-if="!isEmpty">
        <button
          type="submit"
          class="btn btn-primary text-light w-100 py-2"
        >
          確定
        </button>
      </div>
      </Form>
      <DonativeModalVue ref="donativeModal"></DonativeModalVue>
    </div>
  </div>
</template>

<script>
import checkToken from '@/assets/js/checkToken.js'
import CardProgress from '@/components/CardProgress.vue'
import DonativeModalVue from '@/components/DonativeModal.vue'
// import moment from 'moment'

export default {
  components: {
    CardProgress,
    DonativeModalVue
  },
  data () {
    return {
      isLimitShipping: false, // * 是否為滿額出貨購物車
      // * API 回應的購物車資料
      cartData: {
        coupons: {
          canUse: []
        }, // * 可使用的折價券
        paymentMethods: {
          canUse: []
        }, // *可使用的付款方式(固定)
        rewardMoney: {}, // * 可使用的福利金與福利金總額
        rewardPoint: {}, // * 可使用的購物金與購物金總額
        items: [],
        amountResult: {},
        shippingInfo: [{}], // * 常溫/低溫配送資訊
        activities: {
          used: [],
          canUse: []
        } // * 活動優惠折扣
      },
      limitShippingCart: [], // ? 滿額出貨整理後 UI 顯示購物車
      rewards: 0, // ? 使用的購物金
      eMoney: 0, // ? 使用的福利金
      radioselect: '', // ? 選擇使用的折價券
      paymentMethod: '', // * 被勾選的付款方式內容
      discountSelect: '', // ? 選擇使用的優惠(三選一)
      postToInfo: {
        paidAmount: 0,
        paymentMethod: '',
        rewardMoney: 0,
        couponId: '',
        pointDiscount: 0
      },
      postToItems: [{}],
      postTotal: {},
      allProductNum: 0, //* 購物車 icon 顯示數字
      ProductNum: 0, // * 購物車商品數量
      isEmpty: false, // ?calculate沒有response
      productsCanUseCoupon: true,
      trackList: [], // ? 追蹤清單商品,
      status: '1',
      isLove: '',
      donate: {
        IsDonate: 'true',
        DonatePercent: 5,
        DonateTo: 1,
        DonateFrom: '聯邦網通科技股份有限公司'
      },
      donateList: []
      // release: true // ? for 9/1 00:00 上線
    }
  },
  watch: {
    // *監聽折價券是否被勾選(被勾選擇回饋點數為0)
    radioselect (n, o) {
      if (n !== '') {
        this.discountSelect = 'coupon'
        this.rewards = 0
        this.eMoney = 0
        // this.event = 0
        // this.coupon = this.radioselect.discountAmount
        // this.countPrice()
        this.calculateCart()
      }
    },
    paymentMethod (n, o) {
      if (n !== '') {
        this.calculateCart()
      }
    },
    '$store.state.isLogOut': {
      handler: function (n) {
        if (n === true) {
          this.toHome()
        }
      }
    }

  },
  methods: {
    // *查看購物車API
    async getData () {
      // ? 清空 cartBart 資訊
      this.$store.commit('getCartBarInfo', {})
      // ? 取得 CheckoutCartList 資訊
      this.cartData = JSON.parse(JSON.stringify(this.$store.state.checkoutCartList))
      // *===此段為愛心捐特殊活動，活動結束可移除
      const findLove = this.cartData.items.filter(item =>
        item?.isLoveProduct
      ).length
      this.isLove = findLove > 0
      if (this.isLove) {
        sessionStorage.setItem('isLove', 'true')
      }
      // *===愛心捐結束
      // ? 檢查是否為滿額出貨購物車
      this.cartData.shippingInfo.forEach((item) => {
        if (item.shippingType !== 'S2' && item.shippingType !== 'S3') {
          this.isLimitShipping = true
        }
      })
      if (this.isLimitShipping) {
        this.turnLimitCart()
      }
      await this.getTrackList()
      // ? 檢查是否符合滿額折活動，若符合自動勾選
      if (this.cartData.activities.canUse.length !== 0 && this.cartData.activities.canUse[0].isConform) {
        this.discountSelect = 'event'
        this.calculateCart()
      } else {
        this.checkCartContent()
      }
      this.view_cartGA() // ? 觸發GA追蹤碼(查看購物車)
    },
    // *檢查購物車所有內容(res)
    checkCart (res) {
      if (!res.data.info) {
        // ?購物車數量歸0
        this.cartData.items = []
        this.isEmpty = true
        // ?計算購物車icon的數量
        this.$store.dispatch('getCartNum')
        this.$router.push('/checkoutboard/checkoutcartlist')
      } else {
        this.cartData = JSON.parse(JSON.stringify(res.data.info))
        this.turnLimitCart() // ? 原購物車 => 滿額出貨購物車
        // ? 將值回塞vuex
        this.$store.commit('getcheckoutCartList', res.data.info)
        this.checkCartContent()
      }
    },
    // !檢查購物車所有內容
    checkCartContent () {
      // ? 檢查白區產品是否都可使用折價券
      this.productsCanUseCoupon = true
      if (this.cartData.items.length !== 0) {
        this.cartData.items.forEach((item) => {
          if (!item.canUseCoupon) {
            this.productsCanUseCoupon = false
          }
        })
      }
      // ?計算購物車icon的數量
      // this.$store.dispatch('getCartNum')
      // ? 計算購物車商品數量
      this.ProductNum = 0
      if (this.cartData.items.length !== 0) {
        this.cartData.items.forEach((item) => {
          this.ProductNum += item.quantity
        })
      }
      this.compareTrackData() // ? 比對追蹤清單陣列資料
      // ? 傳送相關資料給 CartBar
      if (this.cartData.activities.canUse.length !== 0 && this.cartData.activities.canUse[0].discountType !== 'D3') {
        this.$store.commit('getCartBarInfo', {
          text: this.cartData.activities.canUse[0].activityName,
          isShow: !this.isLimitShipping && this.discountSelect !== 'coupon' && this.discountSelect !== 'rewards',
          canUse: this.cartData.activities.canUse[0].isConform,
          difference: this.cartData.activities.canUse[0].difference
        })
      }
    },
    // ? 原購物車 => 滿額出貨購物車
    turnLimitCart () {
      this.limitShippingCart = this.cartData.shippingInfo.filter((item) => {
        return item.shippingType !== 'S2' && item.shippingType !== 'S3'
      })
      this.limitShippingCart.forEach((limitObj) => {
        limitObj.items = []
        this.cartData.items.forEach((cartObj) => {
          if (limitObj.shippingType === cartObj.shippingType) {
            limitObj.items.push(cartObj)
          }
        })
      })
    },
    // ? 滿額出貨購物車 => 原購物車
    turnCartData () {
      this.cartData.items = []
      this.limitShippingCart.forEach((limitObj) => {
        limitObj.items.forEach((item) => {
          this.cartData.items.push(item)
        })
      })
    },
    // ? 判斷是否可使用滿額折扣活動
    judgeIsCanUseEvent () {
      if (this.cartData.activities.length !== 0) {
        if (this.cartData.activities[0].discountType === 'D1') {
          if (this.totalPriceMinusEmoney < this.cartData.activities[0].discountAmount || this.totalPrice <= this.cartData.activities[0].limitPrice) {
            this.isCanUseEvent = false // ? 不可使用滿額折
          } else {
            this.isCanUseEvent = true // ? 可使用滿額折
          }
        } else if (this.cartData.activities[0].discountType === 'D2') {
          if (this.totalPriceMinusEmoney < Math.ceil(this.totalPrice * ((100 - this.cartData.activities[0].discountAmount) / 100)) || this.totalPrice <= this.cartData.activities[0].limitPrice) {
            this.isCanUseEvent = false // ? 不可使用滿額折
          } else {
            this.isCanUseEvent = true // ? 可使用滿額折
          }
        }
      }
    },
    // *產品數量變更
    numMinus (item) {
      item.quantity--
      if (item.quantity < 1) {
        item.quantity = 1
        this.deleteProduct(item)
      } else {
        this.eMoney = 0
        this.rewards = 0
        this.discountSelect = ''
        this.radioselect = ''
        this.updateCartNum(item)
      }
    },
    numPlus (item) {
      item.quantity++
      this.eMoney = 0
      this.rewards = 0
      this.discountSelect = ''
      this.radioselect = ''
      if (item.quantity > item.stock) {
        item.quantity = item.stock
        this.$swal.fire({
          title: '已超過本次可購買數量上限',
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
      this.updateCartNum(item)
    },
    // *產品數量不可輸入空值、0、非正整數
    numInput (item) {
      const rule = /^[0-9]*[1-9][0-9]*$/
      if (item.quantity === '') {
        item.quantity = 1
      } else if (item.quantity > item.stock) {
        item.quantity = item.stock
      } else if (item.quantity === 0) {
        item.quantity = 1
      } else if (!rule.test(item.quantity)) {
        item.quantity = 1
      }
      this.eMoney = 0
      this.rewards = 0
      this.discountSelect = ''
      this.radioselect = ''
      this.updateCartNum(item)
    },
    // *變更數量API
    async updateCartNum (item) {
      if (!this.checkRefreshToken()) {
        return
      }
      // ? 更新第0步mycart購物車商品數量
      const updateData = {
        productId: item.productId,
        optionId: item.optionId,
        quantity: item.quantity
      }
      const url = `${process.env.VUE_APP_API}/api/newCart/change`
      this.axios.post(url, updateData)
        .then((res) => {
          // console.log(res)
          // ?計算購物車icon的數量
          let allProductNum = 0
          res.data.info.items.forEach((item) => {
            allProductNum += item.quantity
          })
          this.$store.commit('getcartIconNum', allProductNum)
        })
      if (this.isLimitShipping) {
        this.turnCartData() // ? 滿額出貨購物車 => 原購物車
      }
      await this.calculateCart()
      setTimeout(() => {
        if (this.cartData.activities.canUse.length !== 0 && this.cartData.activities.canUse[0].isConform) {
          this.discountSelect = 'event'
          this.calculateCart()
        } else {
          this.discountSelect = ''
        }
      }, 500)
    },
    // *刪除品項API
    deleteProduct (item) {
      if (!this.checkRefreshToken()) {
        return
      }
      this.$swal.fire({
        title: '刪除產品',
        text: '您確定要刪除?',
        showCancelButton: true,
        confirmButtonColor: '#F8412E',
        cancelButtonColor: '#4D4D4D',
        confirmButtonText: '確定刪除',
        cancelButtonText: '取消',
        reverseButtons: true,
        input: 'checkbox',
        inputValue: 1,
        inputPlaceholder: '加入追蹤清單'
      })
        .then(async (result) => {
          if (result.isConfirmed) {
            if (result.value === 1) {
              this.addToTracklist(item)
            }
            this.eMoney = 0
            this.rewards = 0
            this.radioselect = ''
            this.discountSelect = ''
            // ? 更新第0步mycart購物車商品數量
            const deleteData = {
              productId: item.productId,
              optionId: item.optionId
            }
            const url = `${process.env.VUE_APP_API}/api/newCart/remove`
            this.axios.post(url, deleteData)
              .then((res) => {
              // console.log(res)
              // ?計算購物車icon的數量
                let allProductNum = 0
                res.data.info.items.forEach((item) => {
                  allProductNum += item.quantity
                })
                this.$store.commit('getcartIconNum', allProductNum)
              })
            if (this.isLimitShipping) {
              this.turnCartData() // ? 滿額出貨購物車 => 原購物車
            }
            this.cartData.items.forEach((cartItem, index) => {
              if (cartItem.productId === item.productId) {
                this.cartData.items.splice(index, 1)
              }
            })
            if (this.cartData.items.length === 0) {
              this.$router.push('/checkoutboard/checkoutcartlist')
              return
            }
            // *===此段為愛心捐特殊活動，活動結束可移除
            const findLove = this.cartData.items.filter(item =>
              item?.isLoveProduct
            ).length
            this.isLove = findLove > 0
            if (this.isLove) {
              sessionStorage.setItem('isLove', 'true')
            } else {
              sessionStorage.removeItem('isLove')
            }
            // *===愛心捐結束
            await this.calculateCart()
            setTimeout(() => {
              if (this.cartData.activities.canUse.length !== 0 && this.cartData.activities.canUse[0].isConform) {
                this.discountSelect = 'event'
                this.calculateCart()
              } else {
                this.discountSelect = ''
              }
            }, 500)
          }
        })
    },
    // *使用福利金
    useEmoney () {
      if (!this.checkRefreshToken()) {
        return
      }
      const rule = /^[0-9]*[1-9][0-9]*$/
      if (this.eMoney > this.cartData.rewardMoney.canUse) {
        this.eMoney = this.cartData.rewardMoney.canUse
      } else if (this.eMoney === '') {
        this.eMoney = 0
      } else if (!rule.test(this.eMoney)) {
        this.eMoney = 0
      }
      if (this.isLimitShipping) {
        this.turnCartData() // ? 滿額出貨購物車 => 原購物車
      }
      this.calculateCart()
    },
    // *讓折價券radio可以取消
    rdoSingleClick (id, index) {
      if (`${id}-${index}` === this.radioselect) {
        this.radioselect = ''
        this.eMoney = 0
        this.calculateCart()
      }
    },
    // *讓會員折扣優惠radio可以取消
    discountRadioSingleClick (discountType) {
      if (discountType === this.discountSelect) {
        this.discountSelect = ''
        this.radioselect = ''
        this.rewards = 0
        this.eMoney = 0
        this.calculateCart()
        return
      }
      this.discountSelect = discountType
      // ? 勾選使用購物金
      if (discountType === 'rewards') {
        this.radioselect = ''
        this.eMoney = 0
        this.rewards = this.cartData.rewardPoint.canUse
      }
      if (discountType === 'coupon') {
        this.rewards = 0
        this.eMoney = 0
      }
      if (discountType === 'event') {
        this.radioselect = ''
        this.rewards = 0
        this.eMoney = 0
      }
      this.calculateCart()
    },
    // *使用回饋
    useRewards () {
      this.discountSelect = 'rewards'
      this.radioselect = ''
      this.eMoney = 0
      const rule = /^[0-9]*[1-9][0-9]*$/
      if (this.rewards > this.cartData.rewardPoint.canUse) {
        this.rewards = this.cartData.rewardPoint.canUse
      } else if (this.rewards === '') {
        this.rewards = 0
      } else if (!rule.test(this.rewards)) {
        this.rewards = 0
      }
      this.calculateCart()
    },
    // TODO 後端計算購物車內容
    calculateCart () {
      const cartItems = this.cartData.items.map((item) => {
        return {
          productId: item.productId,
          optionId: item.optionId,
          quantity: item.quantity
        }
      })
      const calculateData = {
        items: cartItems,
        useRewardPoint: this.rewards,
        useCoupon: this.radioselect ? this.radioselect.split('-')[0] : '',
        useActivities: this.discountSelect === 'event' ? [this.cartData.activities.canUse[0].activityId] : [],
        useRewardMoney: this.eMoney,
        usePaymentMethod: this.paymentMethod
      }
      const url = `${process.env.VUE_APP_API}/api/newCart/cartCalculate`
      this.axios.post(url, calculateData)
        .then((res) => {
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
            if (!res.data.info.paymentMethods.used) {
              this.paymentMethod = ''
            }
          }
          this.checkCart(res)
        })
    },
    // *GA追蹤碼(查看購物車)
    view_cartGA () {
      const itemsData = this.cartData.items
      const datatoGA1 = {
        currency: 'TWD',
        value: this.cartData.amountResult.paidAmount,
        items: JSON.parse(JSON.stringify(itemsData))
      }
      datatoGA1.items.forEach(item => {
        item.id = item.productId
        item.name = item.productName
        item.item_id = item.productId
        item.item_name = item.productName
        item.item_variant = item.optionName
        item.currency = 'TWD'
        delete item.gift
        delete item.imageUrl
        delete item.optionId
        delete item.optionName
        delete item.productId
        delete item.productName
        delete item.stock
      })
      this.$gtag.event('view_cart', datatoGA1)
    },
    // *GA追蹤碼(開始結帳)
    begin_checkoutGA () {
      const itemsData = this.cartData.items
      const datatoGA2 = {
        currency: 'TWD',
        value: this.cartData.amountResult.paidAmount,
        items: JSON.parse(JSON.stringify(itemsData))
      }
      datatoGA2.items.forEach(item => {
        item.id = item.productId
        item.name = item.productName
        item.item_id = item.productId
        item.item_name = item.productName
        item.item_variant = item.optionName
        item.currency = 'TWD'
        delete item.gift
        delete item.imageUrl
        delete item.optionId
        delete item.optionName
        delete item.productId
        delete item.productName
        delete item.stock
      })
      this.$store.commit('refreshDatatoGA', datatoGA2.items)
      this.$gtag.event('begin_checkout', datatoGA2)
      // ? google 廣告追蹤
      const datatoAds = {
        send_to: 'AW-11034505753/DaY9CNb614MYEJnk1I0p',
        value: this.cartData.amountResult.paidAmount,
        currency: 'TWD',
        event_callback: ''
      }
      this.$gtag.event('conversion', datatoAds)
    },
    // *FBQ追蹤碼(開始結帳)
    fbq_checkout () {
      // ? Facebook Pixel 傳入總價格
      window.fbq('track', 'InitiateCheckout', {
        content_type: 'product',
        value: this.cartData.amountResult.paidAmount,
        currency: 'TWD'
      })
    },
    // *前往下一頁確認訂單
    async toCheckoutInfo () {
      if (!this.checkRefreshToken()) {
        return
      }
      // // ?確認必填項目
      // this.$refs.myForm.setErrors({})
      // ?資料處理
      this.donate.IsDonate = this.transType(this.donate.IsDonate)
      this.donate.DonatePercent = this.transNumber(this.donate.DonatePercent)
      // ?若會員選擇捐出購物金，無論有沒有愛心品
      if (this.donate.IsDonate) {
        sessionStorage.setItem('pointToDonate', 'true')
      }
      if (!this.donate.IsDonate) {
        this.donate.DonatePercent = 0
      }
      // if (!this.release) {
      //   sessionStorage.removeItem('isLove')
      //   sessionStorage.removeItem('pointToDonate')
      //   this.donate.IsDonate = false
      //   this.donate.DonatePercent = 0
      // }
      this.postToInfo.paidAmount = this.cartData.amountResult.paidAmount
      this.postToInfo.paymentMethod = this.cartData.paymentMethods.used
      // if (this.cartData.amountResult.paidAmount === 0) {
      //   this.postToInfo.paymentMethod = 'P99'
      // }
      this.postToInfo.rewardMoney = this.cartData.amountResult.usedRewardMoney
      this.postToInfo.couponId = this.cartData.coupons.used
      if (this.postToInfo.couponId === undefined) {
        this.postToInfo.couponId = ''
      }
      this.postToInfo.pointDiscount = this.cartData.amountResult.pointDiscount
      this.postToInfo.totalShippingFee = this.cartData.amountResult.totalShippingFee
      if (!this.postToInfo.paymentMethod) {
        this.$swal.fire({
          title: '請選擇付款方式',
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
        // *深層拷貝
        const itemsData = this.cartData.items
        this.postToItems = JSON.parse(JSON.stringify(itemsData))
        this.postToItems.forEach((item) => {
          delete item.imageUrl
          if (item.gift === null) {
            item.giftId = null
          } else {
            item.giftId = item.gift.giftId
          }
          delete item.gift
          delete item.productName
          delete item.stock
        })
        this.postTotal = {
          items: this.postToItems,
          payInfo: this.postToInfo,
          activities: [],
          donate: this.donate
        }
        if (this.cartData.activities.used.length !== 0) {
          this.postTotal.activities = this.cartData.activities.used
        }
        this.$store.commit('getCheckoutCartInfo', this.postTotal)
        this.begin_checkoutGA() // *GA追蹤碼(開始結帳)
        this.fbq_checkout() // *FBQ(開始結帳)
        this.$router.push('/checkoutboard/checkoutinfo')
      }
    },
    toHome () {
      this.$router.push('/')
    },
    toProduct (item) {
      this.$router.push(`/productboard/product/${item.productId}`)
    },
    checkRefreshToken () {
      // ? 檢查Token是否過期(3小時)
      const AccessToken = checkToken.getAccessToken()
      const RefreshToken = checkToken.getFreshToken()
      if (!AccessToken && RefreshToken) {
        this.$swal.fire({
          title: '頁面逾時，請重新填寫資料',
          allowOutsideClick: false,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.go()
          }
        })
        return null
      }
      return 'pass'
    },
    // *檢查是否有登入(沒登入則回首頁)
    checkCookie () {
      const AccessToken = checkToken.getAccessToken()
      const RefreshToken = checkToken.getFreshToken()
      if (!AccessToken && !RefreshToken) {
        this.toHome()
      }
    },
    // * 取得新的一組 token
    getNewToken () {
      setTimeout(() => {
        const RefreshToken = checkToken.getFreshToken()
        if (RefreshToken) {
          // ? 清除 AccessToken
          checkToken.removeAccessToken()
          const url = `${process.env.VUE_APP_API}/api/members/RefreshToken`
          this.axios({
            method: 'get',
            url: url,
            headers: { Authorization: `Bearer ${RefreshToken}` }
          })
            .then((res) => {
              this.$store.dispatch('loginSetCookie', res.data.info)
            })
        }
      }, 3000)
    },
    addToTracklist (item) {
      if (!this.checkRefreshToken()) {
        return
      }
      const trackData = {
        productId: item.productId,
        optionId: item.optionId,
        sellPrice: item.price,
        stock: item.stock
      }
      const url = `${process.env.VUE_APP_API}/api/wishlist/add`
      this.axios.post(url, trackData)
        .then((res) => {
          this.trackList.push(item) // ? 加入追蹤清單陣列
          item.isAddToTrack = true
          this.$swal.fire({
            toast: true,
            position: 'center',
            title: '商品已加入追蹤清單',
            showConfirmButton: false,
            timer: 1500,
            width: 500,
            background: '#F0F0F2',
            padding: 25,
            iconHtml: '<i class="bi bi-suit-heart-fill"></i>',
            iconColor: '#f00'
          })
          document.querySelector('.swal2-icon').setAttribute('style', 'display: flex; color: rgb(255, 0, 0); border: none; font-size:18px')
        })
    },
    // ?從追蹤清單中移除
    removeFromTracklist (item) {
      if (!this.checkRefreshToken()) {
        return
      }
      const productId = {
        productId: item.productId
      }
      const url = `${process.env.VUE_APP_API}/api/wishlist/remove`
      this.axios.post(url, productId)
        .then((res) => {
          // ? 從追蹤清單陣列移除
          this.trackList.forEach((trackItem, index) => {
            if (trackItem.productId === item.productId) {
              this.trackList.splice(index, 1)
            }
          })
          item.isAddToTrack = false
        })
    },
    // ? 取得追蹤清單資料
    async getTrackList () {
      const url = `${process.env.VUE_APP_API}/api/wishlist/list`
      const res = await this.axios.get(url)
      this.trackList = res.data.info
    },
    // ? 比對追蹤清單資料
    compareTrackData () {
      // ? 商品陣列中加入是否加入追蹤清單的判斷屬性
      this.cartData.items.forEach((item) => {
        item.isAddToTrack = false
      })
      // ? 比對商品陣列與追蹤清單陣列的資料
      this.trackList.forEach((item) => {
        this.cartData.items.forEach((item2) => {
          if (item.productId === item2.productId) {
            item2.isAddToTrack = true
          }
        })
      })
    },
    transType (value) {
      return value === 'true'
    },
    transNumber (string) {
      return Number(string)
    },
    async getDonateList () {
      try {
        const url = `${process.env.VUE_APP_API}/api/NewOrder/DonateFoundationList`
        const res = await this.axios.get(url)
        this.donateList = res.data.info
      } catch (error) {
      }
    },
    openDonativeModal () {
      this.$refs.donativeModal.openModal()
    },
    onInvalidSubmit ({ values, errors, results }) { // !總表單驗證
      this.$swal.fire({
        title: '尚有必填欄位未填寫',
        showConfirmButton: false,
        timer: 2500,
        customClass: {
          title: 'text-class'
        }
      })
    }
  },
  mounted () {
    sessionStorage.removeItem('isLove')
    sessionStorage.removeItem('pointToDonate')
    if (this.$store.state.checkoutCartList.items.length === 0) {
      this.$router.push('/checkoutboard/checkoutcartlist')
      return
    }
    // const now = moment().format('YYYY/MM/DD HH:mm:ss')
    // if (moment(now, 'YYYY/MM/DD HH:mm:ss').isBefore('2023-08-22 00:00:00')) {
    //   this.release = false
    // }
    this.getData()
    this.checkCookie()
    this.getNewToken()
    this.getDonateList()
  }
}
</script>

<style lang="scss" scoped>
.progress-bar {
  background-color: #e9ecef;
}
.step {
  pointer-events: none;
}
.step1 {
  bottom: -100%;
  left: -25%;
  font-weight: bold;
}
.step2,
.step3 {
  bottom: -100%;
  left: -50%;
  font-weight: bold;
}
.accordion-button:not(.collapsed) {
  box-shadow: none;
}
.form-check-input:checked[type='radio'] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type='radio'] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
.form-check-input[type='radio'] {
  border-radius: 0;
}
.form-check-input[type='checkbox'] {
  border-radius: 0;
}
.form-check-input:focus {
  border-color: rgba(0, 0, 0, 0.25);
}
.form-check-input {
  width: 25px;
  height: 25px;
  margin-top: 0;
}
.form-check-input.discount-input{
  position:relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #F8412E;
}
.form-check-input:disabled{
  pointer-events: initial;
}
.form-check-input.discount-input:disabled{
  border: 1px solid #6c757d;
  cursor: not-allowed !important;
}

label.disabled{
  color: #6c757d !important
}
.card-staging {
  .accordion-button::after {
    display: none;
  }
}
svg g {
  path {
    stroke: #6c757d;
  }
  line {
    stroke: #6c757d;
  }
}
.product-content{
  @media (min-width: 1400px) {
    min-width: 488px;
  }
}
.product-name{
  &:hover{
    color: #F8412E !important;
  }
}
.product-img{
  width: 110px;
  @media (max-width: 1399px) {
    width: 80px;
  }
  @media (max-width: 1199px) {
    width: 70px;
  }
}
.num-input{
  width: 100px;
  @media (max-width: 1399px) {
    width: 80px;
  }
  @media (max-width: 1200px) {
    width: 70px;
  }
  @media (max-width: 576px){
    width: 50px;
  }
}
.loading-position{
  width: 200px;
  height: 150px;
  display: inline-block;
  overflow: hidden;
  position: fixed;
  left:46%;
  top:50%;
  @media (max-width: 1399px){
    left:44%;
  }
  @media (max-width: 1299px){
    left:42%;
  }
  @media (max-width: 991px){
    left:41%;
  }
  @media (max-width: 767px){
    left:37%;
  }
  @media (max-width: 575px){
    left:35vw;
    top:40%;
  }
  @media (max-width: 430px){
    left:26vw;
    top:40%;
  }
}

.custom-border{
  border-top: dashed 3px #dee2e6;
}

.underLine-border {
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}
.text-gray-dark {
  // color: #CED4DA;
  color: #6c757d;
}

.inline-center {
  vertical-align: middle;
}

</style>
