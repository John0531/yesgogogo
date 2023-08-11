<template>
  <div class="moonContainer">
    <!-- 上方 Banner  -->
    <div class="h-100 position-relative text-center">
      <img
        class="img-fluid position-relative d-none d-lg-block banner-image"
        src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/index_01a_pc.jpg"
        alt="banner"
      />
      <img
        class="img-fluid d-lg-none"
        src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/index_01a_mb.jpg"
        alt="banner"
      />
      <!-- 輪播活動 桌機-->
      <div class="position-absolute moonCommercial d-lg-block d-none">
        <swiper
          :direction="'vertical'"
          class="eventlgSwiper"
          :loop="true"
          :spaceBetween="0"
          :initialSlide="0"
          :speed="400"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :navigation="false"
        >
          <swiper-slide>
            <img
              v-if="slideShow[0]"
              :src="slideShow[0].image"
              class="img-fluid"
              alt="送心禮吃烤肉 全站滿額送13%"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              v-if="slideShow[1]"
              :src="slideShow[1].image"
              class="img-fluid"
              alt="單日滿3000送3000烤肉組"
            />
          </swiper-slide>
        </swiper>
      </div>
      <!-- 輪播活動 手機-->
      <div class="position-absolute d-lg-none moonCommercial_m">
        <swiper
          :direction="'vertical'"
          class="eventmSwiper"
          :loop="true"
          :spaceBetween="0"
          :initialSlide="0"
          :speed="400"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false
          }"
          :navigation="false"
        >
          <swiper-slide>
            <img
              v-if="slideShow_m[0]"
              :src="slideShow_m[0].image"
              class="img-fluid"
              alt="送心禮吃烤肉 全站滿額送13%"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              v-if="slideShow_m[1]"
              :src="slideShow_m[1].image"
              class="img-fluid"
              alt="單日滿3000送3000烤肉組"
            />
          </swiper-slide>
        </swiper>
      </div>
      <img
        class="banner-image img-fluid d-none d-lg-block"
        src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/index_02a_pc.jpg"
        alt="主題區中間pc"
      />
      <img
        class="img-fluid d-lg-none"
        src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/index_02a_mb.jpg"
        alt="主題區中間mb"
      />
      <!-- 主題清單 PC-->
      <div class="themeList container d-none d-lg-block">
        <div class="row">
          <div class="d-flex flex-wrap justify-content-between px-4">
            <div class="d-flex justify-content-between w-100 subjectUp pt-2">
              <a
                v-if="eventList[0]"
                href="#"
                @click.prevent="recordClickHeight(eventList[0]?.targetUrl)"
                class="hvr-bob d-block subjectUp"
              >
                <img
                  :src="eventList[0].image"
                  alt="活動"
                  class="img-fluid d-none d-lg-block subjectUp p-2"
                />
              </a>
              <a
                v-if="eventList[1]"
                href="#"
                @click.prevent="recordClickHeight(eventList[1]?.targetUrl)"
                class="hvr-bob d-block subjectUp"
              >
                <img
                  :src="eventList[1].image"
                  alt="活動"
                  class="img-fluid d-none d-lg-block p-2"
                />
              </a>
              <a
                v-if="eventList[2]"
                href="#"
                @click.prevent="recordClickHeight(eventList[2]?.targetUrl)"
                class="hvr-bob d-block"
              >
                <img
                  :src="eventList[2].image"
                  alt="活動"
                  class="img-fluid d-none d-lg-block subjectUp p-2"
                />
              </a>
            </div>
            <div class="d-flex justify-content-between w-100 mt-lg-4">
              <a
                v-if="eventList[3]"
                href="#"
                @click.prevent="recordClickHeight(eventList[3]?.targetUrl)"
                class="hvr-bob d-block subjectUp me-3"
              >
                <img
                  :src="eventList[3].image"
                  alt="活動"
                  class="img-fluid d-none d-lg-block pt-2"
                />
              </a>
              <a
                v-if="eventList[4]"
                href="#"
                @click.prevent="recordClickHeight(eventList[4]?.targetUrl)"
                class="hvr-bob d-block subjectUp p-3 me-3"
                target="_self"
              >
                <img
                  :src="eventList[4].image"
                  alt="活動"
                  class="img-fluid d-none d-lg-block"
                />
              </a>
              <a
                v-if="eventList[5]"
                href="#"
                @click.prevent="recordClickHeight(eventList[5]?.targetUrl)"
                class="hvr-bob d-block subjectUp p-3 me-2"
                target="_self"
              >
                <img
                  :src="eventList[5].image"
                  alt="活動"
                  class="img-fluid d-none d-lg-block"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 主題清單 MB -->
      <div class="themeMbList d-lg-none">
        <div class="row g-2">
          <div class="col-7 mt-2">
            <div class="d-flex flex-column justify-content-between h-100 p-2 pb-2 subjectUp">
              <a
                href="#"
                @click.prevent="recordClickHeight(eventList_m[0]?.targetUrl)"
                class="d-block "
              >
                <img :src="eventList_m[0]?.image" alt="theme mb" class="img-fluid" />
              </a>
              <a
                href="#"
                @click.prevent="recordClickHeight(eventList_m[1]?.targetUrl)"
                class="d-block"
              >
                <img :src="eventList_m[1]?.image" alt="theme mb" class="img-fluid" />
              </a>
              <a
                href="#"
                class="d-block"
                @click.prevent="recordClickHeight(eventList_m[2]?.targetUrl)"
              >
                <img :src="eventList_m[2]?.image" alt="theme mb" class="img-fluid" />
              </a>
            </div>
          </div>
          <div class="col-5 mt-2">
            <div class="d-flex flex-column justify-content-between">
              <a
                href="#"
                @click.prevent="recordClickHeight(eventList_m[3]?.targetUrl)"
                class="d-block mb-1 mb-sm-2 subjectUp p-1"
              >
                <img :src="eventList_m[3]?.image" alt="theme mb" class="img-fluid" />
              </a>
              <a
                href="#"
                @click.prevent="recordClickHeight(eventList_m[4]?.targetUrl)"
                class="d-block mb-1 mb-sm-2 subjectUp p-1"
              >
                <img :src="eventList_m[4]?.image" alt="theme mb" class="img-fluid" />
              </a>
              <a
                href="#"
                @click.prevent="recordClickHeight(eventList_m[5]?.targetUrl)"
                class="d-block subjectUp p-1"
              >
                <img :src="eventList_m[5]?.image" alt="theme mb" class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        class="banner-image img-fluid d-none d-lg-block"
        src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/index_03a_pc.jpg"
        alt="主題區尾部pc"
      />
      <img
        class=" img-fluid d-lg-none"
        src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/index_03a_mb.jpg"
        alt="主題區尾部mb"
      />
    </div>
    <!-- 黃色背景圖 -->
    <div class="hotTheme position-relative">
      <img class=" img-fluid position-absolute girl d-lg-block d-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/bg_right_1.png" alt="右邊的女孩"/>
      <!-- 活動清單 pc -->
      <div class="d-none d-lg-block">
        <div class="activities">
          <div class="container d-none d-lg-block pt-3">
            <div class="row justify-content-center">
              <div class="col-lg-10 themeActivities">
                <div class="row g-3">
                  <swiper
                    :slidesPerView="2.3"
                    :watchOverflow="true"
                    :spaceBetween="10"
                    :breakpoints="{
                      576: {
                        slidesPerView: 2.3,
                        spaceBetween: 10,
                      },
                      992: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                      },
                    }"
                    :navigation="{
                      nextEl: '#js-next1',
                      prevEl: '#js-prev1',
                    }"
                  >
                    <swiper-slide
                      class="col-4 d-none d-lg-block"
                      v-for="event in themeList"
                      :key="event"
                    >
                      <a
                        href="#"
                        @click.prevent="recordClickHeight(event.targetUrl)"
                        class=""
                      >
                        <img :src="event.image" alt="活動清單 pc" class="img-fluid product-card" />
                      </a>
                    </swiper-slide>
                  </swiper>
                </div>
                <!-- navigation buttons -->
                <div id="js-prev1" class="swiper-button-prev"></div>
                <div id="js-next1" class="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 活動清單 mb -->
      <div class="container d-lg-none pt-3">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row g-3">
              <swiper
                :slidesPerView="3.08"
                :spaceBetween="10"
                :breakpoints="{
                  576: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  }
                }"
              >
                <swiper-slide class="col-4 d-lg-none" v-for="event in themeList_m" :key="event">
                  <a href="#" @click.prevent="recordClickHeight(event.targetUrl)" class="hvr-bob">
                    <img :src="event.image" alt="活動清單 mb" class="img-fluid">
                  </a>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
      <!-- 超級爆品99秒殺 -->
      <div class="container">
        <div class="row justify-content-center">
          <img
            class="img-fluid py-3 pt-lg-7 pt-xl-11 pb-lg-0 d-none d-lg-block w-80"
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/99title_pc.png"
            alt="超級爆品99秒殺 標題"
          />
          <img
            class="img-fluid py-3 pt-lg-7 pt-xl-11 pb-lg-0 d-lg-none"
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/99title_mb.png"
            alt="超級爆品99秒殺 標題"
          />
          <div class="col-lg-11 mt-lg-6 mb-md-6 mb-lg-0 pb-3">
            <div class="row g-1 g-lg-3">
              <div class="col-6">
                <div>
                  <swiper
                    class="h-100"
                    :loop="true"
                    :spaceBetween="0"
                    :initialSlide="1"
                    :autoplay="{
                      delay: 4000,
                      disableOnInteraction: false,
                    }"
                    :pagination="{
                      el: '.swiperleft-pagination',
                      type: 'bullets',
                      clickable: true,
                    }"
                  >
                    <swiper-slide v-for="big in bigSaleLeft" :key="big + '1'">
                      <a
                        href="#"
                        @click.prevent="recordClickHeight(big.targetUrl)"
                        class="d-block overflow-hidden text-center px-1 h-100"
                      >
                        <img
                          :src="big.image"
                          alt="超級爆品99秒殺(左)"
                          class="img-fluid"
                        />
                      </a>
                    </swiper-slide>
                  </swiper>
                  <div class="swiperleft-pagination text-center swiperPagination"></div>
                </div>
              </div>
              <div class="col-6">
                <div>
                  <swiper
                    class="h-100"
                    :loop="true"
                    :spaceBetween="0"
                    :initialSlide="1"
                    :autoplay="{
                      delay: 4000,
                      disableOnInteraction: false,
                    }"
                    :pagination="{
                      el: '.swiperright-pagination',
                      type: 'bullets',
                      clickable: true,
                    }"
                  >
                    <swiper-slide v-for="big in bigSaleRight" :key="big + '2'">
                      <a
                        href="#"
                        @click.prevent="recordClickHeight(big.targetUrl)"
                        class="d-block overflow-hidden text-center px-1 h-100"
                      >
                        <img
                          :src="big.image"
                          alt="超級爆品99秒殺(右)"
                          class="img-fluid"
                        />
                      </a>
                    </swiper-slide>
                  </swiper>
                  <div
                    class="swiperright-pagination text-center swiperPagination"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 送禮送到心 -->
      <div class="container mb-3 mb-lg-5">
        <a href="#" @click.prevent="recordClickHeight(moonList1.link)">
          <img
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/title_2_pc.png"
            alt="taste title"
            class="img-fluid d-none d-lg-block"
          />
          <img
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/title_2_mb.png"
            alt="taste title"
            class="img-fluid d-lg-none"
          />
        </a>
        <div class="tribute-bg padding-block">
          <div class="inner-block px-2 px-lg-4">
            <div class="d-lg-flex justify-content-between">
              <div class="product-block">
                <div
                  class="row product-content flex-wrap row g-2 g-lg-4"
                >
                  <div
                    class="col-6 col-lg-3 mb-3"
                    v-for="menu in moonList1.products"
                    :key="menu + '1'"
                  >
                    <div
                      class="prd-item position-relative"
                      :class="{ 'sold-out': menu.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${menu.productId}`"
                        class="product-card d-block text-black"
                      >
                        <div
                          class="card rounded-0 px-1 px-sm-2 px-md-3 px-xl-4 pt-2 pt-md-3 pt-xl-4"
                        >
                          <img
                            :src="menu.productImage"
                            class="card-img-top"
                            alt="product image"
                          />
                          <div
                            class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden"
                          >
                            <h5 class="card-title fs-6 fs-sm-5 mb-2 mb-lg-3">
                              {{ menu.productName }}
                            </h5>
                            <p class="d-inline text-nowrap fs-7 fs-xl-6">
                              <del class="prd-msrp text-black me-2 me-xl-3"
                                >${{ menu.oldPrice &lt; 0 ? 'xxx': $currency.currency(menu.oldPrice) }}</del
                              >特價<span class="price-color"
                                >$<span
                                  class="fs-3 fs-lg-2"
                                  >{{ menu.price &lt; 0 ? 'xxx': $currency.currency(menu.price) }}</span
                                ></span
                              >
                            </p>
                          </div>
                        </div>
                        <p
                          class="tribute-bg text-center py-1 py-md-2 text-white fs-6 fs-md-5"
                        >
                          立即搶購
                        </p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/bg_3_pc.png"
          alt="taste bottom"
          class="img-fluid d-none d-lg-block"
        />
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/bg_3_mb.png"
          alt="taste bottom"
          class="img-fluid d-lg-none"
        />
      </div>
      <!-- 肉肉超值團 -->
      <div class="container mb-3 mb-lg-5 position-relative">
        <a href="#" @click.prevent="recordClickHeight(moonList2.link)">
          <img
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/title_3_pc.png"
            alt="taste title"
            class="img-fluid d-none d-lg-block"
          />
          <img
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/title_3_mb.png"
            alt="taste title"
            class="img-fluid d-lg-none"
          />
        </a>
        <img class="img-fluid position-absolute barbecue d-lg-block d-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/bg_right_2.png" alt="烤肉"/>
        <div class="tribute-bg padding-block">
          <div class="inner-block px-2 px-lg-4">
            <div class="d-lg-flex justify-content-between">
              <div class="">
                <div class="row product-content flex-wrap g-2 g-md-3 g-lg-4">
                  <div
                    class="col-6 col-lg-3 mb-3"
                    v-for="menu in moonList2.products"
                    :key="menu + '2'"
                  >
                    <div
                      class="prd-item position-relative"
                      :class="{ 'sold-out': menu.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${menu.productId}`"
                        class="product-card d-block text-black"
                      >
                        <div
                          class="card rounded-0 px-1 px-sm-2 px-md-3 px-xl-4 pt-2 pt-md-3 pt-xl-4"
                        >
                          <img
                            :src="menu.productImage"
                            class="card-img-top"
                            alt="product image"
                          />
                          <div
                            class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden"
                          >
                            <h5 class="card-title fs-6 fs-sm-5 mb-2 mb-lg-3">
                              {{ menu.productName }}
                            </h5>
                            <p class="d-inline text-nowrap fs-7 fs-xl-6">
                              <del class="prd-msrp text-black me-2 me-xl-3"
                                >${{ menu.oldPrice &lt; 0 ? 'xxx': $currency.currency(menu.oldPrice) }}</del
                              >特價<span class="price-color"
                                >$<span
                                  class="fs-3 fs-lg-2"
                                  >{{ menu.price &lt; 0 ? 'xxx': $currency.currency(menu.price) }}</span
                                ></span
                              >
                            </p>
                          </div>
                        </div>
                        <p
                          class="tribute-bg text-center py-1 py-md-2 text-white fs-6 fs-md-5"
                        >
                          立即搶購
                        </p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/bg_3_pc.png"
          alt="taste bottom"
          class="img-fluid d-none d-lg-block"
        />
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/bg_3_mb.png"
          alt="taste bottom"
          class="img-fluid d-lg-none"
        />
      </div>
      <!-- 烤肉這樣配 -->
      <div class="container mb-3 mb-lg-5">
        <a href="#" @click.prevent="recordClickHeight(moonList3.link)">
          <img
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/title_4_pc.png"
            alt="taste title"
            class="img-fluid d-none d-lg-block"
          />
          <img
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/title_4_mb.png"
            alt="taste title"
            class="img-fluid d-lg-none"
          />
        </a>
        <div class="tribute-bg padding-block">
          <div class="inner-block px-2 px-lg-4">
            <div class="d-lg-flex justify-content-between">
              <div class="product-block">
                <div class="row product-content flex-wrap g-2 g-md-3 g-lg-4">
                  <div
                    class="col-6 col-lg-3 mb-3"
                    v-for="menu in moonList3.products"
                    :key="menu + '3'"
                  >
                    <div
                      class="prd-item position-relative"
                      :class="{ 'sold-out': menu.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${menu.productId}`"
                        class="product-card d-block text-black"
                      >
                        <div
                          class="card rounded-0 px-1 px-sm-2 px-md-3 px-xl-4 pt-2 pt-md-3 pt-xl-4"
                        >
                          <img
                            :src="menu.productImage"
                            class="card-img-top"
                            alt="product image"
                          />
                          <div
                            class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden"
                          >
                            <h5 class="card-title fs-6 fs-sm-5 mb-2 mb-lg-3">
                              {{ menu.productName }}
                            </h5>
                            <p class="d-inline text-nowrap fs-7 fs-xl-6">
                              <del class="prd-msrp text-black me-2 me-xl-3"
                                >${{ menu.oldPrice &lt; 0 ? 'xxx': $currency.currency(menu.oldPrice) }}</del
                              >特價<span class="price-color"
                                >$<span
                                  class="fs-3 fs-lg-2"
                                  >{{ menu.price &lt; 0 ? 'xxx': $currency.currency(menu.price) }}</span
                                ></span
                              >
                            </p>
                          </div>
                        </div>
                        <p
                          class="tribute-bg text-center py-1 py-md-2 text-white fs-6 fs-md-5"
                        >
                          立即搶購
                        </p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/bg_3_pc.png"
          alt="taste bottom"
          class="img-fluid d-none d-lg-block"
        />
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/bg_3_mb.png"
          alt="taste bottom"
          class="img-fluid d-lg-none"
        />
      </div>
      <!-- 居家便利烤 -->
      <div class="container mb-3 mb-lg-5">
        <a href="#" @click.prevent="recordClickHeight(moonList4.link)">
          <img
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/title_5_pc.png"
            alt="taste title"
            class="img-fluid d-none d-lg-block"
          />
          <img
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/title_5_mb.png"
            alt="taste title"
            class="img-fluid d-lg-none"
          />
        </a>
        <div class="tribute-bg padding-block">
          <div class="inner-block px-2 px-lg-4">
            <div class="d-lg-flex justify-content-between">
              <div class="product-block">
                <div class="row product-content flex-wrap g-2 g-md-3 g-lg-4">
                  <div
                    class="col-6 col-lg-3 mb-3"
                    v-for="menu in moonList4.products"
                    :key="menu + '4'"
                  >
                    <div
                      class="prd-item position-relative"
                      :class="{ 'sold-out': menu.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${menu.productId}`"
                        class="product-card d-block text-black"
                      >
                        <div
                          class="card rounded-0 px-1 px-sm-2 px-md-3 px-xl-4 pt-2 pt-md-3 pt-xl-4"
                        >
                          <img
                            :src="menu.productImage"
                            class="card-img-top"
                            alt="product image"
                          />
                          <div
                            class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden"
                          >
                            <h5 class="card-title fs-6 fs-sm-5 mb-2 mb-lg-3">
                              {{ menu.productName }}
                            </h5>
                            <p class="d-inline text-nowrap fs-7 fs-xl-6">
                              <del class="prd-msrp text-black me-2 me-xl-3"
                                >${{ menu.oldPrice &lt; 0 ? 'xxx': $currency.currency(menu.oldPrice) }}</del
                              >特價<span class="price-color"
                                >$<span
                                  class="fs-3 fs-lg-2"
                                  >{{ menu.price &lt; 0 ? 'xxx': $currency.currency(menu.price) }}</span
                                ></span
                              >
                            </p>
                          </div>
                        </div>
                        <p
                          class="tribute-bg text-center py-1 py-md-2 text-white fs-6 fs-md-5"
                        >
                          立即搶購
                        </p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/bg_3_pc.png"
          alt="taste bottom"
          class="img-fluid d-none d-lg-block"
        />
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/bg_3_mb.png"
          alt="taste bottom"
          class="img-fluid d-lg-none"
        />
      </div>
      <!-- 折價券優惠專區 -->
      <div class="container mb-3 mb-lg-5">
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/title_6_pc.png"
          alt="taste title"
          class="img-fluid d-none d-lg-block"
        />
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/title_6_mb.png"
          alt="taste title"
          class="img-fluid d-lg-none"
        />
        <div class="tribute-bg padding-block">
          <div class="inner-block px-2 px-lg-4">
            <div class="d-lg-flex justify-content-between">
              <div class="product-block">
                <div class="row product-content flex-wrap g-2 g-md-3 g-lg-4">
                  <div
                    class="col-6 col-lg-3 mb-2 mb-md-0"
                    v-for="menu in moonList5.products"
                    :key="menu + '5'"
                  >
                    <div
                      class="prd-item position-relative"
                      :class="{ 'sold-out': menu.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${menu.productId}`"
                        class="product-card d-block text-black"
                      >
                        <div
                          class="card rounded-0 px-1 px-sm-2 px-md-3 px-xl-4 pt-2 pt-md-3 pt-xl-4"
                        >
                          <img
                            :src="menu.productImage"
                            class="card-img-top"
                            alt="product image"
                          />
                          <div
                            class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden"
                          >
                            <h5 class="card-title fs-6 fs-sm-5 mb-2 mb-lg-3">
                              {{ menu.productName }}
                            </h5>
                            <p class="d-inline text-nowrap fs-7 fs-xl-6">
                              <del class="prd-msrp text-black me-2 me-xl-3"
                                >${{ menu.oldPrice &lt; 0 ? 'xxx': $currency.currency(menu.oldPrice) }}</del
                              >特價<span class="price-color"
                                >$<span
                                  class="fs-3 fs-lg-2"
                                  >{{ menu.price &lt; 0 ? 'xxx': $currency.currency(menu.price) }}</span
                                ></span
                              >
                            </p>
                          </div>
                        </div>
                        <p
                          class="tribute-bg text-center py-1 py-md-2 text-white fs-6 fs-md-5"
                        >
                          立即搶購
                        </p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/bg_3_pc.png"
          alt="taste bottom"
          class="img-fluid d-none d-lg-block"
        />
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/bg_3_mb.png"
          alt="taste bottom"
          class="img-fluid d-lg-none"
        />
      </div>
      <!-- 強檔品牌 -->
      <div class="mb-3 mb-lg-5">
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/line_a_up_pc.png"
          alt="power title pc"
          class="img-fluid d-none d-lg-block"
          style="margin-bottom: -45px"
        />
        <img
          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/line_a_up_mb.png"
          alt="power title mb"
          class="img-fluid d-lg-none"
        />
        <div class="mainBrand pb-lg-4 pb-0">
          <div class="container">
            <div class="text-center">
              <img class="img-fluid py-3 pt-lg-7 pt-xl-11 pb-lg-0 d-none d-lg-inline" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/strong_title_pc.png" alt="強檔品牌標題">
              <img class="img-fluid py-3 pt-lg-7 pt-xl-11 pb-lg-0 d-lg-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/strong_title_mb.png" alt="強檔品牌標題">
            </div>
            <div class="row mt-lg-5 mt-0">
              <div class="col-6 col-lg-3 mb-3 mb-lg-4 product-card" v-for="brand in powerBrand" :key="brand + '1'">
                <a href="#" @click.prevent="recordClickHeight(brand.targetUrl)" class="d-block text-center product-bob">
                  <img class="img-fluid" :src="brand.image" alt="強檔品牌">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/line_b_down_pc.png"
            alt="power"
            class="img-fluid d-none d-lg-block"
            style="margin-bottom: -45px"
          />
          <img
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/MB/line_b_down_mb.png"
            alt="power"
            class="img-fluid d-lg-none"
          />
        </div>
        <!-- 看更多商品 -->
        <div class="d-flex justify-content-center">
          <router-link to="/" class="product-card">
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/more.png" alt="看更多商品" class="img-fluid d-lg-block d-none" style="width: 70%; margin: -10px auto;">
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/moonFestival/moonfestival/more.png" alt="看更多商品" class="img-fluid d-lg-none" style="width: 50%; margin: -15px auto;">
          </router-link>
        </div>
      </div>
      <!-- 注意事項 -->
      <div class="container" ref="moonnotice" id="moonnotice">
        <div class="px-3 px-sm-0 text-start p-4 mt-9 notice">
          <div class="mb-5">
            <p class="mb-3">活動詳情</p>
            <div class="mb-3">
              <p style="font-weight: bold;" class="mb-3">一、全站單日滿$2000送LINE POINTS 3%</p>
              <ol>
                <li>活動期間：2022/8/24 00:00-9/13 23:59</li>
                <li>全站商品單日消費累積滿$2000送LINE POINTS 3%，上限60點(LINE POINTS 1點=1元)。</li>
                <li>常溫宅配/低溫宅配/超值商品配購物車之同一日訂單可合併計算滿額資格。(同一日係指相同日期的00:00-23:59)</li>
                <li>回饋點數將於10/17前以簡訊發送領取連結至會員帳戶登錄之手機號碼。</li>
              </ol>
            </div>
            <div class="mb-3">
              <p style="font-weight: bold;" class="mb-3">二、指定品單日滿$3000送$3000海陸燒烤組</p>
              <ol>
                <li>活動期間：2022/8/24 00:00-9/13 23:59，數量有限，送完為止</li>
                <li>中秋節指定類別商品，單日消費累積滿$3000送$3000海陸燒烤組，免登記，符合資格即享回饋。活動期間限量100組，額滿結束將於官方粉絲團公告截止。</li>
                <li>常溫宅配/低溫宅配/超值商品配購物車之同一日訂單可合併計算滿額資格。(同一日係指相同日期的00:00-23:59)</li>
                <li>中秋節指定類別商品：*購買以下連結任一商品滿額，即享回饋
                  <ul>
                    <li style="list-style-type: disc;"><a href="https://www.yesgogogo.com/activity/moonFestival">【中秋美食季】活動頁</a></li>
                    <li style="list-style-type: disc;"><a href="https://www.yesgogogo.com/productboard/productList/S072661">【送禮送到心】活動館</a></li>
                    <li style="list-style-type: disc;"><a href="https://www.yesgogogo.com/productboard/productList/S072659">【肉肉超值團】活動館</a></li>
                    <li style="list-style-type: disc;"><a href="https://www.yesgogogo.com/productboard/productList/S072660">【烤肉這樣配】活動館</a></li>
                    <li style="list-style-type: disc;"><a href="https://www.yesgogogo.com/productboard/productList/S072902">【居家便利烤】活動館</a></li>
                  </ul>
                </li>
                <li>海陸燒烤組(市價$3,000)，內含頂級鮑魚10顆、鮮嫩去骨雞腿排190g*2片、日本大生蠔5顆、活凍草蝦10隻250g、霜降牛五花肉片250g。贈品圖示僅供參考，以實物為準。</li>
                <li>贈品將於10/24後陸續寄送至會員帳戶登錄之地址。</li>
              </ol>
            </div>
            <div class="mb-3">
              <p>注意事項</p>
            </div>
            <div>
              <ol>
                <li>參加活動者須為完成訂單始符合認列資格，若因訂單取消、退貨，則該筆訂單不得要求列入計算，不符合活動資格。</li>
                <li>本活動回饋不適用於員購、文旦採購等專案賣場及企業帳號訂單。</li>
                <li>活動頁呈現之商品名稱、價格、顏色、規格、數量，若與購物車之呈現有所不符，以購物車之內容為準。</li>
                <li>活動事項皆載明於網頁中，參加本活動者視為同意接受本活動注意事項之規範，參加人不符合或違反本活動規定事項者，不可歸責於本公司，本公司保有取消其參加資格之權利，並對於任何破壞本活動之行為保留相關權利。</li>
                <li>如有其他未盡事宜，修改後的活動內容及約定條款將公佈在yesgogogo網站上，若您於任何修改或變更後繼續使用本服務時，視為您已閱讀、瞭解並同意接受該等修改或變更。</li>
                <li>參加者若因會員資料填寫不完整者，或活動後變更資料(如姓名、手機、地址等)，或手機收訊不良、電信業者遺漏或阻擋企業訊息等情況，導致無法收到商品或簡訊，信件無人領取等，恕不補發。</li>
                <li>若遇贈品缺貨，將延後出貨或以等值商品替代，並不得替換現金或其他商品。</li>
                <li>本公司保留隨時變更、修改、暫停或終止及解釋本活動相關事項及約定條款之權利，若有其他未盡事宜，悉依本公司相關規定或決定辦理。</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slideShow: '',
      slideShow_m: '',
      moonList: '',
      moonList1: '',
      moonList2: '',
      moonList3: '',
      moonList4: '',
      moonList5: '',
      eventList_m: '',
      eventList: '',
      themeList_m: '',
      themeList: '',
      bigSaleLeft: '',
      bigSaleRight: '',
      powerBrand: ''
    }
  },
  methods: {
    // ?輪播廣告
    getSlideImg () {
      // mobile
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=moon_m_F`
      this.$http.get(urlm).then((res) => {
        if (res.data.rtnCode === 0) {
          this.slideShow_m = res.data.info
        }
      })
      // PC
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=moon_F`
      this.$http.get(url).then((res) => {
        if (res.data.rtnCode === 0) {
          this.slideShow = res.data.info
        }
      })
    },
    // ?上方活動區
    getEventList () {
      // mobile
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=moon_m_A`
      this.$http.get(urlm).then((res) => {
        if (res.data.rtnCode === 0) {
          this.eventList_m = res.data.info
        }
      })
      // PC
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=moon_A`
      this.$http.get(url).then((res) => {
        if (res.data.rtnCode === 0) {
          this.eventList = res.data.info
        }
      })
    },
    // ?各主題圖
    getThemeList () {
      // mobile
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=moon_m_B`
      this.$http.get(urlm).then((res) => {
        if (res.data.rtnCode === 0) {
          this.themeList_m = res.data.info
        }
      })
      // PC
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=moon_B`
      this.$http.get(url).then((res) => {
        if (res.data.rtnCode === 0) {
          this.themeList = res.data.info
        }
      })
    },
    // ?超級爆品(左)
    getPopularLeft () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=moon_CL`
      this.$http.get(url).then((res) => {
        if (res.data.rtnCode === 0) {
          this.bigSaleLeft = res.data.info
        }
      })
    },
    // ?超級爆品(右)
    getPopularRight () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=moon_CR`
      this.$http.get(url).then((res) => {
        if (res.data.rtnCode === 0) {
          this.bigSaleRight = res.data.info
        }
      })
    },
    // ?強檔品牌
    getPowerBrand () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=moon_D`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.powerBrand = res.data.info
          }
        })
    },
    // ? 各館主打
    getMoonList () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=moon_E`
      this.$http.get(url).then((res) => {
        if (res.data.rtnCode === 0) {
          this.moonList = res.data.info
          this.moonList.forEach((item) => {
            if (item.code === 'moon_E_1') {
              this.moonList1 = item
            } else if (item.code === 'moon_E_2') {
              this.moonList2 = item
            } else if (item.code === 'moon_E_3') {
              this.moonList3 = item
            } else if (item.code === 'moon_E_4') {
              this.moonList4 = item
            } else if (item.code === 'moon_E_5') {
              this.moonList5 = item
            }
          })

          // ?query錨點(注意事項)
          if (Object.keys(this.$route.query).length !== 0 && this.$route.query.tagged === 'moonevent') {
            setTimeout(() => {
              window.scrollTo(0, this.$refs.moonnotice.offsetTop)
            }, 500)
          }

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
    // ?小電視及看更 多記錄高度
    recordClickHeight (url) {
      // ?點擊產品觸發紀錄瀏覽高度於LocalStorage
      const scrollYHeight = window.scrollY
      localStorage.setItem('clickMoonFestivalHeight', scrollYHeight)
      setTimeout(() => {
        window.location = url
      }, 500)
    },
    checkLocalHeight () {
      // ?檢查LocalStorage
      if (window.localStorage.getItem('clickMoonFestivalHeight')) {
        const globalheight = window.localStorage.getItem('clickMoonFestivalHeight')
        setTimeout(() => {
          window.scrollTo(0, globalheight)
        }, 300)
        localStorage.removeItem('clickMoonFestivalHeight')
      }
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
    }
  },
  watch: {
    $route (to, from) {
      if (to.fullPath.match('/productboard/') || to.fullPath === '/') {
        const recordHeight = window.scrollY
        this.$store.commit('getEventRecordHeight', recordHeight)
      } else {
        this.$store.commit('getEventRecordHeight', '')
      }
    }
  },
  mounted () {
    this.getMoonList()
    this.getEventList()
    this.getThemeList()
    this.getPopularLeft()
    this.getPopularRight()
    this.getSlideImg()
    this.getPowerBrand()
  },
  updated () {
    this.checkLocalHeight()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/activity/moonFestival/_site.scss";
img {
  object-fit: fill;
  display: block;
}
</style>
