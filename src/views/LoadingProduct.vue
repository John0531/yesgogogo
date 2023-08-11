<template>
  <div class="product">
    <nav aria-label="breadcrumb" class="animated-background d-flex py-3 mb-3 w-45"></nav>
    <div class="row">
      <div class="col-md-6">
        <div class="animated-background w-100 ratio ratio-1x1 position-relative"></div>
      </div>
      <div class="col-md-6">
        <!-- <div class="head d-md-flex mb-3 d-none">
          <div class="circle bg-warning me-2"></div>
          <span class="fw-bold">買一送一</span>
          <a href="#" class="text-muted ms-1">詳情</a>
        </div> -->
        <div class="content pb-3">
          <h3 class="animated-background pt-3 pt-md-0 mb-md-3 py-5"></h3>
          <div class="animated-background d-none d-md-block py-6"></div>
        </div>
        <div class="price my-2">
          <div class="animated-background py-4 mb-2"></div>
        </div>
        <div class="animated-background pay py-4 mt-3"></div>
        <div class="animated-background pay py-5 mt-3"></div>
        <div class="select mt-2">
          <div class="row pt-3">
            <div class="col-6">
              <div class="d-grid gap-2">
                <button
                  type="button"
                  class="btn btn-outline-primary p-lg-1 btn-cart text-nowrap px-md-1 px-lg-0"
                >
                  <img src="../assets/img/yesgo_icon-30.svg" alt="" class="cart-icon"> <span>加入購物車</span>
                </button>
              </div>
            </div>
            <div class="col-6">
              <div class="d-grid gap-2">
                <button
                  type="button"
                  class="btn btn-primary text-light"
                >
                  直接購買
                </button>
              </div>
            </div>
          </div>
          <!-- 加入追蹤清單功能 -->
          <!-- <a href="#" class="d-flex mt-2 align-items-center" @click.prevent="addToTracklist"
            >
            <img src="../assets/img/yesgo_icon-31.png" alt="icon" style="width:20px">
            <span class="text-muted ms-1">加入追蹤清單</span></a
          > -->
        </div>
      </div>
    </div>
    <!-- 手機版側邊卡片轉幻燈片 -->
    <div class="d-md-none bg-light px-2 py-3 mt-4">
      <h4 class="text-primary mb-2">熱銷商品</h4>
      <div class="row">
        <div class="col-4" v-for="(item, index) in 3" :key="index">
          <div class="card card-hover border-0 p-1 p-lg-2">
            <a>
              <div class="ratio ratio-1x1 mb-1 animated-background"></div>
              <div class="card-body p-0">
                <h5 class="animated-background card-title card-title-height"></h5>
                <p class="animated-background card-text py-2"></p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 換頁頁簽 -->
    <ul class="nav mb-3 mt-5" id="pills-tab" role="tablist">
      <li class="" role="presentation">
        <button
          class="btn btn-outline-secondary border-end-0 px-md-5 rounded-start"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          商品特色
        </button>
      </li>
      <li class="" role="presentation">
        <button
          class="btn btn-outline-secondary border-end-0 px-md-5"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          商品規格
        </button>
      </li>
      <li class="" role="presentation">
        <button
          class="btn btn-outline-secondary px-md-5 rounded-end"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          注意事項
        </button>
      </li>
    </ul>
    <div class="row mt-4 mb-5">
      <div class="col-md-8">
        <div class="py-6 animated-background" style="height: 1000px;"></div>
      </div>
      <!-- 桌機版側邊卡片 -->
      <div class="col-md-4 d-none d-md-block">
        <div class="ms-xl-2">
          <div class="card p-xl-4 p-md-3">
            <h4 class="text-center text-primary mb-3">熱銷商品</h4>
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
          </div>
          <div class="border mt-4 rank border-bottom-0">
            <div class="border-bottom">
              <h4 class="text-center text-primary py-3 m-0">
                熱銷商品排行榜
              </h4>
            </div>
            <div
              class="card p-xl-4 p-md-3 rounded-0 border-bottom border-0"
              v-for="(item, index) in 3"
              :key="index"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
.content,
.price {
  border-bottom: 1px solid #000;
}
.number {
  button {
    width: 45px;
    font-size: 24px;
    padding: 0;
  }
}
.swiper {
  .slide {
    width: 110px;
    height: 110px;
  }
}
::v-deep.swiper-button-next,
::v-deep.swiper-button-prev {
  color: #f0f0f2;
  background-color: rgba(0, 0, 0, 0.5);
}
::v-deep.swiper-button-next:after,
::v-deep.swiper-button-prev:after {
  font-size: 32px;
}
.btn-outline-primary {
  &:hover {
    color: #f0f0f2;
  }
}
/* .breadcrumb li:last-child a{
  pointer-events: none;
  color: #000;
} */
.nav button {
  border-radius: 0;
}
.btn-outline-secondary:active:focus,
.btn-outline-secondary.active:focus {
  box-shadow: none;
}
.form-control[readonly]{
  background-color: #fff;
}
.btn-cart{
  &:hover .cart-icon{
    filter:invert(89%) sepia(3%) saturate(82%) hue-rotate(226deg) brightness(109%) contrast(92%);
  }
}
.cart-icon{
  width: auto;
  height: 15px;
  filter: invert(36%) sepia(50%) saturate(4763%) hue-rotate(345deg) brightness(100%) contrast(96%);
  margin-bottom: 3px;
}
</style>
