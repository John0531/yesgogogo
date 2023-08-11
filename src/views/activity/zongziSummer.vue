<template>
  <div class="Bg" >
    <div class="foodContainer position-relative"   style="overflow:hidden;">
      <!-- 雪花特效 -->
      <!-- <div id="confetti"><canvas ></canvas></div> -->
      <!-- PC XL版 banner animate-this-element-xl-->
      <div
        class="headerxl headergif d-none d-xl-block  position-relative"
      >
        <!-- PC輪播活動 animate-this-element-xl -->
        <div class="position-absolute bottom-0 start-50 translate-middle-x">
          <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/kv_pc_bg2.png"
          alt="定點粽子"
          class="zongziImg"
          >
        </div>
        <div
          class="d-flex position-absolute start-50 translate-middle-x animate-this-element-xl kv-title "
        >
          <div class="position-relative boat">
            <div class="events-lg position-absolute "  >
              <swiper
                :direction="'vertical'"
                class="eventlgSwiper "
                :loop="true"
                :spaceBetween="0"
                :initialSlide="1"
                :speed="400"
                :autoplay="{
                  delay: 2000,
                  disableOnInteraction: false
                }"
                :navigation="false"
              >
                <swiper-slide>
                  <img
                    class="img-fluid  "
                    src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/kv-pc-title-slider-t1.png"
                    alt="免費領券折300"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    class="img-fluid  "
                    src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/kv-pc-title-slider-t2.png"
                    alt="全站最高回饋21%"
                  />
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
      <!-- PC LG版 banner animate-this-element-->
      <div
        class="headerxl headergif d-none d-lg-block  d-xl-none position-relative"
      >
        <div class="position-absolute bottom-0 start-50 translate-middle-x">
          <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/kv_pc_bg2.png"
          alt="定點粽子"
          class="zongziImg"
          >
        </div>
        <!-- PC輪播活動 -->
        <div
          class="d-flex position-absolute start-50 translate-middle animate-this-element kv-title "
        >
          <div class="position-relative boat">
            <div class="events-lg position-absolute  "  >
              <swiper
                :direction="'vertical'"
                class="eventlgSwiper "
                :loop="true"
                :spaceBetween="0"
                :initialSlide="1"
                :speed="400"
                :autoplay="{
                  delay: 2000,
                  disableOnInteraction: false
                }"
                :navigation="false"
              >
                <swiper-slide>
                  <img
                    class="img-fluid  "
                    src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/kv-pc-title-slider-t1.png"
                    alt="免費領券折300"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    class="img-fluid  "
                    src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/kv-pc-title-slider-t2.png"
                    alt="全站最高回饋21%"
                  />
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
      <!-- 手機版 banner animate-this-element-mb-->
      <div class="header d-lg-none " >
        <div class="d-flex position-absolute start-50 translate-middle-x animate-this-element-mb kv-title">
          <!-- 手機輪播  -->
          <div class="position-relative boat">
            <div class="events position-absolute ">
              <swiper
                :direction="'vertical'"
                class="eventSwiper"
                :loop="true"
                :spaceBetween="0"
                :initialSlide="1"
                :autoplay="{
                  delay: 2000,
                  disableOnInteraction: false
                }"
                :navigation="false"
              >
                <swiper-slide>
                  <img
                    class="img-fluid  "
                    src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/kv-pc-title-slider-t1.png"
                    alt="免費領券折300"
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    class="img-fluid  "
                    src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/kv-pc-title-slider-t2.png"
                    alt="全站最高回饋21%"
                  />
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
      <!-- 活動按鈕專區 -->
      <div class="activitiesArea">
        <!-- PC各類活動 -->
        <div class="d-none d-lg-block  mb-4 mb-md-0  pb-4 line1">
          <div class="wishfulContainerBox py-2 py-md-3 py-lg-5">
            <div class="row  ">
              <div class="col-8 p-0">
                <div class="row m-0">
                  <a
                    v-if="activitiesImgs[0]"
                    :href="activitiesImgs[0].targetUrl"
                    class="col-6  d-block hvr-bob "
                    @click.prevent="goHyperText($refs.event2)"
                    ><img
                      v-if="activitiesImgs[0]"
                      :src="activitiesImgs[0].image"
                      class="img-fluid w-100"
                      alt=""
                  /></a>
                  <a
                    v-if="activitiesImgs[1]"
                    :href="activitiesImgs[1].targetUrl"
                    class="col-6  d-block hvr-bob "
                    @click.prevent="goHyperText($refs.event1)"
                    ><img
                      v-if="activitiesImgs[1]"
                      :src="activitiesImgs[1].image"
                      class="img-fluid w-100"
                      alt=""
                  /></a>
                  <a
                  v-if="activitiesImgs[2]"
                  :href="activitiesImgs[2].targetUrl"
                  class="col-12   d-block hvr-bob mb-1"
                  ><img
                    v-if="activitiesImgs[2]"
                    :src="activitiesImgs[2].image"
                    class="img-fluid w-100"
                    alt=""
                                /></a>
                </div>
              </div>
              <div class="col-4">
                <div class="row m-0">
                  <a
                    v-if="activitiesImgs[3]"
                    :href="activitiesImgs[3].targetUrl"
                    class="col-12   d-block hvr-bob mb-1 p-0"
                    ><img
                      v-if="activitiesImgs[3]"
                      :src="activitiesImgs[3].image"
                      class="img-fluid w-100"
                      alt=""
                  /></a>
                  <a
                  v-if="activitiesImgs[4]"
                  :href="activitiesImgs[4].targetUrl"
                  class="col-12   d-block hvr-bob mb-1 p-0"
                  ><img
                    v-if="activitiesImgs[4]"
                    :src="activitiesImgs[4].image"
                    class="img-fluid w-100"
                    alt=""
                                /></a>
                </div>
            </div >
              </div>
          </div>
        </div>
        <!-- 手機板各類活動 -->
        <div class="d-lg-none  justify-content-between line1MB  mx-0 mx-md-3 pt-1 pb-3">
          <div class="wishfulContainerMB py-4 py-md-5">
            <div class="row g-1">
              <a
                v-if="activitiesImgsMb[0]"
                @click.prevent="goHyperText($refs.event2)"
                class="col-6  d-block hvr-bob mb-1"
                ><img
                  v-if="activitiesImgsMb[0]"
                  :src="activitiesImgsMb[0].image"
                  class="img-fluid"
                  alt=""
              /></a>
              <a
                v-if="activitiesImgsMb[1]"
                  @click.prevent="goHyperText($refs.event1)"
                class="col-6  d-block hvr-bob mb-1"
                ><img
                  v-if="activitiesImgsMb[1]"
                  :src="activitiesImgsMb[1].image"
                  class="img-fluid"
                  alt=""
              /></a>
              <a
                v-if="activitiesImgsMb[2]"
                :href="activitiesImgsMb[2].targetUrl"
                class="col-6  d-block hvr-bob mb-1"
                ><img
                  v-if="activitiesImgsMb[2]"
                  :src="activitiesImgsMb[2].image"
                  class="img-fluid"
                  alt=""
              /></a>
              <a
                v-if="activitiesImgsMb[3]"
                :href="activitiesImgsMb[3].targetUrl"
                class="col-6  d-block hvr-bob mb-1"
                ><img
                  v-if="activitiesImgsMb[3]"
                  :src="activitiesImgsMb[3].image"
                  class="img-fluid"
                  alt=""
              /></a>
              <a
                v-if="activitiesImgsMb[4]"
                :href="activitiesImgsMb[4].targetUrl"
                class="col-12  d-block hvr-bob mb-1"
                ><img
                  v-if="activitiesImgsMb[4]"
                  :src="activitiesImgsMb[4].image"
                  class="img-fluid"
                  alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
      <!-- 區塊3：領券活動 -->
      <div class="couponList pt-3 pb-4 pb-md-6 pb-lg-3" ref="coupon" id="coupon" name="coupon">
        <div class="wishfulContainer pb-2 pb-md-4 pb-lg-5">
          <div class="container">
            <!-- title -->
            <div class="d-flex justify-content-center " >
              <img
                v-if="title[0]"
                :src="title[0].image"
                alt="拿優惠，領券現折PC"
                class="img-fluid d-none d-lg-inline"
              />
              <img
                v-if="titleMb[0]"
                :src="titleMb[0].image"
                alt="拿優惠，領券現折MB"
                class="img-fluid d-lg-none "
              />
            </div>
            <div class="row specialProducts">
              <div
                class="specialProductItem col-6 text-center"
                v-for="coupon in couponList"
                :key="coupon + '1'"
              >
                <a
                  href="#"
                  class="d-block hvr-bob"
                 @click.prevent="getCoupon(coupon.targetUrl)"
                >
                  <img
                    :src="coupon.image"
                    alt="拿優惠，領券現折"
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 熱銷名粽榜 -->
      <div class="block4_1">
        <div class="wishfulContainer">
          <div class="container ">
              <div
                href="https://www.yesgogogo.com/productboard/productList/S072677"
                class="d-flex text-center fluid-title2 pt-4 pt-md-5"
              >
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_MB_09.png"
                  alt="熱銷名粽榜mb"
                  class="img-fluid d-lg-none"
                />
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_PC_06_title.png"
                  alt="熱銷名粽榜pc"
                  class="img-fluid d-none d-lg-inline"
                />
              </div>
              <div class="d-flex justify-content-end pe-4 pb-mb-0  ">
                <a
                  :href="productsLink"
                  class="d-block w-20 text-end hvr-grow"
                >
                  <img
                    src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/btn_more_wh.png"
                    alt="看更多按鈕"
                    class="img-fluid "
                  />
                </a>
              </div>
            <div class="hotProducts">
              <swiper
                class=" mt-3 mt-md-3 position-relative"
                :slidesPerView="2.3"
                :spaceBetween="15"
                :breakpoints="{
                  576: {
                    slidesPerView: 2.3,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  992: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  }
                }"
                :navigation="{
                  nextEl: '#fes-next1',
                  prevEl: '#fes-prev1'
                }"
              >
                <swiper-slide v-for="dishes in productsList" :key="dishes.productId">
                  <div class="prd-item bg-white h-100 border-0 rounded-0 ">
                    <router-link :to="`/productboard/product/${dishes.productId}`"
                        class="d-block prd-link text-secondary border-0"
                    >
                        <div class="ratio ratio-1x1">
                          <img :src="dishes.productImage" class="img-fluid p-1 p-md-2 " :alt="dishes.productName">
                        </div>
                        <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-5">{{dishes.slogan}}</div>
                        <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                          <p class="card-text text-dark text-center mt-0 prd-name fs-6">{{ dishes.productName }}</p>
                          <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                            <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                              >${{ dishes.oldPrice &lt; 0 ? 'xxx': $currency.currency(dishes.oldPrice) }}
                              </del
                            >
                            <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6"
                              >特價 <span class="prd-currency">$</span
                              ><span
                                class="sell-price"
                                >{{ dishes.price &lt; 0 ? 'xxx': $currency.currency(dishes.price) }}</span
                              ></span
                            >
                          </div>
                        </div>
                    </router-link>
                  </div>
                </swiper-slide>
              </swiper>
              <div id="fes-prev1" class="swiper-button-prev"></div>
              <div id="fes-next1" class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 粽夏爆品5折up -->
      <div class="block4_2">
        <div class=" pt-4 pb-3">
          <div class="wishfulContainer pb-2 pb-md-4 pb-lg-5">
            <div class="container mt-2 px-0">
              <!-- title -->
              <div class="d-flex justify-content-center  fluid-title" >
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_PC_09_title.png"
                  alt="粽夏爆品5折up"
                  class="img-fluid d-none d-lg-inline"
                />
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_MB_11.png"
                  alt="粽夏爆品5折up"
                  class="img-fluid d-inline d-lg-none"
                />
              </div>
              <div class="row g-0 px-lg-6 mid-bg-1">
                  <div
                    class="specialProductItem col-6 col-lg-4 text-center p-2"
                    v-for="dishes in dishesList"
                    :key="dishes + '1'"
                  >
                    <a
                      href="#"
                      class="d-block hvr-bob "
                      @click.prevent="recordClickHeight(dishes.targetUrl)"
                    >
                      <img
                        :src="dishes.image"
                        alt="粽夏爆品5折up"
                        class="w-100"
                      />
                    </a>
                  </div>
              </div>
              <div class="d-flex px-2" >
                <a :href="brandsList[0].targetUrl" v-if="brandsList[0]">
                  <img
                    :src="brandsList[0].image"
                    alt="SK-2"
                    class="img-fluid py-5 d-none d-lg-block"
                    >
                </a>
                <a :href="brandsListMb[0].targetUrl" v-if="brandsListMb[0]">
                  <img
                    :src="brandsListMb[0].image"
                    alt="SK-2MB"
                    class="img-fluid py-3 d-block d-lg-none"
                    >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="group">
        <!-- 傳統南部粽 -->
        <div class="pt-3 pt-md-5 pt-mb-5 pb-1 pb-md-3 ">
          <div class="wishfulContainer pb-2 pb-md-4 pb-lg-5">
            <div class="container position-relative ">
              <a
                href="#"
                class="d-flex text-center fluid-titleS"
              >
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_MB_10_T1.png"
                  alt="傳統南部粽mb"
                  class="img-fluid d-lg-none"
                />
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_PC_10_T1_02.png"
                  alt="傳統南部粽pc"
                  class="img-fluid d-none d-lg-inline"
                />
              </a>
              <div class="mid-bg-2">
                <div class="d-flex justify-content-end pt-1 pt-md-2   pe-4 pb-mb-0 ">
                  <a
                    :href="this.foodList01Link"
                    class="d-block w-20 text-end hvr-grow"
                  >
                    <img
                      src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/btn_more_y.png"
                      alt="看更多按鈕"
                      class="img-fluid "
                    />
                  </a>
                </div>
                <!-- 傳統南部粽 商品 PC-->
                <div class="row  justify-content-center  g-0  px-2">
                  <div
                    class="col-6 col-lg-3 mb-3 mt-2 p-1"
                    v-for="product in foodList01"
                    :key="product + '1'"
                  >
                    <div
                      class="prd-item hvr-bob"
                      :class="{ 'sold-out': product.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${product.productId}`"
                        class="prd-link text-secondary text-decoration-none"
                      >
                        <img :src="product.productImage" class="prd-fit img-fluid p-1 p-md-2" :alt="product.productName">
                        <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-5">{{product.slogan}}</div>
                        <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                          <p class="card-text text-dark text-center mt-0 prd-name fs-6">{{ product.productName }}</p>
                          <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                            <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                              >${{ product.oldPrice &lt; 0 ? 'xxx': $currency.currency(product.oldPrice) }}
                              </del
                            >
                            <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6"
                              >特價 <span class="prd-currency">$</span
                              ><span
                                class="sell-price"
                                >{{ product.price &lt; 0 ? 'xxx': $currency.currency(product.price) }}</span
                              ></span
                            >
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 經典北部粽 -->
        <div class=" pt-3 pt-mb-5 pb-1 pb-md-3">
          <div class="wishfulContainer pb-2 pb-md-4 pb-lg-5">
            <div class="container position-relative">
              <a
                href="#"
                class="d-flex text-center fluid-titleS"
              >
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_MB_10_T2.png"
                  alt="經典北部粽mb"
                  class="img-fluid d-lg-none"
                />
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_PC_10_T2_02.png"
                  alt="經典北部粽pc"
                  class="img-fluid d-none d-lg-inline"
                />
              </a>
              <div class="mid-bg-2">
                <div class="d-flex justify-content-end pt-1 pt-md-2 pe-4 pb-mb-0  ">
                  <a
                    :href="this.foodList02Link"
                    class="d-block w-20 text-end hvr-grow"
                  >
                    <img
                      src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/btn_more_y.png"
                      alt="看更多按鈕"
                      class="img-fluid "
                    />
                  </a>
                </div>
                <!-- 經典北部粽 商品 -->
                <div class="row  justify-content-center  g-0  px-2">
                  <div
                    class="col-6 col-lg-3 mb-3 mt-2 p-1"
                    v-for="product in foodList02"
                    :key="product + '1'"
                  >
                    <div
                      class="prd-item hvr-bob"
                      :class="{ 'sold-out': product.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${product.productId}`"
                        class="prd-link text-secondary text-decoration-none"
                      >
                        <img :src="product.productImage" class="prd-fit img-fluid p-1 p-md-2" :alt="product.productName">
                        <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-5">{{product.slogan}}</div>
                        <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                          <p class="card-text text-dark text-center mt-0 prd-name fs-6">{{ product.productName }}</p>
                          <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                            <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                              >${{ product.oldPrice &lt; 0 ? 'xxx': $currency.currency(product.oldPrice) }}
                              </del
                            >
                            <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6"
                              >特價 <span class="prd-currency">$</span
                              ><span
                                class="sell-price"
                                >{{ product.price &lt; 0 ? 'xxx': $currency.currency(product.price) }}</span
                              ></span
                            >
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 特色風味粽 -->
        <div class=" pt-3 pt-mb-5 pb-1 pb-md-3">
          <div class="wishfulContainer pb-2 pb-md-4 pb-lg-5">
            <div class="container position-relative">
              <a
                href="https://www.yesgogogo.com/productboard/productList/S072640"
                class="d-flex text-center fluid-titleS"
              >
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_MB_10_T3.png"
                  alt="特色風味粽mb"
                  class="img-fluid d-lg-none"
                />
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_PC_10_T3_02.png"
                  alt="特色風味粽pc"
                  class="img-fluid d-none d-lg-inline"
                />
              </a>
              <div class="mid-bg-2">
                <div class="d-flex justify-content-end pt-1 pt-md-2 pe-4 pb-mb-0 ">
                  <a
                    :href="this.foodList03Link"
                    class="d-block w-20 text-end hvr-grow"
                  >
                    <img
                      src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/btn_more_y.png"
                      alt="看更多按鈕"
                      class="img-fluid "
                    />
                  </a>
                </div>
                <!-- 特色風味粽 商品 -->
                <div class="row  justify-content-center  g-0  px-2">
                  <div
                    class="col-6 col-lg-3 mb-3 mt-2 p-1"
                    v-for="product in foodList03"
                    :key="product + '1'"
                  >
                    <div
                      class="prd-item hvr-bob"
                      :class="{ 'sold-out': product.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${product.productId}`"
                        class="prd-link text-secondary text-decoration-none"
                      >
                        <img :src="product.productImage" class="prd-fit img-fluid p-1 p-md-2" :alt="product.productName">
                        <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-5">{{product.slogan}}</div>
                        <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                          <p class="card-text text-dark text-center mt-0 prd-name fs-6">{{ product.productName }}</p>
                          <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                            <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                              >${{ product.oldPrice &lt; 0 ? 'xxx': $currency.currency(product.oldPrice) }}
                              </del
                            >
                            <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6"
                              >特價 <span class="prd-currency">$</span
                              ><span
                                class="sell-price"
                                >{{ product.price &lt; 0 ? 'xxx': $currency.currency(product.price) }}</span
                              ></span
                            >
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 好吃甜品粽 -->
        <div class=" pt-3 pt-mb-5 pb-1 pb-md-3">
          <div class="wishfulContainer pb-2 pb-md-4 pb-lg-5">
            <div class="container position-relative">
              <a
                href="#"
                class="d-flex text-center fluid-titleS"
              >
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_MB_10_T4.png"
                  alt="好吃甜品粽mb"
                  class="img-fluid d-lg-none"
                />
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_PC_10_T4_02.png"
                  alt="好吃甜品粽pc"
                  class="img-fluid d-none d-lg-inline"
                />
              </a>
              <div class="mid-bg-2">
                <div class="d-flex justify-content-end pt-1 pt-md-2 pe-4 pb-mb-0 ">
                  <a
                    :href="this.foodList04Link"
                    class="d-block w-20 text-end hvr-grow"
                  >
                    <img
                      src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/btn_more_y.png"
                      alt="看更多按鈕"
                      class="img-fluid "
                    />
                  </a>
                </div>
                <!-- 好吃甜品粽 商品 -->
                <div class="row  justify-content-center  g-0  px-2">
                  <div
                    class="col-6 col-lg-3 mb-3 mt-2 p-1"
                    v-for="product in foodList04"
                    :key="product + '1'"
                  >
                    <div
                      class="prd-item hvr-bob"
                      :class="{ 'sold-out': product.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${product.productId}`"
                        class="prd-link text-secondary text-decoration-none"
                      >
                        <img :src="product.productImage" class="prd-fit img-fluid p-1 p-md-2" :alt="product.productName">
                        <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-5">{{product.slogan}}</div>
                        <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                          <p class="card-text text-dark text-center mt-0 prd-name fs-6">{{ product.productName }}</p>
                          <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                            <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                              >${{ product.oldPrice &lt; 0 ? 'xxx': $currency.currency(product.oldPrice) }}
                              </del
                            >
                            <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6"
                              >特價 <span class="prd-currency">$</span
                              ><span
                                class="sell-price"
                                >{{ product.price &lt; 0 ? 'xxx': $currency.currency(product.price) }}</span
                              ></span
                            >
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 粽夏絕配 -->
        <div class=" pt-3 pt-mb-5 pb-1 pb-md-3">
          <div class="wishfulContainer pb-2 pb-md-4 pb-lg-5">
            <div class="container position-relative">
              <a
                href="#"
                class="d-flex text-center fluid-titleS"
              >
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_MB_10_T5.png"
                  alt="粽夏絕配mb"
                  class="img-fluid d-lg-none"
                />
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_PC_10_T5_02.png"
                  alt="粽夏絕配pc"
                  class="img-fluid d-none d-lg-inline"
                />
              </a>
              <div class="mid-bg-2">
                <div class="d-flex justify-content-end pt-1 pt-md-2 pe-4 pb-mb-0 ">
                  <a
                    :href="this.foodList05Link"
                    class="d-block w-20 text-end hvr-grow"
                  >
                    <img
                      src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/btn_more_y.png"
                      alt="看更多按鈕"
                      class="img-fluid "
                    />
                  </a>
                </div>
                <!-- 粽夏絕配 商品 -->
                <div class="row  justify-content-center  g-0  px-2">
                  <div
                    class="col-6 col-lg-3 mb-3 mt-2 p-1"
                    v-for="product in foodList05"
                    :key="product + '1'"
                  >
                    <div
                      class="prd-item hvr-bob"
                      :class="{ 'sold-out': product.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${product.productId}`"
                        class="prd-link text-secondary text-decoration-none"
                      >
                        <img :src="product.productImage" class="prd-fit img-fluid p-1 p-md-2" :alt="product.productName">
                        <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-5">{{product.slogan}}</div>
                        <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                          <p class="card-text text-dark text-center mt-0 prd-name fs-6">{{ product.productName }}</p>
                          <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                            <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                              >${{ product.oldPrice &lt; 0 ? 'xxx': $currency.currency(product.oldPrice) }}
                              </del
                            >
                            <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6"
                              >特價 <span class="prd-currency">$</span
                              ><span
                                class="sell-price"
                                >{{ product.price &lt; 0 ? 'xxx': $currency.currency(product.price) }}</span
                              ></span
                            >
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="menuCategory pt-3 pb-3">
          <div class="pt-3 pt-mb-5 pb-1 pb-md-3">
            <div class="wishfulContainer pb-2 pb-md-4 pb-lg-5">
              <div class="container   ">
                <!-- 強檔品牌 -->
                <a
                  href="#"
                  class="d-flex text-center fluid-title2"
                >
                  <img
                    src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_MB_26.png"
                    alt="強檔品牌mb"
                    class="img-fluid d-lg-none"
                  />
                  <img
                    src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_PC_29.png"
                    alt="強檔品牌pc"
                    class="img-fluid d-none d-lg-inline"
                  />
                </a>
                <div class="row g-0 px-1 px-lg-5 mid-bg-3">
                    <div
                      class="specialProductItem col-6 col-lg-3 text-center p-2"
                      v-for="brand in brandlList"
                      :key="brand + '1'"
                    >
                      <a
                        :href="brand.targetUrl"
                        class="d-block hvr-bob"
                        @click.prevent="recordClickHeight(brand.targetUrl)"
                      >
                        <img
                          :src="brand.image"
                          alt="強檔品牌"
                          class="w-90"
                        />
                      </a>
                    </div>
                </div>
                <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_MB_35.png" alt="活動底部" class="img-fluid d-block d-lg-none fluid-bottom ">
                <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_PC_36.png" alt="活動底部" class="img-fluid d-none d-lg-block fluid-bottom ">
              </div>
            </div>
          </div>
          <!-- 熱門活動 -->
          <div class="wishfulContainer ">
            <div class="container   pb-2 pb-md-4 pb-lg-5 ">
              <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_MB_39.png" alt="熱門活動標題mb" class="img-fluid d-block d-lg-none">
              <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_PC_40.png" alt="熱門活動標題pc" class="img-fluid d-none d-lg-block">
              <div class="bg-hot px-4">
                <div class="hotEvents">
                  <swiper
                    class="hotSwiper swiper"
                    :slidesPerView="2"
                    :spaceBetween="15"
                    :watchOverflow=true
                    :breakpoints="{
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      }
                    }"
                    :pagination="{
                      el: '.swiper-pagination',
                      type: 'bullets',
                      clickable: true
                    }"
                  >
                    <swiper-slide v-for="hot in hotEventsList" :key="hot.productId">
                      <a href="#" @click.prevent="recordClickHeight(hot.targetUrl)" class="d-block prd-hover">
                        <img :src="hot.image" class="img-fluid" alt="theme">
                      </a>
                    </swiper-slide>
                  </swiper>
                  <div class="swiper-pagination text-center swiperPagination"
                      style="position: absolute;left: 50%;transform: translate(-50%, -50%);">
                  </div>
                </div>
              </div>
              <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_MB_49.png" alt="熱門活動底部" class="img-fluid d-block d-lg-none">
              <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/layout_PC_47.png" alt="熱門活動底部" class="img-fluid d-none d-lg-block">
            </div>
          </div>
          <!-- 按鈕 -->
          <div class="d-flex justify-content-center ">
            <router-link to="/" class="d-none d-md-block hvr-grow">
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/btn_more.png"
                alt="看更多商品"
                class="img-fluid"
              />
            </router-link>
            <router-link to="/" class="d-flex d-md-none w-60 w-md-100 justify-content-center">
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziSummer/btn_more.png"
                alt="看更多商品"
                class="img-fluid"
              />
            </router-link>
          </div>
        <div class="py-3 " style="color:#006633">
          <div class="container">
            <div class="col-sm-auto mb-2 flex-column">
              <div class="fs-5 py-1 text-start d-block fw-bold mb-2">
                活動詳情
              </div>
              <div class="fs-5">活動期間：2023/5/18 00:00-6/15 23:59</div>
              <!-- ==下錨點1== -->
              <a id="event1" name="event1" ref="event1"></a>
              <div class="fw-bold fs-5 py-1 text-start d-flex">
                <div>一、全站滿$1680送$200購物金</div>
              </div>
            </div>
            <ol class="">
              <li>
                <span
                  >全站商品單筆消費滿$1680送$200購物金，一筆訂單回饋一次，買愈多送愈多。例如:有3筆訂單金額滿$1680，即可獲得$600購物金。</span
                >
              </li>
              <li>
                回饋將於7/31前發送至會員帳戶內。
              </li>
            </ol>
            <!-- ==下錨點2== -->
            <a id="event2" name="event2" ref="event2"></a>
            <div class="col-sm-auto mb-2 flex-column">
              <div class="fw-bold fs-5 py-1 text-start d-flex">
                <div >二、筆筆消費回饋10%無上限</div>
              </div>
            </div>
            <ol class="" >
              <li>
                <span
                  >全站商品不限消費金額，筆筆訂單送10%購物金，回饋無上限。</span
                >
              </li>
              <li>
                回饋將於所有商品出貨後15日發送至會員帳戶內。
              </li>
              <li>
                活動詳情：
                <a href="https://www.yesgogogo.com/activity/2023_memberbonus/tenpercent" class="hvr-grow fw-bold" style="color:#FFFF00">【10%回饋大方送】 </a>
              </li>
            </ol>
            <!-- ==下錨點3== -->
            <a id="event3" name="event3" ref="event3"></a>
            <div class="col-sm-auto mb-2 flex-column">
              <div class="fw-bold fs-5 py-1 text-start d-flex">
                <div >三、拿優惠! 領券現折$300</div>
              </div>
            </div>
            <ol class="" >
              <li>
                於本活動頁面可領取折價券300元，活動期間每會員限領乙次。
              </li>
              <li>
                折價券面額為 $100×3張(消費滿$101可使用)、$200×1張(消費滿$1,800可使用)。全站商品適用，限票券與部分專案商品不得使用。
              </li>
              <li>
                折價券使用期限及規範，可至 yesgogogo 購物網登入會員中心的「我的優惠券」→「折價券」內查看券面說明。
              </li>
              <li>
                使用折價券時，若訂單取消、退貨或任何不可歸咎於 yesgogogo 購物網之因素導致訂單未成立，恕不補發。
              </li>
            </ol>
            <!-- 注意事項 -->
            <div class="col-sm-auto mb-2 flex-column">
              <div class="fs-5 py-1 text-start d-block fw-bold">注意事項</div>
            </div>
            <ol class="">
              <li>
                $1購物金=1元新台幣，可於下次消費折抵訂單金額25%。(票券商品與部分專案商品不適用)。
              </li>
              <li>
                上述活動1、活動2回饋，以該筆訂單結帳金額計算(扣除折價券、購物金等優惠活動)。
              </li>
              <li>
                參加活動者須為完成訂單始符合認列資格，若因訂單取消、退貨，則該筆訂單不得要求列入計算，不符合活動資格。
              </li>
              <li>
                本活動回饋不適用於員購、企業採購等專案賣場及企業帳號訂單。
              </li>
              <li>
                活動頁呈現之商品名稱、價格、顏色、規格、數量，若與購物車之呈現有所不符，以購物車之內容為準。
              </li>
              <li>
                活動事項皆載明於網頁中，參加本活動者視為同意接受本活動注意事項之規範，參加人不符合或違反本活動規定事項者，不可歸責於本公司，本公司保有取消其參加資格之權利，並對於任何破壞本活動之行為保留相關權利。
              </li>
              <li>
                參加者若因會員資料填寫不完整者，或活動後變更資料(如姓名、手機、地址等)，或手機收訊不良、電信業者遺漏或阻擋企業訊息等情況，導致無法收到商品或簡訊，信件無人領取等，恕不補發。
              </li>
              <li>
                如有其他未盡事宜，修改後的活動內容及約定條款將公佈在yesgogogo網站上，若您於任何修改或變更後繼續使用本服務時，視為您已閱讀、瞭解並同意接受該等修改或變更。
              </li>
              <li>
                參加者若因會員資料填寫不完整者，或活動後變更資料(如姓名、手機、地址等)，或手機收訊不良、電信業者遺漏或阻擋企業訊息等情況，導致無法收到商品或簡訊，信件無人領取等，恕不補發。
              </li>
              <li>
                若遇贈品缺貨，將延後出貨或以等值商品替代，並不得替換現金或其他商品。
              </li>
              <li>
                本公司保留隨時變更、修改、暫停或終止及解釋本活動相關事項及約定條款之權利，若有其他未盡事宜，悉依本公司相關規定或決定辦理。
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!-- ====活動結束=== -->
    </div>
  </div>
