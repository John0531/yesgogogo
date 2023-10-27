<template>
  <div class="cartlist py-5 position-relative">
    <div class="row">
      <div class="col-12">
        <div v-if="normalCart.length===0&&coldCart.length===0&&fullShipmentCart.length===0"  class="p-6 bg-white" style="height:280px">
          <h3 v-if="cartData.items.length === 0" class="text-center">目前購物車內無任何商品</h3>
        </div>
        <!-- 常溫宅配 -->
        <div class="mb-4" v-if="normalCart.length!==0">
          <div class="bg-gray px-4 px-lg-2 px-xl-5 py-3 d-flex flex-column flex-lg-row">
            <h4 class="text-primary mb-3 mb-lg-0">{{normalCartShipInfo.shippingTypeName}}({{ normalCartNum }})</h4>
            <div class="d-flex align-items-center ms-lg-7">
              <i class="fas fa-bullhorn fs-6 me-2 text-secondary"></i>
              <h6 class="fs-6 text-primary">商品未滿${{normalCartShipInfo.limitPrice}}，運費${{normalCartShipInfo.shippingFee}}</h6>
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
                <tr class="border-bottom" v-for="(item) in normalCart" :key="item.productId">
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
                        <a v-if="item.isLoveProduct " class="d-inline-block py-1" @click="openDonativeModal()" href="#">
                          <a  class="d-inline-block bg-primary text-white fs-6 rounded rounded-3 py-lg-1 px-2 h-50 flex-shrink-0" href="#">愛心品</a>
                          <p class="d-inline-block fs-6 px-1 text-gray-dark text-center" ><span class="inline-center ">平台加碼捐10%</span><img src="@/assets/img/yesgo_icon-info.svg" alt="愛心品info" class="inline-center info-icon-style ms-1"></p>
                        </a>
                        <!-- <span class="text-primary" v-if="!item.canUseCoupon">*本商品不適用折價券</span> -->
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
              <div class="row py-3 border-bottom mx-2" v-for="(item) in normalCart" :key="item.productId">
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
                    <!-- <span class="text-primary" v-if="!item.canUseCoupon">*本商品不適用折價券</span> -->
                  </div>
                  <p class="mb-2 mb-md-4">$ {{$currency.currency(item.price)}}</p>
                  <a v-if="item.isLoveProduct " class="d-inline-block py-1" @click="openDonativeModal()" href="#">
                    <a  class="d-inline-block bg-primary text-white fs-6 rounded rounded-3 py-lg-1 px-2 h-50 flex-shrink-0" href="#">愛心品</a>
                    <p class="d-inline-block align-items-center fs-7 px-1 text-gray-dark" ><span class="inline-center ">平台加碼捐10%</span><img src="@/assets/img/yesgo_icon-info.svg" alt="愛心品info" class="inline-center  info-icon-style ms-1"></p>
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
            <div class="text-end px-3 px-lg-2 px-xl-4 pb-2 pt-lg-2 bg-white">
              <button type="button" class="btn btn-primary text-white py-1 px-5 rounded-0" @click.prevent="toCheckoutCart('normal')">結帳 ( {{normalCartNum}} )</button>
            </div>
            <div class="text-end px-3 px-lg-2 px-xl-4 py-2">
              <router-link
                class="text-secondary text-decoration-underline"
                to="/"
                >繼續購物</router-link
              >
            </div>
        </div>
        <!-- 低溫宅配 -->
        <div class="mb-4" v-if="coldCart.length!==0">
          <div class="bg-gray px-4 px-lg-2 px-xl-5 py-3 d-flex flex-column flex-lg-row">
            <h4 class="text-primary mb-3 mb-lg-0">{{coldCartShipInfo.shippingTypeName}}({{ coldCartNum }})</h4>
            <div class="d-flex align-items-center ms-lg-7">
              <i class="fas fa-bullhorn fs-6 me-2 text-secondary"></i>
              <h6 class="fs-6 text-primary">商品未滿${{coldCartShipInfo.limitPrice}}，運費${{coldCartShipInfo.shippingFee}}</h6>
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
                <tr class="border-bottom" v-for="(item) in coldCart" :key="item.productId">
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
                        <!-- <span class="text-primary" v-if="!item.canUseCoupon">*本商品不適用折價券</span> -->
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
              <div class="row py-3 border-bottom mx-2" v-for="(item) in coldCart" :key="item.productId">
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
                    <!-- <span class="text-primary" v-if="!item.canUseCoupon">*本商品不適用折價券</span> -->
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
            <div class="text-end px-3 px-lg-2 px-xl-4 pb-2 pt-lg-2 bg-white">
              <button type="button" class="btn btn-primary text-white py-1 px-5 rounded-0" @click.prevent="toCheckoutCart('cold')">結帳 ( {{coldCartNum}} )</button>
            </div>
            <div class="text-end px-3 px-lg-2 px-xl-4 py-2">
              <router-link
                class="text-secondary text-decoration-underline"
                to="/"
                >繼續購物</router-link
              >
            </div>
        </div>
        <!-- 超值滿額配 -->
        <div v-if="fullShipmentCart.length!==0">
          <div class="bg-gray px-4 px-lg-2 px-xl-5 py-3 d-flex">
            <h4 class="text-primary">超值商品配({{ fullShipmentCartNum }})</h4>
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
                <tr class="border-bottom" v-for="(item) in fullShipmentCart" :key="item.productId">
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
                        <!-- <span class="text-primary" v-if="!item.canUseCoupon">*本商品不適用折價券</span> -->
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
              <div class="row py-3 border-bottom mx-2" v-for="(item) in fullShipmentCart" :key="item.productId">
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
                    <!-- <span class="text-primary" v-if="!item.canUseCoupon">*本商品不適用折價券</span> -->
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
            <div class="text-end px-3 px-lg-2 px-xl-4 pb-2 pt-lg-2 bg-white">
              <button type="button" class="btn btn-primary text-white py-1 px-5 rounded-0" @click.prevent="toCheckoutCart('fullShipment')">結帳 ( {{fullShipmentCartNum}} )</button>
            </div>
            <div class="text-end px-3 px-lg-2 px-xl-4 py-2">
              <router-link
                class="text-secondary text-decoration-underline"
                to="/"
                >繼續購物</router-link
              >
            </div>
        </div>
      </div>
    </div>
  </div>
  <DonativeModalVue ref="donativeModal"></DonativeModalVue>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import DonativeModalVue from '@/components/DonativeModal.vue'
