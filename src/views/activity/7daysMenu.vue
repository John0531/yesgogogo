<template>
  <div class="menuContainter">
    <div class="menuBanner d-flex align-items-center justify-content-center position-relative">

    </div>
    <!-- 主視覺 PC -->
    <div class="header-xl d-none d-lg-block">
      <div class="outer-bg">
        <div class="h-100 position-relative text-center">
          <img class="banner-image img-fluid position-absolute" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KV_1.png" alt="banner">
          <!-- 動畫  -->
          <div class="item foodmove1"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-1.png" alt="food"></div>
          <div class="item foodmove2"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-2.png" alt="food"></div>
          <div class="item foodmove3"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-3.png" alt="food"></div>
          <div class="item foodmove4"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-4.png" alt="food"></div>
          <div class="item foodmove5"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-5.png" alt="food"></div>
          <div class="item foodmove6"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-6.png" alt="food"></div>
          <div class="item foodmove7"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-1.png" alt="food"></div>
          <div class="item foodmove8"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-2.png" alt="food"></div>
          <div class="item foodmove9"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-3.png" alt="food"></div>
          <div class="item foodmove10"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-4.png" alt="food"></div>
          <div class="item foodmove11"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-5.png" alt="food"></div>
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KV.jpg" class="img-fluid d-inline" alt="banner">
          <!-- 裝飾 - 叉子湯匙 -->
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVbgdeco-1.png" class="img-fluid fork-deco position-absolute" alt="fork">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVbgdeco-2.png" class="img-fluid spoon-deco position-absolute" alt="spoon">
          <!-- 主題清單 -->
          <div class="themeList container">
            <ul class="list-unstyled d-flex justify-content-center mb-0">
              <li class="me-2">
                <a href="#" @click.prevent="recordClickHeight(eventList[0]?.targetUrl)" class="d-block theme-hover">
                  <img :src="eventList[0]?.image" class="img-fluid" alt="theme">
                </a>
              </li>
              <li class="me-2">
                <a href="#" @click.prevent="recordClickHeight(eventList[1]?.targetUrl)" class="d-block theme-hover">
                  <img :src="eventList[1]?.image" class="img-fluid" alt="theme">
                </a>
              </li>
              <li class="d-flex flex-column justify-content-between">
                <a href="#" @click.prevent="recordClickHeight(eventList[2]?.targetUrl)" class="d-block theme-hover">
                  <img :src="eventList[2]?.image" class="img-fluid" alt="theme">
                </a>
                <a href="#" @click.prevent="recordClickHeight(eventList[3]?.targetUrl)" class="d-block theme-hover">
                  <img :src="eventList[3]?.image" class="img-fluid" alt="theme">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 主視覺 mb -->
    <div class="header d-lg-none">
      <div class="h-100 position-relative text-center">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVmb.jpg" class="img-fluid" alt="">
        <img class="banner-m-image img-fluid position-absolute" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KV_1.png" alt="banner">
          <!-- 動畫  -->
          <div class="item foodmove1_m"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-1.png" alt="food"></div>
          <div class="item foodmove2_m"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-2.png" alt="food"></div>
          <div class="item foodmove3_m"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-3.png" alt="food"></div>
          <div class="item foodmove4_m"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-4.png" alt="food"></div>
          <div class="item foodmove5_m"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-5.png" alt="food"></div>
          <div class="item foodmove6_m"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-6.png" alt="food"></div>
          <div class="item foodmove7_m"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-1.png" alt="food"></div>
          <div class="item foodmove8_m"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-2.png" alt="food"></div>
          <div class="item foodmove9_m"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-3.png" alt="food"></div>
          <div class="item foodmove10_m"><img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/KVfood-4.png" alt="food"></div>
        <!-- 主題清單 -->
        <div class="themeMbList container">
          <div class="row g-3">
            <div class="col-6 mt-2">
              <a href="#" @click.prevent="recordClickHeight(eventList_m[0]?.targetUrl)" class="d-block">
                <img :src="eventList_m[0]?.image" alt="theme mb" class="img-fluid">
              </a>
            </div>
            <div class="col-6 mt-2">
              <a href="#" @click.prevent="recordClickHeight(eventList_m[1]?.targetUrl)" class="d-block">
                <img :src="eventList_m[1]?.image" alt="theme mb" class="img-fluid">
              </a>
            </div>
            <div class="col-6 mt-2">
              <a href="#" @click.prevent="recordClickHeight(eventList_m[2]?.targetUrl)" class="d-block">
                <img :src="eventList_m[2]?.image" alt="theme mb" class="img-fluid">
              </a>
            </div>
            <div class="col-6 mt-2">
              <a href="#" @click.prevent="recordClickHeight(eventList_m[3]?.targetUrl)" class="d-block">
                <img :src="eventList_m[3]?.image" alt="theme mb" class="img-fluid">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="all-bg">
      <!-- 健康蔬果 3 蔬 2 果 -->
      <div class="container mb-3 mb-lg-5 pt-3 pt-lg-5">
        <a href="#" @click.prevent="recordClickHeight(menuList1.link)">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic1up.png" alt="vegetable title" class="img-fluid d-none d-lg-block">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic1upmb.png" alt="vegetable title" class="img-fluid d-lg-none">
        </a>
        <div class="vegetable-bg padding-block">
          <div class="inner-block px-2 px-lg-4">
            <div class="d-lg-flex justify-content-between">
              <div class="image-block mb-3 mb-lg-0">
                <a href="#" @click.prevent="recordClickHeight(themeList[0]?.targetUrl)" class="d-block">
                  <img :src="themeList[0]?.image" class="img-fluid d-none d-lg-block" alt="vegetable picture">
                  <img :src="themeList_m[0]?.image" class="img-fluid d-lg-none" alt="vegetable picture">
                </a>
              </div>
              <div class="product-block">
                <div class="row product-content flex-wrap g-2 g-md-3 g-lg-4">
                  <div class="col-6 mb-2 mb-md-0" v-for="menu in menuList1.products" :key="menu + '1'">
                    <div class="prd-item position-relative" :class="{ 'sold-out': menu.stock === 0 }">
                      <router-link :to="`/productboard/product/${menu.productId}`" class="product-card d-block text-black">
                        <div class="card rounded-0 px-1 px-sm-2 px-md-3 px-xl-4 pt-2 pt-md-3 pt-xl-4">
                          <img :src="menu.productImage" class="card-img-top" alt="product image">
                          <div class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden">
                            <h5 class="card-title fs-7 fs-sm-6 mb-2 mb-lg-3">{{ menu.productName }}</h5>
                            <p class="d-inline text-nowrap fs-7 fs-xl-6"><del class="prd-msrp text-black me-2 me-xl-3">${{ menu.oldPrice &lt; 0 ? 'xxx': $currency.currency(menu.oldPrice) }}</del>特價<span class="price-color">$<span class="fs-3 fs-lg-2">{{ menu.price &lt; 0 ? 'xxx': $currency.currency(menu.price) }}</span></span></p>
                          </div>
                        </div>
                        <p class="vegetable-bg text-center py-1 py-md-2 text-white fs-6 fs-md-5">立即搶購</p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic1down.png" alt="vegetable bottom" class="img-fluid d-none d-lg-block">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic1downmb.png" alt="vegetable bottom" class="img-fluid d-lg-none">
      </div>
      <!-- 沖泡飲品 援力沖滿 -->
      <div class="container mb-3 mb-lg-5">
        <a href="#" @click.prevent="recordClickHeight(menuList2.link)">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic2up.png" alt="drinks title" class="img-fluid d-none d-lg-block">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic2upmb.png" alt="drinks title" class="img-fluid d-lg-none">
        </a>
        <div class="drinks-bg padding-block">
          <div class="inner-block px-2 px-lg-4">
            <div class="d-lg-flex justify-content-between">
              <div class="image-block mb-3 mb-lg-0">
                <a href="#" @click.prevent="recordClickHeight(themeList[1]?.targetUrl)" class="d-block">
                  <img :src="themeList[1]?.image" class="img-fluid d-none d-lg-block" alt="vegetable picture">
                  <img :src="themeList_m[1]?.image" class="img-fluid d-lg-none" alt="vegetable picture">
                </a>
              </div>
              <div class="product-block">
                <div class="row product-content flex-wrap g-2 g-md-3 g-lg-4">
                  <div class="col-6 mb-2 mb-md-0" v-for="menu in menuList2.products" :key="menu + '2'">
                    <div class="prd-item position-relative" :class="{ 'sold-out': menu.stock === 0 }">
                      <router-link :to="`/productboard/product/${menu.productId}`" class="product-card d-block text-black">
                        <div class="card rounded-0 px-1 px-sm-2 px-md-3 px-xl-4 pt-2 pt-md-3 pt-xl-4">
                          <img :src="menu.productImage" class="card-img-top" alt="product image">
                          <div class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden">
                            <h5 class="card-title fs-7 fs-sm-6 mb-2 mb-lg-3">{{ menu.productName }}</h5>
                            <p class="d-inline text-nowrap fs-7 fs-xl-6"><del class="prd-msrp text-black me-2 me-xl-3">${{ menu.oldPrice &lt; 0 ? 'xxx': $currency.currency(menu.oldPrice) }}</del>特價<span class="price-color">$<span class="fs-3 fs-lg-2">{{ menu.price &lt; 0 ? 'xxx': $currency.currency(menu.price) }}</span></span></p>
                          </div>
                        </div>
                        <p class="drinks-bg text-center py-1 py-md-2 text-white fs-6 fs-md-5">立即搶購</p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic2down.png" alt="drinks bottom" class="img-fluid d-none d-lg-block">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic2downmb.png" alt="drinks bottom" class="img-fluid d-lg-none">
      </div>
      <!-- 生鮮肉品 落肉強食 -->
      <div class="container mb-3 mb-lg-5">
        <a href="#" @click.prevent="recordClickHeight(menuList3.link)">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic3up.png" alt="meat title" class="img-fluid d-none d-lg-block">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic3upmb.png" alt="meat title" class="img-fluid d-lg-none">
        </a>
        <div class="meat-bg padding-block">
          <div class="inner-block px-2 px-lg-4">
            <div class="d-lg-flex justify-content-between">
              <div class="image-block mb-3 mb-lg-0">
                <a href="#" @click.prevent="recordClickHeight(themeList[2]?.targetUrl)" class="d-block">
                  <img :src="themeList[2]?.image" class="img-fluid d-none d-lg-block" alt="vegetable picture">
                  <img :src="themeList_m[2]?.image" class="img-fluid d-lg-none" alt="vegetable picture">
                </a>
              </div>
              <div class="product-block">
                <div class="row product-content flex-wrap g-2 g-md-3 g-lg-4">
                  <div class="col-6 mb-2 mb-md-0" v-for="menu in menuList3.products" :key="menu + '3'">
                    <div class="prd-item position-relative" :class="{ 'sold-out': menu.stock === 0 }">
                      <router-link :to="`/productboard/product/${menu.productId}`" class="product-card d-block text-black">
                        <div class="card rounded-0 px-1 px-sm-2 px-md-3 px-xl-4 pt-2 pt-md-3 pt-xl-4">
                          <img :src="menu.productImage" class="card-img-top" alt="product image">
                          <div class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden">
                            <h5 class="card-title fs-7 fs-sm-6 mb-2 mb-lg-3">{{ menu.productName }}</h5>
                            <p class="d-inline text-nowrap fs-7 fs-xl-6"><del class="prd-msrp text-black me-2 me-xl-3">${{ menu.oldPrice &lt; 0 ? 'xxx': $currency.currency(menu.oldPrice) }}</del>特價<span class="price-color">$<span class="fs-3 fs-lg-2">{{ menu.price &lt; 0 ? 'xxx': $currency.currency(menu.price) }}</span></span></p>
                          </div>
                        </div>
                        <p class="meat-bg text-center py-1 py-md-2 text-white fs-6 fs-md-5">立即搶購</p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic3down.png" alt="meat bottom" class="img-fluid d-none d-lg-block">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic3downmb.png" alt="meat bottom" class="img-fluid d-lg-none">
      </div>
      <!-- 即食料理 美味食療 -->
      <div class="container mb-3 mb-lg-5">
        <a href="#" @click.prevent="recordClickHeight(menuList4.link)">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic4up.png" alt="taste title" class="img-fluid d-none d-lg-block">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic4upmb.png" alt="taste title" class="img-fluid d-lg-none">
        </a>
        <div class="taste-bg padding-block">
          <div class="inner-block px-2 px-lg-4">
            <div class="d-lg-flex justify-content-between">
              <div class="image-block mb-3 mb-lg-0">
                <a href="#" @click.prevent="recordClickHeight(themeList[3]?.targetUrl)" class="d-block">
                  <img :src="themeList[3]?.image" class="img-fluid d-none d-lg-block" alt="vegetable picture">
                  <img :src="themeList_m[3]?.image" class="img-fluid d-lg-none" alt="vegetable picture">
                </a>
              </div>
              <div class="product-block">
                <div class="row product-content flex-wrap g-2 g-md-3 g-lg-4">
                  <div class="col-6 mb-2 mb-md-0" v-for="menu in menuList4.products" :key="menu + '4'">
                    <div class="prd-item position-relative" :class="{ 'sold-out': menu.stock === 0 }">
                      <router-link :to="`/productboard/product/${menu.productId}`" class="product-card d-block text-black">
                        <div class="card rounded-0 px-1 px-sm-2 px-md-3 px-xl-4 pt-2 pt-md-3 pt-xl-4">
                          <img :src="menu.productImage" class="card-img-top" alt="product image">
                          <div class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden">
                            <h5 class="card-title fs-7 fs-sm-6 mb-2 mb-lg-3">{{ menu.productName }}</h5>
                            <p class="d-inline text-nowrap fs-7 fs-xl-6"><del class="prd-msrp text-black me-2 me-xl-3">${{ menu.oldPrice &lt; 0 ? 'xxx': $currency.currency(menu.oldPrice) }}</del>特價<span class="price-color">$<span class="fs-3 fs-lg-2">{{ menu.price &lt; 0 ? 'xxx': $currency.currency(menu.price) }}</span></span></p>
                          </div>
                        </div>
                        <p class="taste-bg text-center py-1 py-md-2 text-white fs-6 fs-md-5">立即搶購</p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic4down.png" alt="taste bottom" class="img-fluid d-none d-lg-block">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic4downmb.png" alt="taste bottom" class="img-fluid d-lg-none">
      </div>
      <!-- 常備食材 防疫療備 -->
      <div class="container mb-3 mb-lg-5">
        <a href="#" @click.prevent="recordClickHeight(menuList5.link)">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic5up.png" alt="normal title" class="img-fluid d-none d-lg-block">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic5upmb.png" alt="normal title" class="img-fluid d-lg-none">
        </a>
        <div class="normal-bg padding-block">
          <div class="inner-block px-2 px-lg-4">
            <div class="d-lg-flex justify-content-between">
              <div class="image-block mb-3 mb-lg-0">
                <a href="#" @click.prevent="recordClickHeight(themeList[4]?.targetUrl)" class="d-block">
                  <img :src="themeList[4]?.image" class="img-fluid d-none d-lg-block" alt="vegetable picture">
                  <img :src="themeList_m[4]?.image" class="img-fluid d-lg-none" alt="vegetable picture">
                </a>
              </div>
              <div class="product-block">
                <div class="row product-content flex-wrap g-2 g-md-3 g-lg-4">
                  <div class="col-6 mb-2 mb-md-0" v-for="menu in menuList5.products" :key="menu + '5'">
                    <div class="prd-item position-relative" :class="{ 'sold-out': menu.stock === 0 }">
                      <router-link :to="`/productboard/product/${menu.productId}`" class="product-card d-block text-black">
                        <div class="card rounded-0 px-1 px-sm-2 px-md-3 px-xl-4 pt-2 pt-md-3 pt-xl-4">
                          <img :src="menu.productImage" class="card-img-top" alt="product image">
                          <div class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden">
                            <h5 class="card-title fs-7 fs-sm-6 mb-2 mb-lg-3">{{ menu.productName }}</h5>
                            <p class="d-inline text-nowrap fs-7 fs-xl-6"><del class="prd-msrp text-black me-2 me-xl-3">${{ menu.oldPrice &lt; 0 ? 'xxx': $currency.currency(menu.oldPrice) }}</del>特價<span class="price-color">$<span class="fs-3 fs-lg-2">{{ menu.price &lt; 0 ? 'xxx': $currency.currency(menu.price) }}</span></span></p>
                          </div>
                        </div>
                        <p class="normal-bg text-center py-1 py-md-2 text-white fs-6 fs-md-5">立即搶購</p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic5down.png" alt="normal bottom" class="img-fluid d-none d-lg-block">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic5downmb.png" alt="normal bottom" class="img-fluid d-lg-none">
      </div>
      <!-- 料理幫手 調理神器 -->
      <div class="container mb-3 mb-lg-5">
        <a :href="menuList6.link">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic6up.png" alt="cook title" class="img-fluid d-none d-lg-block">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic6upmb.png" alt="cook title" class="img-fluid d-lg-none">
        </a>
        <div class="cook-bg padding-block">
          <div class="inner-block px-2 px-lg-4">
            <div class="d-lg-flex justify-content-between">
              <div class="image-block mb-3 mb-lg-0">
                <a href="#" @click.prevent="recordClickHeight(themeList[5]?.targetUrl)" class="d-block">
                  <img :src="themeList[5]?.image" class="img-fluid d-none d-lg-block" alt="vegetable picture">
                  <img :src="themeList_m[5]?.image" class="img-fluid d-lg-none" alt="vegetable picture">
                </a>
              </div>
              <div class="product-block">
                <div class="row product-content flex-wrap g-2 g-md-3 g-lg-4">
                  <div class="col-6 mb-2 mb-md-0" v-for="menu in menuList6.products" :key="menu + '6'">
                    <div class="prd-item position-relative" :class="{ 'sold-out': menu.stock === 0 }">
                      <router-link :to="`/productboard/product/${menu.productId}`" class="product-card d-block text-black">
                        <div class="card rounded-0 px-1 px-sm-2 px-md-3 px-xl-4 pt-2 pt-md-3 pt-xl-4">
                          <img :src="menu.productImage" class="card-img-top" alt="product image">
                          <div class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden">
                            <h5 class="card-title fs-7 fs-sm-6 mb-2 mb-lg-3">{{ menu.productName }}</h5>
                            <p class="d-inline text-nowrap fs-7 fs-xl-6"><del class="prd-msrp text-black me-2 me-xl-3">${{ menu.oldPrice &lt; 0 ? 'xxx': $currency.currency(menu.oldPrice) }}</del>特價<span class="price-color">$<span class="fs-3 fs-lg-2">{{ menu.price &lt; 0 ? 'xxx': $currency.currency(menu.price) }}</span></span></p>
                          </div>
                        </div>
                        <p class="cook-bg text-center py-1 py-md-2 text-white fs-6 fs-md-5">立即搶購</p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic6down.png" alt="cook bottom" class="img-fluid d-none d-lg-block">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/Topic6downmb.png" alt="cook bottom" class="img-fluid d-lg-none">
      </div>
      <!-- 影音專區 -->
      <div v-if="videoList" class="container mb-4 mb-lg-5">
        <!-- 影音專區 標題 -->
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/videoup.png" alt="video title" class="img-fluid d-none d-lg-block">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/videobgupmb.png" alt="video title" class="img-fluid d-lg-none">
        <!-- 影音專區 內容 -->
        <div class="video-bg">
          <div class="px-3 px-lg-5">
            <div class="row">
              <div class="col-lg-5 mb-4 mb-lg-0">
                <h3 class="fs-3 fw-bold mb-3" style="color:#182a83;">{{ videoList.name }}</h3>
                <div class="px-2 py-1 mb-3" style="border:2px solid #182a83;overflow:hidden;">
                  <h3 class="fs-4 text-nowrap" style="color:#f15d22">{{ videoList.title }}</h3>
                </div>
                <h4 style="color:#182a83;" class="title-content fs-5 fs-sm-4">{{ videoList.description }}</h4>
              </div>
              <div class="col-lg-7 h-100">
                <div class="ratio ratio-16x9">
                  <iframe class="w-100" :src="videoList.link" frameborder="0"></iframe>
                </div>
              </div>
            </div>
          </div>
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/videoline.png" class="img-fluid py-3 pt-lg-5 pb-lg-4" alt="video line">
          <div class="menuProducts">
            <div class="innerMenu">
              <swiper
                class="menuSwiper"
                :slidesPerView="2.3"
                :spaceBetween="10"
                :loop="true"
                :breakpoints="{
                  576: {
                    slidesPerView: 2.3,
                    spaceBetween: 10,
                  },
                  992: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  }
                }"
                :navigation="{
                  nextEl: '#js-next1',
                  prevEl: '#js-prev1'
                }"
              >
                <swiper-slide v-for="videoprd in videoList.products" :key="videoprd.productId">
                  <div class="prd-item position-relative" :class="{ 'sold-out': videoprd.stock === 0 }">
                    <div class="card swiper-card rounded-0 border-0 h-100 p-1 p-sm-2 mt-0 mt-lg-2">
                      <router-link
                        :to="`/productboard/product/${videoprd.productId}`"
                        class="d-block text-secondary"
                      >
                        <div class="swiper-card-image ratio ratio-1x1">
                          <img
                            :src="`${videoprd.productImage}`"
                            class="card-img-top"
                            alt="product image"
                          />
                        </div>
                        <div class="card-body pt-1 px-0 pb-0">
                          <h5 class="card-title fs-7 fs-sm-6 text-center mb-2 mb-lg-3">
                            {{ videoprd.productName }}
                          </h5>
                          <p
                            class="card-text text-center fw-medium fs-6 fs-md-5 text-primary"
                          >
                            NT${{ $currency.currency(videoprd.price) }}
                          </p>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <!-- navigation buttons -->
            <div id="js-prev1" class="swiper-button-prev"></div>
            <div id="js-next1" class="swiper-button-next"></div>
          </div>
        </div>
        <!-- 影音專區 結尾 -->
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/videodown.png" alt="video title" class="img-fluid d-none d-lg-block">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/videobgdownmb.png" alt="video title" class="img-fluid d-lg-none">
      </div>
      <!-- 來看看更多商品 -->
      <div class="text-center w-40 mx-auto pb-5 pb-lg-9">
        <router-link to="/">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/7daysMenu/more.png" class="img-fluid d-inline" alt="more button">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videoList: '',
      menuList: '',
      menuList1: '',
      menuList2: '',
      menuList3: '',
      menuList4: '',
      menuList5: '',
      menuList6: '',
      eventList_m: '',
      eventList: '',
      themeList_m: '',
      themeList: ''
    }
  },
  methods: {
    getMenuList () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=7dm_A`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.menuList = res.data.info
            this.menuList.forEach((item) => {
              if (item.code === '7dm_A_1') {
                this.menuList1 = item
              } else if (item.code === '7dm_A_2') {
                this.menuList2 = item
              } else if (item.code === '7dm_A_3') {
                this.menuList3 = item
              } else if (item.code === '7dm_A_4') {
                this.menuList4 = item
              } else if (item.code === '7dm_A_5') {
                this.menuList5 = item
              } else if (item.code === '7dm_A_6') {
                this.menuList6 = item
              } else if (item.code === '7dm_A_7') {
                this.videoList = item
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
    // ?上方活動區
    getEventList () {
      // mobile
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=7dm_m_B`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.eventList_m = res.data.info
          }
        })
      // PC
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=7dm_B`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.eventList = res.data.info
          }
        })
    },
    // ?各主題圖
    getThemeList () {
      // mobile
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=7dm_m_AA`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.themeList_m = res.data.info
          }
        })
      // PC
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=7dm_AA`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.themeList = res.data.info
          }
        })
    },
    // ?小電視及看更多記錄高度
    recordClickHeight (url) {
      // ?點擊產品觸發紀錄瀏覽高度於LocalStorage
      const scrollYHeight = window.scrollY
      localStorage.setItem('click7daysMenuHeight', scrollYHeight)
      setTimeout(() => {
        window.location = url
      }, 500)
    },
    checkLocalHeight () {
      // ?檢查LocalStorage
      if (window.localStorage.getItem('click7daysMenuHeight')) {
        const globalheight = window.localStorage.getItem('click7daysMenuHeight')
        setTimeout(() => {
          window.scrollTo(0, globalheight)
        }, 300)
        localStorage.removeItem('click7daysMenuHeight')
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
    this.getMenuList()
    this.getEventList()
    this.getThemeList()
  },
  updated () {
    this.checkLocalHeight()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/activity/7daysMenu/_animation.scss';
@import '@/assets/scss/activity/7daysMenu/_site.scss';
img{
  object-fit: fill;
  display: block;
}
</style>
