<template>
  <div class="home">
    <div class="banner">
      <div class="h-100 animated-background"></div>
    </div>
    <div class="container">
      <!-- 熱銷商品 -->
      <div class="title position-relative my-4 my-md-5">
        <div class="border border-2 border-primary"></div>
        <h2
          class="position-absolute fw-medium fs-5 fs-md-3 top-50 start-50 translate-middle text-primary px-3 px-md-5 bg-white mb-0"
        >
          熱銷商品
        </h2>
      </div>
      <div class="row">
        <div class="col-6 col-md-3">
          <div class="card card-hover border-0 p-0 p-lg-2">
            <a>
              <div class="ratio ratio-1x1 animated-background"></div>
              <div class="card-body p-1">
                <h5 class="animated-background card-title card-title-height"></h5>
                <p class="animated-background card-text fw-medium fs-lg-5 fs-md-6 fs-7 text-primary"></p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card card-hover border-0 p-0 p-lg-2">
            <a>
              <div class="ratio ratio-1x1 animated-background"></div>
              <div class="card-body p-1">
                <h5 class="animated-background card-title card-title-height"></h5>
                <p class="animated-background card-text fw-medium fs-lg-5 fs-md-6 fs-7 text-primary"></p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card card-hover border-0 p-0 p-lg-2">
            <a>
              <div class="ratio ratio-1x1 animated-background"></div>
              <div class="card-body p-1">
                <h5 class="animated-background card-title card-title-height"></h5>
                <p class="animated-background card-text fw-medium fs-lg-5 fs-md-6 fs-7 text-primary"></p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card card-hover border-0 p-0 p-lg-2">
            <a>
              <div class="ratio ratio-1x1 animated-background"></div>
              <div class="card-body p-1">
                <h5 class="animated-background card-title card-title-height"></h5>
                <p class="animated-background card-text fw-medium fs-lg-5 fs-md-6 fs-7 text-primary"></p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- 活動頁面(特選金看板)-->
      <div class="row my-4 my-lg-5">
        <div class="col-6 col-md-3 mb-3 mb-md-0">
          <div class="animated-background ratio ratio-16x9"></div>
        </div>
        <div class="col-6 col-md-3 mb-3 mb-md-0">
          <div class="animated-background ratio ratio-16x9"></div>
        </div>
        <div class="col-6 col-md-3 mb-3 mb-md-0">
          <div class="animated-background ratio ratio-16x9"></div>
        </div>
        <div class="col-6 col-md-3 mb-3 mb-md-0">
          <div class="animated-background ratio ratio-16x9"></div>
        </div>
      </div>
      <!-- 各館別 -->
      <section class="mb-5"
        v-for="category in 6"
        :key="category"
      >
        <div class="animated-background animated-card-title"></div>
        <swiper
          class="mySwiper swiper-category mt-3"
          :slidesPerView="2"
          :spaceBetween="15"
          :breakpoints="{
            576: {
              slidesPerView: 2,
              spaceBetween: 15,
              slidesPerColumn: 1,
              slidesPerColumnFill: 'row'
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerColumn: 2,
              slidesPerColumnFill: 'row'
            }
          }"
        >
          <swiper-slide
            v-for="subCategory in 8"
            :key="subCategory.id"
          >
            <div class="card card-hover border-0 p-0 p-lg-2">
              <a>
                <div class="ratio ratio-1x1 animated-background">
                  <!-- <img class="card-img-top"/> -->
                </div>
                <div class="card-body p-1">
                  <h5 class="animated-background card-title card-title-height"></h5>
                  <p class="animated-background card-text fw-medium fs-lg-5 fs-md-6 fs-7 text-primary">
                    <del class="text-secondary fw-bold me-2"
                      ><small></small></del
                    >
                  </p>
                </div>
              </a>
            </div>
          </swiper-slide>
        </swiper>
      </section>
      <!-- 人氣品牌-->
      <section>
        <h2 class="animated-background animated-card-title"></h2>
        <div class="d-flex flex-wrap mt-3 mb-5">
          <div class="brandLogo p-1" v-for="item in 8" :key="item+'2'">
            <div class="ratio ratio-1x1 animated-background"></div>
          </div>
        </div>
      </section>
      <!-- 關於我們 --->
      <section class="aboutUs py-4 py-md-5 bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10 text-center fw-regular">
              <h2 class="fs-4 fs-md-2 fw-medium text-primary mb-2">
                關於我們
              </h2>
              <img class="aboutTitleImg mb-4" src="../assets/img/yesgo_icon_about01.svg" alt="about us icon">
              <h3 class="text-primary fw-bold fs-4 mb-5">全台第一家美食專精特色電商—「yesgogogo 即食購購物網」</h3>
              <div class="mb-4">
                <p class="d-inline d-lg-block mb-2">
                  主打台灣在地美食、安心品質，提供大量"熱一熱"就能上桌的冷藏/冷凍料理，及多樣周邊美食相關
                </p>
                <p class="d-inline d-lg-block mb-2">
                  的新鮮素材，方便大眾網上採購，符合現代人生活需求。
                </p>
              </div>
              <div class="mb-4">
                <p class="d-inline d-lg-block mb-2 mt-5">
                  同時設立影音頻道，陸續推出一系列玩味有趣的節目。透過各種形式帶領觀眾探索與吃有關的精彩體驗，
                </p>
                <p class="d-inline d-lg-block mb-4">
                  期望未來能讓大眾無須盲找資訊、不必以身試雷，只要跟著 yesgogogo，就能即時掌握各項特色美食。
                </p>
              </div>
              <div class="text-center">
                <img class="aboutImg" src="../assets/img/yesgo_icon_about02.svg" alt="about us icon">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  overflow: hidden;
}

.swiper-category {
  overflow: visible;
}

.banner {
  height: 200px;
  @media (min-width: 768px) {
    height: 384px;
  }
  @media (min-width: 992px) {
    height: 500px;
  }
}

.brandLogo {
  width: 20%;
  @media (min-width: 768px) {
    width: 16.6666%;
  }
}

.swiper-slide {
  height: auto;
}

.seeMoreIcon{
  width: 24px;
  height: 24px;
  right: 7px;
}

.aboutTitleImg{
  width: 100px;
}

.aboutImg{
  width: 56px;
  height: 56px;
}

.aboutUs{
  p{
    letter-spacing: .05rem;
  }
}
</style>
