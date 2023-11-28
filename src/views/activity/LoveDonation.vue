<template>
<div v-if="!donationOpen">
      <DonationComingsoon></DonationComingsoon>
    </div>

  <div v-if="donationOpen">
    <div class="bg" style="overflow:hidden">

         <!-- PC XL版 banner -->
         <a href="#detail"  > <div class="banner-pc img-bg-noRepeat d-none d-xl-block"></div></a>

         <a href="#detail"  > <!-- PC LG版 banner -->
          <div  class="banner-pc img-bg-noRepeat d-none d-lg-block d-xl-none "></div></a>

          <!-- 手機版 banner -->
         <a href="#detail"  > <div class="banner-mb img-bg-noRepeat  d-lg-none  "></div></a>

          <div class="bg-lucky img-bg-repeat pt-0 pb-md-4  pb-lg-6 ">

            <!-- 優惠3區塊 -->
           <div class="container mt-3">
              <div class="row">
                <div class="col-12 col-md-10  mx-auto">
                  <div class="row g-2 justify-content-center align-items-center">
                      <div class="col-12 col-lg-7 ">
                        <a href="#detail">
                          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/loveDonation_october/add_pc_A_1.png" alt="愛心捐說明" class="img-fluid d-none d-lg-block" >

                          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/loveDonation_october/add_mb_A_1.png" alt="愛心捐說明" class="img-fluid d-block d-lg-none " >
                        </a>

                      </div>
                      <div class="col-12 col-lg-5 p-0 p-lg-3 ">

                        <div class="d-flex flex-row flex-lg-column ">

                          <div class=" p-1 p-lg-0">
                            <a href="#detail">
                              <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/loveDonation_october/add_pc_A_2.png" class="img-fluid d-none d-lg-block mb-2" alt="咖啡活動">

                              <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/loveDonation_october/add_mb_A_2.png" alt="咖啡活動" class="img-fluid d-block d-lg-none  " >

                            </a>
                          </div>

                          <div  class="p-1 p-lg-0">
                            <a href="/activity/2023_memberbonus" target="_blank" >
                               <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/loveDonation_october/add_pc_A_3.png" class="img-fluid d-none d-lg-block" alt="新會員註冊">

                            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/loveDonation_october/add_mb_A_3.png" alt="新會員註冊" class="img-fluid d-block d-lg-none " >

                            </a>

                          </div>

                        </div>

                     </div>
                   </div>
                </div>
              </div>

           </div>

            <!-- 順手必買 圖片入稿 luckyProductList -->
                <div class="container"  v-if="luckyProductList.length>0" >

                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-11">
                                <div class="row lucky-title img-bg-noRepeat   "></div>

                                <div class="row lucky-middle  img-bg-repeat " >
                                    <!-- -卡片區 -->
                                    <div class="col-12 col-md-10 col-lg-11 mx-auto">
                                      <div class="row mt-3 g-2 g-sm-2 g-lg-3">
                                        <div class="col-12 col-lg-6 hvr-bob d-flex align-items-center justify-content-center ">
                                          <a :href="luckyProductList[0].targetUrl" v-if="luckyProductList[0]">
                                            <img v-lazy="luckyProductList[0].image" :key="luckyProductList[0].image" class="img-fluid" alt="">
                                          </a>

                                        </div>

                                        <div class="col-12 col-lg-6 hvr-bob d-flex align-items-center justify-content-center">
                                             <a :href="luckyProductList[1].targetUrl"  v-if="luckyProductList[1]" >
                                             <img v-lazy="luckyProductList[1].image" :key="luckyProductList[1].image" class="img-fluid" alt="" >  </a>
                                        </div>
                                        <div class="col-6 col-lg-3 hvr-bob d-flex align-items-center justify-content-center ">
                                             <a :href="luckyProductList[2].targetUrl"  v-if="luckyProductList[2]" >
                                             <img v-lazy="luckyProductList[2].image" class="img-fluid" alt="" > </a>
                                             </div>
                                        <div class="col-6 col-lg-3 hvr-bob d-flex align-items-center justify-content-center ">
                                             <a :href="luckyProductList[3].targetUrl"  v-if="luckyProductList[3]" >
                                             <img v-lazy="luckyProductList[3].image" :key="luckyProductList[3].image" class="img-fluid" alt="" ></a>
                                             </div>
                                        <div class="col-6 col-lg-3 hvr-bob d-flex align-items-center justify-content-center ">
                                             <a :href="luckyProductList[4].targetUrl"  v-if="luckyProductList[4]" >
                                             <img v-lazy="luckyProductList[4].image" :key="luckyProductList[4].image" class="img-fluid" alt="" ></a>
                                             </div>
                                        <div class="col-6 col-lg-3 hvr-bob d-flex align-items-center justify-content-center ">
                                             <a :href="luckyProductList[5].targetUrl"  v-if="luckyProductList[5]" >
                                             <img v-lazy="luckyProductList[5].image" :key="luckyProductList[5].image" class="img-fluid" alt="" ></a>
                                             </div>

                                     </div>  </div>
                                </div>

                                <div class="row lucky-end img-bg-noRepeat"></div>

                            </div>
                        </div>

                    <!-- <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/bg_heart_01.png" class=" d-none d-lg-block" alt="heart-L">

                    <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/bg_heart_02.png" class=" d-none d-lg-block" alt="heart-R"> -->

                </div>

        </div>

             <!-- 品號入稿 start -->
        <div class="" v-if="allProductList.length>0" >

            <!-- bg-eat 愈吃愈有福 (零食/糕點)  productBox-title01   -->
            <div class="bg-group1 img-bg-repeat pb-5">
              <div class="py-2">

                  <div class="container " v-if="productList01" >
                      <div class="row justify-content-center ">
                        <div class="col-11   g-1 g-lg-0">

                              <div class="row productBox-title01 img-bg-noRepeat "> </div>

                              <div class="row  productBox-middle img-bg-repeat py-3">
                                    <!-- 下為商品區 -->
                                   <div class="col-12 col-md-11 mx-auto ">
                                      <div class=" row justify-content-center g-1 g-lg-2">

                                              <div class="col-6 col-lg-3 " v-for="eatItem in  productList01 " :key="eatItem.productId" >
                                                  <div class="prd-item hvr-bob  "  :class="{ 'sold-out': eatItem.stock === 0 }">
                                                      <router-link
                                                          :to="`/productboard/product/${eatItem.productId}`"
                                                          class="prd-link text-secondary text-decoration-none"
                                                      >
                                                      <div class="p-1 p-md-2">
                                                      <div class="ratio ratio-1x1">
                                                          <img v-lazy="eatItem.productImage" :key="eatItem.productImage" class=" img-fluid  " >
                                                      </div>
                                                      </div>

                                                          <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-6 fs-xxl-5"> {{eatItem.slogan}} </div>
                                                          <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                                                          <p class="card-text text-dark text-center mt-0 prd-name fs-6"> {{eatItem.productName}} </p>
                                                          <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                                                              <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 fs-xxl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                                                              >
                                                              ${{ eatItem.oldPrice &lt; 0 ? 'xxx': $currency.currency(eatItem.oldPrice)}}
                                                              </del>
                                                              <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-7"
                                                              >特價 <span class="prd-currency">$</span><span class="sell-price">

                                                                  {{ eatItem.price &lt; 0 ? 'xxx': $currency.currency(eatItem.price) }}
                                                                  </span
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

                              <div class="row productBox-end img-bg-noRepeat  "> </div>

                        </div>
                      </div>

                  </div>

              </div>
            </div>

            <!-- bg-drinks 好果報喜來 (果汁/飲品/咖啡) !!要換圖!! productBox-title02 -->
           <div class="bg-group3 img-bg-repeat pb-5">
             <div class="py-2">

               <div class="container" v-if="productList02" >
                    <div class="row justify-content-center">
                        <div class="col-11 col-lg-11 g-1 g-lg-0">

                            <div class="row productBox-title02 img-bg-noRepeat "> </div>

                            <div class="row productBox-middle img-bg-repeat py-3">
                               <div class="col-12 col-md-11 mx-auto ">
                                  <div class=" row justify-content-center g-1 g-lg-2">

                                    <div class="col-6 col-lg-3 " v-for="eatItem in  productList02 " :key="eatItem.productId" >
                                        <div class="prd-item hvr-bob  "  :class="{ 'sold-out': eatItem.stock === 0 }">
                                            <router-link
                                                :to="`/productboard/product/${eatItem.productId}`"
                                                class="prd-link text-secondary text-decoration-none"
                                            >
                                            <div class="p-1 p-md-2">
                                            <div class="ratio ratio-1x1">
                                                <img v-lazy="eatItem.productImage" :key="eatItem.productImage" class=" img-fluid  " >
                                            </div>
                                            </div>

                                                <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-6 fs-xxl-5"> {{eatItem.slogan}}</div>
                                                <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                                                <p class="card-text text-dark text-center mt-0 prd-name fs-6"> {{eatItem.productName}} </p>
                                                <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                                                    <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 fs-xxl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                                                    >
                                                    ${{ eatItem.oldPrice &lt; 0 ? 'xxx': $currency.currency(eatItem.oldPrice)}}
                                                    </del>
                                                    <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-7"
                                                    >特價 <span class="prd-currency">$</span><span class="sell-price">

                                                        {{ eatItem.price &lt; 0 ? 'xxx': $currency.currency(eatItem.price) }}
                                                        </span
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

                           <div class="row productBox-end img-bg-noRepeat  "> </div>

                        </div>
                    </div>
                </div>

            </div>
           </div>
             <!-- bg-rice 財源不間斷(米/油/南北貨) productBox-title03 -->
          <div class="bg-group2 img-bg-repeat pb-5">
             <div class="py-2">

                 <div class="container" v-if="productList03" >
                    <div class="row justify-content-center">
                        <div class="col-11 col-lg-11 g-1 g-lg-0">

                           <div class="row productBox-title03 img-bg-noRepeat "> </div>

                            <div class="row  productBox-middle img-bg-repeat py-3">
                               <div class="col-12 col-md-11 mx-auto ">
                                  <div class=" row justify-content-center g-1 g-lg-2">

                                    <div class="col-6 col-lg-3 " v-for="eatItem in  productList03 " :key="eatItem.productId" >
                                        <div class="prd-item hvr-bob  "  :class="{ 'sold-out': eatItem.stock === 0 }">
                                            <router-link
                                                :to="`/productboard/product/${eatItem.productId}`"
                                                class="prd-link text-secondary text-decoration-none"
                                            >
                                            <div class="p-1 p-md-2">
                                            <div class="ratio ratio-1x1">
                                                <img v-lazy="eatItem.productImage" :key="eatItem.productImage" class=" img-fluid  " >
                                            </div>
                                            </div>

                                                <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-6 fs-xxl-5"> {{eatItem.slogan}}</div>
                                                <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                                                <p class="card-text text-dark text-center mt-0 prd-name fs-6"> {{eatItem.productName}} </p>
                                                <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                                                    <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 fs-xxl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                                                    >
                                                    ${{ eatItem.oldPrice &lt; 0 ? 'xxx': $currency.currency(eatItem.oldPrice)}}
                                                    </del>
                                                    <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-7"
                                                    >特價 <span class="prd-currency">$</span><span class="sell-price">

                                                        {{ eatItem.price &lt; 0 ? 'xxx': $currency.currency(eatItem.price) }}
                                                        </span
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

                            <div class="row productBox-end img-bg-noRepeat  "> </div>

                        </div>
                    </div>

                </div>

            </div>
          </div>

            <!-- bg-fresh 日日好吉祥(生鮮/即食/小吃) productBox-title04 -->
           <div class="bg-group4 img-bg-repeat pb-5">
             <div class="py-2">

                <div class="container" v-if="productList04" >
                    <div class="row justify-content-center">
                        <div class="col-11 col-lg-11 g-1 g-lg-0">

                            <div class="row productBox-title04 img-bg-noRepeat "> </div>

                            <div class="row  productBox-middle img-bg-repeat py-3">
                              <div class="col-12 col-md-11 mx-auto ">
                                      <div class=" row justify-content-center g-1 g-lg-2">

                                    <div class="col-6 col-lg-3 " v-for="eatItem in  productList04 " :key="eatItem.productId" >
                                        <div class="prd-item hvr-bob  "  :class="{ 'sold-out': eatItem.stock === 0 }">
                                            <router-link
                                                :to="`/productboard/product/${eatItem.productId}`"
                                                class="prd-link text-secondary text-decoration-none"
                                            >
                                            <div class="p-1 p-md-2">
                                            <div class="ratio ratio-1x1">
                                                <img v-lazy="eatItem.productImage" :key="eatItem.productImage" class=" img-fluid  " >
                                            </div>
                                            </div>

                                                <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-6 fs-xxl-5"> {{eatItem.slogan}}</div>
                                                <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                                                <p class="card-text text-dark text-center mt-0 prd-name fs-6"> {{eatItem.productName}} </p>
                                                <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                                                    <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 fs-xxl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                                                    >
                                                    ${{ eatItem.oldPrice &lt; 0 ? 'xxx': $currency.currency(eatItem.oldPrice)}}
                                                    </del>
                                                    <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-7"
                                                    >特價 <span class="prd-currency">$</span><span class="sell-price">

                                                        {{ eatItem.price &lt; 0 ? 'xxx': $currency.currency(eatItem.price) }}
                                                        </span
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
                            <div class="row productBox-end img-bg-noRepeat  "> </div>

                        </div>
                    </div>

                </div>

            </div>
           </div>

             <!-- bg-health 福祿壽全榮(保健/保養) 換圖->改成 !!要換圖!! <暖冬喜連連>-2023/12 productBox-title05 -->

             <div class="bg-group1 img-bg-repeat pb-5" v-if="productList05.length>0">
             <div class="py-2">

                 <div class="container" v-if="productList05" >
                    <div class="row justify-content-center">
                        <div class="col-11 col-lg-11 g-1 g-lg-0">

                            <div class="row productBox-title05 img-bg-noRepeat "> </div>

                            <div class="row  productBox-middle img-bg-repeat py-3">
                                    <!-- 下為商品區 -->
                                   <div class="col-12 col-md-11 mx-auto ">

                            <div class="row  justify-content-center  g-1 g-lg-2">

                                    <div class="col-6 col-lg-3 " v-for="eatItem in  productList05 " :key="eatItem.productId" >
                                        <div class="prd-item hvr-bob  "  :class="{ 'sold-out': eatItem.stock === 0 }">
                                            <router-link
                                                :to="`/productboard/product/${eatItem.productId}`"
                                                class="prd-link text-secondary text-decoration-none"
                                            >
                                            <div class="p-1 p-md-2">
                                            <div class="ratio ratio-1x1">
                                                <img v-lazy="eatItem.productImage" :key="eatItem.productImage" class=" img-fluid  " >
                                            </div>
                                            </div>

                                                <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-6 fs-xxl-5"> {{eatItem.slogan}}</div>
                                                <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                                                <p class="card-text text-dark text-center mt-0 prd-name fs-6"> {{eatItem.productName}} </p>
                                                <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                                                    <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 fs-xxl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                                                    >
                                                    ${{ eatItem.oldPrice &lt; 0 ? 'xxx': $currency.currency(eatItem.oldPrice)}}
                                                    </del>
                                                    <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-7"
                                                    >特價 <span class="prd-currency">$</span><span class="sell-price">

                                                        {{ eatItem.price &lt; 0 ? 'xxx': $currency.currency(eatItem.price) }}
                                                        </span
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
                         <div class="row productBox-end img-bg-noRepeat  "> </div>

                        </div>
                    </div>

                </div>

            </div>
             </div>

             <!-- bg-clean 炊煙生財氣(廚房好物) productBox-title06 -->
             <div class="bg-group3 img-bg-repeat pb-5">
              <div class="py-2">

               <div class="container" v-if="productList06" >
                    <div class="row justify-content-center">
                        <div class="col-11 col-lg-11 g-1 g-lg-0">

                            <div class="row productBox-title06 img-bg-noRepeat "> </div>

                            <div class="row  productBox-middle img-bg-repeat py-3">
                              <div class="col-12 col-md-11 mx-auto ">
                                  <div class=" row justify-content-center g-1 g-lg-2">

                                    <div class="col-6 col-lg-3 " v-for="eatItem in  productList06 " :key="eatItem.productId" >
                                        <div class="prd-item hvr-bob  "  :class="{ 'sold-out': eatItem.stock === 0 }">
                                            <router-link
                                                :to="`/productboard/product/${eatItem.productId}`"
                                                class="prd-link text-secondary text-decoration-none"
                                            >
                                            <div class="p-1 p-md-2">
                                            <div class="ratio ratio-1x1">
                                                <img v-lazy="eatItem.productImage" :key="eatItem.productImage" class=" img-fluid  " >
                                            </div>
                                            </div>

                                                <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-6 fs-xxl-5"> {{eatItem.slogan}}</div>
                                                <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                                                <p class="card-text text-dark text-center mt-0 prd-name fs-6"> {{eatItem.productName}} </p>
                                                <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                                                    <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 fs-xxl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                                                    >
                                                    ${{ eatItem.oldPrice &lt; 0 ? 'xxx': $currency.currency(eatItem.oldPrice)}}
                                                    </del>
                                                    <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-7"
                                                    >特價 <span class="prd-currency">$</span><span class="sell-price">

                                                        {{ eatItem.price &lt; 0 ? 'xxx': $currency.currency(eatItem.price) }}
                                                        </span
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
                            <div class="row productBox-end img-bg-noRepeat  "> </div>

                        </div>
                    </div>

                </div>

            </div>
             </div>

            <!-- bg-cool 納福日無疆(個清/日用) productBox-title07 -->
            <div class="bg-group2 img-bg-repeat pb-5">
              <div class="py-2">

               <div class="container" v-if="productList07" >
                    <div class="row justify-content-center">
                        <div class="col-11 col-lg-11 g-1 g-lg-0">

                            <div class="row productBox-title07 img-bg-noRepeat "> </div>

                            <div class="row  productBox-middle img-bg-repeat py-3">
                               <div class="col-12 col-md-11 mx-auto ">
                                  <div class=" row justify-content-center g-1 g-lg-2">
                                    <div class="col-6 col-lg-3 " v-for="eatItem in  productList07 " :key="eatItem.productId" >
                                        <div class="prd-item hvr-bob  "  :class="{ 'sold-out': eatItem.stock === 0 }">
                                            <router-link
                                                :to="`/productboard/product/${eatItem.productId}`"
                                                class="prd-link text-secondary text-decoration-none"
                                            >
                                            <div class="p-1 p-md-2">
                                            <div class="ratio ratio-1x1">
                                                <img v-lazy="eatItem.productImage" :key="eatItem.productImage" class=" img-fluid  " >
                                            </div>
                                            </div>

                                                <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-6 fs-xxl-5"> {{eatItem.slogan}}</div>
                                                <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                                                <p class="card-text text-dark text-center mt-0 prd-name fs-6"> {{eatItem.productName}} </p>
                                                <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                                                    <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 fs-xxl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                                                    >
                                                    ${{ eatItem.oldPrice &lt; 0 ? 'xxx': $currency.currency(eatItem.oldPrice)}}
                                                    </del>
                                                    <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-7"
                                                    >特價 <span class="prd-currency">$</span><span class="sell-price">

                                                        {{ eatItem.price &lt; 0 ? 'xxx': $currency.currency(eatItem.price) }}
                                                        </span
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
                             <div class="row productBox-end img-bg-noRepeat  "> </div>

                        </div>
                    </div>

                </div>

            </div>
            </div>
             <!--   入室春風靄 後棟要求隱藏-2023/11 productBox-title08 -->
             <div class="bg-group4 img-bg-repeat pb-5" v-if="productList08.length>0">
              <div class="py-2">

                <div class="container" v-if="productList08" >
                    <div class="row justify-content-center">
                        <div class="col-11 col-lg-11 g-1 g-lg-0">
                            <div class="row productBox-title08 img-bg-noRepeat "> </div>

                            <div class="row  productBox-middle img-bg-repeat py-3">

                                <div class="col-12 col-md-11 mx-auto ">
                                      <div class=" row justify-content-center g-1 g-lg-2">

                                    <div class="col-6 col-lg-3 " v-for="eatItem in  productList08 " :key="eatItem.productId" >
                                        <div class="prd-item hvr-bob  "  :class="{ 'sold-out': eatItem.stock === 0 }">
                                            <router-link
                                                :to="`/productboard/product/${eatItem.productId}`"
                                                class="prd-link text-secondary text-decoration-none"
                                            >
                                            <div class="p-1 p-md-2">
                                            <div class="ratio ratio-1x1">
                                                <img v-lazy="eatItem.productImage" :key="eatItem.productImage" class=" img-fluid  " >
                                            </div>
                                            </div>

                                                <div class="mt-3 mb-2 text-center slogan-button p-1 fw-bold fs-7 fs-md-6 fs-xxl-5"> {{eatItem.slogan}}</div>
                                                <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                                                <p class="card-text text-dark text-center mt-0 prd-name fs-6"> {{eatItem.productName}} </p>
                                                <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                                                    <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 fs-xxl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3"
                                                    >
                                                    ${{ eatItem.oldPrice &lt; 0 ? 'xxx': $currency.currency(eatItem.oldPrice)}}
                                                    </del>
                                                    <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-7"
                                                    >特價 <span class="prd-currency">$</span><span class="sell-price">

                                                        {{ eatItem.price &lt; 0 ? 'xxx': $currency.currency(eatItem.price) }}
                                                        </span
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

                            <div class="row productBox-end img-bg-noRepeat  "> </div>
                        </div>
                    </div>

                 </div>

               </div>
             </div>

        </div>
             <!-- 品號入稿 end ▲ -->

             <!-- 愛! 集購總動員 圖片入稿 -->
            <div class="bg-love  py-5 ">
                <div class="container " v-if="movementProductList.length>0" >
                    <div class="row  justify-content-center">
                        <div class="col-11 col-lg-11  ">
                           <div class="row movement-title img-bg-noRepeat "></div>
                            <div class="row movement-middle img-bg-repeat ">
                              <div class="col-12 col-lg-11 mx-auto">

                                <div class="row justify-content-center g-1 d-md-2 g-lg-3">
                                    <!-- 商品區 -->
                                    <div class="col-12 col-lg-6 hvr-bob d-flex align-items-center justify-content-center " v-for="product in movementProductList" :key="product.targetUrl"  >
                                        <a :href="product.targetUrl" v-if="product">
                                            <img v-lazy="product.image" :key="product.image" class="img-fluid" alt="">
                                        </a>
                                  </div>
                                </div>

                              </div>
                            </div>
                            <div class="row movement-end img-bg-noRepeat "></div>

                       </div>
                   </div>

               </div>

            </div>

            <!-- 受贈單位 -->
            <div class="bg-donee"  >
                <div class="container"  >
                    <div class="row justify-content-center" >
                        <div class="col-12 col-lg-11"  >
                            <div class="text-center my-3 my-lg-5">
                              <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/loveDonation_october/title_04_PC.png" class="img-fluid mt-3 mt-lg-6 mb-3" alt="受贈單位">
                             <!-- <p class="donee-text-title">受 贈 單 位</p> -->
                           </div>

                            <div class="row row-cols-3 row-cols-lg-4 g-1 ">
                                <div class="col d-flex align-items-center justify-content-center "> <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/logo-01.jpg" class="img-fluid border border-1 " alt=""> </div>
                                <div class="col d-flex align-items-center justify-content-center "> <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/logo-02.jpg" class="img-fluid border border-1 " alt=""> </div>
                                <div class="col d-flex align-items-center justify-content-center "> <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/logo-03.jpg" class="img-fluid border border-1 " alt=""> </div>
                                <div class="col d-flex align-items-center justify-content-center "> <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/logo-04.jpg" class="img-fluid border border-1 " alt=""> </div>
                                <div class="col d-flex align-items-center justify-content-center "> <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/logo-05.jpg" class="img-fluid border border-1 " alt=""> </div>
                                <div class="col d-flex align-items-center justify-content-center "> <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/logo-06.jpg" class="img-fluid border border-1 " alt=""> </div>
                                <div class="col d-flex align-items-center justify-content-center "> <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/logo-07.jpg" class="img-fluid border border-1 " alt=""> </div>
                                <div class="col d-flex align-items-center justify-content-center "> <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/logo-08.jpg" class="img-fluid border border-1 " alt=""> </div>
                                <div class="col d-flex align-items-center justify-content-center "> <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/logo-09.jpg" class="img-fluid border border-1 " alt=""> </div>
                                <div class="col d-flex align-items-center justify-content-center "> <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/logo-10.jpg" class="img-fluid border border-1 " alt=""> </div>
                                <div class="col d-flex align-items-center justify-content-center "> <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/logo-11.jpg" class="img-fluid border border-1 " alt=""> </div>
                                <div class="col d-flex align-items-center justify-content-center "> <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/logo-12.jpg" class="img-fluid border border-1 " alt=""> </div>

                            </div>
                        </div>
                     </div>

                </div>

            </div>

            <div style="background-color:#f84121;" >
                 <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/decoWave_MB.png" class="img-fluid  d-lg-none" alt="wave-MB">

                 <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/LoveDonation/decoWave_PC.png" class="img-fluid d-none d-lg-block" alt="wave-PC">

           </div>

            <!-- 活動詳情文字 -->
            <div class="bg-red-end position-relative">

                <div class="container" ref="detail" id="detail" >
                    <div class="row">
                        <div class="text-center mb-5">
                            <p class="h4 detail-text"> 活 動 詳 情 </p>
                        </div>
                        <div class="col-12 col-lg-11 text-light " >
                             <div class=" mb-1 fs-5">【yesgogogo愛心捐】</div>

                            <div class="ms-2 mb-1">活動期間: 2023/9/1-2023/12/31 (自2023年9月起，每月7天愛心週) </div>
                            <ol>
                                <li class="mb-1">凡於12/1-12/7購買愛心週活動頁商品，邀您一同參與愛心捐，本活動最高捐結帳金額20%贈與非營利組織。 </li>

                                <li class="mb-1">活動期間每筆訂單將獲得結帳總金額10%購物金的消費回饋。會員可選擇該筆訂單的消費回饋10%購物金，(1) 10%購物金全部保留在自己帳戶中，或(2) 5%轉作「愛心捐」+ 保留5%購物金，或(3) 10%轉作「愛心捐」。</li>

                                <li class="mb-1">「愛心捐」：消費者於訂單結帳當下可選擇將購物金轉作「愛心捐」捐予指定之非營利組織，或保留購物金在自己的帳戶中。如購物金轉作「愛心捐」，yesgogogo將捐出等值現金予非營利組織。
                                ．愛心捐計算舉例：A會員訂單金額$5,000，整筆訂單未包含指定愛心品，購物金折抵$200，實際支付結帳金額$4,800，獲得10%消費回饋($480購物金)。結帳時如選擇購物金10%轉作「愛心捐 」，共捐出$480愛心捐+獲得$0購物金。</li>

                                <li class="mb-1">凡購買指定愛心品，平台加碼捐愛心品結帳總金額10%給非營利組織。如購買愛心品，平台加碼捐10%且您選擇消費回饋10%購物金也全部轉作「愛心捐」，將捐出最高20%愛心捐。
                                ．愛心捐計算舉例：A會員訂單金額$5,000，整筆訂單皆為愛心品，購物金折抵$750，實際支付結帳金額$4,250，如獲得10%消費回饋($425購物金)。當結帳時選擇購物金的5%轉作「愛心捐」+保留5%購物金，將捐出5%「愛心捐」($212愛心捐)+保留($213購物金)+愛心品平台加碼捐10%「愛心捐」($425愛心捐)，共捐出$637愛心捐+獲得$213購物金。</li>

                                <li class="mb-1">為配合非營利組織標準作業流程，本公司將每月愛心捐總額，以單筆匯款方式附上消費者愛心捐明細，代表全部參與愛心捐的每一位消費者捐贈非營利組織。</li>

                                <li class="mb-1">因應營所稅之規範，本公司需取得對應匯出愛心捐金額之收據，方能符合財務作業需求。同時，非營利組織之標準作業流程不可重複開立收據，因此無法提供消費者捐款證明，感謝您的體諒。</li>

                                <li class="mb-1">「愛心捐」以實際支付結帳金額計算，實際支付結帳金額為該筆訂單結帳總金額扣除折價券、購物金、滿額折扣等優惠折抵後的「實付金額」。</li>

                                <li class="mb-1">須完成訂單始符合認列資格，若因訂單取消、退貨、非商品瑕疵之換貨，則該筆訂單不得要求列入計算。</li>

                                <li class="mb-1">更多「愛心捐 」相關資訊請前往 <a class="text-light border-bottom " href="/questions" target="_blank" >  常見問題</a> 。</li>
                            </ol>

                             <div class=" mb-1 fs-5">【聯邦卡友獨享優惠】</div>

                                <ol>

                                  <li class="mb-1">12/1-12/7 刷聯邦卡購買任一件愛心品送7-11超商CITY CAFE一杯。</li>

                                    <li class="mb-1">本活動限定使用聯邦信用卡消費付款，排除Visa金融卡、LINE pay、ATM轉帳之交易。 </li>
                                    <li class="mb-1">贈品回饋將於 12/31 前發送CITY CAFE的兌換簡訊至會員手機內。可憑兌換簡訊於全台7-11超商兌換中杯美式咖啡或四季春青茶或經典紅茶，冰/熱不限、即換即用，全台7-11超商通用。 </li>
                                    <li class="mb-1">活動期間每會員限回饋一次。 </li>
                                    <li class="mb-1">參加上述活動者須為完成訂單始符合認列資格，若因訂單取消、退貨、非商品瑕疵之換貨，則該筆訂單不得要求入列計算。 </li>

                                </ol>
                             <div class=" mb-1 fs-5">【點擊捐贈與乳癌防治基金會】</div>
                             <ol>
                                <li class="mb-1">2023/12/1-12/7 於google聯播網點擊進入yesgogogo愛心週活動頁，瀏覽愛心週活動，每點擊1次yesgogogo捐1元，本月點擊捐贈與乳癌防治基金會。點擊捐贈與金額最高上限$10,000。</li>
                                <li class="mb-1">點擊捐以點擊進站的有效流量計算點擊數。(排除無效流量，例如:自動點擊工具、對用戶毫無意義的連續二次點擊等)。</li>
                             </ol>

                              <div class=" mb-1 h4 mt-2">注意事項</div>
                             <ol>
                                <li class="mb-1">活動事項載明於活動網頁中，參加本活動者，視為同意接受本活動注意事項之規範，參加人不符合或違反本活動規定事項者，本公司保有取消其參加資格之權利，並對於任何破壞本活動之行為保留相關權利。</li>
                                <li class="mb-1">本公司保留隨時變更、修改、暫停或終止及解釋本活動相關事項及約定條款之權利，若有其他未盡事宜，悉依本公司相關規定或決定辦理。</li>
                                <li class="mb-1">本活動若有異動，修改後的活動內容及約定條款將公佈在yesgogogo購物網官方網站上，若您於任何修改或變更後繼續使用本服務時，視為您已閱讀、瞭解並同意接受該等修改或變更。</li>
                             </ol>

                        </div>

                    </div>

                </div>

            </div>

    </div>
 </div>
