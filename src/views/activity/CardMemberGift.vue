<template>
  <div class="body" style="overflow:hidden;">
    <!-- <%-- 視覺 --%> -->
    <div>
      <!-- 桌機板背景圖 -->
      <div class="d-none d-lg-block position-relative bg-kv">
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/%E8%81%AF%E9%82%A6%E5%8D%A1%E5%8F%8B_PC-v2_02.png"
          class="img-center"
          alt="桌機背景"
        />
      </div>
      <!-- 手機板背景圖 -->
      <div class="d-block d-lg-none position-relative">
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_MB_02.png"
          class="img-fluid"
          style="width:100%"
          alt="手機背景"
        />
      </div>
    </div>
    <!-- 卡友活動區 -->
    <div class="d-block bg-bottom pt-lg-5 position-relative">
      <!-- 緞帶 -->
      <figure class="position-absolute left-position">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/ribbon01.png" alt="左側緞帶" class="img-fluid d-none d-lg-block">
      </figure>
      <div class="container">
        <!-- 第一排活動 -->
        <div class="row justify-content-center pt-3 px-0">
          <div
            class="d-flex justify-content-center"
          >
            <a
              class="w-auto h-100 m-1 hvr-bob"
              @click.prevent="goUpdatePwd()"
              href="#"
              style="z-index: 1;"
            >
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_05.png"
                class="img-fluid"
                alt="聯邦卡友點此更換密碼"
              />
            </a>
            <router-link class="w-auto h-100 m-1 hvr-bob" to="/registercreditcard">
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_07.png"
                class="img-fluid"
                alt="聯邦卡新註冊"
              />
            </router-link>
          </div>
        </div>
        <!-- 第二排活動 -->
        <div class="row pb-2 pb-md-3 pb-xl-5 pt-lg-5 pt-0 g-2 g-lg-3">
          <div class="col-4 pt-md-1 pt-2 text-center hvr-bob">
            <a href="#" @click.prevent="goHyperText($refs.coupon)">
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_12.png"
                alt="新會員神劵$1000"
                class="img-fluid"
                style="max-width:100%;"
              />
            </a>
          </div>
          <div class="col-4 pt-md-1 pt-2 text-center hvr-bob">
            <a href="#" @click.prevent="goHyperText($refs.feedback)">
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_14.png"
                alt="首購50%回饋購物金"
                class="img-fluid"
                style="max-width:100%;"
              />
            </a>
          </div>
          <div class="col-4  pt-md-1 pt-2 text-end hvr-bob ">
            <router-link to="/activity/UITCCardDiscount2023_January"
              target="_self"
            >
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_16.png"
                alt="週二聯邦日"
                class="img-fluid"
                style="max-width:100%;"
              />
            </router-link>
          </div>
        </div>
        <!-- 第三排活動 -->
        <div class="row justify-content-between g-2 g-lg-3" ref="appointmentWeb">
          <div class="col-6 hvr-bob ">
            <div
              class="d-flex justify-content-center h-100 m-0 pt-lg-1"
              style="padding-bottom: 40px;"
            >
              <div class="w-100 m-0 ">
                <img
                    class="w-100"
                    src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_22.png"
                    alt="Line好友月月送萬元購物金"
                  />
                <div class="d-flex w-100 spc-padding">
                  <div class="w-10"></div>
                </div>
                <div class="d-flex w-100 spc-padding justify-content-center" style="margin-top: -12%">
                  <div class="w-70 d-flex align-text-bottom">
                    <a
                      class="w-50  d-flex justify-content-start hrv-inner-btm "
                      @click.prevent="goHyperText($refs.friend)"
                      href="#"
                    >
                      <img
                        class="img-fluid"
                        src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/button_001.png"
                        alt="活動說明WEB"
                      />
                    </a>
                    <a
                      class="w-50  d-flex justify-content-end hrv-inner-btm "
                      href="http://line.me/ti/p/@yesgogogo"
                    >
                    <!-- 立即登記會導到手機的line,在手機的line上登入到yesgo頁面,登入之後會透過giftevent.js偵測有沒有領取過 -->
                      <img
                        class="img-fluid"
                        src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/button_002.png"
                        alt="立即登記(Line活動)WEB"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 hvr-bob">
            <div
              class="d-flex justify-content-center h-100 m-0 pt-lg-1"
              style="padding-bottom: 40px;"
            >
              <div class="w-100 m-0 ">
                <div class="d-flex w-100">
                  <router-link to="/activity/2023_memberbonus/tenpercent">
                    <img
                      class="w-100"
                      src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_24.png"
                      alt="購物下單筆筆回饋10%"
                    />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 每日強打 -->
    <div class="bg-red px-2 position-relative">
      <!-- 緞帶 -->
      <figure class="position-absolute right-position">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/ribbon02.png"
        alt="右側緞帶"
        class="img-fluid d-none d-lg-block">
      </figure>
      <div class="container ">
        <div class="row justify-content-center">
          <div class="col-12 col-xxl-10  ">
            <div class="text-center d-none d-md-block pt-4">
              <router-link to="/productboard/productList/S072613 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_29.png"
                class="img-fluid"
                alt="每日強打Web"
                />
              </router-link>
            </div>
            <div class="text-center d-md-none">
              <router-link to="/productboard/productList/S072613 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_MB_28.png"
                class="img-fluid"
                alt="每日強打Mb"
                />
              </router-link>
            </div>
            <!-- 每日強打 商品列 Web-->
          <div class="hotProducts pt-3">
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
                  slidesPerView: 4,
                  spaceBetween: 24,
                }
              }"
              :navigation="{
                nextEl: '#fes-next1',
                prevEl: '#fes-prev1'
              }"
            >
              <swiper-slide v-for="dishes in hotProducts" :key="dishes.productId">
                <div class="prd-item bg-white h-100 border-0 rounded-0">
                  <router-link :to="`/productboard/product/${dishes.productId}`"
                      class="d-block prd-link text-secondary border-0"
                  >
                      <img :src="dishes.productImage" class="img-fluid p-1 p-md-2" :alt="dishes.name">
                      <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                        <p class="card-text text-dark text-center mt-0 prd-name fs-6">{{ dishes.name }}</p>
                        <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                          <p class="d-inline text-nowrap fs-7 fs-md-5 fs-xl-6 prd-sale-price"><del class="prd-msrp me-1 me-xl-2 prd-sale-price">${{ dishes.oldPrice &lt; 0 ? 'xxx': $currency.currency(dishes.oldPrice) }}</del><span class="price-color fs-7 fs-md-4 fs-xl-5 fs-lg-8 fw-bolder">特價$<span class="fs-4 fs-md-2 fs-lg-3 fs-xl-2">{{ dishes.price &lt; 0 ? 'xxx': $currency.currency(dishes.price) }}</span></span></p>
                        </div>
                        <span class="d-block prd-limited p-spc">立即搶購</span>
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
        <!-- 活動banner web-->
        <div v-if="eventBannerList.length > 0" class="mt-3 mt-lg-5 d-none d-lg-block">
          <swiper
            class="eventBannerSwiper h-100"
            :loop="true"
            :spaceBetween="0"
            :initialSlide="1"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false
            }"
          >
            <swiper-slide v-for="event in eventBannerList" :key="event">
              <a href="#" @click.prevent="recordClickHeight(event.targetUrl)" class="d-block overflow-hidden text-center h-100"
                >
                <img :src="event.image" alt="banner image" class="img-fluid">
              </a>
            </swiper-slide>
          </swiper>
        </div>
        <!-- 品牌活動輪播 mb-->
        <div v-if="eventBannerList_m.length > 0" class="mt-3 mt-lg-5  d-lg-none">
          <swiper
            class="eventBannerMSwiper h-100"
            :loop="true"
            :spaceBetween="0"
            :initialSlide="1"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false
            }"
          >
            <swiper-slide v-for="event_m in eventBannerList_m" :key="event_m">
              <a href="#" @click.prevent="recordClickHeight(event_m.targetUrl)" target="_blank" class="d-block overflow-hidden text-center h-100"
                >
                <img :src="event_m.image" alt="banner image" class="w-100">
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- 即時料理 -->
    <div class="bg-yellow pt-md-5 pt-3 px-2">
      <div class="container ">
        <div class="row justify-content-center gx-3">
          <div class="col-12 col-xxl-10  ">
            <div class="text-center d-none d-md-block pt-4">
              <router-link to="/productboard/productList/S0712 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_36.png"
                  class="img-fluid"
                  alt="即時料理-家常菜Web"
                />
              </router-link>
            </div>
            <div class="text-center d-md-none pt-3">
              <router-link to="/productboard/productList/S0712 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_MB_34.png"
                  class="img-fluid"
                  alt="即時料理-家常菜Mb"
                />
              </router-link>
            </div>
            <!-- 即時料理(即時料理+鍋物湯品+炸物燒烤滷味) 商品列 -->
            <section
              class="mb-5"
            >
              <div class="product-list pt-3">
                <div class="row gx-2 gx-md-5">
                  <div
                    class="col-6 col-lg-3 col-xxl-3 mb-3"
                    v-for="subCategory in categories1"
                    :key="subCategory.productId"
                  >
                    <div
                      class="prd-item hvr-bob"
                      :class="{ 'sold-out': subCategory.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${subCategory.productId}`"
                        class="text-secondary text-decoration-none"
                      >
                        <div class="border-0 card rounded-0 px-0 px-sm-1 px-md-1 px-xl-0 pt-1 pt-md-2 pt-xl-2" >
                          <img :src="subCategory.productImage" class="card-img-top" alt="product image">
                          <div class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden">
                            <h5 class="card-title fs-7 fs-sm-6 mb-2 mb-lg-3 text-justify" >{{ subCategory.productName }}</h5>
                            <p class="d-inline text-nowrap fs-7 fs-md-5 fs-xl-6 prd-sale-price"><del class="prd-msrp me-1 me-xl-2 prd-sale-price">${{ subCategory.oldPrice &lt; 0 ? 'xxx': $currency.currency(subCategory.oldPrice) }}</del><span class="price-color fs-7 fs-md-4 fs-xl-5 fs-lg-8 fw-bolder">特價$<span class="fs-4 fs-md-2 fs-lg-3 fs-xl-2">{{ subCategory.price &lt; 0 ? 'xxx': $currency.currency(subCategory.price) }}</span></span></p>
                          </div>
                          </div>
                        <span class="d-block prd-limited p-spc">立即搶購</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <!-- 生鮮肉品 -->
    <div class="bg-red pt-md-5 pt-3 px-2">
      <div class="container ">
        <div class="row justify-content-center">
          <div class="col-12 col-xxl-10  ">
            <div class="text-center d-none d-md-block pt-4">
              <router-link to="/productboard/productList/S071701 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_39.png"
                  class="img-fluid"
                  alt="生鮮肉品-小農蔬果Web"
                />
              </router-link>
            </div>
            <div class="text-center d-md-none pt-3">
              <router-link to="/productboard/productList/S071701 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_MB_37.png"
                  class="img-fluid"
                  alt="生鮮肉品-小農蔬果Mb"
                />
              </router-link>
            </div>
            <!-- 生鮮肉品(生鮮肉品+水產海鮮)) 商品列 -->
            <section
              class="mb-5"
            >
              <div class="product-list pt-3">
                <div class="row gx-2 gx-md-5">
                  <div
                    class="col-6 col-lg-3 col-xxl-3 mb-3"
                    v-for="subCategory in categories2"
                    :key="subCategory.productId"
                  >
                    <div
                      class="prd-item hvr-bob"
                      :class="{ 'sold-out': subCategory.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${subCategory.productId}`"
                        class="text-secondary text-decoration-none"
                      >
                        <div class="border-0 card rounded-0 px-0 px-sm-1 px-md-1 px-xl-0 pt-1 pt-md-2 pt-xl-2" >
                            <img :src="subCategory.productImage" class="card-img-top" alt="product image">
                            <div class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden">
                              <h5 class="card-title fs-7 fs-sm-6 mb-2 mb-lg-3 text-justify" >{{ subCategory.productName }}</h5>
                              <p class="d-inline text-nowrap fs-7 fs-md-5 fs-xl-6 prd-sale-price"><del class="prd-msrp me-1 me-xl-2 prd-sale-price">${{ subCategory.oldPrice &lt; 0 ? 'xxx': $currency.currency(subCategory.oldPrice) }}</del><span class="price-color fs-7 fs-md-4 fs-xl-5 fs-lg-8 fw-bolder">特價$<span class="fs-4 fs-md-2 fs-lg-3 fs-xl-2">{{ subCategory.price &lt; 0 ? 'xxx': $currency.currency(subCategory.price) }}</span></span></p>
                            </div>
                          </div>
                        <span class="d-block prd-limited p-spc">立即搶購</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <!-- 水餃麵點 -->
    <div class="bg-yellow pt-md-5 pt-3 px-2">
      <div class="container ">
        <div class="row justify-content-center">
          <div class="col-12 col-xxl-10  ">
            <div class="text-center d-none d-md-block pt-4">
              <router-link to="/productboard/productList/S071301 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_42.png"
                  class="img-fluid"
                  alt="水餃麵點Web"
                />
              </router-link>
            </div>
            <div class="text-center d-md-none pt-3">
              <router-link to="/productboard/productList/S071301 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_MB_39.png"
                  class="img-fluid"
                  alt="水餃麵點Mb"
                />
              </router-link>
            </div>
            <!-- 水餃麵點 商品列 -->
            <section
              class="mb-5"
            >
              <div class="product-list pt-3">
                <div class="row gx-2 gx-md-5">
                  <div
                    class="col-6 col-lg-3 col-xxl-3 mb-3"
                    v-for="subCategory in categories3"
                    :key="subCategory.productId"
                  >
                    <div
                      class="prd-item hvr-bob"
                      :class="{ 'sold-out': subCategory.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${subCategory.productId}`"
                        class="text-secondary text-decoration-none"
                      >
                        <div class="border-0 card rounded-0 px-0 px-sm-1 px-md-1 px-xl-0 pt-1 pt-md-2 pt-xl-2" >
                            <img :src="subCategory.productImage" class="card-img-top" alt="product image">
                            <div class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden">
                              <h5 class="card-title fs-7 fs-sm-6 mb-2 mb-lg-3 text-justify" >{{ subCategory.productName }}</h5>
                              <p class="d-inline text-nowrap fs-7 fs-md-5 fs-xl-6 prd-sale-price"><del class="prd-msrp me-1 me-xl-2 prd-sale-price">${{ subCategory.oldPrice &lt; 0 ? 'xxx': $currency.currency(subCategory.oldPrice) }}</del><span class="price-color fs-7 fs-md-4 fs-xl-5 fs-lg-8 fw-bolder">特價$<span class="fs-4 fs-md-2 fs-lg-3 fs-xl-2">{{ subCategory.price &lt; 0 ? 'xxx': $currency.currency(subCategory.price) }}</span></span></p>
                            </div>
                          </div>
                        <span class="d-block prd-limited p-spc">立即搶購</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <!-- 休閒零食 -->
    <div class="bg-red pt-md-5 pt-3 px-2">
      <div class="container ">
        <div class="row justify-content-center">
          <div class="col-12 col-xxl-10  ">
            <div class="text-center d-none d-md-block pt-4">
              <router-link to="/productboard/productList/S0720 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_45.png"
                  class="img-fluid"
                  alt="休閒零食-飲品Web"
                />
              </router-link>
            </div>
            <div class="text-center d-md-none pt-3">
              <router-link to="/productboard/productList/S0720 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_MB_41.png"
                  class="img-fluid"
                  alt="休閒零食-飲品Mb"
                />
              </router-link>
            </div>
            <!-- 休閒零食(蛋糕甜點飲品+餅乾堅果肉乾) 商品列 -->
            <section
              class="mb-5"
            >
              <div class="product-list pt-3">
                <div class="row gx-2 gx-md-5">
                  <div
                    class="col-6 col-lg-3 col-xxl-3 mb-3"
                    v-for="subCategory in categories4"
                    :key="subCategory.productId"
                  >
                    <div
                      class="prd-item hvr-bob"
                      :class="{ 'sold-out': subCategory.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${subCategory.productId}`"
                        class="text-secondary text-decoration-none"
                      >
                        <div class="border-0 card rounded-0 px-0 px-sm-1 px-md-1 px-xl-0 pt-1 pt-md-2 pt-xl-2" >
                            <img :src="subCategory.productImage" class="card-img-top" alt="product image">
                            <div class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden">
                              <h5 class="card-title fs-7 fs-sm-6 mb-2 mb-lg-3 text-justify" >{{ subCategory.productName }}</h5>
                              <p class="d-inline text-nowrap fs-7 fs-md-5 fs-xl-6 prd-sale-price"><del class="prd-msrp me-1 me-xl-2 prd-sale-price">${{ subCategory.oldPrice &lt; 0 ? 'xxx': $currency.currency(subCategory.oldPrice) }}</del><span class="price-color fs-7 fs-md-4 fs-xl-5 fs-lg-8 fw-bolder">特價$<span class="fs-4 fs-md-2 fs-lg-3 fs-xl-2">{{ subCategory.price &lt; 0 ? 'xxx': $currency.currency(subCategory.price) }}</span></span></p>
                            </div>
                          </div>
                        <span class="d-block prd-limited p-spc">立即搶購</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <!-- 民生食材 -->
    <div class="bg-yellow pt-md-5 pt-3 px-2">
      <div class="container ">
        <div class="row justify-content-center">
          <div class="col-12 col-xxl-10  ">
            <div class="text-center d-none d-md-block pt-4">
              <router-link to="/productboard/productList/S0722 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_47.png"
                  class="img-fluid"
                  alt="民生食材-南北貨Web"
                />
              </router-link>
            </div>
            <div class="text-center d-md-none pt-3">
              <router-link to="/productboard/productList/S0722 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_MB_43.png"
                  class="img-fluid"
                  alt="民生食材-南北貨Mb"
                />
              </router-link>
            </div>
            <!-- 民生食材 商品列 -->
            <section
              class="mb-5"
            >
              <div class="product-list pt-3">
                <div class="row gx-2 gx-md-5">
                  <div
                    class="col-6 col-lg-3 col-xxl-3 mb-3"
                    v-for="subCategory in categories5"
                    :key="subCategory.productId"
                  >
                    <div
                      class="prd-item hvr-bob"
                      :class="{ 'sold-out': subCategory.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${subCategory.productId}`"
                        class="text-secondary text-decoration-none"
                      >
                        <div class="border-0 card rounded-0 px-0 px-sm-1 px-md-1 px-xl-0 pt-1 pt-md-2 pt-xl-2" >
                          <img :src="subCategory.productImage" class="card-img-top" alt="product image">
                          <div class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden">
                            <h5 class="card-title fs-7 fs-sm-6 mb-2 mb-lg-3 text-justify" >{{ subCategory.productName }}</h5>
                            <p class="d-inline text-nowrap fs-7 fs-md-5 fs-xl-6 prd-sale-price"><del class="prd-msrp me-1 me-xl-2 prd-sale-price">${{ subCategory.oldPrice &lt; 0 ? 'xxx': $currency.currency(subCategory.oldPrice) }}</del><span class="price-color fs-7 fs-md-4 fs-xl-5 fs-lg-8 fw-bolder">特價$<span class="fs-4 fs-md-2 fs-lg-3 fs-xl-2">{{ subCategory.price &lt; 0 ? 'xxx': $currency.currency(subCategory.price) }}</span></span></p>
                          </div>
                        </div>
                        <span class="d-block prd-limited p-spc">立即搶購</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <!-- 生活好物 -->
    <div class="bg-red pt-md-5 pt-3 px-2">
      <div class="container ">
        <div class="row justify-content-center">
          <div class="col-12 col-xxl-10  ">
            <div class="text-center d-none d-md-block pt-4">
              <router-link to="/productboard/productList/S0729 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_PC-v2_49.png"
                  class="img-fluid"
                  alt="生活好物Web"
                />
              </router-link>
            </div>
            <div class="text-center d-md-none pt-3">
              <router-link to="/productboard/productList/S0729 ">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardMemberGift/聯邦卡友_MB_47.png"
                  class="img-fluid"
                  alt="生活好物Mb"
                />
              </router-link>
            </div>
            <!-- 生活好物 商品列 -->
            <section>
              <div class="product-list pt-3">
                <div class="row gx-2 gx-md-5">
                  <div class="col-6 col-lg-3 col-xxl-3 mb-3" v-for="btd in goods.products" :key="btd">
                    <div
                    class="prd-item hvr-bob"
                    :class="{ 'sold-out': btd.stock === 0 }"
                  >
                    <router-link
                      :to="`/productboard/product/${btd.productId}`"
                      class="text-secondary text-decoration-none"
                    >
                      <div class="border-0 card rounded-0 px-0 px-sm-1 px-md-1 px-xl-0 pt-1 pt-md-2 pt-xl-2" >
                        <img :src="btd.productImage" class="card-img-top" alt="product image">
                        <div class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden">
                          <h5 class="card-title fs-7 fs-sm-6 mb-2 mb-lg-3 text-justify" >{{ btd.productName }}</h5>
                          <p class="d-inline text-nowrap fs-7 fs-md-5 fs-xl-6 prd-sale-price"><del class="prd-msrp me-1 me-xl-2 prd-sale-price">${{ btd.oldPrice &lt; 0 ? 'xxx': $currency.currency(btd.oldPrice) }}</del><span class="price-color fs-7 fs-md-4 fs-xl-5 fs-lg-8 fw-bolder">特價$<span class="fs-4 fs-md-2 fs-lg-3 fs-xl-2">{{ btd.price &lt; 0 ? 'xxx': $currency.currency(btd.price) }}</span></span></p>
                        </div>
                      </div>
                      <span class="d-block prd-limited p-spc">立即搶購</span>
                    </router-link>
                  </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <!-- <%-- 活動說明 --%> -->
    <div class="bg-yellow pt-lg-5 pt-3 pb-1">
      <div class="container">
        <div class="col-sm-auto mb-2">
          <div class="py-3 text-center d-inline-block dtl-title" ref="newmember">
            [活動詳情]
          </div>
          <br>
          <div class="dtl-title">活動日期：2023/1/1-2023/6/30</div>
          <div class="py-3 text-center d-inline-block dtl-title" ref="coupon">
            1.新會員1000元折價券
          </div>
        </div>
        <div class="text-justify dtl-details mb-3">
          聯邦卡友於聯邦開卡頁同意註冊成為yesgogogo新會員後，總價值$1,000之電子折價券將歸戶至yesgogogo會員帳戶內，使用效期自獲得日起2個月內有效。每個會員帳號限領一次。折價券面額為$50一張(消費滿$51可使用)、$100一張(消費滿
          $101可使用)、$100一張(消費滿$1,000可使用)、$250一張(消費滿$2,500可使用)、$500一張(消費滿$3,300可使用)，折價券使用期限及規範可至yesgogogo購物網登入「會員中心」 → 「我的優惠券」→「折價券」內查看券面說明。
        </div>
        <div class="py-3 d-inline-block dtl-title mb-2" ref="feedback">2.首購50%購物金回饋，購物下單筆筆回饋10%無上限</div>
        <div>
          <div class="d-flex mb-2">
            <span class="text-justify dtl-details">(1)</span>
            <div class="text-justify dtl-details">
              聯邦卡友於聯邦開卡頁同意註冊成為yesgogogo新會員後，自加入yesgogogo購物網會員的30天內完成首購(以訂單成立日期為準，且訂單付款完成，無取消訂單與退貨)，可享首購訂單結帳總金額的50%購物金回饋，該筆訂單結帳總金額以扣除折價券、購物金、滿額折扣等優惠折抵後的「實際支付結帳金額」計算。
            </div>
          </div>
          <div class="d-flex mb-2">
            <span class="text-justify dtl-details">(2)</span>
            <div class="text-justify dtl-details">首購訂單每一會員帳號最高回饋結帳總金額50%。(例如: A會員訂單金額$30,000，購物金折抵$7,500，實際結帳金額
          $22,500，回饋50%購物金， 共獲得$11,250購物金 ; B會員訂單金額$50,000，折價券折抵$2,000，實際結帳金額$48,000，回饋50%購物金， 共獲得$24,000購物金。)
            </div>
          </div>
          <div class="d-flex mb-2">
            <span class="text-justify dtl-details">(3)</span>
            <div class="text-justify dtl-details">聯邦卡友享yesgogogo購物下單，每筆訂單消費不限金額，享購物金10%回饋無上限。</div>
          </div>
          <div class="d-flex mb-2">
            <span class="text-justify dtl-details">(4)</span>
            <div class="text-justify dtl-details"> 每1購物金等同於新台幣1元，可於下次消費時使用，折抵最高上限為結帳總金額25%。</div>
          </div>
          <div class="d-flex mb-2">
            <span class="text-justify dtl-details">(5)</span>
            <div class="text-justify dtl-details"> 回饋購物金將於訂單完成(即訂單內所有商品出貨)起算15日後發送至會員帳戶內，使用效期自獲得日起2個月內有效，待有效期間屆滿，尚未使用之購物金將於到期日23:59:59自動失效，恕不另行通知。</div>
          </div>
          <div class="d-flex mb-2">
            <span class="text-justify dtl-details">(6)</span>
            <div class="text-justify dtl-details">回饋購物金金額可至yesgogogo購物網登入「會員中心」 → 「我的優惠券」→「購物金回饋」內查詢明細。</div>
          </div>
          <div class="d-flex mb-2">
            <span class="text-justify dtl-details">(7)</span>
            <div class="text-justify dtl-details">購物金為活動贈品，購物金回饋折抵部分不計入發票開立金額。</div>
          </div>
        </div>
        <div class="py-3 d-inline-block dtl-title">3.週二聯邦日筆筆訂單送7-11超商CITY CAFE乙杯 </div>
        <div class="d-flex mb-2">
          <span class="text-justify dtl-details">(1)</span>
          <div class="text-justify dtl-details">凡於活動期間內，每周二使用聯邦信用卡於yesgogogo購物網消費付款，訂單不限消費金額，每筆訂單加碼送7-11超商CITY CAFE乙杯，回饋次數無上限。
          </div>
        </div>
        <div class="d-flex mb-2">
          <span class="text-justify dtl-details">(2)</span>
          <div class="text-justify dtl-details">本活動限定使用聯邦信用卡消費付款，排除Visa金融卡、LINE pay、ATM轉帳之交易。
          </div>
        </div>
        <div class="d-flex mb-2">
          <span class="text-justify dtl-details">(3)</span>
          <div class="text-justify dtl-details">贈品回饋將於次月的21號前發送CITY CAFE的兌換簡訊至會員手機內。可憑兌換簡訊於全台7-11超商兌換中杯美式咖啡或四季春青茶或經典紅茶，冰/熱不限、即換即用，全台7-11超商通用。
          </div>
        </div>
        <div class="d-flex mb-2">
          <span class="text-justify dtl-details">(4)</span>
          <div class="text-justify dtl-details">須完成訂單始符合認列資格，若因訂單取消、退貨、非商品瑕疵之換貨，則該筆訂單不得要求列入計算。
          </div>
        </div>
        <div class="py-3 d-inline-block dtl-title" ref="friend">4.LINE好友月月抽萬元購物金</div>
        <div class="d-flex mb-2">
          <span class="text-justify dtl-details">(1)</span>
          <div class="text-justify dtl-details">聯邦卡友會員獨享，加入yesgogogo LINE官方帳號好友並登記，即可抽購物金。每月抽50名，每名200元，每月贈送 10,000元購物金。
          </div>
        </div>
        <div class="d-flex mb-2">
          <span class="text-justify dtl-details">(2)</span>
          <div class="text-justify dtl-details">參加方式：「加入LINE好友@yesgogogo」→ 點選LINE下方選單「聯邦卡友抽萬元金」 → 點選「登記GO」連結並「登入會員」即完成報名。活動期間凡登記一次即享月月參加抽獎資格、不需重複登記。
          </div>
        </div>
        <div class="d-flex mb-2">
          <span class="text-justify dtl-details">(3)</span>
          <div class="text-justify dtl-details">活動將於次月30日前抽出得獎者並於yesgogogo FB官方粉絲團公佈得獎名單。購物金回饋將於次月30日前發送至yesgogogo會員帳戶內。
          </div>
        </div>
      </div>
    </div>
    <div class="bg-yellow pb-1">
      <div class="container">
        <div class="col-sm-auto">
          <div class="py-3 text-center d-inline-block dtl-title">
            注意事項
          </div>
        </div>
        <ol class="dtl-details" style="margin-left: -9.5px;">
          <li class="p-1">折價券使用方式以券面說明為準；使用效期2個月。1購物金=1元。可於下次消費抵用，最高折抵結帳金額25%。(限票券與部分專案商品不得使用)。</li>
          <li class="p-1">折價券及購物金於結帳時僅能擇一使用，恕無法併用。</li>
          <li class="p-1">若訂單取消、退貨或任何不可歸咎於yesgogogo購物網之因素導致訂單未成立，恕不補發。</li>
          <li class="p-1">折價券與購物金不得轉贈他人、要求變換現金或商品。</li>
          <li class="p-1">凡於活動期間至購物金回饋前，持卡人之聯邦銀行信用卡正、附卡有遭強制停用、申請停用、掛失不補發、逾期繳款、參加前置協商、聲請更生清算或破產、信用卡到期不續卡、取消交易或其他聯邦銀行依信用卡約定條款停止持卡人使用之情形，聯邦銀行得撤銷其兌獎或回饋資格。</li>
          <li class="p-1">本活動以實際交易計算，若因付款失敗、交易取消、退貨，該筆交易將不列入計算範圍。如有其他未盡事宜，聯邦銀行及yesgogogo購物網保留隨時修改、變更、取消本活動之權利，亦有權對本活動之所有事宜做出解釋或決定。</li>
          <li class="p-1">活動事項載明於活動網頁中，參加本活動者，視為同意接受本活動注意事項之規範，參加人不符合或違反本活動規定事項者，本公司保有取消其參加資格之權利，並對於任何破壞本活動之行為保留相關權利。</li>
          <li class="p-1">任何經由正確帳號與密碼登入網站使用回饋購物金點數之行為，均視為該會員之行為，因不可歸責於yesgogogo購物網或因不可抗力之因素導致購物金資料流失時，yesgogogo購物網不負賠償或補償之責。</li>
          <li class="p-1">本公司保留隨時變更、修改、暫停或終止及解釋本活動相關事項及約定條款之權利，若有其他未盡事宜，悉依本公司相關規定或決定辦理。</li>
          <li class="p-1">本活動若有異動，修改後的活動內容及約定條款將公佈在yesgogogo購物網官方網站上，若您於任何修改或變更後繼續使用本服務時，視為您已閱讀、瞭解並同意接受該等修改或變更。</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