// import moment from 'moment'

export default {
  components: {
    DonativeModalVue
  },
  data () {
    return {
      cartData: {
        items: ['1'],
        shippingInfo: [{}] // * 常溫/低溫配送資訊
      },
      // TODO 滿額出貨購物車
      fullShipmentCart: [],
      // TODO 滿額出貨購物車商品總數量
      fullShipmentCartNum: 0,
      // TODO 常溫配送購物車
      normalCart: [],
      // TODO 常溫配送購物車商品總數量
      normalCartNum: 0,
      // TODO 常溫配送購物車運費資訊
      normalCartShipInfo: {},
      // TODO 低溫配送購物車
      coldCart: [],
      // TODO 低溫配送購物車商品總數量
      coldCartNum: 0,
      // TODO 低溫配送購物車運費資訊
      coldCartShipInfo: {},
      clickCartType: '',
      trackList: [] // ? 追蹤清單商品
    }
  },
  methods: {
    async getCartData () {
      try {
        const url = `${process.env.VUE_APP_API}/api/newCart/myCart`
        const res = await this.axios.get(url)
        if (!res.data.info) {
          this.$store.commit('getcartIconNum', 0)
          this.cartData.items = []
          this.normalCart = []
          this.coldCart = []
          this.fullShipmentCart = []
          return
        }
        this.cartData = res.data.info
        this.checkLocalStorage() // ? 檢查LocalStorage是否有錯誤碼
        await this.getTrackList() // ? 取得追蹤清單
        this.compareTrackData()
        this.CartFilter()
      } catch (err) {
      }
    },
    // * 將購物車商品分類為滿額出貨/常溫/低溫
    CartFilter () {
      // * 先篩選滿額出貨商品
      this.fullShipmentCart = this.cartData.items.filter((cartType) => {
        return cartType.shippingType !== 'S2' && cartType.shippingType !== 'S3'
      })
      // * 分別篩選常溫/低溫商品
      this.normalCart = this.cartData.items.filter((cartType) => {
        return cartType.shippingType === 'S2'
      })
      this.coldCart = this.cartData.items.filter((cartType) => {
        return cartType.shippingType === 'S3'
      })
      // * 分別篩選常溫/低溫商品運費相關資訊
      this.cartData.shippingInfo.forEach((item) => {
        if (item.shippingType === 'S2') {
          this.normalCartShipInfo = item
        }
        if (item.shippingType === 'S3') {
          this.coldCartShipInfo = item
        }
      })
      // * 分別計算常溫/低溫/滿額出貨的商品總數量
      this.normalCartNum = 0
      this.normalCart.forEach((item) => {
        this.normalCartNum += item.quantity
      })
      this.coldCartNum = 0
      this.coldCart.forEach((item) => {
        this.coldCartNum += item.quantity
      })
      this.fullShipmentCartNum = 0
      this.fullShipmentCart.forEach((item) => {
        this.fullShipmentCartNum += item.quantity
      })
      // ?計算購物車icon的數量
      let allProductNum = 0
      this.cartData.items.forEach((item) => {
        allProductNum += item.quantity
      })
      this.$store.commit('getcartIconNum', allProductNum)
      this.filterAddOn()
    },
    // ? 前往購物車第一頁，將資料透過 vuex 傳遞
    toCheckoutCart (cartType) {
      if (cartType === 'normal') {
        const normalCartItems = this.normalCart.map((item) => {
          return {
            productId: item.productId,
            optionId: item.optionId,
            quantity: item.quantity
          }
        })
        const postData = {
          items: normalCartItems
        }
        const url = `${process.env.VUE_APP_API}/api/newCart/cartCalculate`
        this.axios.post(url, postData)
          .then((res) => {
            this.$store.commit('getcheckoutCartList', res.data.info)
            this.$router.push('/checkoutboard/checkoutcart')
          })
      }
      if (cartType === 'cold') {
        const coldCartItems = this.coldCart.map((item) => {
          return {
            productId: item.productId,
            optionId: item.optionId,
            quantity: item.quantity
          }
        })
        const postData = {
          items: coldCartItems
        }
        const url = `${process.env.VUE_APP_API}/api/newCart/cartCalculate`
        this.axios.post(url, postData)
          .then((res) => {
            this.$store.commit('getcheckoutCartList', res.data.info)
            this.$router.push('/checkoutboard/checkoutcart')
          })
      }
      if (cartType === 'fullShipment') {
        const fullShipmentCartItems = this.fullShipmentCart.map((item) => {
          return {
            productId: item.productId,
            optionId: item.optionId,
            quantity: item.quantity
          }
        })
        const postData = {
          items: fullShipmentCartItems
        }
        const url = `${process.env.VUE_APP_API}/api/newCart/cartCalculate`
        this.axios.post(url, postData)
          .then((res) => {
            this.$store.commit('getcheckoutCartList', res.data.info)
            this.$router.push('/checkoutboard/checkoutcart')
          })
      }
    },
    // *產品數量變更
    numMinus (item) {
      item.quantity--
      if (item.quantity < 1) {
        item.quantity = 1
        this.deleteProduct(item)
      } else {
        this.updateCartNum(item)
      }
    },
    numPlus (item) {
      item.quantity++
      if (item.quantity > item.stock) {
        item.quantity = item.stock
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
      this.updateCartNum(item)
    },
    // *變更數量API
    updateCartNum (item) {
      // ? 更新第0步mycart購物車商品數量
      const updateData = {
        productId: item.productId,
        optionId: item.optionId,
        quantity: item.quantity
      }
      const url = `${process.env.VUE_APP_API}/api/newCart/change`
      this.axios.post(url, updateData)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.getCartData()
          } else {
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
    },
    // *刪除品項API
    deleteProduct (item) {
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
      }).then((result) => {
        if (result.isConfirmed) {
          if (result.value === 1) {
            this.addToTracklist(item)
          }
          // ? 更新第0步mycart購物車商品數量
          const deleteData = {
            productId: item.productId,
            optionId: item.optionId
          }
          const url = `${process.env.VUE_APP_API}/api/newCart/remove`
          this.axios.post(url, deleteData)
            .then((res) => {
              if (res.data.rtnCode === 0) {
                this.getCartData()
              } else {
                this.$store.commit('getcartIconNum', 0)
                this.cartData.items = []
                this.normalCart = []
                this.coldCart = []
                this.fullShipmentCart = []
              }
            })
        }
      })
    },
    toProduct (item) {
      this.$router.push(`/productboard/product/${item.productId}`)
    },
    addToTracklist (item) {
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
    removeFromTracklist (item) {
      const trackData = {
        productId: item.productId
      }
      const url = `${process.env.VUE_APP_API}/api/wishlist/remove`
      this.axios.post(url, trackData)
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
    checkLocalStorage () {
      if (localStorage.getItem('cartErrorStatus')) {
        this.$swal.fire({
          title: localStorage.getItem('cartErrorStatus'),
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
      localStorage.removeItem('cartErrorStatus')
    },
    openDonativeModal () {
      this.$refs.donativeModal.openModal()
    },
    filterAddOn () {
      // console.log(this.$store.state.checkoutCartList.shippingInfo[0].shippingType)
      switch (this.$store.state.checkoutCartList.shippingInfo[0].shippingType) {
        case 'S2':
          // *常溫過濾
          this.deleteFilterNormal()
          // *更新UI
          break
        case 'S3':
          // *冷凍過濾
          this.deleteFilterCold()
          // *更新UI
          break

        default:
          break
      }
    },
    deleteFilterNormal () {
      if (sessionStorage.getItem('back')) {
        if (this.normalCart.length !== this.$store.state.checkoutCartList.items.length) {
          // *先打calculate產生差異
          const normalCartItems = this.normalCart.map((item) => {
            return {
              productId: item.productId,
              optionId: item.optionId
            }
          })
          // !整理為API格式
          const postData = {
            items: normalCartItems
          }
          // console.log(postData)
          const exurl = `${process.env.VUE_APP_API}/api/newCart/cartCalculate`
          this.axios.post(exurl, postData)
            .then((res) => {
              // !整理res格視為可供簡易比對格式
              const resItems = res.data.info.items.map((item) => {
                return {
                  productId: item.productId,
                  optionId: item.optionId
                }
              })
              const filteredKeywords = normalCartItems.filter((product) =>
                !resItems.some((filterItems) =>
                  product.productId === filterItems.productId && product.optionIdId === filterItems.optionIdId
                )
              )
              // console.log(filteredKeywords)
              // !濾出要移除的加購品，整理為API格式
              const deleteData = {
                productId: filteredKeywords[0].productId,
                optionId: filteredKeywords[0].optionId
              }
              // console.log(deleteData)
              const url = `${process.env.VUE_APP_API}/api/newCart/remove`
              this.axios.post(url, deleteData)
                .then((res) => {
                  if (res.data.rtnCode === 0) {
                    this.getCartData()
                    sessionStorage.removeItem('back')
                  } else {
                    this.$store.commit('getcartIconNum', 0)
                    this.cartData.items = []
                    this.normalCart = []
                    this.coldCart = []
                    this.fullShipmentCart = []
                  }
                })
                .then(
                  this.$swal.fire({
                    title: '不符合活動條件，活動產品已移除',
                    allowOutsideClick: true,
                    confirmButtonColor: '#F8412E',
                    confirmButtonText: '確認',
                    width: 400,
                    customClass: {
                      title: 'text-class',
                      confirmButton: 'confirm-btn-class'
                    }
                  })
                ).then(
                  sessionStorage.removeItem('back')
                )
            })
        }
      }
    },
    deleteFilterCold () {
      if (sessionStorage.getItem('back')) {
        if (this.coldCart.length !== this.$store.state.checkoutCartList.items.length) {
          // *先打calculate產生差異
          const coldCartItems = this.coldCart.map((item) => {
            return {
              productId: item.productId,
              optionId: item.optionId
            }
          })
          const postData = {
            items: coldCartItems
          }
          // console.log(postData)
          const exurl = `${process.env.VUE_APP_API}/api/newCart/cartCalculate`
          this.axios.post(exurl, postData)
            .then((res) => {
              const resItems = res.data.info.items.map((item) => {
                return {
                  productId: item.productId,
                  optionId: item.optionId
                }
              })
              const filteredKeywords = coldCartItems.filter((product) =>
                !resItems.some((filterItems) =>
                  product.productId === filterItems.productId && product.optionIdId === filterItems.optionIdId
                )
              )
              // console.log(filteredKeywords)
              const deleteData = {
                productId: filteredKeywords[0].productId,
                optionId: filteredKeywords[0].optionId
              }
              // console.log(deleteData)
              const url = `${process.env.VUE_APP_API}/api/newCart/remove`
              this.axios.post(url, deleteData)
                .then((res) => {
                  if (res.data.rtnCode === 0) {
                    this.getCartData()
                    sessionStorage.removeItem('back')
                  } else {
                    this.$store.commit('getcartIconNum', 0)
                    this.cartData.items = []
                    this.normalCart = []
                    this.coldCart = []
                    this.fullShipmentCart = []
                  }
                })
                .then(
                  this.$swal.fire({
                    title: '不符合活動條件，活動產品已移除',
                    allowOutsideClick: true,
                    confirmButtonColor: '#F8412E',
                    confirmButtonText: '確認',
                    width: 400,
                    customClass: {
                      title: 'text-class',
                      confirmButton: 'confirm-btn-class'
                    }
                  })
                ).then(
                  sessionStorage.removeItem('back')
                )
            })
        }
      }
    }
  },
  mounted () {
    // this.clickCartType = sessionStorage.getItem('cartType')
    // const now = moment().format('YYYY/MM/DD HH:mm:ss')
    // if (moment(now, 'YYYY/MM/DD HH:mm:ss').isBefore('2023-08-22 00:00:00')) {
    //   this.release = false
    // }
    this.getCartData()
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
  width: 100px;
  @media (max-width: 1399px) {
    width: 80px;
  }
  @media (max-width: 1199px) {
    width: 70px;
  }
}
.not-allow{
  cursor: not-allowed;
}
.num-input{
  width: 100px;
  @media (max-width: 1200px) {
    width: 80px;
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
.nav-tabs .nav-link:hover{
  border-color:transparent;
}
.text-gray-dark {
  // color: #CED4DA;
  color: #6c757d;
}
.inline-center {
  vertical-align: middle;
}

</style>