</template>

<script >

import moment from 'moment'
import DonationComingsoon from '@/views/activity/LoveDonationComingsoon.vue'

export default {

  components: {
    DonationComingsoon
  },

  data () {
    return {

      openDate: [],
      donationOpen: false,

      luckyProductList: [],

      allProductList: [],
      productList01: [],
      productList02: [],
      productList03: [],
      productList04: [],
      productList05: [],
      productList06: [],
      productList07: [],
      productList08: [],

      movementProductList: []

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

  methods: {
    // * 取得活動時間起訖
    getDate () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=donation_date`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.openDate = [res.data.info[0].title, res.data.info[0].description]
            this.showEvent()
          }
        })
    },

    showEvent () {
      const now = moment().format('YYYY/MM/DD HH:mm:ss')

      this.idx = this.openDate.findIndex((item) => {
        return moment(now, 'YYYY/MM/DD HH:mm:ss').isBefore(item)
      })
      this.deadline = this.openDate[this.idx]
      if ((moment(now, 'YYYY/MM/DD HH:mm:ss').isBefore(this.deadline) && this.idx % 2 !== 0 && this.idx !== -1) || (Object.keys(this.$route.query).length !== 0 && this.$route.query.isOpen === 'false')) {
        this.donationOpen = true
        this.getAllProductList()
        this.getLuckyAreaData()
        this.getMovementData()
      }
    },

    getAllProductList () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=loveDonation_B`

      this.axios.get(url).then((res) => {
        if (res.data.rtnCode === 0) {
          this.allProductList = res.data.info

          this.allProductList.forEach(item => {
            if (item.code === 'loveDonation_B_1') {
              this.productList01 = item.products
            } else if (item.code === 'loveDonation_B_2') {
              this.productList02 = item.products
            } else if (item.code === 'loveDonation_B_3') {
              this.productList03 = item.products
            } else if (item.code === 'loveDonation_B_4') {
              this.productList04 = item.products
            } else if (item.code === 'loveDonation_B_5') {
              this.productList05 = item.products
            } else if (item.code === 'loveDonation_B_6') {
              this.productList06 = item.products
            } else if (item.code === 'loveDonation_B_7') {
              this.productList07 = item.products
            } else if (item.code === 'loveDonation_B_8') {
              this.productList08 = item.products
            }
          })
        }
      })
    },
    getLuckyAreaData () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=loveDonation_A`
      this.axios.get(url).then((res) => {
        if (res.data.rtnCode === 0) {
          this.luckyProductList = res.data.info
        }
      })
    },
    getMovementData () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=loveDonation_C`
      this.axios.get(url).then((res) => {
        if (res.data.rtnCode === 0) {
          this.movementProductList = res.data.info
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
    }
  },

  mounted () {
    this.getDate()

    // 網址若包含?isOpen=false可看頁面
    if (Object.keys(this.$route.query).length !== 0 && this.$route.query.isOpen === 'false') {
      this.donationOpen = true
      this.getAllProductList()
      this.getLuckyAreaData()
      this.getMovementData()
    }

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
  updated () {}

}

</script>

<style lang="scss" scoped>

@import '@/assets/scss/activity/loveDonation/_site.scss';
@import '@/assets/scss/activity/_hover.min.scss';

</style>