// !引入Line活動比對function
import getGiftEvent from '@/assets/js/giftevent.js'
// !引入Token確認function
import checkToken from '@/assets/js/checkToken.js'

export default {
  data () {
    return {
      categories1: [], // ?即時料理
      categories2: [], // ?生鮮肉品
      categories3: [], // ?水餃麵點
      categories4: [], // ?休閒零食
      categories5: [], // ?民生食材
      hotProducts: [], // ?熱賣商品
      goods: '', // ?生活好物
      eventBannerList: [], // ?活動banner web
      eventBannerList_m: [] // ?活動banner mb
    }
  },
  methods: {
    getHotProduct () {
      // ?取得熱門商品
      const url = `${process.env.VUE_APP_API}/api/widgets/hotproduct`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode === 0) {
          this.hotProducts = res.data.info
          this.hotProducts.forEach((item) => {
            const quo = Math.ceil(item.price / item.oldPrice * 100)
            item.discount = quo % 10 === 0 ? quo / 10 : quo
          })
        }
      })
    },
    getGiftList () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=hpgroup`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            //* A即時料理 */
            // ?即時料理
            const immediate1 = res.data.info.filter((item) => item.code === 'hpgroup_1')
            const immediate = immediate1[0]
            immediate.products.sort((a, b) => {
              return a.itemOrder - b.itemOrder
            })
            // ?取3筆
            immediate.products = immediate.products.slice(0, 3)
            // ?鍋物湯品
            const hotpot1 = res.data.info.filter((item) => item.code === 'hpgroup_2')
            const hotpot = hotpot1[0]
            hotpot.products.sort((a, b) => {
              return a.itemOrder - b.itemOrder
            })
            // ?取3筆
            hotpot.products = hotpot.products.slice(0, 3)
            // ?燒烤炸物滷味
            const cook1 = res.data.info.filter((item) => item.code === 'hpgroup_4')
            const cook = cook1[0]
            cook.products.sort((a, b) => {
              return a.itemOrder - b.itemOrder
            })
            // ?取2筆
            cook.products = cook.products.slice(0, 2)
            // 兩個陣列的元素連線在一起
            this.categories1 = [...immediate.products, ...hotpot.products, ...cook.products]
            //* B生鮮肉品 */
            // ?生鮮肉品
            const meat1 = res.data.info.filter((item) => item.code === 'hpgroup_7')
            const meat = meat1[0]
            meat.products.sort((a, b) => {
              return a.itemOrder - b.itemOrder
            })
            // ?取4筆
            meat.products = meat.products.slice(0, 4)
            // ?水產海鮮
            const seafood1 = res.data.info.filter((item) => item.code === 'hpgroup_8')
            const seafood = seafood1[0]
            seafood.products.sort((a, b) => {
              return a.itemOrder - b.itemOrder
            })
            // ?取4筆
            seafood.products = seafood.products.slice(0, 4)
            this.categories2 = [...meat.products, ...seafood.products]
            //* C水餃麵點 */
            // ?水餃麵點
            const dumpling = res.data.info.filter((item) => item.code === 'hpgroup_3')
            this.categories3 = dumpling[0].products
            this.categories3.sort((a, b) => {
              return a.itemOrder - b.itemOrder
            })
            // ?取8筆
            this.categories3 = this.categories3.slice(0, 8)
            //* D休閒零食 */
            // ?蛋糕/甜點/冰品
            const cake1 = res.data.info.filter((item) => item.code === 'hpgroup_5')
            const cake = cake1[0]
            cake.products.sort((a, b) => {
              return a.itemOrder - b.itemOrder
            })
            // ?取4筆
            cake.products = cake.products.slice(0, 4)
            // ?餅乾/堅果/肉乾
            const cookie1 = res.data.info.filter((item) => item.code === 'hpgroup_6')
            const cookie = cookie1[0]
            cookie.products.sort((a, b) => {
              return a.itemOrder - b.itemOrder
            })
            // ?取4筆
            cookie.products = cookie.products.slice(0, 4)
            this.categories4 = [...cake.products, ...cookie.products]
            //* E民生食材 */
            // ?民生食材
            const livelihood = res.data.info.filter((item) => item.code === 'hpgroup_9')
            this.categories5 = livelihood[0].products
            this.categories5.sort((a, b) => {
              return a.itemOrder - b.itemOrder
            })
            // ?取8筆
            this.categories5 = this.categories5.slice(0, 8)
            // ?高度返回
            if (this.$store.state.recordEventReadHeight) {
              // ? 若有點擊產品紀錄，則記錄高度供上一頁返回
              setTimeout(() => {
                // ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
                window.scrollTo(0, this.$store.state.recordEventReadHeight)
                this.$store.commit('getEventRecordHeight', '')
              }, 500)
            } else {
              this.checkLocalHeight()
            }
          }
        })
    },
    // ?生活好物
    getBDGift () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=UBBD_B`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            res.data.info.forEach((item) => {
              if (item.code === 'UBBD_B_2') {
                this.goods = item
              }
            })
            // ?高度返回
            if (this.$store.state.recordEventReadHeight) {
              // ? 若有點擊產品紀錄，則記錄高度供上一頁返回
              setTimeout(() => {
                // ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
                window.scrollTo(0, this.$store.state.recordEventReadHeight)
                this.$store.commit('getEventRecordHeight', '')
              }, 500)
            } else {
              this.checkLocalHeight()
            }
          }
        })
    },
    // * 活動區 Banner
    getEventBanner () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=membercard`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            res.data.info.forEach((item) => {
              if (item.code.includes('_m_')) {
                this.eventBannerList_m.push(item)
              } else {
                this.eventBannerList.push(item)
              }
            })
            /* 只有一張主打品不做 loop，開啟開發者工具，swiper前後頭尾會自動各加上1張，所以只有一張的時候，length要等於3
            ，兩張的時候，length等於4 */
            setTimeout(() => {
              const swipers = document.querySelectorAll('.eventBannerSwiper .swiper-slide')
              if (swipers.length === 3) {
                const slide = document.querySelector('.eventBannerSwiper .swiper-wrapper')
                slide.classList.add('disabled')
              }
            }, 500)
          }
        })
    },
    goHyperText (DOM) {
      // ?前往茅點
      const domHeight = DOM.offsetTop
      setTimeout(() => {
        window.scrollTo(0, domHeight)
      }, 500)
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
    goEventGiftPath () {
      // ?呼叫 event.js確認活動碼
      getGiftEvent().then(data => {
        if (!data.isSuccess) {
          this.$swal.fire({
            title: `${data.message}(${data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
        } else {
          this.$swal.fire({
            title: `${data.message}`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
        }
        // this.$router.push(sessionStorage.getItem('path'))
        // 活動結束，清除所有sessionStorage
        sessionStorage.removeItem('cardEvent')
        sessionStorage.removeItem('cardCode')
        sessionStorage.removeItem('path')
      })
    },
    goUpdatePwd () {
      sessionStorage.setItem('cardEvent', 'card')
      if (this.getToken()) {
        this.$router.push('/memberboard/memberupdatepwd')
      } else {
        if (document.body.clientWidth < 576) {
          // ?手機板
          this.$router.push('/membermobilelogin')
        } else {
          // ? web 版
          this.$router.push('/memberboard/memberupdatepwd/?cardEvent=card')
        }
      }
    },
    // ?小電視記錄高度
    recordClickHeight (url) {
      // ?點擊產品觸發紀錄瀏覽高度於LocalStorage
      const scrollYHeight = window.scrollY
      localStorage.setItem('clickCardMemberGift', scrollYHeight)
      setTimeout(() => {
        window.location = url
      }, 500)
    },
    checkLocalHeight () {
      // ?檢查LocalStorage
      if (window.localStorage.getItem('clickCardMemberGift')) {
        const globalheight = window.localStorage.getItem('clickCardMemberGift')
        setTimeout(() => {
          window.scrollTo(0, globalheight)
        }, 300)
        localStorage.removeItem('clickCardMemberGift')
      }
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
  mounted () {
    this.getGiftList()
    this.getHotProduct()
    this.getEventBanner()
    this.getBDGift()
    // ? 若有點擊產品紀錄，則記錄高度供上一頁返回
    if (this.$store.state.recordEventReadHeight) {
      setTimeout(
        () => [
          // ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
          window.scrollTo(0, this.$store.state.recordEventReadHeight)
        ],
        500
      )
    }
    // ? 從Line進入yesgo紀錄query參數
    if (
      Object.keys(this.$route.query).length !== 0 &&
      this.$route.query.path &&
      this.$route.query.cardCode
    ) {
      Object.keys(this.$route.query).forEach(item => {
        sessionStorage.setItem(`${item}`, this.$route.query[item])
      })
      if (this.getToken()) {
        this.goEventGiftPath()
      } else {
        this.$swal.fire({
          title: '聯邦卡友會員您好~<br>請登入參加抽萬元購物金活動',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          backdrop: true,
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
        if (document.body.clientWidth < 576) {
          // ? 手機版
          sessionStorage.setItem('cardEvent', 'card')
          this.$router.push('/membermobilelogin')
        } else {
          // ? web 版
          sessionStorage.setItem('cardEvent', 'card')
          // 因首頁判斷過多，多塞一個cardEvent供活動判斷
          this.$router.push('/?cardEvent=card')
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
@import '@/assets/scss/all.scss';
@import '@/assets/scss/activity/_animate.min.scss';
@import '@/assets/scss/activity/_hover.min.scss';
@import '@/assets/scss/activity/_ygg-comp.scss';
@import '@/assets/scss/activity/2023cardMemberGift/_site.scss';
@import '@/assets/scss/activity/_font.scss';

:deep(.swiper-wrapper) {
  padding-bottom: 40px;
  @media (max-width: 768px) {
    padding-bottom: 15px;
   }
}

:deep(.swiper-pagination-bullets){
  // bottom: 3px;
  bottom: 10%;
  @media (max-width: 768px) {
    bottom: 1%;
  }
  @media (max-width: 576px) {
    bottom: 2%;
  }
}

:deep( .swiper-pagination-bullet) {
  margin: 0 3px;
}

:deep( .swiper-pagination-bullet-active){
  position: relative;
  z-index: 10;
}

::v-deep(.swiper-wrapper.disabled) {
    transform: translate3d(0px, 0, 0) !important;
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