</template>

<script>
import checkToken from '@/assets/js/checkToken.js'
// import confettiAnimation from '@/assets/js/confettiJQ.js'
/* eslint-disable */
export default {
  data () {
    return {
      activitiesImgs: [],
      activitiesImgsMb: [],
      title: [],
      titleMb: [],
      dishestitle: [],
      dishestitleMb: [],
      foodList: [],
      foodList01: [],
      foodList02: [],
      foodList03: [],
      foodList04: [],
      couponList: [],
      dishesList: [],
      brandlList: [],
      foodList01Link: '',
      foodList02Link: '',
      foodList03Link: '',
      foodList04Link: '',
      hotEventsList: [],
      CouponCode: '',
      productsList: [],
      productsLink: '',
      brandsList: [],
      brandsListMb: []
    }
  },
  methods: {
    //* zongziS_A 上方5活動
    getTopActivities () {
      /* 電腦版 */
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zongziS_A`
      this.$http.get(urlm).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `zongziS_A${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.activitiesImgs = res.data.info
        }
      })
      /* 標題活動連結手機版 */
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zongziS_m_A`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `zongziS_m_A${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.activitiesImgsMb = res.data.info
        }
      })
    },
    //* zongziS_B 拿優惠，領券現折折價券表  */
    getCouponList () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zongziS_B`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `newYD_B${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.couponList = res.data.info
        }
      })
    },
    // * 領折價券
    getCoupon (code) {
      const AccessToken = checkToken.getAccessToken()
      const RefreshToken = checkToken.getFreshToken()
      if (!AccessToken && RefreshToken) {
        this.$swal.fire({
          title: '頁面逾時，請重新整理',
          allowOutsideClick: false,
          confirmButtonColor: '#1C6F58',
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
        return
      }
      if (!AccessToken && !RefreshToken) {
        localStorage.setItem('fromEvent', 'event')
        this.$swal.fire({
          title: '您好，請登入後再領取優惠',
          allowOutsideClick: true,
          confirmButtonColor: '#1C6F58',
          confirmButtonText: '確認',
          backdrop: true,
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        }).then(result => {
          if (result.isConfirmed) {
            if (document.body.clientWidth < 576) {
            // ? 手機版
              this.$router.push('/membermobilelogin')
            } else {
            // ? web 版
              // this.$router.push('/')
              this.$store.state.loginModal.show()
            }
          }
        })
        return
      }
      const url = `${process.env.VUE_APP_API}/api/coupon/SetCoupon`
      // const postData = {
      //   CouponCode: code
      // }
            // ?新Api
      const postData = {
        CouponCodeList: [code]
      }
      this.$http.post(url, postData)
        .then(res => {
          if (res.data.rtnCode !== 0) {
            if (res.data.rtnCode === 1022) {
              this.$swal.fire({
                title: '您已領取過了，無法重複領券!',
                allowOutsideClick: false,
                confirmButtonColor: '#1C6F58',
                confirmButtonText: '確認',
                width: 400,
                customClass: {
                  title: 'text-class',
                  confirmButton: 'confirm-btn-class'
                }
              })
            } else {
              this.$swal.fire({
                title: `領取失敗${res.data.rtnMsg}(${res.data.rtnCode})`,
                allowOutsideClick: false,
                confirmButtonColor: '#1C6F58',
                confirmButtonText: '確認',
                width: 400,
                customClass: {
                  title: 'text-class',
                  confirmButton: 'confirm-btn-class'
                }
              })
            }
            return
          }
          if (res.data.rtnCode === 0) {
            this.$swal.fire({
              title: '優惠券領取成功，請至會員專區查閱',
              allowOutsideClick: false,
              confirmButtonColor: '#1C6F58',
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
    // * 取得新的一組 token
    getNewToken () {
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
    },
    // * 熱銷名粽榜
    getProductList () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=zongziS_C`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode === 0 ) {
          this.productsList = res.data.info[0].products
          this.productsLink = res.data.info[0].link
          // 2.資料排序以最新的為第一筆
          // this.productsList.date.sort((a, b) => {
          //   return b.date - a.date
          // })
        }
      })
    },
    // *zongziS_D 粽夏爆品5折up
    getDishesList () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zongziS_D`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `newYD_C${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.dishesList = res.data.info
        }
      })
    },
    // *zongziS_E 品牌BN
    getBrand () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zongziS_E`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          // this.$swal.fire({
          //   title: `zongziS_E${res.data.rtnMsg}(${res.data.rtnCode})`,
          //   allowOutsideClick: false,
          //   confirmButtonColor: '#F8412E',
          //   confirmButtonText: '確認',
          //   width: 400,
          //   customClass: {
          //     title: 'text-class',
          //     confirmButton: 'confirm-btn-class'
          //   }
          // })
          return
        }
        if (res.data.rtnCode === 0) {
          this.brandsList = res.data.info
        }
      })
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zongziS_m_E`
      this.$http.get(urlm).then(res => {
        if (res.data.rtnCode !== 0) {
          // this.$swal.fire({
          //   title: `zongziS_m_E${res.data.rtnMsg}(${res.data.rtnCode})`,
          //   allowOutsideClick: false,
          //   confirmButtonColor: '#F8412E',
          //   confirmButtonText: '確認',
          //   width: 400,
          //   customClass: {
          //     title: 'text-class',
          //     confirmButton: 'confirm-btn-class'
          //   }
          // })
          return
        }
        if (res.data.rtnCode === 0) {
          this.brandsListMb = res.data.info
        }
      })
    },
    // *zongziS_F 傳統南部粽 經典北部粽 特色風味粽 特色風味粽 粽夏絕配
    getFoodList () {
      /* 電腦版 */
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=zongziS_F`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `zongziS_F${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.foodList = res.data.info
          this.foodList.forEach(item => {
            if (item.code === 'zongziS_F_1') {
              this.foodList01Link = item.link
              this.foodList01 = item.products
            } else if (item.code === 'zongziS_F_2') {
              this.foodList02Link = item.link
              this.foodList02 = item.products
            } else if (item.code === 'zongziS_F_3') {
              this.foodList03Link = item.link
              this.foodList03 = item.products
            } else if (item.code === 'zongziS_F_4') {
              this.foodList04Link = item.link
              this.foodList04 = item.products
            } else if (item.code === 'zongziS_F_5') {
              this.foodList05Link = item.link
              this.foodList05 = item.products
            }
          })
        }
      })
    },
    // *zongziS_G  品牌強檔 */
    getBrandList () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zongziS_G`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `zongziS_G${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.brandlList = res.data.info
        }
      })
    },
    // *zongziS_H 輪播熱門活動
    getHotEvents () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zongziS_H`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.hotEventsList = res.data.info
          }
        })
    },
    // *zongziS_title_coupon 折價券標題
    getCouponTitle () {
      /* 電腦版 */
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zongziS_title_coupon`
      this.$http.get(urlm).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `zongziS_title_coupon${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#de0a19',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.title = res.data.info
        }
      })
      /* 標題活動連結手機版 */
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zongziS_m_title_coupon`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `zongziS_m_title_coupon${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#de0a19',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.titleMb = res.data.info
        }
      })
    },
    // * newYD_title_Dishes 招牌年菜標題
    getDishesTitle () {
      /* 電腦版 */
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_title_Dishes`
      this.$http.get(urlm).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `newYD_title_Dishes${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#de0a19',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.dishestitle = res.data.info
        }
      })
      /* 標題活動連結手機版 */
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_m_title_Dishes`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `newYD_m_title_Dishes${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.dishestitleMb = res.data.info
        }
      })
    },
    // ?點擊產品觸發紀錄瀏覽高度
    recordHeight () {
      if (this.$store.state.recordEventReadHeight) {
        setTimeout(
          () => [
            // ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
            window.scrollTo(0, this.$store.state.recordEventReadHeight)
          ],
          500
        )
      }
    },
    // ?點擊產品觸發紀錄瀏覽高度於LocalStorage並前往產品連結
    async recordClickHeight (url) {
      var scrollYHeight = window.scrollY
      await window.localStorage.setItem('clickHeight', scrollYHeight)
      setTimeout(() => {
        window.location = url
      }, 500)
    },
    // ?檢查LocalStorage是否有紀錄
    async checkLocalHeight () {
      if (window.localStorage.getItem('clickHeight')) {
        var globalheight = await window.localStorage.getItem('clickHeight')
        setTimeout(() => {
          window.scrollTo(0, globalheight)
          //  !scroll之後的行為會直接被忽略不執行
        }, 300)
        await window.localStorage.removeItem('clickHeight')
      }
    },
    goHyperText (DOM) {
      // ?前往茅點
      const domHeight = DOM.offsetTop
      setTimeout(() => {
        window.scrollTo(0, domHeight)
      }, 500)
    }
  },
  watch: {
    $route (to, from) {
      if (
        to.fullPath.match('/productboard/product/') ||
        to.fullPath.match('/productboard/productList/')
      ) {
        const recordHeight = window.scrollY
        this.$store.commit('getEventRecordHeight', recordHeight)
      } else {
        this.$store.commit('getEventRecordHeight', '')
      }
    }
  },
  created () {
    this.getTopActivities() /* 置頂小電視活動 */
    this.getCouponTitle() /* 折價券活動標題 */
    this.getDishesTitle() /* 年菜活動標題 */
    this.getCouponList() /* 折價券表  */
    this.getProductList() /* 百元年菜 */
    this.getDishesList() /* 招牌年菜  */
    this.getFoodList() /* newYD_D_1至4 總鋪師的手路菜 飯店名菜必點 團員歡聚鍋物 生鮮年貨市集 */
    this.getBrandList() /* 品牌強檔 */
    this.getHotEvents() /* 熱門活動 */
    this.getBrand() /* 品牌活動 */

  },
  mounted () {
    this.getNewToken()
    if (this.$store.state.recordEventReadHeight) {
      // ? 若有點擊產品紀錄，則記錄高度供上一頁返回
      setTimeout(
        () => [
          // ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
          window.scrollTo(0, this.$store.state.recordEventReadHeight)
        ],
        500
      )
    }
    this.checkLocalHeight()
    if(Object.keys(this.$route.query).length !==0) {
      if(this.$route.query.dishCoupon === '2023') {
          const coupon = this.$refs.coupon
          const couponHigh = coupon.offsetTop
        if(document.body.clientWidth > 992) {
            setTimeout(() => {
            window.scrollTo({top:couponHigh ,behavior: 'smooth'})
          }, 500);
        } else if (document.body.clientWidth > 576) {
            setTimeout(() => {
              window.scrollTo({top:couponHigh -150,behavior: 'smooth'})
            }, 500);
        } else if (document.body.clientWidth > 360) {
            setTimeout(() => {
              window.scrollTo({top:couponHigh -90,behavior: 'smooth'})
            }, 500);
        } else {
            setTimeout(() => {
              window.scrollTo({top:couponHigh -20,behavior: 'smooth'})
            }, 500);
        }
      }
    }
  },
  updated () {
    this.checkLocalHeight()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/activity/zongziSummer/_site.scss';
@import '@/assets/scss/activity/_hover.min.scss';
//
img{
  object-fit: fill;
  vertical-align: middle;
}
::v-deep(.hotSwiper>.swiper-pagination-bullets){
  bottom: 3px;
  @media (min-width: 768px) {
    bottom: 6px;
  }
}
::v-deep(.hotEvents .swiper-pagination){
  position: static;
}
::v-deep(.hotEvents .swiper-pagination-bullet) {
  margin: 0 3px;
  background-color: #fff;
  opacity: .8;
}
::v-deep(.hotEvents .swiper-pagination-bullet-active){
  position: relative;
  z-index: 10;
  background-color: #FFF9D2;
  opacity: 1;
}

/* 每日強打 - 將 swiper navigation 箭頭放置外側 */
.hotProducts{
  width: 100%;
  @media (min-width: 768px) {
    margin:0 auto;
    width: 98%;
    padding-left: 2.5em;
    padding-right: 2.5em;
    position: relative;
  }
}

::v-deep(.hotProducts .swiper-button-next){
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 0;
  height: calc(100% - 3em);
}

::v-deep(.hotProducts .swiper-button-prev){
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 0;
  height: calc(100% - 3em);
}
/* 相關推薦 - swiper navigation button 在 768px 以下隱藏 */
::v-deep(.hotProducts .swiper-button-next:after, .hotProducts .swiper-container-rtl .swiper-button-prev:after){
  display: none;
  @media (min-width: 768px) {
    display: flex;
    color: #ffffff;
    opacity: 0.4;
    font-size: 36px;
    background: transparent;
  }
}

::v-deep(.hotProducts .swiper-button-prev:after, .hotProducts .swiper-container-rtl .swiper-button-next:after){
  display: none;
  @media (min-width: 768px) {
    display: flex;
    color: #ffffff;
    opacity: 0.4;
    font-size: 36px;
    background: transparent;
  }
}

</style>
