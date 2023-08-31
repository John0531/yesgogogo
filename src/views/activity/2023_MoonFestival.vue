<template>
  <div class="Bg">
    <div class="foodContainer position-relative" style="overflow: hidden">
      <div class="headerPc d-none d-lg-block">
        <!-- PC輪播活動-->
        <div class="position-relative">
          <img
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/kv_PC_item-T2.png"
            alt="主視覺背景"
            class="d-block mx-auto"
          />
          <div class="position-absolute start-50 translate-middle-x top-0">
            <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="0">
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/kv_PC_item-T1.png"
                alt="大標題"
              />
              <div
                class="position-absolute start-50 translate-middle-x sub-title-bg"
              >
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/kv_PC_item-T3-BG.png"
                  alt="副標題背景"
                />
                <swiper
                    :direction="'vertical'"
                    class="position-absolute subtitle"
                    :loop="true"
                    :spaceBetween="0"
                    :initialSlide="1"
                    :speed="400"
                    :autoplay="{
                      delay: 2000,
                      disableOnInteraction: false,
                    }"
                    :navigation="false"
                  >
                    <swiper-slide>
                      <img
                        src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/kv_PC_item-T3-1.png"
                        alt="大標題"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/kv_PC_item-T3-2.png"
                        alt="大標題"
                      />
                    </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="headerMb d-lg-none">
        <!-- MB輪播活動-->
        <div class="position-relative">
          <img
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/kv_MB_item-T2.png"
            alt="主視覺背景"
            class="d-block mx-auto img-fluid"
          />
          <div class="position-absolute start-50 translate-middle-x top-0 w-100">
            <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="0">
              <img
                class="img-fluid d-block mx-auto"
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/kv_MB_item-T1.png"
                alt="大標題"
              />
              <div
                class="position-absolute start-50 translate-middle-x sub-title-bg-mb w-80"
              >
                <img
                  class="img-fluid d-block mx-auto"
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/kv_PC_item-T3-BG.png"
                  alt="副標題背景"
                />
                <swiper
                    :direction="'vertical'"
                    class="position-absolute subtitle w-100"
                    :loop="true"
                    :spaceBetween="0"
                    :initialSlide="1"
                    :speed="400"
                    :autoplay="{
                      delay: 2000,
                      disableOnInteraction: false,
                    }"
                    :navigation="false"
                  >
                    <swiper-slide>
                      <img
                        class="img-fluid d-block mx-auto"
                        src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/kv_PC_item-T3-1.png"
                        alt="大標題"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        class="img-fluid d-block mx-auto"
                        src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/kv_PC_item-T3-2.png"
                        alt="大標題"
                      />
                    </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 活動按鈕專區 -->
      <div class="activitiesArea pt-9">
        <!-- PC各類活動 -->
        <div class="d-none d-lg-block mb-4 mb-md-0 mt-6">
          <div class="wishfulContainerBox">
            <div class="row">
              <div class="col-8 p-0">
                <div class="row gx-2 gy-3">
                  <a
                    v-if="activitiesImgs[0]"
                    :href="activitiesImgs[0].targetUrl"
                    class="col-6 d-block hvr-bob"
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
                    class="col-6 d-block hvr-bob"
                    @click.prevent="goHyperText($refs.event1)"
                    ><img
                      v-if="activitiesImgs[1]"
                      :src="activitiesImgs[1].image"
                      class="img-fluid w-100"
                      alt=""
                  /></a>
                  <a
                    v-if="activitiesImgs[3]"
                    :href="activitiesImgs[3].targetUrl"
                    class="col-12 d-block hvr-bob mb-1"
                    ><img
                      v-if="activitiesImgs[3]"
                      :src="activitiesImgs[3].image"
                      class="img-fluid w-100"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="col-4">
                <div class="row gx-2 gy-3">
                  <a
                    v-if="activitiesImgs[2]"
                    :href="activitiesImgs[2].targetUrl"
                    class="col-12 d-block hvr-bob mb-1 p-0"
                    ><img
                      v-if="activitiesImgs[2]"
                      :src="activitiesImgs[2].image"
                      class="img-fluid w-100"
                      alt=""
                  /></a>
                  <a
                    v-if="activitiesImgs[4]"
                    :href="activitiesImgs[4].targetUrl"
                    class="col-12 d-block hvr-bob mb-1 p-0"
                    ><img
                      v-if="activitiesImgs[4]"
                      :src="activitiesImgs[4].image"
                      class="img-fluid w-100"
                      alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 手機板各類活動 -->
        <div
          class="d-lg-none justify-content-between mx-0 mx-md-3 pt-1 mt-sm-4 mt-md-5"
        >
          <div class="wishfulContainerMB">
            <div class="row g-2">
              <a
                v-if="activitiesImgsMb[0]"
                @click.prevent="goHyperText($refs.event2)"
                class="col-6 d-block hvr-bob mb-1"
                ><img
                  v-if="activitiesImgsMb[0]"
                  :src="activitiesImgsMb[0].image"
                  class="img-fluid w-100"
                  alt=""
              /></a>
              <a
                v-if="activitiesImgsMb[1]"
                @click.prevent="goHyperText($refs.event1)"
                class="col-6 d-block hvr-bob mb-1"
                ><img
                  v-if="activitiesImgsMb[1]"
                  :src="activitiesImgsMb[1].image"
                  class="img-fluid w-100"
                  alt=""
              /></a>
              <a
                v-if="activitiesImgsMb[2]"
                :href="activitiesImgsMb[2].targetUrl"
                class="col-6 d-block hvr-bob mb-1"
                ><img
                  v-if="activitiesImgsMb[2]"
                  :src="activitiesImgsMb[2].image"
                  class="img-fluid w-100"
                  alt=""
              /></a>
              <a
                v-if="activitiesImgsMb[3]"
                :href="activitiesImgsMb[3].targetUrl"
                class="col-6 d-block hvr-bob mb-1"
                ><img
                  v-if="activitiesImgsMb[3]"
                  :src="activitiesImgsMb[3].image"
                  class="img-fluid w-100"
                  alt=""
              /></a>
              <a
                v-if="activitiesImgsMb[4]"
                :href="activitiesImgsMb[4].targetUrl"
                class="col-12 d-block hvr-bob mb-1"
                ><img
                  v-if="activitiesImgsMb[4]"
                  :src="activitiesImgsMb[4].image"
                  class="img-fluid w-100"
                  alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
      <!-- 超級爆品 -->
      <div class="block4_2">
        <div class="pt-4 pb-3">
          <div class="wishfulContainer pb-2 pb-md-4 pb-lg-5">
            <div class="container mt-2 px-0">
              <!-- title -->
              <div class="d-flex justify-content-center pt-4">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_PC_3_T.png"
                  alt="超級爆品"
                  class="img-fluid d-none d-lg-inline"
                />
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_MB_3_T.png"
                  alt="超級爆品"
                  class="img-fluid d-inline d-lg-none"
                />
              </div>
              <div class="row g-0 px-lg-6 mid-bg-1">
                <div
                  class="specialProductItem col-6 col-lg-4 text-center p-2"
                  v-for="dishes in bowPinList"
                  :key="dishes + '1'"
                >
                  <a
                    href="#"
                    class="d-block hvr-bob"
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
              <div class="bg-banner-swiper">
                <div class="container">
                  <!-- 品牌活動輪播 PC-->
                  <div class="mt-5 d-none d-lg-block">
                    <swiper
                      class="eventBannerSwiper h-100"
                      :loop="true"
                      :spaceBetween="0"
                      :initialSlide="1"
                      :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                      }"
                    >
                      <swiper-slide
                        v-for="item in activityBanners"
                        :key="item.code"
                      >
                        <a
                          href="#"
                          @click.prevent="recordClickHeight(item.targetUrl)"
                          class="d-block overflow-hidden text-center h-100"
                        >
                          <img
                            :src="item.image"
                            alt="banner image"
                            class="w-100"
                          />
                        </a>
                      </swiper-slide>
                    </swiper>
                  </div>
                  <!-- 品牌活動輪播 mb-->
                  <div class="mt-4 d-lg-none">
                    <swiper
                      class="eventBannerMSwiper h-100"
                      :loop="true"
                      :spaceBetween="0"
                      :initialSlide="1"
                      :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                      }"
                    >
                      <swiper-slide
                        v-for="item in activityBannersMb"
                        :key="item.code"
                      >
                        <a
                          href="#"
                          @click.prevent="recordClickHeight(item.targetUrl)"
                          target="_blank"
                          class="d-block overflow-hidden text-center h-100"
                        >
                          <img
                            :src="item.image"
                            alt="banner image"
                            class="w-100"
                          />
                        </a>
                      </swiper-slide>
                    </swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品專區 -->
      <div class="group">
        <!-- 澎派肉肉超值購 -->
        <div class="pt-3 pt-md-5 pt-mb-5 pb-1 pb-md-3">
          <div class="wishfulContainer pb-2">
            <div class="container position-relative">
              <a href="#" class="d-flex text-center">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_PC_5_T1.png"
                  alt="澎派肉肉超值購pc"
                  class="img-fluid d-none d-lg-inline"
                />
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_MB_5_T1.png"
                  alt="澎派肉肉超值購mb"
                  class="img-fluid d-lg-none"
                />
              </a>
              <div class="mid-bg-2">
                <div
                  class="d-flex justify-content-end pt-1 pt-md-2 pe-4 pb-mb-0"
                >
                  <a
                    :href="foodList01.link"
                    class="d-block w-20 text-end hvr-grow mb-3"
                  >
                    <img
                      src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/btn_more_y.png"
                      alt="看更多按鈕"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <!-- 澎派肉肉超值購 商品-->
                <div class="row justify-content-center g-4 g-lg-3 px-2">
                  <div
                    class="col-6 col-lg-3"
                    v-for="item in foodList01.products"
                    :key="item.code"
                  >
                    <div
                      class="prd-item hvr-bob"
                      :class="{ 'sold-out': item.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${item.productId}`"
                        class="prd-link text-secondary text-decoration-none"
                      >
                        <img
                          :src="item.productImage"
                          class="prd-fit img-fluid p-1 p-md-2"
                          :alt="item.productName"
                        />
                        <div
                          class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-5"
                        >
                          {{ item.slogan }}
                        </div>
                        <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                          <p
                            class="card-text text-dark text-center mt-0 prd-name fs-6"
                          >
                            {{ item.productName }}
                          </p>
                          <div
                            class="d-flex justify-content-center align-items-end mb-1 mb-md-2"
                          >
                            <del
                              class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                              >${{ item.oldPrice &lt; 0 ? 'xxx': $currency.currency(item.oldPrice) }}
                            </del>
                            <span
                              class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6"
                              >特價 <span class="prd-currency">$</span
                              ><span
                                class="sell-price"
                                >{{ item.price &lt; 0 ? 'xxx': $currency.currency(item.price) }}</span
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
        <!-- 人氣好禮吃甜甜 -->
        <div class="pt-3 pt-mb-5 pb-1 pb-md-3">
          <div class="wishfulContainer pb-2">
            <div class="container position-relative">
              <a href="#" class="d-flex text-center">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_PC_5_T2.png"
                  alt="人氣好禮吃甜甜pc"
                  class="img-fluid d-none d-lg-inline"
                />
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_MB_5_T2.png"
                  alt="人氣好禮吃甜甜mb"
                  class="img-fluid d-lg-none"
                />
              </a>
              <div class="mid-bg-2">
                <div
                  class="d-flex justify-content-end pt-1 pt-md-2 pe-4 pb-mb-0"
                >
                  <a
                    :href="foodList02.link"
                    class="d-block w-20 text-end hvr-grow mb-3"
                  >
                    <img
                      src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/btn_more_y.png"
                      alt="看更多按鈕"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <!-- 人氣好禮吃甜甜 商品 -->
                <div class="row justify-content-center g-4 g-lg-3 px-2">
                  <div
                    class="col-6 col-lg-3"
                    v-for="item in foodList02.products"
                    :key="item.code"
                  >
                    <div
                      class="prd-item hvr-bob"
                      :class="{ 'sold-out': item.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${item.productId}`"
                        class="prd-link text-secondary text-decoration-none"
                      >
                        <img
                          :src="item.productImage"
                          class="prd-fit img-fluid p-1 p-md-2"
                          :alt="item.productName"
                        />
                        <div
                          class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-5"
                        >
                          {{ item.slogan }}
                        </div>
                        <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                          <p
                            class="card-text text-dark text-center mt-0 prd-name fs-6"
                          >
                            {{ item.productName }}
                          </p>
                          <div
                            class="d-flex justify-content-center align-items-end mb-1 mb-md-2"
                          >
                            <del
                              class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                              >${{ item.oldPrice &lt; 0 ? 'xxx': $currency.currency(item.oldPrice) }}
                            </del>
                            <span
                              class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6"
                              >特價 <span class="prd-currency">$</span
                              ><span
                                class="sell-price"
                                >{{ item.price &lt; 0 ? 'xxx': $currency.currency(item.price) }}</span
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
        <!-- 居家烤肉便利夯 -->
        <div class="pt-3 pt-mb-5 pb-1 pb-md-3">
          <div class="wishfulContainer pb-2">
            <div class="container position-relative">
              <a
                href="https://www.yesgogogo.com/productboard/productList/S072640"
                class="d-flex text-center"
              >
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_PC_5_T3.png"
                  alt="居家烤肉便利夯pc"
                  class="img-fluid d-none d-lg-inline"
                />
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_MB_5_T3.png"
                  alt="居家烤肉便利夯mb"
                  class="img-fluid d-lg-none"
                />
              </a>
              <div class="mid-bg-2">
                <div
                  class="d-flex justify-content-end pt-1 pt-md-2 pe-4 pb-mb-0"
                >
                  <a
                    :href="foodList03.link"
                    class="d-block w-20 text-end hvr-grow mb-3"
                  >
                    <img
                      src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/btn_more_y.png"
                      alt="看更多按鈕"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <!-- 居家烤肉便利夯 商品 -->
                <div class="row justify-content-center g-4 g-lg-3 px-2">
                  <div
                    class="col-6 col-lg-3"
                    v-for="item in foodList03.products"
                    :key="item.code"
                  >
                    <div
                      class="prd-item hvr-bob"
                      :class="{ 'sold-out': item.stock === 0 }"
                    >
                      <router-link
                        :to="`/productboard/product/${item.productId}`"
                        class="prd-link text-secondary text-decoration-none"
                      >
                        <img
                          :src="item.productImage"
                          class="prd-fit img-fluid p-1 p-md-2"
                          :alt="item.productName"
                        />
                        <div
                          class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-5"
                        >
                          {{ item.slogan }}
                        </div>
                        <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                          <p
                            class="card-text text-dark text-center mt-0 prd-name fs-6"
                          >
                            {{ item.productName }}
                          </p>
                          <div
                            class="d-flex justify-content-center align-items-end mb-1 mb-md-2"
                          >
                            <del
                              class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                              >${{ item.oldPrice &lt; 0 ? 'xxx': $currency.currency(item.oldPrice) }}
                            </del>
                            <span
                              class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6"
                              >特價 <span class="prd-currency">$</span
                              ><span
                                class="sell-price"
                                >{{ item.price &lt; 0 ? 'xxx': $currency.currency(item.price) }}</span
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
            <div class="container">
              <!-- 熱門品牌 -->
              <a href="#" class="d-flex text-center">
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_PC_8_T.png"
                  alt="熱門品牌pc"
                  class="img-fluid d-none d-lg-inline"
                />
                <img
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_MB_8_T_02.png"
                  alt="熱門品牌mb"
                  class="img-fluid d-lg-none"
                />
              </a>
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_PC_8_box_01.png"
                alt="活動頂部pc"
                class="img-fluid d-none d-lg-block fluid-bottom"
              />
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_MB_8_box_01.png"
                alt="活動頂部mb"
                class="img-fluid d-block d-lg-none fluid-bottom"
              />
              <div class="row g-0 px-4 px-sm-5 mid-bg-3">
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
                    <img :src="brand.image" alt="強檔品牌" class="img-fluid" />
                  </a>
                </div>
              </div>
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_MB_8_box_03.png"
                alt="活動底部mb"
                class="img-fluid d-block d-lg-none fluid-bottom"
              />
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/layout_PC_8_box_03.png"
                alt="活動底部pc"
                class="img-fluid d-none d-lg-block fluid-bottom"
              />
            </div>
          </div>
        </div>
        <!-- 按鈕 -->
        <div class="d-flex justify-content-center mt-5">
          <router-link
            to="/"
            class="w-50 w-sm-auto"
          >
            <img
              src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_MoomFest/btn_more.png"
              alt="看更多商品"
              class="img-fluid"
            />
          </router-link>
        </div>
        <div class="py-3 notice">
          <div class="container">
            <div class="col-sm-auto mb-2 flex-column">
              <div class="fs-5 py-1 text-start d-block fw-bold mb-2">
                活動詳情
              </div>
              <div class="fs-5">活動期間：2023/9/5 00:00-10/02 23:59</div>
              <!-- ==下錨點1== -->
              <a id="event1" name="event1" ref="event1"></a>
              <div class="fw-bold fs-5 py-1 text-start d-flex">
                <div>一、全站滿$2000送$200折價券</div>
              </div>
            </div>
            <ol class="">
              <li>
                <span
                  >全站商品單筆消費滿$2000送$200折價券，一筆訂單回饋一次，買愈多送愈多。例如:有3筆訂單金額滿$2000，即可獲得$600折價券。</span
                >
              </li>
              <li>回饋將於10/31前發送至會員帳戶內。</li>
            </ol>
            <div class="col-sm-auto mb-2 flex-column">
              <div class="fs-5 py-1 text-start d-block fw-bold">注意事項</div>
            </div>
            <ol class="">
              <li>
                回饋折價券為面額100元*2張，單筆訂單滿額1000元可使用一張，依此類推。
              </li>
              <li>
                上述活動1回饋，以該筆訂單結帳金額計算(扣除折價券、購物金等優惠活動)。
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
export default {
  data () {
    return {
      activitiesImgs: [], // ? 上方5活動
      activitiesImgsMb: [], // ? 上方5活動手機
      bowPinList: [], // ?超級爆品
      foodList: [],
      foodList01: {},
      foodList02: {},
      foodList03: {},
      brandlList: [], // ? 熱門品牌
      foodList01Link: '',
      foodList02Link: '',
      foodList03Link: '',
      activityBanners: [],
      activityBannersMb: []
    }
  },
  methods: {
    //* treatM_A 上方5活動
    getTopActivities () {
      /* 電腦版 */
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=2023_moomFest_A`
      this.$http.get(urlm).then((res) => {
        if (res.data.rtnCode !== 0) {
          this.$custom.alert(
            `2023_moomFest_A${res.data.rtnMsg}(${res.data.rtnCode})`
          )
          return
        }
        if (res.data.rtnCode === 0) {
          this.activitiesImgs = res.data.info
        }
      })
      /* 標題活動連結手機版 */
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=2023_moomFest_m_A`
      this.$http.get(url).then((res) => {
        if (res.data.rtnCode !== 0) {
          this.$custom.alert(
            `2023_moomFest_m_A${res.data.rtnMsg}(${res.data.rtnCode})`
          )
          return
        }
        if (res.data.rtnCode === 0) {
          this.activitiesImgsMb = res.data.info
        }
      })
    },
    // *2023_moomFest_B 超級爆品
    getBowPinList () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=2023_moomFest_B`
      this.$http.get(url).then((res) => {
        if (res.data.rtnCode !== 0) {
          this.$custom.alert(
            `zongziS_D${res.data.rtnMsg}(${res.data.rtnCode})`
          )
          return
        }
        if (res.data.rtnCode === 0) {
          this.bowPinList = res.data.info
        }
      })
    },
    // *2023_moomFest_C 活動BN
    getActivityBanner () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=2023_moomFest_C`
      this.$http.get(url).then((res) => {
        if (res.data.rtnCode !== 0) {
          this.$custom.alert(
            `2023_moomFest_C${res.data.rtnMsg}(${res.data.rtnCode})`
          )
          return
        }
        if (res.data.rtnCode === 0) {
          this.activityBanners = res.data.info
        }
      })
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=2023_moomFest_m_C`
      this.$http.get(urlm).then((res) => {
        if (res.data.rtnCode !== 0) {
          this.$custom.alert(
            `2023_moomFest_m_C${res.data.rtnMsg}(${res.data.rtnCode})`
          )
          return
        }
        if (res.data.rtnCode === 0) {
          this.activityBannersMb = res.data.info
        }
      })
    },
    // *2023_moomFest_D 澎派肉肉超值購 人氣好禮吃甜甜 居家烤肉便利夯
    getFoodList () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=2023_moomFest_D`
      this.$http.get(url).then((res) => {
        if (res.data.rtnCode !== 0) {
          this.$custom.alert(
            `2023_moomFest_D${res.data.rtnMsg}(${res.data.rtnCode})`
          )
          return
        }
        if (res.data.rtnCode === 0) {
          res.data.info.forEach((item) => {
            if (item.code === '2023_moomFest_D_1') {
              this.foodList01 = item
            } else if (item.code === '2023_moomFest_D_2') {
              this.foodList02 = item
            } else if (item.code === '2023_moomFest_D_3') {
              this.foodList03 = item
            }
          })
        }
      })
    },
    // *zongziS_G  熱門品牌 */
    getBrandList () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=2023_moomFest_E`
      this.$http.get(url).then((res) => {
        if (res.data.rtnCode !== 0) {
          this.$custom.alert(
            `2023_moomFest_E${res.data.rtnMsg}(${res.data.rtnCode})`
          )
          return
        }
        if (res.data.rtnCode === 0) {
          this.brandlList = res.data.info
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
    this.getBowPinList() /* 超級爆品  */
    this.getActivityBanner() /* 活動BN */
    this.getFoodList()
    this.getBrandList() /* 品牌強檔 */
  },
  mounted () {
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
  },
  updated () {
    this.checkLocalHeight()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/activity/2023_moomFest/_site.scss";
@import "@/assets/scss/activity/_hover.min.scss";
//
img {
  object-fit: fill;
  vertical-align: middle;
}
</style>
