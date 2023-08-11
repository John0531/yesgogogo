<template>
  <div>
    <div class="peacecontainer">
      <div class="headerxl text-center">
      <!-- 主視覺 PC -->
        <div class="position-relative d-none d-lg-block pt-3">
          <!-- 輪播活動 -->
          <img alt="安心好食節 PC" class="img-fluid mt-5" v-if="peaceBanner[0]" :src="peaceBanner[0].image">
          <div class="events-lg position-absolute start-50 translate-middle">
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
                  v-if="slideShow[0]"
                  :src="slideShow[0].image"
                  class="img-fluid"
                  alt="筆筆回饋10%無上限"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  v-if="slideShow[1]"
                  :src="slideShow[1].image"
                  class="img-fluid"
                  alt="居家防疫超前儲糧與滿1500現折168"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- 主視覺 mobile -->
        <div class="position-relative d-lg-none">
          <img alt="安心好食節 mb" class="img-fluid mt-5 visualmb" v-if="peaceBannerMb[0]" :src="peaceBannerMb[0].image">
          <img alt="安心好食節 mb" class="img-fluid mt-5 visualmb" v-if="peaceBannerMb[1]" :src="peaceBannerMb[1].image">
          <!-- 輪播活動 -->
          <div class="events-m position-absolute">
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
                  v-if="slideShow[0]"
                  :src="slideShow[0].image"
                  class="img-fluid"
                  alt="筆筆回饋10%無上限"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  v-if="slideShow[1]"
                  :src="slideShow[1].image"
                  class="img-fluid"
                  alt="居家防疫超前儲糧與滿1500現折168"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div>
          <!-- 活動牆 PC -->
          <div class="selectedEvent selectedcontainer container mb-4 mt-lg-6 d-none d-lg-block">
            <div class="eventWidth">
              <div class="d-flex flex-wrap justify-content-between p-3 p-md-4 event-border">
                <div class="d-flex justify-content-between">
                  <a v-if="eventList[0]" :href="eventList[0].targetUrl" class="event1st_a hvr-bob d-block mb-2 mb-lg-3 px-lg-3">
                    <img :src="eventList[0].image" alt="活動" class="img-fluid d-none d-lg-block">
                  </a>
                  <a v-if="eventList[1]" :href="eventList[1].targetUrl" class="event1st_b hvr-bob d-block mb-2 mb-lg-3 px-lg-3">
                    <img :src="eventList[1].image" alt="活動" class="img-fluid d-none d-lg-block">
                  </a>
                  <a v-if="eventList[2]" :href="eventList[2].targetUrl" class="event1st_c hvr-bob d-block mb-2 mb-lg-3 px-lg-3">
                    <img :src="eventList[2].image" alt="活動" class="img-fluid d-none d-lg-block">
                  </a>
                </div>
                <div class="d-flex justify-content-between">
                  <a v-if="eventList[3]" :href="eventList[3].targetUrl" class="event2nd hvr-bob d-block">
                    <img :src="eventList[3].image" alt="活動" class="img-fluid d-none d-lg-block">
                  </a>
                  <a v-if="eventList[4]" :href="eventList[4].targetUrl" class="event2nd hvr-bob d-block" target="_self">
                    <img :src="eventList[4].image" alt="活動" class="img-fluid d-none d-lg-block">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- 活動強打 PC -->
          <div class="container d-none d-lg-block pt-3">
            <div class="row justify-content-center">
              <div class="col-lg-10 hotProducts">
                <div class="row g-3">
                  <swiper
                    class="menuSwiper"
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
                      }
                    }"
                    :navigation="{
                      nextEl: '#js-next1',
                      prevEl: '#js-prev1'
                    }"
                  >
                    <swiper-slide class="col-4 d-none d-lg-block" v-for="event in themeList" :key="event">
                      <a href="#" @click.prevent="recordClickHeight(event.targetUrl)" class="hvr-bob">
                        <img :src="event.image" alt="活動強打 pc" class="img-fluid">
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
        <!-- 活動牆 mb -->
        <div class="selectedEvent selectedcontainer container mb-4 mt-lg-6 d-lg-none">
          <div class="eventWidth">
            <div class="d-flex flex-wrap justify-content-between p-3 p-md-4 event-border">
              <div class="d-flex justify-content-between">
                <a v-if="eventList[0]" :href="eventList[0].targetUrl" class="event1st_a hvr-bob d-block mb-2 mb-lg-3 ">
                  <img :src="eventList_m[0].image" alt="活動" class="img-fluid ">
                </a>
                <a v-if="eventList[1]" :href="eventList[1].targetUrl" class="event1st_b hvr-bob d-block mb-2 mb-lg-3 ">
                  <img :src="eventList_m[1].image" alt="活動" class="img-fluid ">
                </a>
                <a v-if="eventList[2]" :href="eventList[2].targetUrl" class="event1st_c hvr-bob d-block mb-2 mb-lg-3 px-1">
                <img :src="eventList_m[2].image" alt="活動" class="img-fluid">
                </a>
              </div>
              <div class="d-flex justify-content-between">
                <a v-if="eventList[3]" :href="eventList[3].targetUrl" class="event2nd hvr-bob d-block mb-2">
                  <img :src="eventList_m[3].image" alt="活動" class="img-fluid d-lg-none">
                </a>
              </div>
              <div class="d-flex justify-content-between">
                <a v-if="eventList[4]" :href="eventList[4].targetUrl" class="event2nd hvr-bob d-block" target="_self">
                  <img :src="eventList_m[4].image" alt="活動" class="img-fluid d-lg-none">
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- 活動強打 mb -->
        <div class="container d-lg-none">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="row g-3">
                <swiper
                  class="menuSwiper"
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
                      <img :src="event.image" alt="活動強打 mb" class="img-fluid">
                    </a>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 超級爆品安心價 -->
      <div>
        <section class="relievedSelected">
          <div class="container position-relative py-lg-6 py-5">
            <div class="row justify-content-center py-lg-5">
              <img class="titleImg img-fluid py-3 pt-lg-7 pt-xl-11 pb-lg-0 d-none d-lg-block" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/product_tittle_1.png" style="margin-top: 15%;" alt="超級爆品安心價 標題">
              <img class="titleImgmb img-fluid py-3 pt-lg-7 pt-xl-11 pb-lg-0 d-lg-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/product_tittle_1_mb.png" alt="超級爆品安心價 標題">
              <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/deco_1.png" alt="番茄蒜" class="supersafe1st position-absolute d-lg-block d-none">
              <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/deco_2.png" alt="番茄蘑菇" class="supersafe2nd position-absolute ">
              <div class="col-lg-11 mt-lg-6 mb-md-6 mb-lg-0 pb-3">
                <div class="row g-1 g-lg-3">
                  <div class="col-6">
                    <div class="ateaseProducts">
                      <swiper
                        class="ateaseSwiper h-100"
                        :loop="true"
                        :spaceBetween="0"
                        :initialSlide="1"
                        :autoplay="{
                          delay: 4000,
                          disableOnInteraction: false
                        }"
                        :pagination="{
                          el: '.swiperleft-pagination',
                          type: 'bullets',
                          clickable: true
                        }"
                      >
                        <swiper-slide v-for="big in bigSaleLeft" :key="big + '1'">
                          <a href="#" @click.prevent="recordClickHeight(big.targetUrl)" class="d-block overflow-hidden text-center px-1 h-100">
                            <img :src="big.image" alt="超級爆品安心價(左)" class="img-fluid">
                          </a>
                        </swiper-slide>
                      </swiper>
                      <div class="swiperleft-pagination text-center swiperPagination"></div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="ateaseProducts">
                      <swiper
                        class="ateaseSwiper h-100"
                        :loop="true"
                        :spaceBetween="0"
                        :initialSlide="1"
                        :autoplay="{
                          delay: 4000,
                          disableOnInteraction: false
                        }"
                        :pagination="{
                            el: '.swiperright-pagination',
                            type: 'bullets',
                            clickable: true
                          }"
                      >
                        <swiper-slide v-for="big in bigSaleRight" :key="big + '2'">
                          <a href="#" @click.prevent="recordClickHeight(big.targetUrl)" class="d-block overflow-hidden text-center px-1 h-100">
                            <img :src="big.image" alt="超級爆品安心價(右)" class="img-fluid">
                          </a>
                        </swiper-slide>
                      </swiper>
                      <div class="swiperright-pagination text-center swiperPagination"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- 七天儲量清單 -->
      <div class="sevendays text-center">
        <div class="container position-relative">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/deco_3.png" alt="魚檸檬" class="fish position-absolute d-lg-block d-none">
          <div class="text-center">
            <a v-if="activityTitle[0]" class="d-block mb-2 mb-lg-3" href="#" @click.prevent="recordClickHeight(activityTitle[0]?.targetUrl)">
              <img :src="activityTitle[0]?.image" alt="七天儲量清單pc標題" class="img-fluid titleImg img-fluid py-3 pt-lg-7 pt-xl-11 pb-lg-0 d-lg-block d-none" >
              <img :src="activityTitle_m[0]?.image" alt="七天儲量清單mb標題" class="img-fluid titleImg img-fluid py-3 pt-lg-7 pt-xl-11 pb-lg-0 d-lg-none">
            </a>
          </div>
          <div class="text-center pb-2 pb-lg-0 mt-lg-5 mt-0">
            <div v-if="atEaseList1" class="row g-2 g-lg-4 py-lg-5 pb-3">
            <div class="col-6 col-lg-3 mb-3" v-for="sale in atEaseList1.products" :key="sale+'1'">
              <div class="prd-item product-bob" :class="{ 'sold-out': sale.stock === 0 }">
                <router-link :to="`/productboard/product/${sale.productId}`" class="prd-link text-secondary text-decoration-none">
                  <span class="d-block prd-img mb-2"
                    ><img :src="sale.productImage" class="img-fluid"
                  /></span>
                  <p v-if="sale.slogan" class="discount discount-item text-center lh-1 mb-3 py-2">{{ sale.slogan }}</p>
                  <span class="d-block prd-name">{{ sale.productName }}</span>
                  <div class="d-flex justify-content-center align-items-end text-nowrap mb-3">
                    <del class="d-block prd-price mb-2"
                      >原價 <span class="prd-msrp">${{ sale.oldPrice &lt; 0 ? 'xxx': $currency.currency(sale.oldPrice) }}</span
                    ></del>
                    <span class="d-block prd-sale ms-1 ms-lg-2"
                    >特價<span class="prd-sale-price">${{ sale.price &lt; 0 ? 'xxx': $currency.currency(sale.price) }}</span></span
                    >
                  </div>
                  <span class="d-block prd-limited newFriendColor p-2">立即搶購</span>
                </router-link>
              </div>
            </div>
            <a href="#" @click.prevent="recordClickHeight(atEaseList1.link)" class="product-bob">
              <img class="moreBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/see_more_button_1.png" alt="看更多">
            </a>
          </div>
          </div>
        </div>
      </div>
      <!-- 防疫大補帖 -->
      <div class="prevent text-center position-relative">
        <div class="container position-relative ">
          <div class="text-center">
            <a v-if="activityTitle[1]" class="d-block mb-2 mb-lg-3 " href="#" @click.prevent="recordClickHeight(activityTitle[1]?.targetUrl)">
              <img :src="activityTitle[1]?.image" alt="防疫大補帖pc標題" class="titleImgfangyi img-fluid py-3 pb-lg-0 pt-lg-7 pt-xl-11 d-lg-block d-none" >
              <img :src="activityTitle_m[1]?.image" alt="防疫大補帖mb標題" class="titleImgfangyi img-fluid py-3 pb-lg-0 pt-lg-7 pt-xl-11 d-lg-none">
            </a>
          </div>
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/deco_4.png" alt="肉" class="meat position-absolute d-lg-block d-none">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/deco_5.png" alt="鹽" class="salt position-absolute ">
          <div class="text-center pb-2 pb-lg-0">
            <div v-if="atEaseList2" class="row g-2 g-lg-4 py-lg-5 pb-3">
              <div class="col-6 col-lg-3 mb-3" v-for="sale in atEaseList2.products" :key="sale+'2'">
                <div class="prd-item product-bob" :class="{ 'sold-out': sale.stock === 0 }">
                  <router-link :to="`/productboard/product/${sale.productId}`" class="prd-link text-secondary text-decoration-none">
                    <span class="d-block prd-img mb-2">
                      <img :src="sale.productImage" class="img-fluid"/>
                    </span>
                    <p v-if="sale.slogan" class="discount discount-item text-center lh-1 mb-3 py-2">{{ sale.slogan }}</p>
                    <span class="d-block prd-name">{{ sale.productName }}</span>
                    <div class="d-flex justify-content-center align-items-end text-nowrap mb-3">
                      <del class="d-block prd-price mb-2"
                        >原價<span class="prd-msrp">${{ sale.oldPrice &lt; 0 ? 'xxx': $currency.currency(sale.oldPrice) }}</span
                      ></del>
                      <span class="d-block prd-sale ms-1 ms-lg-2"
                        >特價<span class="prd-sale-price">${{ sale.price &lt; 0 ? 'xxx': $currency.currency(sale.price) }}</span></span
                      >
                    </div>
                    <span class="d-block prd-limited newFriendColor p-2">立即搶購</span>
                  </router-link>
                </div>
              </div>
              <a href="#" @click.prevent="recordClickHeight(atEaseList2.link)" class="product-bob">
                <img class="moreBtnCat" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/see_more_button_2.png" alt="看更多">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新朋友必買 -->
    <div class="newFriendTop text-center pb-lg-6 pb-4">
      <div class="container mt-0">
        <img class="titleImg img-fluid py-0 pt-lg-7 d-none d-lg-inline" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/product_tittle_2.png" alt="新朋友必買pc標題">
        <img class="titleImgnewfriendmb img-fluid py-4 pt-lg-7 pt-xl-11 pb-lg-0 d-lg-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/product_tittle_2_mb.png" alt="新朋友必買mb標題">
        <div class="newFriendBtn text-center pb-2 pb-lg-0">
          <div v-if="atEaseList3" class="row g-2 g-lg-4">
            <div class="row g-2 g-lg-4">
              <div class="col-6 col-lg-3 mb-3" v-for="sale in atEaseList3.products" :key="sale+'3'">
                <div class="prd-item product-bob" :class="{ 'sold-out': sale.stock === 0 }">
                  <router-link :to="`/productboard/product/${sale.productId}`" class="prd-link text-secondary text-decoration-none">
                    <span class="d-block prd-img mb-2"
                      ><img :src="sale.productImage" class="img-fluid"
                    /></span>
                    <span class="d-block prd-name">{{ sale.productName }}</span>
                    <div class="d-flex justify-content-center align-items-end text-nowrap mb-3">
                      <del class="d-block prd-price mb-2">原價<span class="prd-msrp">${{ sale.oldPrice &lt; 0 ? 'xxx': $currency.currency(sale.oldPrice) }}</span></del>
                      <span class="d-block prd-sale ms-1 ms-lg-2"
                        >特價<span class="prd-sale-price">${{ sale.price &lt; 0 ? 'xxx': $currency.currency(sale.price) }}</span></span
                      >
                    </div>
                    <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 老朋友回購 -->
    <div class="oldFriendTop text-center">
      <div class="text-center">
        <a v-if="activityTitle[2]" class="d-block mb-2 mb-lg-3" href="#" @click.prevent="recordClickHeight(activityTitle[2]?.targetUrl)">
          <img :src="activityTitle[2]?.image" alt="老朋友回購pc標題" class="titleImg img-fluid py-0 pt-lg-7 d-none d-lg-inline" >
          <img :src="activityTitle_m[2]?.image" alt="老朋友回購mb標題" class="titleImgnewfriendmb img-fluid py-4 pt-lg-7 pt-xl-11 pb-lg-0 d-lg-none">
        </a>
      </div>
      <div class="container">
        <div class="text-center pb-2 pb-lg-0">
          <div v-if="atEaseList4" class="row g-2 g-lg-4 py-lg-5 pb-2">
            <div class="col-6 col-lg-3 mb-3" v-for="sale in atEaseList4.products" :key="sale+'4'">
              <div class="prd-item product-bob" :class="{ 'sold-out': sale.stock === 0 }">
                <router-link :to="`/productboard/product/${sale.productId}`" class="prd-link text-secondary text-decoration-none">
                  <span class="d-block prd-img mb-2"
                    ><img :src="sale.productImage" class="img-fluid"
                  /></span>
                  <span class="d-block prd-name">{{ sale.productName }}</span>
                  <div class="d-flex justify-content-center align-items-end text-nowrap mb-3">
                    <del class="d-block prd-price mb-2">原價<span class="prd-msrp">${{ sale.oldPrice &lt; 0 ? 'xxx': $currency.currency(sale.oldPrice) }}</span></del>
                    <span class="d-block prd-sale ms-1 ms-lg-2"
                      >特價<span class="prd-sale-price">${{ sale.price &lt; 0 ? 'xxx': $currency.currency(sale.price) }}</span></span
                    >
                  </div>
                  <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                </router-link>
              </div>
            </div>
            <a href="#" @click.prevent="recordClickHeight(atEaseList4.link)" class="product-bob">
              <img class="moreBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/see_more_button_3.png" alt="看更多">
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 超級品牌安心援助 -->
    <div class="brandTop text-center">
      <img class="titleImg img-fluid py-lg-3 pt-lg-7 pt-xl-11 pb-lg-0 d-none d-lg-inline" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/product_tittle_4.png" alt="超級品牌安心援助pc標題">
      <img class="titleImgaidmb img-fluid py-5 pt-lg-7 pt-xl-11 pb-lg-0 d-lg-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/product_tittle_4_mb.png" alt="超級品牌安心援助mb標題">
      <section class="mt-lg-6 mt-0 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-6 col-lg-4 mb-3 mb-lg-4" v-for="brand in brandList" :key="brand + '1'">
            <a href="#" @click.prevent="recordClickHeight(brand.targetUrl)" class="d-block text-center product-bob">
              <img class="img-fluid" :src="brand.image" alt="超級品牌安心援助">
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
    <!-- 熱銷排行榜 -->
    <div class="hotSortTop text-center">
      <img class="titleImg img-fluid py-3 pt-lg-7 pt-xl-11 pb-lg-0 d-none d-lg-inline" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/product_tittle_5.png" alt="熱銷排行榜pc標題">
      <img class="titleImgaidmb img-fluid py-4 pt-lg-7 pt-xl-11 pb-lg-0 d-lg-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/product_tittle_5_mb.png" alt="熱銷排行榜mb標題">
      <section class="">
      <div class="container text-center mb-3">
        <!-- 熱銷按鈕 -->
        <ul class="hotBtnList list-unstyled d-inline-flex flex-wrap mb-0 w-auto w-sm-75 w-lg-85 w-xl-auto mx-auto justify-content-center mt-lg-5">
          <li class="text-center mx-lg-3 mb-2 mb-lg-3 ">
            <a v-if="swiperPage === 1" href="#" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_1.png" alt="生鮮蔬果" class="img-fluid"></a>
            <a v-else href="#" @click.prevent="handleSlideTo(1)" :class="{hotBtnItemActive: swiperPage === 1}" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_1_darken.png" alt="生鮮蔬果" class="img-fluid"></a>
          </li>
          <li class="text-center mx-lg-3 mb-2 mb-lg-3 ">
            <a v-if="swiperPage === 2" href="#" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_2.png" alt="水餃麵點" class="img-fluid"></a>
            <a v-else href="#" @click.prevent="handleSlideTo(2)" :class="{hotBtnItemActive: swiperPage === 2}" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_2_darken.png" alt="水餃麵點" class="img-fluid"></a>
          </li>
          <li class="text-center mx-lg-3 mb-2 mb-lg-3 ">
            <a v-if="swiperPage === 3" href="#" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_3.png" alt="即食料理" class="img-fluid"></a>
            <a v-else href="#" @click.prevent="handleSlideTo(3)" :class="{hotBtnItemActive: swiperPage === 3}" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_3_darken.png" alt="即食料理" class="img-fluid"></a>
          </li>
          <li class="text-center mx-lg-3 mb-2 mb-lg-3 ">
            <a v-if="swiperPage === 4" href="#" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_4.png" alt="炸物燒烤" class="img-fluid"></a>
            <a v-else href="#" @click.prevent="handleSlideTo(4)" :class="{hotBtnItemActive: swiperPage === 4}" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_4_darken.png" alt="炸物燒烤" class="img-fluid"></a>
          </li>
          <li class="text-center mx-lg-3 mb-2 mb-lg-3 ">
            <a v-if="swiperPage === 5" href="#" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_5.png" alt="零食飲品" class="img-fluid"></a>
            <a v-else href="#" @click.prevent="handleSlideTo(5)" :class="{hotBtnItemActive: swiperPage === 5}" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_5_darken.png" alt="零食飲品" class="img-fluid"></a>
          </li>
          <li class="text-center mx-lg-3 mb-2 mb-lg-3 ">
            <a v-if="swiperPage === 6" href="#" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_6.png" alt="蛋糕甜點" class="img-fluid"></a>
            <a v-else href="#" @click.prevent="handleSlideTo(6)" :class="{hotBtnItemActive: swiperPage === 6}" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_6_darken.png" alt="蛋糕甜點" class="img-fluid"></a>
          </li>
          <li class="text-center mx-lg-3 mb-2 mb-lg-3 ">
            <a v-if="swiperPage === 7" href="#" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_7.png" alt="鍋物湯品" class="img-fluid"></a>
            <a v-else href="#" @click.prevent="handleSlideTo(7)" :class="{hotBtnItemActive: swiperPage === 7}" class="hotBtnItem d-block py-2 py-lg-3"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_bottom_7_darken.png" alt="鍋物湯品" class="img-fluid"></a>
          </li>
        </ul>
      </div>
      <!-- 各館別 -->
      <div class="container mb-lg-5 mb-3">
        <swiper
          @swiper="onSwiper"
          @slideChange="changeSwiper"
          class="categorySwiper h-100"
          :loop="true"
          :spaceBetween="0"
          :initialSlide="0"
        >
          <!-- 生鮮蔬果 -->
          <swiper-slide>
            <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_1.jpg" alt="生鮮蔬果 標題">
            <div class="categories1 p-2 p-sm-3 p-lg-4" v-if="peaceList1">
              <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                <a href="#" @click.prevent="recordClickHeight(peaceList1.link); setPage(1);">
                  <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_button.png" alt="看更多">
                </a>
              </div>
              <div class="row g-2 g-lg-4">
                <div class="col-6 col-lg-3 mb-3" v-for="selected in peaceList1.products" :key="selected+'1'">
                  <div class="prd-item product-bob" :class="{ 'sold-out': selected.stock === 0 }">
                    <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(1)" class="prd-link text-secondary text-decoration-none">
                      <span class="d-block prd-img mb-2"
                        ><img :src="selected.productImage" class="img-fluid"
                      /></span>
                      <span class="d-block prd-name">{{ selected.productName }}</span>
                      <div class="d-flex justify-content-center align-items-end text-nowrap mb-3">
                        <del class="d-block prd-price mb-2 ms-1 ms-lg-2"
                          >原價<span class="prd-msrp">${{ selected.oldPrice &lt; 0 ? 'xxx': $currency.currency(selected.oldPrice) }}</span
                        ></del>
                        <span class="d-block prd-sale ms-1 ms-lg-2"
                          >特價 <span class="prd-sale-price">${{ selected.price &lt; 0 ? 'xxx': $currency.currency(selected.price) }}</span></span
                        >
                      </div>
                      <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- 水餃麵點 -->
          <swiper-slide>
            <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_2.jpg" alt="水餃麵點 標題">
            <div class="categories4 p-2 p-sm-3 p-lg-4" v-if="peaceList2">
              <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                <a href="#" @click.prevent="recordClickHeight(peaceList2.link); setPage(2);">
                  <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_button.png" alt="看更多">
                </a>
              </div>
              <div class="row g-2 g-lg-4">
                <div class="col-6 col-lg-3 mb-3" v-for="selected in peaceList2.products" :key="selected+'2'">
                  <div class="prd-item product-bob" :class="{ 'sold-out': selected.stock === 0 }">
                    <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(2)" class="prd-link text-secondary text-decoration-none">
                      <span class="d-block prd-img mb-2"
                        ><img :src="selected.productImage" class="img-fluid"
                      /></span>
                      <span class="d-block prd-name">{{ selected.productName }}</span>
                      <div class="d-flex justify-content-center align-items-end text-nowrap mb-3">
                        <del class="d-block prd-price mb-2 ms-1 ms-lg-2"
                          >原價<span class="prd-msrp">${{ selected.oldPrice &lt; 0 ? 'xxx': $currency.currency(selected.oldPrice) }}</span
                        ></del>
                        <span class="d-block prd-sale ms-1 ms-lg-2"
                          >特價 <span class="prd-sale-price">${{ selected.price &lt; 0 ? 'xxx': $currency.currency(selected.price) }}</span></span
                        >
                      </div>
                      <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- 即食料理 -->
          <swiper-slide>
            <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_3.jpg" alt="即食料理 標題">
            <div class="categories2 p-2 p-sm-3 p-lg-4" v-if="peaceList3">
              <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                <a href="#" @click.prevent="recordClickHeight(peaceList3.link); setPage(3);">
                  <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_button.png" alt="看更多">
                </a>
              </div>
              <div class="row g-2 g-lg-4">
                <div class="col-6 col-lg-3 mb-3" v-for="selected in peaceList3.products" :key="selected+'3'">
                  <div class="prd-item product-bob" :class="{ 'sold-out': selected.stock === 0 }">
                    <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(3)" class="prd-link text-secondary text-decoration-none">
                      <span class="d-block prd-img mb-2"
                        ><img :src="selected.productImage" class="img-fluid"
                      /></span>
                      <span class="d-block prd-name">{{ selected.productName }}</span>
                      <div class="d-flex justify-content-center align-items-end text-nowrap mb-3">
                        <del class="d-block prd-price mb-2 ms-1 ms-lg-2"
                          >原價<span class="prd-msrp">${{ selected.oldPrice &lt; 0 ? 'xxx': $currency.currency(selected.oldPrice) }}</span
                        ></del>
                        <span class="d-block prd-sale ms-1 ms-lg-2"
                          >特價 <span class="prd-sale-price">${{ selected.price &lt; 0 ? 'xxx': $currency.currency(selected.price) }}</span></span
                        >
                      </div>
                      <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- 炸物燒烤 -->
          <swiper-slide>
            <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_4.jpg" alt="炸物燒烤 標題">
            <div class="categories3 p-2 p-sm-3 p-lg-4" v-if="peaceList4">
              <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                <a href="#" @click.prevent="recordClickHeight(peaceList4.link); setPage(4);">
                  <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_button.png" alt="看更多">
                </a>
              </div>
              <div class="row g-2 g-lg-4">
                <div class="col-6 col-lg-3 mb-3" v-for="selected in peaceList4.products" :key="selected+'4'">
                  <div class="prd-item product-bob" :class="{ 'sold-out': selected.stock === 0 }">
                    <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(4)" class="prd-link text-secondary text-decoration-none">
                      <span class="d-block prd-img mb-2"
                        ><img :src="selected.productImage" class="img-fluid"
                      /></span>
                      <span class="d-block prd-name">{{ selected.productName }}</span>
                      <div class="d-flex justify-content-center align-items-end text-nowrap mb-3">
                        <del class="d-block prd-price mb-2 ms-1 ms-lg-2"
                          >原價<span class="prd-msrp">${{ selected.oldPrice &lt; 0 ? 'xxx': $currency.currency(selected.oldPrice) }}</span
                        ></del>
                        <span class="d-block prd-sale ms-1 ms-lg-2"
                          >特價 <span class="prd-sale-price">${{ selected.price &lt; 0 ? 'xxx': $currency.currency(selected.price) }}</span></span
                        >
                      </div>
                      <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- 零食飲品 -->
          <swiper-slide>
            <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_5.jpg" alt="零食飲品 標題">
            <div class="categories5 p-2 p-sm-3 p-lg-4" v-if="peaceList5">
              <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                <a href="#" @click.prevent="recordClickHeight(peaceList5.link); setPage(5);">
                  <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_button.png" alt="看更多">
                </a>
              </div>
              <div class="row g-2 g-lg-4">
                <div class="col-6 col-lg-3 mb-3" v-for="selected in peaceList5.products" :key="selected+'5'">
                  <div class="prd-item product-bob" :class="{ 'sold-out': selected.stock === 0 }">
                    <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(5)" class="prd-link text-secondary text-decoration-none">
                      <span class="d-block prd-img mb-2"
                        ><img :src="selected.productImage" class="img-fluid"
                      /></span>
                      <span class="d-block prd-name">{{ selected.productName }}</span>
                      <div class="d-flex justify-content-center align-items-end text-nowrap mb-3">
                        <del class="d-block prd-price mb-2 ms-1 ms-lg-2"
                          >原價<span class="prd-msrp">${{ selected.oldPrice &lt; 0 ? 'xxx': $currency.currency(selected.oldPrice) }}</span
                        ></del>
                        <span class="d-block prd-sale ms-1 ms-lg-2"
                          >特價 <span class="prd-sale-price">${{ selected.price &lt; 0 ? 'xxx': $currency.currency(selected.price) }}</span></span
                        >
                      </div>
                      <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- 蛋糕甜點 -->
          <swiper-slide>
            <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_6.jpg" alt="蛋糕甜點 標題">
            <div class="categories7 p-2 p-sm-3 p-lg-4" v-if="peaceList6">
              <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                <a href="#" @click.prevent="recordClickHeight(peaceList6.link); setPage(6);">
                  <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_button.png" alt="看更多">
                </a>
              </div>
              <div class="row g-2 g-lg-4">
                <div class="col-6 col-lg-3 mb-3" v-for="selected in peaceList6.products" :key="selected+'6'">
                  <div class="prd-item product-bob" :class="{ 'sold-out': selected.stock === 0 }">
                    <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(6)" class="prd-link text-secondary text-decoration-none">
                      <span class="d-block prd-img mb-2"
                        ><img :src="selected.productImage" class="img-fluid"
                      /></span>
                      <span class="d-block prd-name">{{ selected.productName }}</span>
                      <div class="d-flex justify-content-center align-items-end text-nowrap mb-3">
                        <del class="d-block prd-price mb-2 ms-1 ms-lg-2"
                          >原價<span class="prd-msrp">${{ selected.oldPrice &lt; 0 ? 'xxx': $currency.currency(selected.oldPrice) }}</span
                        ></del>
                        <span class="d-block prd-sale ms-1 ms-lg-2"
                          >特價 <span class="prd-sale-price">${{ selected.price &lt; 0 ? 'xxx': $currency.currency(selected.price) }}</span></span
                        >
                      </div>
                      <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- 鍋物湯品 -->
          <swiper-slide>
            <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_7.jpg" alt="鍋物湯品 標題">
            <div class="categories6 p-2 p-sm-3 p-lg-4" v-if="peaceList7">
              <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                <a href="#" @click.prevent="recordClickHeight(peaceList7.link); setPage(7);">
                  <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/ranking_button.png" alt="看更多">
                </a>
              </div>
              <div class="row g-2 g-lg-4">
                <div class="col-6 col-lg-3 mb-3" v-for="selected in peaceList7.products" :key="selected+'7'">
                  <div class="prd-item product-bob" :class="{ 'sold-out': selected.stock === 0 }">
                    <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(7)" class="prd-link text-secondary text-decoration-none">
                      <span class="d-block prd-img mb-2"
                        ><img :src="selected.productImage" class="img-fluid"
                      /></span>
                      <span class="d-block prd-name">{{ selected.productName }}</span>
                      <div class="d-flex justify-content-center align-items-end text-nowrap mb-3">
                        <del class="d-block prd-price mb-2 ms-1 ms-lg-2"
                          >原價<span class="prd-msrp">${{ selected.oldPrice &lt; 0 ? 'xxx': $currency.currency(selected.oldPrice) }}</span
                        ></del>
                        <span class="d-block prd-sale ms-1 ms-lg-2"
                          >特價 <span class="prd-sale-price">${{ selected.price &lt; 0 ? 'xxx': $currency.currency(selected.price) }}</span></span
                        >
                      </div>
                      <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="text-center washhand">
        <router-link to="/" class="hvr-bob">
          <img class="w-30 w-lg-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/peacemind/see_more_product_bottom.png" alt="看更多商品">
        </router-link>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isAnimate: false,
      peaceList: '',
      peaceList1: '',
      peaceList2: '',
      peaceList3: '',
      peaceList4: '',
      peaceList5: '',
      peaceList6: '',
      peaceList7: '',
      atEaseList: '',
      atEaseList1: '',
      atEaseList2: '',
      atEaseList3: '',
      atEaseList4: '',
      bigSaleLeft: '',
      bigSaleRight: '',
      brandList: '',
      themeList: '',
      themeList_m: '',
      eventList: '',
      eventList_m: '',
      swiper: '',
      swiperPage: 1,
      activityTitle: '',
      activityTitle_m: '',
      slideShow: '',
      peaceBanner: '',
      peaceBannerMb: ''
    }
  },
  methods: {
    // ?上方主題區
    getThemeList () {
      // PC
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=anxin_A`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.eventList = res.data.info
          }
        })
      // mobile
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=anxin_m_A`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.eventList_m = res.data.info
          }
        })
    },
    // ?上方活動區
    getEventList () {
      // PC
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=anxin_B`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.themeList = res.data.info
          }
        })
        // mobile
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=anxin_m_B`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.themeList_m = res.data.info
          }
        })
    },
    // ?每一區的活動banner
    getBannerList () {
      // PC
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=anxinBanner_A`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.activityTitle = res.data.info
          }
        })
      // mobile
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=anxinBanner_m_A`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.activityTitle_m = res.data.info
          }
        })
    },
    // ?每一區的活動banner
    getSlideImg () {
      // PC
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=anxinSlide_B`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.slideShow = res.data.info
          }
        })
    },

    // ?Banner
    getMainBanner () {
      // PC
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=anxinMainBanner`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.peaceBanner = res.data.info
          }
        })
      // mobile
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=anxinMbBanner`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.peaceBannerMb = res.data.info
          }
        })
    },
    // ?超級報品安心價(左側)
    getHotSaleLeft () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=anxin_CL`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.bigSaleLeft = res.data.info
          }
        })
    },
    // ?超級報品安心價(右側)
    getHotSaleRight () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=anxin_CR`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.bigSaleRight = res.data.info
          }
        })
    },
    getEaseList () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=anxin_D`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.atEaseList = res.data.info
            this.atEaseList.forEach((item) => {
              if (item.code === 'anxin_D_1') {
                // ?七天儲量清單
                this.atEaseList1 = item
              } else if (item.code === 'anxin_D_2') {
                // ?防疫大補帖
                this.atEaseList2 = item
              } else if (item.code === 'anxin_D_3') {
                // ?新朋友必買
                this.atEaseList3 = item
              } else if (item.code === 'anxin_D_4') {
                // ?老朋友回購
                this.atEaseList4 = item
              }
            })
          }
        })
    },
    // ?超級品牌安心援助
    getBrandList () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=anxin_E`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.brandList = res.data.info
          }
        })
    },
    // ? 熱銷排行榜
    getPeaceSelected () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=anxin_F`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.peaceList = res.data.info
            this.peaceList.forEach((item) => {
              if (item.code === 'anxin_F_1') {
                this.peaceList1 = item
              } else if (item.code === 'anxin_F_2') {
                this.peaceList2 = item
              } else if (item.code === 'anxin_F_3') {
                this.peaceList3 = item
              } else if (item.code === 'anxin_F_4') {
                this.peaceList4 = item
              } else if (item.code === 'anxin_F_5') {
                this.peaceList5 = item
              } else if (item.code === 'anxin_F_6') {
                this.peaceList6 = item
              } else if (item.code === 'anxin_F_7') {
                this.peaceList7 = item
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
    recordHeight () {
      // ?點擊產品觸發紀錄瀏覽高度
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
    onSwiper (swiper) {
      this.swiper = swiper
    },
    handleSlideTo (num) {
      this.swiperPage = num
      this.swiper.slideTo(num)
    },
    changeSwiper () {
      if (this.swiper) {
        // console.log(this.swiper.activeIndex)
        // ? 讓第八張回到第一頁(原本是七頁，他自動增加一頁)
        if (this.swiper.activeIndex === 8) {
          this.swiperPage = 1
        } else if (this.swiper.activeIndex === 0) {
          this.swiperPage = 7
        } else if (this.swiper.activeIndex) {
          this.swiperPage = this.swiper.activeIndex
        }
      }
    },
    // ?小電視及看更多記錄高度
    recordClickHeight (url) {
      // ?點擊產品觸發紀錄瀏覽高度於LocalStorage
      const scrollYHeight = window.scrollY
      localStorage.setItem('clickPeaceHeight', scrollYHeight)
      setTimeout(() => {
        window.location = url
      }, 500)
    },
    checkLocalHeight () {
      // ?檢查LocalStorage
      if (window.localStorage.getItem('clickPeaceHeight')) {
        const globalheight = window.localStorage.getItem('clickPeaceHeight')
        setTimeout(() => {
          window.scrollTo(0, globalheight)
        }, 300)
        localStorage.removeItem('clickPeaceHeight')
      }
    },
    setPage (num) {
      localStorage.setItem('swiperPage', num)
    }
  },
  watch: {
    $route (to, from) {
      if (
        to.fullPath.match('/productboard/') || to.fullPath === '/'
      ) {
        const recordHeight = window.scrollY
        this.$store.commit('getEventRecordHeight', recordHeight)
      } else {
        this.$store.commit('getEventRecordHeight', '')
      }
    }
  },
  mounted () {
    this.getPeaceSelected()
    this.getEaseList()
    this.getHotSaleLeft()
    this.getHotSaleRight()
    this.getBrandList()
    this.getThemeList()
    this.getEventList()
    this.getBannerList()
    this.getSlideImg()
    this.getMainBanner()

    // ?各館別輪播返回
    if (localStorage.getItem('swiperPage')) {
      this.swiperPage = parseInt(localStorage.getItem('swiperPage'))
      this.swiper.slideTo(parseInt(localStorage.getItem('swiperPage')))
      localStorage.removeItem('swiperPage')
    }
  },
  updated () {
    this.checkLocalHeight()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/activity/_hover.min.scss';
@import '@/assets/scss/activity/peacemind/_site.scss';

::v-deep(.ateaseSwiper>.swiper-pagination-bullets){
  bottom: 3px;
  @media (min-width: 768px) {
    bottom: 6px;
  }
}

::v-deep(.ateaseProducts .swiper-pagination-bullet) {
  margin: 0 3px;
}

::v-deep(.ateaseProducts .swiper-pagination-bullet-active){
  position: relative;
  z-index: 10;
}
</style>
