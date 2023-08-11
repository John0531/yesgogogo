<template>
  <div class="zongziBg">
    <div class="zongziContainer">
      <div class="headerxl text-center mb-3 mb-lg-5">
        <!-- 主視覺 PC -->
        <div class="position-relative d-none d-lg-inline pt-3">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/KV.png" alt="主視覺 PC" class="img-fluid mt-4">
          <!-- 輪播活動 -->
          <div class="events-lg position-absolute">
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
                  class="img-fluid"
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/KV_name_1.png"
                  alt="下單抽萬元富貴金粽"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  class="bounceImg img-fluid"
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/KV_name_2.png"
                  alt="全站最高回饋12%"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- 主視覺 mobile -->
        <div class="position-relative d-lg-none">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/KV_mb.jpg" alt="主視覺 mobile" class="img-fluid">
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
                  class="img-fluid"
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/KV_name_1.png"
                  alt="下單抽萬元富貴金粽"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  class="bounceImg img-fluid"
                  src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/KV_name_2.png"
                  alt="全站最高回饋12%"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- 活動牆 PC -->
        <div class="selectedEvent selectedcontainer container mb-4">
          <div class="eventWidth">
            <div class="d-flex flex-wrap justify-content-between p-3 p-md-4 event-border">
              <a v-if="eventList[0]" :href="eventList[0].targetUrl" class="event1st hvr-bob d-block mb-2 mb-lg-3">
                <img :src="eventList[0].image" alt="活動" class="img-fluid d-none d-lg-block">
                <img :src="eventList_m[0].image" alt="活動" class="img-fluid d-lg-none">
              </a>
              <a v-if="eventList[1]" :href="eventList[1].targetUrl" class="event1st hvr-bob d-block mb-2 mb-lg-3">
                <img :src="eventList[1].image" alt="活動" class="img-fluid d-none d-lg-block">
                <img :src="eventList_m[1].image" alt="活動" class="img-fluid d-lg-none">
              </a>
              <a v-if="eventList[2]" :href="eventList[2].targetUrl" class="event1st hvr-bob d-block mb-2 mb-lg-3">
                <img :src="eventList[2].image" alt="活動" class="img-fluid d-none d-lg-block">
                <img :src="eventList_m[2].image" alt="活動" class="img-fluid d-lg-none">
              </a>
              <a v-if="eventList[3]" :href="eventList[3].targetUrl" class="event1st hvr-bob d-block mb-2 mb-lg-3">
                <img :src="eventList[3].image" alt="活動" class="img-fluid d-none d-lg-block">
                <img :src="eventList_m[3].image" alt="活動" class="img-fluid d-lg-none">
              </a>
              <a v-if="eventList[4]" :href="eventList[4].targetUrl" class="event2nd hvr-bob d-block">
                <img :src="eventList[4].image" alt="活動" class="img-fluid d-none d-lg-block">
                <img :src="eventList_m[4].image" alt="活動" class="img-fluid d-lg-none">
              </a>
              <a v-if="eventList[5]" :href="eventList[5].targetUrl" class="event2nd hvr-bob d-block">
                <img :src="eventList[5].image" alt="活動" class="img-fluid d-none d-lg-block">
                <img :src="eventList_m[5].image" alt="活動" class="img-fluid d-lg-none">
              </a>
            </div>
          </div>
        </div>
        <!-- 活動強打 PC -->
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="row g-3">
                <div class="col-4 d-lg-none" v-for="event in themeList_m" :key="event">
                  <a href="#" @click.prevent="recordClickHeight(event.targetUrl)" class="hvr-bob">
                    <img :src="event.image" alt="活動" class="img-fluid">
                  </a>
                </div>
                <div class="col-4 d-none d-lg-block" v-for="event in themeList" :key="event">
                  <a href="#" @click.prevent="recordClickHeight(event.targetUrl)" class="hvr-bob">
                    <img :src="event.image" alt="活動" class="img-fluid">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 消暑超級爆品 -->
      <div class="summerSelectedTop text-center">
        <img class="titleImg img-fluid py-3 pt-lg-7 pt-xl-11 pb-lg-0" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/title_1.png" alt="消暑超級爆品 標題">
      </div>
      <section class="summerSelected">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <div class="row g-1 g-lg-3">
                <div class="col-6">
                  <div class="summerProducts">
                    <swiper
                      class="summerSwiper h-100"
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
                          <img :src="big.image" alt="banner image" class="img-fluid">
                        </a>
                      </swiper-slide>
                    </swiper>
                    <div class="swiperleft-pagination text-center swiperPagination"></div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="summerProducts">
                    <swiper
                      class="summerSwiper h-100"
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
                          <img :src="big.image" alt="banner image" class="img-fluid">
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
      <!-- 消暑超級爆品 下方 -->
      <img class="sectionFooter img-fluid d-none d-lg-block" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/BG_1_2.jpg" alt="消暑超級爆品 下方">
      <img class="img-fluid d-lg-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/BG_mb_1_2.jpg" alt="消暑超級爆品 下方">

      <!-- 響食買一送一 -->
      <div class="getOneFreeTop text-center">
        <img class="titleImg img-fluid py-3 pt-lg-7 pt-xl-11 pb-lg-0" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/title_2.png" alt="響食買一送一 標題">
        <div class="container">
          <div class="text-end pb-2 pb-lg-0">
            <a href="#" @click.prevent="recordClickHeight(onSaleList1.link)">
              <img class="moreBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/seemore_button_1.png" alt="看更多">
            </a>
          </div>
        </div>
      </div>
      <div class="getOneFree">
        <div class="container">
          <div class="row" v-if="onSaleList1">
            <div class="col-lg-6 mb-3 mb-lg-4" v-for="sale in onSaleList1.products" :key="sale + '1'">
              <div class="prd-card hvr-bob" :class="{ 'sold-out': sale.stock === 0 }">
                <div class="card border-0 rounded-0 p-3">
                  <div class="row g-0">
                    <div class="col-5">
                      <img :src="sale.productImage" class="img-fluid" alt="響食買一送一 商品圖片">
                    </div>
                    <div class="col-7">
                      <div class="card-body h-100 py-0 pe-0">
                        <div class="d-flex flex-column justify-content-between h-100">
                          <div>
                            <p v-if="sale.slogan" class="freeColor fw-bold lh-1 fs-5 fs-xl-4 mb-3">{{ sale.slogan }}</p>
                            <h3 class="prd-title fs-6 fs-xl-5">{{ sale.productName }}</h3>
                          </div>
                          <div>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                              <p class="text-secondary text-decoration-line-through fs-7 fs-md-6">市價${{ sale.oldPrice &lt; 0 ? 'xxx': sale.oldPrice }}</p>
                              <p class="freeColor fw-bold fs-6 fs-md-5 fs-xl-4">特價 <span class="fs-5 fs-md-4 fs-xl-3">${{ sale.price &lt; 0 ? 'xxx': sale.price }}</span></p>
                            </div>
                            <router-link :to="`/productboard/product/${sale.productId}`" class="freeBgColor text-center d-block text-white py-1 fs-6 fs-xl-5">立即搶購</router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 響食買一送一 下方 -->
      <img class="sectionFooter img-fluid d-none d-lg-block" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/BG_2_2.jpg" alt="響食買一送一 下方">
      <img class="img-fluid d-lg-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/BG_mb_2_2.jpg" alt="響食買一送一 下方">

      <!-- 新朋友必買 -->
      <div class="newFriendTop text-center">
        <img class="titleImg img-fluid py-3 pb-lg-0 pt-lg-7 pt-xl-11" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/title_3.png" alt="新朋友必買 標題">
      </div>
      <section class="newFriend">
        <div class="container">
          <div v-if="onSaleList2" class="row g-2 g-lg-4">
            <div class="col-6 col-lg-3 mb-3" v-for="sale in onSaleList2.products" :key="sale+'2'">
              <div class="prd-item hvr-bob" :class="{ 'sold-out': sale.stock === 0 }">
                <router-link :to="`/productboard/product/${sale.productId}`" class="prd-link text-secondary text-decoration-none">
                  <span class="d-block prd-img mb-2"
                    ><img :src="sale.productImage" class="img-fluid"
                  /></span>
                  <span class="d-block prd-name">{{ sale.productName }}</span>
                  <span class="d-block prd-sale"
                    >特價 <span class="prd-currency">$</span><span class="prd-sale-price">{{ sale.price &lt; 0 ? 'xxx': sale.price }}</span></span
                  >
                  <del class="d-block prd-price mb-2"
                    >原價 $<span class="prd-msrp">{{ sale.oldPrice &lt; 0 ? 'xxx': sale.oldPrice }}</span
                  ></del>
                  <span class="d-block prd-limited newFriendColor p-2">立即搶購</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 新朋友必買 下方 -->
      <img class="sectionFooter img-fluid d-none d-lg-block" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/BG_3_2.jpg" alt="新朋友必買 下方">
      <img class="img-fluid d-lg-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/BG_mb_3_2.jpg" alt="新朋友必買 下方">

      <!-- 老朋友回購 -->
      <div class="oldFriendTop text-center">
        <img class="titleImg img-fluid py-0 pt-lg-7" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/title_4.png" alt="老朋友回購 標題">
        <div class="container">
          <div class="oldFriendBtn text-end pb-2 pb-lg-0">
            <a href="#" @click.prevent="recordClickHeight(onSaleList3.link)">
              <img class="moreBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/seemore_button_2.png" alt="看更多">
            </a>
          </div>
        </div>
      </div>
      <section class="oldFriend">
        <div class="container">
          <div class="row g-2 g-lg-4">
            <div class="col-6 col-lg-3 mb-3" v-for="sale in onSaleList3.products" :key="sale+'3'">
              <div class="prd-item hvr-bob" :class="{ 'sold-out': sale.stock === 0 }">
                <router-link :to="`/productboard/product/${sale.productId}`" class="prd-link text-secondary text-decoration-none">
                  <span class="d-block prd-img mb-2"
                    ><img :src="sale.productImage" class="img-fluid"
                  /></span>
                  <span class="d-block prd-name">{{ sale.productName }}</span>
                  <span class="d-block prd-sale"
                    >特價 <span class="prd-currency">$</span><span class="prd-sale-price">{{ sale.price &lt; 0 ? 'xxx': sale.price }}</span></span
                  >
                  <del class="d-block prd-price mb-2"
                    >原價 $<span class="prd-msrp">{{ sale.oldPrice &lt; 0 ? 'xxx': sale.oldPrice }}</span
                  ></del>
                  <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 老朋友回購 下方 -->
      <img class="sectionFooter img-fluid d-none d-lg-block" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/BG_4_2.jpg" alt="老朋友回購 下方">
      <img class="img-fluid d-lg-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/BG_mb_4_2.jpg" alt="老朋友回購 下方">

      <!-- 超級品牌優惠 -->
      <div class="brandTop text-center">
        <img class="titleImg img-fluid py-3 pt-lg-7 pt-xl-11 pb-lg-0" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/title_5.png" alt="超級品牌優惠 標題">
      </div>
      <section class="brand">
        <div class="container">
          <div class="row">
            <div class="col-6 col-lg-4 mb-3 mb-lg-4" v-for="brand in brandList" :key="brand + '1'">
              <a href="#" @click.prevent="recordClickHeight(brand.targetUrl)" class="d-block text-center hvr-bob">
                <img class="img-fluid" :src="brand.image" alt="超級品牌">
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- 超級品牌優惠 下方 -->
      <img class="sectionFooter img-fluid d-none d-lg-block" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/BG_5_2.jpg" alt="超級品牌優惠 下方">
      <img class="img-fluid d-lg-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/BG_mb_5_2.jpg" alt="超級品牌優惠 下方">

      <!-- 熱銷排行榜 -->
      <div class="hotSortTop text-center">
        <img class="titleImg img-fluid py-3 pt-lg-7 pt-xl-11 pb-lg-0" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/title_6.png" alt="熱銷排行榜 標題">
      </div>
      <section class="hotSort">
        <div class="container text-center mb-3">
          <!-- 熱銷按鈕 -->
          <ul class="hotBtnList list-unstyled d-inline-flex flex-wrap mb-0 w-auto w-sm-75 w-lg-85 w-xl-auto mx-auto">
            <li class="text-center mx-1 mx-lg-2 mb-2 mb-lg-3">
              <a href="#" @click.prevent="handleSlideTo(1)" :class="{hotBtnItemActive: swiperPage === 1}" class="hotBtnItem d-block fs-6 fs-md-5 fs-lg-8 fw-bold btnPx px-lg-4 py-2 py-lg-3">生鮮肉品</a>
            </li>
            <li class="text-center mx-1 mx-lg-2 mb-2 mb-lg-3">
              <a href="#" @click.prevent="handleSlideTo(2)" :class="{hotBtnItemActive: swiperPage === 2}" class="hotBtnItem d-block fs-6 fs-md-5 fs-lg-8 fw-bold btnPx px-lg-4 py-2 py-lg-3">即食料理</a>
            </li>
            <li class="text-center mx-1 mx-lg-2 mb-2 mb-lg-3">
              <a href="#" @click.prevent="handleSlideTo(3)" :class="{hotBtnItemActive: swiperPage === 3}" class="hotBtnItem d-block fs-6 fs-md-5 fs-lg-8 fw-bold btnPx px-lg-4 py-2 py-lg-3">鍋物湯品</a>
            </li>
            <li class="text-center mx-1 mx-lg-2 mb-2 mb-lg-3">
              <a href="#" @click.prevent="handleSlideTo(4)" :class="{hotBtnItemActive: swiperPage === 4}" class="hotBtnItem d-block fs-6 fs-md-5 fs-lg-8 fw-bold btnPx px-lg-4 py-2 py-lg-3">水餃麵點</a>
            </li>
            <li class="text-center mx-1 mx-lg-2 mb-2 mb-lg-3">
              <a href="#" @click.prevent="handleSlideTo(5)" :class="{hotBtnItemActive: swiperPage === 5}" class="hotBtnItem d-block fs-6 fs-md-5 fs-lg-8 fw-bold btnPx px-lg-4 py-2 py-lg-3">炸物燒烤</a>
            </li>
            <li class="text-center mx-1 mx-lg-2 mb-2 mb-lg-3">
              <a href="#" @click.prevent="handleSlideTo(6)" :class="{hotBtnItemActive: swiperPage === 6}" class="hotBtnItem d-block fs-6 fs-md-5 fs-lg-8 fw-bold btnPx px-lg-4 py-2 py-lg-3">蛋糕甜點</a>
            </li>
            <li class="text-center mx-1 mx-lg-2 mb-2 mb-lg-3">
              <a href="#" @click.prevent="handleSlideTo(7)" :class="{hotBtnItemActive: swiperPage === 7}" class="hotBtnItem d-block fs-6 fs-md-5 fs-lg-8 fw-bold btnPx px-lg-4 py-2 py-lg-3">零食飲品</a>
            </li>
          </ul>
        </div>
        <!-- 各館別 -->
        <div class="container mb-5">
          <swiper
            @swiper="onSwiper"
            @slideChange="changeSwiper"
            class="categorySwiper h-100"
            :loop="true"
            :spaceBetween="0"
            :initialSlide="0"
          >
            <!-- 生鮮肉品 -->
            <swiper-slide>
              <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_1.jpg" alt="生鮮肉品 標題">
              <div class="categories1 p-2 p-sm-3 p-lg-4" v-if="selectedList1">
                <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                  <a href="#" @click.prevent="recordClickHeight(selectedList1.link); setPage(1);">
                    <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_button.png" alt="看更多">
                  </a>
                </div>
                <div class="row g-2 g-lg-4">
                  <div class="col-6 col-lg-3 mb-3" v-for="selected in selectedList1.products" :key="selected+'1'">
                    <div class="prd-item hvr-bob" :class="{ 'sold-out': selected.stock === 0 }">
                      <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(1)" class="prd-link text-secondary text-decoration-none">
                        <span class="d-block prd-img mb-2"
                          ><img :src="selected.productImage" class="img-fluid"
                        /></span>
                        <span class="d-block prd-name">{{ selected.productName }}</span>
                        <span class="d-block prd-sale"
                          >特價 <span class="prd-currency">$</span><span class="prd-sale-price">{{ selected.price &lt; 0 ? 'xxx': selected.price }}</span></span
                        >
                        <del class="d-block prd-price mb-2"
                          >原價 $<span class="prd-msrp">{{ selected.oldPrice &lt; 0 ? 'xxx': selected.oldPrice }}</span
                        ></del>
                        <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <!-- 即食料理 -->
            <swiper-slide>
              <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_2new.jpg" alt="即食料理 標題">
              <div class="categories2 p-2 p-sm-3 p-lg-4" v-if="selectedList2">
                <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                  <a href="#" @click.prevent="recordClickHeight(selectedList2.link); setPage(2);">
                    <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_button.png" alt="看更多">
                  </a>
                </div>
                <div class="row g-2 g-lg-4">
                  <div class="col-6 col-lg-3 mb-3" v-for="selected in selectedList2.products" :key="selected+'2'">
                    <div class="prd-item hvr-bob" :class="{ 'sold-out': selected.stock === 0 }">
                      <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(2)" class="prd-link text-secondary text-decoration-none">
                        <span class="d-block prd-img mb-2"
                          ><img :src="selected.productImage" class="img-fluid"
                        /></span>
                        <span class="d-block prd-name">{{ selected.productName }}</span>
                        <span class="d-block prd-sale"
                          >特價 <span class="prd-currency">$</span><span class="prd-sale-price">{{ selected.price &lt; 0 ? 'xxx': selected.price }}</span></span
                        >
                        <del class="d-block prd-price mb-2"
                          >原價 $<span class="prd-msrp">{{ selected.oldPrice &lt; 0 ? 'xxx': selected.oldPrice }}</span
                        ></del>
                        <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <!-- 鍋物湯品 -->
            <swiper-slide>
              <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_3.jpg" alt="鍋物湯品 標題">
              <div class="categories3 p-2 p-sm-3 p-lg-4" v-if="selectedList3">
                <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                  <a href="#" @click.prevent="recordClickHeight(selectedList3.link); setPage(3);">
                    <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_button.png" alt="看更多">
                  </a>
                </div>
                <div class="row g-2 g-lg-4">
                  <div class="col-6 col-lg-3 mb-3" v-for="selected in selectedList3.products" :key="selected+'3'">
                    <div class="prd-item hvr-bob" :class="{ 'sold-out': selected.stock === 0 }">
                      <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(3)" class="prd-link text-secondary text-decoration-none">
                        <span class="d-block prd-img mb-2"
                          ><img :src="selected.productImage" class="img-fluid"
                        /></span>
                        <span class="d-block prd-name">{{ selected.productName }}</span>
                        <span class="d-block prd-sale"
                          >特價 <span class="prd-currency">$</span><span class="prd-sale-price">{{ selected.price &lt; 0 ? 'xxx': selected.price }}</span></span
                        >
                        <del class="d-block prd-price mb-2"
                          >原價 $<span class="prd-msrp">{{ selected.oldPrice &lt; 0 ? 'xxx': selected.oldPrice }}</span
                        ></del>
                        <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <!-- 水餃麵點 -->
            <swiper-slide>
              <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_4.jpg" alt="水餃麵點 標題">
              <div class="categories4 p-2 p-sm-3 p-lg-4" v-if="selectedList4">
                <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                  <a href="#" @click.prevent="recordClickHeight(selectedList4.link); setPage(4);">
                    <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_button.png" alt="看更多">
                  </a>
                </div>
                <div class="row g-2 g-lg-4">
                  <div class="col-6 col-lg-3 mb-3" v-for="selected in selectedList4.products" :key="selected+'4'">
                    <div class="prd-item hvr-bob" :class="{ 'sold-out': selected.stock === 0 }">
                      <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(4)" class="prd-link text-secondary text-decoration-none">
                        <span class="d-block prd-img mb-2"
                          ><img :src="selected.productImage" class="img-fluid"
                        /></span>
                        <span class="d-block prd-name">{{ selected.productName }}</span>
                        <span class="d-block prd-sale"
                          >特價 <span class="prd-currency">$</span><span class="prd-sale-price">{{ selected.price &lt; 0 ? 'xxx': selected.price }}</span></span
                        >
                        <del class="d-block prd-price mb-2"
                          >原價 $<span class="prd-msrp">{{ selected.oldPrice &lt; 0 ? 'xxx': selected.oldPrice }}</span
                        ></del>
                        <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <!-- 炸物燒烤 -->
            <swiper-slide>
              <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_5.jpg" alt="炸物燒烤 標題">
              <div class="categories5 p-2 p-sm-3 p-lg-4" v-if="selectedList5">
                <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                  <a href="#" @click.prevent="recordClickHeight(selectedList5.link); setPage(5);">
                    <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_button.png" alt="看更多">
                  </a>
                </div>
                <div class="row g-2 g-lg-4">
                  <div class="col-6 col-lg-3 mb-3" v-for="selected in selectedList5.products" :key="selected+'5'">
                    <div class="prd-item hvr-bob" :class="{ 'sold-out': selected.stock === 0 }">
                      <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(5)" class="prd-link text-secondary text-decoration-none">
                        <span class="d-block prd-img mb-2"
                          ><img :src="selected.productImage" class="img-fluid"
                        /></span>
                        <span class="d-block prd-name">{{ selected.productName }}</span>
                        <span class="d-block prd-sale"
                          >特價 <span class="prd-currency">$</span><span class="prd-sale-price">{{ selected.price &lt; 0 ? 'xxx': selected.price }}</span></span
                        >
                        <del class="d-block prd-price mb-2"
                          >原價 $<span class="prd-msrp">{{ selected.oldPrice &lt; 0 ? 'xxx': selected.oldPrice }}</span
                        ></del>
                        <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <!-- 蛋糕甜品 -->
            <swiper-slide>
              <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_6.jpg" alt="蛋糕甜品 標題">
              <div class="categories6 p-2 p-sm-3 p-lg-4" v-if="selectedList6">
                <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                  <a href="#" @click.prevent="recordClickHeight(selectedList6.link); setPage(6);">
                    <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_button.png" alt="看更多">
                  </a>
                </div>
                <div class="row g-2 g-lg-4">
                  <div class="col-6 col-lg-3 mb-3" v-for="selected in selectedList6.products" :key="selected+'6'">
                    <div class="prd-item hvr-bob" :class="{ 'sold-out': selected.stock === 0 }">
                      <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(6)" class="prd-link text-secondary text-decoration-none">
                        <span class="d-block prd-img mb-2"
                          ><img :src="selected.productImage" class="img-fluid"
                        /></span>
                        <span class="d-block prd-name">{{ selected.productName }}</span>
                        <span class="d-block prd-sale"
                          >特價 <span class="prd-currency">$</span><span class="prd-sale-price">{{ selected.price &lt; 0 ? 'xxx': selected.price }}</span></span
                        >
                        <del class="d-block prd-price mb-2"
                          >原價 $<span class="prd-msrp">{{ selected.oldPrice &lt; 0 ? 'xxx': selected.oldPrice }}</span
                        ></del>
                        <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <!-- 零食飲品 -->
            <swiper-slide>
              <img class="d-block img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_7.jpg" alt="零食飲品 標題">
              <div class="categories7 p-2 p-sm-3 p-lg-4" v-if="selectedList7">
                <div class="text-end pe-3 mb-2 mb-sm-3 mb-lg-4">
                  <a href="#" @click.prevent="recordClickHeight(selectedList7.link); setPage(7);">
                    <img class="categoryBtn" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/ranking_button.png" alt="看更多">
                  </a>
                </div>
                <div class="row g-2 g-lg-4">
                  <div class="col-6 col-lg-3 mb-3" v-for="selected in selectedList7.products" :key="selected+'7'">
                    <div class="prd-item hvr-bob" :class="{ 'sold-out': selected.stock === 0 }">
                      <router-link :to="`/productboard/product/${selected.productId}`" @click.prevent="setPage(7)" class="prd-link text-secondary text-decoration-none">
                        <span class="d-block prd-img mb-2"
                          ><img :src="selected.productImage" class="img-fluid"
                        /></span>
                        <span class="d-block prd-name">{{ selected.productName }}</span>
                        <span class="d-block prd-sale"
                          >特價 <span class="prd-currency">$</span><span class="prd-sale-price">{{ selected.price &lt; 0 ? 'xxx': selected.price }}</span></span
                        >
                        <del class="d-block prd-price mb-2"
                          >原價 $<span class="prd-msrp">{{ selected.oldPrice &lt; 0 ? 'xxx': selected.oldPrice }}</span
                        ></del>
                        <span class="d-block prd-limited oldFriendColor p-2">立即搶購</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="text-center">
          <router-link to="/" class="hvr-bob">
            <img class="w-50 w-lg-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/seemore_button_3.png" alt="看更多商品">
          </router-link>
        </div>
      </section>
      <!-- 熱銷排行榜 下方 -->
      <img class="img-fluid d-none d-lg-block" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/BG_6_2.jpg" alt="熱銷排行榜 下方">
      <img class="img-fluid d-lg-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongziselected/BG_mb_6_2.jpg" alt="熱銷排行榜 下方">
      <div class="bg-white py-4 pb-lg-5 pt-lg-0">
        <div class="container">
          <h3 id="eventContent" class="fs-5 mb-3" ref="eventContent">活動詳情</h3>
          <p class="mb-3">活動：消費滿 $1500 加碼送LINE Points 2%</p>
          <ol class="ps-3">
            <li>活動期間：2022/5/10-6/7</li>
            <li>活動內容：於 yesgogogo 單筆消費實付金額滿 1500 元(含)以上(扣除折價券、購物金等優惠活動計算)，免登記，即加碼送 LINE Points 2%，每筆訂單最高回饋 30 點。如有2筆訂單金額滿 1500 元(含)以上，即回饋 60 點(30 點 LINE Points x2 筆訂單滿額 = 60 點)，以此類推，回饋次數無上限。</li>
            <li>將於 2022/7/10 前發送 LINE Points 點數兌換簡訊至您 yesgogogo 會員帳戶登錄之手機。</li>
          </ol>
          <h3 class="fs-5 mb-3">注意事項</h3>
          <ol class="ps-3">
            <li>參加活動者須為完成訂單始符合認列資格，若因訂單取消、退貨，則該筆訂單不得要求列入計算，不符合活動資格。</li>
            <li class="fw-600">1 購物金等同於新台幣 1 元，可於下次消費時折抵最高結帳總金額 25%。</li>
            <li>活動頁呈現之商品名稱、價格、顏色、規格、數量，若與購物車之呈現有所不符，以購物車之內容為準。</li>
            <li>活動事項皆載明於網頁中，參加本活動者視為同意接受本活動注意事項之規範，參加人不符合或違反本活動規定事項者，不可歸責於本公司，本公司保有取消其參加資格之權利，並對於任何破壞本活動之行為保留相關權利。</li>
            <li>如有其他未盡事宜，本公司保留修改、變更、暫停或終止及解釋本活動相關事項之權利，悉依本公司相關規定或決定辦理。</li>
            <li>本公司保留隨時變更、修改或終止本活動及約定條款之權利，若有異動，修改後的活動內容及約定條款將公佈在 yesgogogo 網站上，若您於任何修改或變更後繼續使用本服務時，視為您已閱讀、瞭解並同意接受該等修改或變更。</li>
            <li>若遇贈品缺貨，將延後出貨或以等值商品替代，並不得替換現金或其他商品。</li>
            <li>本活動公佈中獎名單後，請依規定完成兌獎流程，以利贈品寄送或發送，逾期兌獎恕不補發贈品。</li>
            <li>參加者若因會員資料填寫不完整者，或活動後變更資料(如姓名、手機、地址等)，或手機收訊不良、電信業者遺漏或阻擋企業訊息等情況，導致無法收到商品或簡訊，信件無人領取等，恕不補發。</li>
            <li>依中華民國所得稅法及其相關法令規定，得獎之獎項價值超過新台幣 1,000 元者，須納入個人年度所得，並由 yesgogogo 開立扣繳憑單；超過新台幣 20,010 元者，得獎者須於領獎時先繳納10%之機會中獎所得稅金(若得獎者為外國人，或居留台灣期間未達 183 日以上之大陸地區人民者，須於領獎同時扣繳 20％ 之機會中獎所得稅金)始得以領獎。為辦理扣繳憑單開立事宜及確認得獎者之身份，須請得獎者提供身分證正反面影本、護照影本、在台居留證影本或其他可證明得獎者身份之文件影本。(稅務扣繳相關法規規定請參照財政部網站)</li>
            <li>得獎者所提供之身分證明文件如與參加活動時所登錄之 yesgogogo 會員帳號資料不符，yesgogogo 可要求得獎者提出相關證明文件，否則 yesgogogo 得取消其得獎資格。</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isAnimate: false,
      selectedList: '',
      selectedList1: '',
      selectedList2: '',
      selectedList3: '',
      selectedList4: '',
      selectedList5: '',
      selectedList6: '',
      selectedList7: '',
      onSaleList: '',
      onSaleList1: '',
      onSaleList2: '',
      onSaleList3: '',
      bigSaleLeft: '',
      bigSaleRight: '',
      brandList: '',
      themeList: '',
      themeList_m: '',
      eventList: '',
      eventList_m: '',
      swiper: '',
      swiperPage: 1
    }
  },
  methods: {
    getSelected () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=zs_F`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.selectedList = res.data.info
            this.selectedList.forEach((item) => {
              if (item.code === 'zs_F_1') {
                this.selectedList1 = item
              } else if (item.code === 'zs_F_2') {
                this.selectedList2 = item
              } else if (item.code === 'zs_F_3') {
                this.selectedList3 = item
              } else if (item.code === 'zs_F_4') {
                this.selectedList4 = item
              } else if (item.code === 'zs_F_5') {
                this.selectedList5 = item
              } else if (item.code === 'zs_F_6') {
                this.selectedList6 = item
              } else if (item.code === 'zs_F_7') {
                this.selectedList7 = item
              }
            })

            // ? query錨點
            if (Object.keys(this.$route.query).length !== 0 && this.$route.query.tag === 'linepoints') {
              setTimeout(() => {
                window.scrollTo(0, this.$refs.eventContent.offsetTop)
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
    getOnSaleList () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=zs_D`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.onSaleList = res.data.info
            this.onSaleList.forEach((item) => {
              if (item.code === 'zs_D_1') {
                // ?響食買一送一
                this.onSaleList1 = item
              } else if (item.code === 'zs_D_2') {
                // ?新朋友必買
                this.onSaleList2 = item
              } else if (item.code === 'zs_D_3') {
                // ?老朋友回購
                this.onSaleList3 = item
              }
            })
          }
        })
    },
    // ?消暑超級爆品(左側)
    getBigSaleLeft () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zs_CL`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.bigSaleLeft = res.data.info
          }
        })
    },
    // ?消暑超級爆品(右側)
    getBigSaleRight () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zs_CR`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.bigSaleRight = res.data.info
          }
        })
    },
    // ?超級品牌優惠
    getBrandList () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zs_E`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.brandList = res.data.info
          }
        })
    },
    // ?上方主題區
    getThemeList () {
      // mobile
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zs_m_B`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.themeList_m = res.data.info
          }
        })
      // PC
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zs_B`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.themeList = res.data.info
          }
        })
    },
    // ?上方活動區
    getEventList () {
      // mobile
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zs_m_A`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.eventList_m = res.data.info
          }
        })
      // PC
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zs_A`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.eventList = res.data.info
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
      localStorage.setItem('clickHeight', scrollYHeight)
      setTimeout(() => {
        window.location = url
      }, 500)
    },
    checkLocalHeight () {
      // ?檢查LocalStorage
      if (window.localStorage.getItem('clickHeight')) {
        const globalheight = window.localStorage.getItem('clickHeight')
        setTimeout(() => {
          window.scrollTo(0, globalheight)
        }, 300)
        localStorage.removeItem('clickHeight')
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
    this.getSelected()
    this.getOnSaleList()
    this.getBigSaleLeft()
    this.getBigSaleRight()
    this.getBrandList()
    this.getThemeList()
    this.getEventList()

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
@import '@/assets/scss/activity/zongziselected/_site.scss';

::v-deep(.summerSwiper>.swiper-pagination-bullets){
  bottom: 3px;
  @media (min-width: 768px) {
    bottom: 6px;
  }
}

::v-deep(.summerProducts .swiper-pagination-bullet) {
  margin: 0 3px;
}

::v-deep(.summerProducts .swiper-pagination-bullet-active){
  position: relative;
  z-index: 10;
}
</style>
