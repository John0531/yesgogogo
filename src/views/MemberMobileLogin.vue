<template>
  <div>
    <Header></Header>
    <section class="mt-2 mt-md-0 container">
      <h1 class="fs-5 fw-bold mb-3">會員基本資料</h1>
      <div class="d-flex d-md-none justify-content-end ">
        <a class="btn" @click.prevent="backEvent()">
          <figure >
            <img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/cardPromotion/Go_Back.png"
            alt="返回上一頁按鈕">
          </figure>
        </a>
      </div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link btn"
            id="profile-tab"
            type="button"
            @click.prevent="
              theme = 'login';
              getRandomNum();
            "
            aria-controls="profile"
            aria-selected="true"
            :class="{ active: theme === 'login' }"
          >
            會員登入
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link btn"
            id="home-tab"
            type="button"
            @click.prevent="
              theme = 'register';
              getRandomNum();
            "
            aria-controls="home"
            aria-selected="false"
            :class="{ active: theme === 'register' }"
          >
          會員註冊
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link btn"
            id="card-tab"
            type="button"
            @click.prevent="
              theme = 'registerCreditCard';
              getRandomNum();
            "
            aria-controls="home"
            aria-selected="false"
            :class="{ active: theme === 'registerCreditCard' }"
          >
            聯邦卡友註冊
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div id="home" v-if="theme === 'register'" aria-labelledby="home-tab">
          <div class="row justify-content-center my-5">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <div class="row tab-pane">
                <div class="col-md-6" id="pills-contact">
                  <Form
                    class="form_registration"
                    method="get"
                    v-slot="{ errors }"
                    @submit="registerSubmit"
                  >
                    <div class="title">
                      <span class="registraion">會員註冊</span>
                    </div>
                    <div class="form_detail">
                      <div class="row name d-flex align-items-end">
                        <div class="col-md-12 mb-3">
                          <label for="inputEmail4" class="form-label">姓名</label>
                          <span class="text-primary">*</span>
                          <Field
                            name="姓名"
                            placeholder="姓名"
                            :rules="nameLimit"
                            class="form-control"
                            :class="{ 'is-invalid': errors['姓名'] }"
                            v-model="form.FullName"
                            autocomplete="off"
                          ></Field>
                          <ErrorMessage
                            name="姓名"
                            class="invalid-feedback"
                          ></ErrorMessage>
                        </div>
                      </div>
                      <div class="row email">
                        <div class="col-md-12 mb-3">
                          <label for="inputAddress" class="form-label">電子郵件</label>
                          <span class="text-primary">*</span>
                          <Field
                            name="信箱"
                            placeholder="請輸入email"
                            :rules="checkEmail"
                            type="text"
                            class="form-control"
                            id="memberEmail"
                            autocomplete="off"
                            :class="{ 'is-invalid': errors['信箱'] }"
                            v-model="form.Email"
                          ></Field>
                          <ErrorMessage
                            name="信箱"
                            class="invalid-feedback"
                          ></ErrorMessage>
                          <p class="text-primary">{{ checkEmailMsg }}</p>
                        </div>
                      </div>
                      <div class="row phone">
                        <div class="col-md-12 mb-2">
                          <label class="form-label">手機</label>
                          <span class="text-primary">*</span>
                          <Field
                            name="手機"
                            type="tel"
                            class="form-control"
                            placeholder="請輸入手機號碼"
                            autoCompleteType="disabled"
                            :rules="isPhone"
                            :class="{ 'is-invalid': errors['手機'] }"
                            v-model="form.PhoneNum"
                            autocomplete="off"
                            maxlength="10"
                          ></Field>
                          <ErrorMessage
                            name="手機"
                            class="invalid-feedback"
                          ></ErrorMessage>
                          <span id="uidt" class="text-primary"></span>
                        </div>
                      </div>
                      <div class="row verification">
                        <div class="col-md-12 mb-2">
                          <Field
                            name="手機驗證碼"
                            type="number"
                            rules="required"
                            class="form-control"
                            placeholder="請輸入驗證碼(每日限定傳送3次)"
                            autoCompleteType="disabled"
                            autocomplete="off"
                            :class="{ 'is-invalid': errors['手機驗證碼'] }"
                            v-model="form.OtpCode"
                          ></Field>
                          <ErrorMessage
                            name="手機驗證碼"
                            class="invalid-feedback"
                          ></ErrorMessage>
                        </div>
                        <div class="col-md-6 mb-3">
                          <button
                            type="submit"
                            class="btn btn-primary"
                            @click.prevent="getMobileMsgCode"
                            :disabled="!show"
                          >
                            <span v-show="show">獲取驗證碼</span>
                            <span v-show="!show" class="count"
                              >{{ count }} 秒後 重新發送</span
                            >
                          </button>
                        </div>
                      </div>
                      <div class="row password">
                        <div class="col-md-12 mb-3">
                          <label class="form-label" for="newPassword">密碼</label>
                          <span class="text-primary">*</span>
                          <div id="f">
                            <Field
                              name="密碼"
                              type="password"
                              :rules="checkPwdRule"
                              class="form-control form_password"
                              placeholder="至少6碼且英數字混合"
                              :class="{ 'is-invalid': errors['密碼'] }"
                              autocomplete="off"
                              v-model="form.SecretCode"
                              id="newPassword"
                            ></Field>
                            <ErrorMessage
                              name="密碼"
                              class="invalid-feedback"
                            ></ErrorMessage>
                            <a
                              href="#"
                              @click.prevent="
                                isOldShow = !isOldShow;
                                pwdCheck(isOldShow, $event);
                              "
                              class="passwordImage position-absolute d-block"
                            >
                              <img
                                src="../assets/img/yesgo_icon26.svg"
                                v-if="isOldShow"
                              />
                              <img v-else src="../assets/img/yesgo_icon25.svg" />
                            </a>
                          </div>
                          <p class="text-primary">{{ password }}</p>
                        </div>
                      </div>
                      <div class="row doublecheck">
                        <div class="col-md-12 mb-3">
                          <label for="confirmPassword" class="form-label">確認密碼</label>
                          <span class="text-primary">*</span>
                          <div id="f">
                            <Field
                              name="確認密碼"
                              type="password"
                              :rules="confirmPwd"
                              class="form-control form_confirm_password"
                              placeholder="至少6碼且英數字混合"
                              :class="{ 'is-invalid': errors['確認密碼'] }"
                              autocomplete="off"
                              id="confirmPassword"
                            ></Field>
                            <ErrorMessage
                              name="確認密碼"
                              class="invalid-feedback"
                            ></ErrorMessage>
                            <a
                              href="#"
                              @click.prevent="
                                isConfirmShow = !isConfirmShow;
                                pwdCheck(isConfirmShow, $event);
                              "
                              class="passwordImage position-absolute d-block"
                            >
                              <img
                                v-if="isConfirmShow"
                                src="../assets/img/yesgo_icon26.svg"
                              />
                              <img v-else src="../assets/img/yesgo_icon25.svg" />
                            </a>
                          </div>
                          <p class="text-primary">{{ confirmNotSame }}</p>
                        </div>
                      </div>
                      <div class="row term">
                        <div class="col-md-12">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineFormCheck"
                              v-model="terms"
                            />
                            <label class="form-check-label" for="inlineFormCheck">
                              我已詳閱並同意
                              <router-link to="/rights" class="text-primary"
                                >約定條款</router-link
                              >
                              以確保權益
                            </label>
                          </div>
                          <div class="confirm">
                            <button type="submit" class="btn btn-primary w-100 my-2" @click="checkConfirm">
                              確認
                            </button>
                            <div class="mb-3">
                              <!-- 先不露出顯示 -->
                              <span class="text-primary" v-show="showConfirm">提醒您，請確認資料填寫正確。</span>
                              <span class="text-primary" v-show="!showConfirm"> </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
                <div class="col-md-6">
                  <div class="discount">
                    <span>會員優惠</span>
                  </div>
                  <div class="member_discount my-3">
                    <a
                      v-if="memberCard[0]"
                      :href="memberCard[0].targetUrl">
                      <img
                        :src="memberCard[0].image"
                        class="w-100 mb-2"
                        alt="現折$500"
                      />
                    </a>
                    <a
                    v-if="memberCard[2]"
                    :href="memberCard[2].targetUrl"
                    >
                      <img
                      :src="memberCard[2].image"
                      class="w-100 mb-2"
                      alt="現折$500"
                      >
                    </a>
                    <div class="ratio ratio-2x1">
                      <a
                      v-if="memberCard[1]"
                      :href="memberCard[1].targetUrl"
                      >
                        <img
                          :src="memberCard[1].image"
                          class="w-100"
                          alt="回饋10%"
                        />
                      </a>
                      <a
                      v-if="memberCard[3]"
                      :href="memberCard[3].targetUrl"
                      >
                        <img
                          :src="memberCard[3].image"
                          class="w-100"
                          alt="回饋10%"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="badge bg-secondary mt-0">貼心提醒</div>
                  <div class="remind fs-7 mt-2">
                    1.請定期更新密碼，以保障個人資料安全。
                    <br />
                    2.本購物網不會主動要求您透露ATM存款餘額，或是要求您提供個人帳號密碼資料，若您接到不名可疑電話，請拒絕回應，
                    並盡速與本公司客服中心連結，以確保您的權益。
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-1"></div>
          </div>
        </div>
        <div id="profile" v-if="theme === 'login'" aria-labelledby="profile-tab">
          <div class="modal-body px-3 px-lg-6">
            <div class="container-fluid">
              <div class="row py-4 justify-content-center">
                <div class="col-lg-8">
                  <Form
                    class="form_registration"
                    method="POST"
                    v-slot="{ errors }"
                    aria-labelledby="pills-contact-tab"
                    @submit="memberLogin"
                  >
                    <div class="form_detail">
                      <div class="text-center">
                        <img
                          src="../assets/img/yesgo_icon02.svg"
                          alt=""
                          id="logInImage"
                          class="d-block mx-auto"
                        />
                        <span class="registraion">會員登入</span>
                      </div>
                      <div class="row phone">
                        <div class="col-md-12">
                          <label class="form-label">帳號</label>
                          <Field
                            name="新帳號"
                            type="text"
                            class="form-control"
                            placeholder="請輸入手機號碼/身分證字號/Email"
                            autoCompleteType="disabled"
                            :rules="isaccount"
                            :class="{ 'is-invalid': errors['新帳號'] }"
                            v-model="login.Account"
                            autocomplete="off"
                          />
                          <ErrorMessage
                            name="新帳號"
                            class="invalid-feedback"
                          ></ErrorMessage>
                        </div>
                      </div>
                      <div class="row password">
                        <div class="col-md-12">
                          <label class="form-label">密碼</label>
                          <div id="f">
                            <Field
                              name="登入密碼"
                              type="password"
                              :rules="checkPwdRule"
                              class="form-control form_password"
                              placeholder="請輸入密碼"
                              :class="{
                                'is-invalid': errors['登入密碼'],
                              }"
                              v-model="login.SecretCode"
                            />
                            <ErrorMessage
                              name="登入密碼"
                              class="invalid-feedback"
                            ></ErrorMessage>
                            <a
                              href="#"
                              @click.prevent="
                                isShow = !isShow;
                                pwdCheck(isShow, $event);
                              "
                              class="passwordImage position-absolute d-block"
                            >
                              <img v-if="isShow" src="../assets/img/yesgo_icon26.svg" />
                              <img v-else src="../assets/img/yesgo_icon25.svg" />
                            </a>
                          </div>
                          <div class="d-flex justify-content-between">
                            <div class="form-check" v-if="showRememberMe">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="rememberMobileNewAccount"
                                v-model="login.RememberMe"
                              />
                              <label class="form-check-label" for="rememberMobileNewAccount">
                                記住帳號
                              </label>
                            </div>
                            <a
                              href="#"
                              @click.prevent="toForgetPassword"
                              class="forgot-password"
                            >
                              忘記密碼
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="row doublecheck">
                        <div class="col-md-12">
                          <label for="inputState" class="form-label">驗證碼</label>
                          <div class="input-group">
                            <Field
                              name="驗證碼"
                              :class="{ 'is-invalid': errors['驗證碼'] }"
                              type="text"
                              class="form-control z-index-10"
                              v-model="login.Captcha"
                              maxlength="4"
                              tabindex="3"
                              autocomplete="off"
                              rules="required"
                            />
                            <button
                              class="verifyBtn btn border"
                              type="button"
                              @click.prevent="getRandomNum"
                            >
                              <img
                                src=""
                                id="imgInitMNewValidCode"
                                style="width: 80px; height: 30px; margin-right: 8px"
                              />
                              <img src="../assets/img/yesgo_icon27.svg" />
                            </button>
                            <ErrorMessage
                              name="驗證碼"
                              class="invalid-feedback"
                            ></ErrorMessage>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-end text-muted fs-7 mb-2">
                        驗證碼不須區分大小寫
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <button
                            type="submit"
                            class="btn btn-primary col-md-12 text-white w-100"
                          >
                            <!-- click.prevent="login", 寫入Form下-->
                            登入
                          </button>
                        </div>
                      </div>
                      <div class="member_discount mt-4 ">
                        <a href="https://www.yesgogogo.com/activity/2023_memberbonus/tenpercent">
                          <img
                            :src="`${eventbonus.link}?${getRandomString(3)}`"
                            alt="10%回饋"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="card" v-if="theme === 'registerCreditCard'" aria-labelledby="card-tab">
          <div class="container">
            <div class="row justify-content-center my-5">
              <div class="col-md-1"></div>
              <div class="col-md-10">
                <div class="row">
                  <div class="col-md-6">
                    <Form
                      class="form_registration pe-lg-4 pe-md-3"
                      v-slot="{ errors }"
                      @submit="registerSubmitCreditCard"
                    >
                      <div class="title">
                        <span class="registraion text-primary fs-5"
                          >聯邦卡友專屬會員註冊</span
                        >
                      </div>
                      <div class="form_detail">
                        <div class="row phone">
                          <div class="col-md-12">
                            <label class="form-label">會員帳號(手機號碼)</label>
                            <span class="text-primary">*</span>
                            <Field
                              name="手機"
                              type="tel"
                              class="form-control"
                              placeholder="請輸入手機號碼"
                              autoCompleteType="disabled"
                              :rules="isPhone"
                              :class="{ 'is-invalid': errors['手機'] }"
                              v-model="card.PhoneNum"
                              autocomplete="off"
                              maxlength="10"
                            ></Field>
                            <ErrorMessage
                              name="手機"
                              class="invalid-feedback"
                            ></ErrorMessage>
                            <span id="uidt" class="text-primary"></span>
                          </div>
                        </div>
                        <div class="row verification">
                          <div class="col-md-7 mt-1">
                            <Field
                              name="手機驗證碼"
                              type="number"
                              rules="required"
                              class="form-control"
                              placeholder="請輸入驗證碼(每日限定傳送3次)"
                              autoCompleteType="disabled"
                              autocomplete="off"
                              :class="{ 'is-invalid': errors['手機驗證碼'] }"
                              v-model="card.OtpCode"
                            ></Field>
                            <ErrorMessage
                              name="手機驗證碼"
                              class="invalid-feedback"
                            ></ErrorMessage>
                          </div>
                          <div class="col-md-5 mb-3 mt-1">
                            <button
                              type="submit"
                              class="btn btn-primary"
                              @click.prevent="getMsgCode"
                              :disabled="!show"
                            >
                              <span v-show="show">獲取驗證碼</span>
                              <span v-show="!show" class="count"
                                >{{ count }} 秒後 重新發送</span
                              >
                            </button>
                          </div>
                        </div>
                        <div class="row name d-flex align-items-end">
                          <div class="col-md-12 mb-3">
                            <label for="inputEmail4" class="form-label"
                              >姓名</label
                            >
                            <span class="text-primary">*</span>
                            <Field
                              name="姓名"
                              placeholder="姓名"
                              :rules="nameLimit"
                              class="form-control"
                              :class="{ 'is-invalid': errors['姓名'] }"
                              v-model="card.Name"
                              autocomplete="off"
                              type="text"
                            ></Field>
                            <ErrorMessage
                              name="姓名"
                              class="invalid-feedback"
                            ></ErrorMessage>
                          </div>
                        </div>
                        <div class="row identityCard d-flex align-items-end">
                          <div class="col-md-12 mb-3">
                            <label for="inputEmail4" class="form-label"
                              >身分證字號</label
                            >
                            <span class="text-primary">*</span>
                            <Field
                              name="身分證字號"
                              placeholder="身分證字號"
                              :rules="idCard"
                              class="form-control"
                              :class="{ 'is-invalid': errors['身分證字號'] }"
                              v-model="card.IdNo"
                              autocomplete="off"
                              type="text"
                              style="text-transform: uppercase;"
                              @change="uppercase"
                            ></Field>
                            <ErrorMessage
                              name="身分證字號"
                              class="invalid-feedback"
                            ></ErrorMessage>
                          </div>
                        </div>
                        <div class="row email">
                          <div class="col-md-12 mb-3">
                            <label for="inputAddress" class="form-label"
                              >電子郵件</label
                            >
                            <span class="text-primary">*</span>
                            <Field
                              name="信箱"
                              placeholder="請輸入email"
                              :rules="checkEmail"
                              type="text"
                              class="form-control py-2"
                              id="memberEmail"
                              autocomplete="off"
                              :class="{ 'is-invalid': errors['信箱'] }"
                              v-model="card.Email"
                            ></Field>
                            <ErrorMessage
                              name="信箱"
                              class="invalid-feedback"
                            ></ErrorMessage>
                            <p class="text-primary">{{ checkEmailMsg }}</p>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="memberBirth" class="form-label">生日</label>
                          <span class="text-primary">*</span>
                          <div class="row g-2">
                            <div class="col">
                              <select
                                id="birthYear"
                                class="form-select"
                                v-model="memberBirth.year"
                                @change="getDay"
                              >
                                <option value="" selected >西元年</option>
                                <option
                                  :value="year"
                                  v-for="year in dateList.yearList"
                                  :key="year"
                                >
                                  {{ year }}
                                </option>
                              </select>
                            </div>
                            <div class="col">
                              <select
                                id="birthMonth"
                                class="form-select"
                                v-model="memberBirth.month"
                                @change="getDay"
                              >
                                <option value="" selected>月份</option>
                                <option
                                  :value="month"
                                  v-for="month in dateList.monthList"
                                  :key="month"
                                >
                                  {{ month }}
                                </option>
                              </select>
                            </div>
                            <div class="col">
                              <select
                                id="birthDate"
                                class="form-select"
                                v-model="memberBirth.day"
                              >
                                <option value="" selected>日</option>
                                <option
                                  :value="day"
                                  v-for="day in dateList.dayList"
                                  :key="day"
                                >
                                  {{ day }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row password">
                          <div class="col-md-12 mb-3">
                            <label class="form-label" for="newPassword">密碼</label>
                            <span class="text-primary">*</span>
                            <div id="f">
                              <Field
                                name="密碼"
                                type="password"
                                :rules="checkPwdRule"
                                class="form-control form_password"
                                placeholder="至少6碼且英數字混合"
                                :class="{ 'is-invalid': errors['密碼'] }"
                                autocomplete="off"
                                v-model="card.SecretCode "
                                id="newPassword"
                              ></Field>
                              <ErrorMessage
                                name="密碼"
                                class="invalid-feedback"
                              ></ErrorMessage>
                              <a
                                href="#"
                                @click.prevent="
                                  isOldShow = !isOldShow;
                                  pwdCheck(isOldShow, $event)
                                "
                                class="passwordImage position-absolute d-block"
                              >
                                <img
                                  src="../assets/img/yesgo_icon26.svg"
                                  v-if="isOldShow"
                                />
                                <img v-else src="../assets/img/yesgo_icon25.svg" />
                              </a>
                            </div>
                            <p class="text-primary">{{ password }}</p>
                          </div>
                        </div>
                        <div class="row doublecheck">
                          <div class="col-md-12 mb-3">
                            <label for="confirmPassword" class="form-label"
                              >確認密碼</label
                            >
                            <span class="text-primary">*</span>
                            <div id="f">
                              <Field
                                name="確認密碼"
                                type="password"
                                :rules="confirmPwdCard"
                                class="form-control form_confirm_password"
                                placeholder="至少6碼且英數字混合"
                                :class="{ 'is-invalid': errors['確認密碼'] }"
                                autocomplete="off"
                                id="confirmPassword"
                              ></Field>
                              <ErrorMessage
                                name="確認密碼"
                                class="invalid-feedback"
                              ></ErrorMessage>
                              <a
                                href="#"
                                @click.prevent="
                                  isConfirmShow = !isConfirmShow;
                                  pwdCheck(isConfirmShow, $event)
                                "
                                class="passwordImage position-absolute d-block"
                              >
                                <img
                                  v-if="isConfirmShow"
                                  src="../assets/img/yesgo_icon26.svg"
                                />
                                <img v-else src="../assets/img/yesgo_icon25.svg" />
                              </a>
                            </div>
                            <p class="text-primary">{{ confirmNotSame }}</p>
                          </div>
                        </div>
                        <div class="row term">
                          <div class="col-md-12 mt-2">
                            <div class="form-check py-1">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="inlineFormCheck"
                                v-model="terms"
                              />
                              <label class="form-check-label" for="inlineFormCheck">
                                我已詳閱並同意
                                <router-link to="/rights" class="text-primary"
                                  >約定條款</router-link
                                >
                                以確保權益
                              </label>
                            </div>
                            <div class="confirm">
                              <button type="submit" class="btn btn-primary w-100 my-2" @click="checkConfirm">
                                確認
                              </button>
                              <div class="mb-3">
                                <!-- 先不露出顯示 -->
                                <span class="text-primary" v-show="showConfirm">提醒您，請確認資料填寫正確。</span>
                                <span class="text-primary" v-show="!showConfirm"> </span>
                              </div>
                            </div>
                            <!-- <label class="mt-3 fs-5">
                              卡友會員帳號
                              <router-link
                                to="/register"
                                class="text-primary border fs-5 fs-xl-5 py-0 px-2"
                              >
                                請點此登入
                              </router-link>
                            </label> -->
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                  <div class="col-md-6">
                    <div class="ps-lg-4 ps-md-3">
                      <div class="discount text-primary fs-5">
                        <span>聯邦卡友專屬優惠</span>
                      </div>
                      <div class="member_discount">
                        <template v-if="cardGift[0]">
                          <a :href="cardGift[0].targetUrl">
                            <img :src="cardGift[0].image" class="img-fluid"/>
                          </a>
                        </template>
                        <div class="badge bg-secondary">貼心提醒</div>
                        <div class="remind pt-3">
                          1.請定期更新密碼，以保障個人資料安全。
                          <br />
                          2.本購物網不會主動要求您透露ATM存款餘額，或是要求您提供個人帳號密碼資料，若您接到不名可疑電話，請拒絕回應，
                          並盡速與本公司客服中心連結，以確保您的權益。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import getGiftEvent from '@/assets/js/giftevent.js'
import checkToken from '@/assets/js/checkToken.js'
import { getRandomString } from '@/assets/js/randomString.js'
import moment from 'moment'
const Header = defineAsyncComponent(() => import(/* webpackChunkName: "header" */'@/components/Header.vue'))
const Footer = defineAsyncComponent(() => import(/* webpackChunkName: "footer" */'@/components/Footer.vue'))

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      theme: 'login',
      memberBirth: {
        year: 2021,
        month: 10,
        date: 18
      },
      memberGender: 1,
      isShow: true,
      isOldShow: true,
      isConfirmShow: true,
      checkEmailMsg: '',
      confirmNotSame: '',
      confirmPassword: '',
      password: '',
      timer: 0,
      show: true,
      count: 0,
      terms: false,
      showConfirm: false,
      randomNum: '',
      //* 註冊api request
      form: {
        FullName: '',
        Email: '',
        PhoneNum: '',
        SecretCode: '',
        TransactionId: '',
        OtpCode: '',
        RememberMe: false,
        IsSubscribe: true
      },
      //* 卡友註冊api request
      card: {
        FullName: '',
        Email: '',
        PhoneNum: '',
        SecretCode: '',
        TransactionId: '',
        OtpCode: '',
        RememberMe: false,
        IsSubscribe: true
      },
      eventbonus: '',
      // *新舊會員
      login: {
        Account: '',
        SecretCode: '',
        Captcha: '',
        ValidTransactionId: '',
        RememberMe: false
      },
      //* 卡友註冊
      dateList: {
        // ?日期選單
        yearList: [],
        monthList: [],
        dayList: []
      },
      cardGift: '',
      showRememberMe: true,
      msg: {
        phoneNumber: '',
        otpType: '1'
      },
      mobileMsg: {
        mobileMsgCode: []
      },
      register: {
        registerSuccess: []
      },
      isClickCart: false,
      clickValidCode: 0,
      transactionInfo: {},
      myModal: '',
      phoneNumOld: '',
      memberCard: ''
    }
  },
  methods: {
    getRandomString, //* 產生亂數
    //* 姓名
    nameLimit (value) {
      // ? 驗證姓名長度不超過 5
      if (value) {
        const nameString = /^.{1,5}$/
        return nameString.test(value) ? true : '長度請勿超過 5 個字'
      } else {
        return '請填入姓名'
      }
    },
    //* 密碼切換
    pwdCheck (status, $event) {
      if (status) {
        $event.currentTarget.previousSibling.previousSibling.setAttribute(
          'type',
          'password'
        )
      } else {
        $event.currentTarget.previousSibling.previousSibling.setAttribute('type', 'text')
      }
    },
    checkEmail (value) {
      const emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      return emailRule.test(value) ? true : '請填入 Email 格式'
    },
    //* 登入密碼
    checkPwdRule (password) {
      const passw = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/
      return passw.test(password) ? true : '至少6碼且英數字混合'
    },
    confirmPwd (confirmpassword) {
      if (confirmpassword !== this.form.SecretCode) {
        return '與密碼不一致'
      } else {
        if (confirmpassword === '') {
          return '確認密碼 為必填'
        } else {
          return true
        }
      }
    },
    confirmPwdCard (confirmpassword) {
      if (confirmpassword !== this.card.SecretCode) {
        return '與密碼不一致'
      } else {
        if (confirmpassword === '') {
          return '確認密碼 為必填'
        } else {
          return true
        }
      }
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    getDay () {
      // ? 產生生日"日"選單
      this.dateList.dayList = []
      // ?清空西元年，月日一併清空
      if (!this.memberBirth.year) {
        this.memberBirth.month = ''
        this.memberBirth.day = ''
        return
      }
      // ?清空月，日一併清空
      if (!this.memberBirth.month) {
        this.memberBirth.day = ''
        return
      }
      // ? 產生生日"日"選單
      const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (this.memberBirth.year % 4 === 0) {
        days[1] = 29
      }
      for (let i = 1; i < days[parseInt(this.memberBirth.month) - 1] + 1; i++) {
        if (i < 10) {
          this.dateList.dayList.push('0' + i)
        } else {
          this.dateList.dayList.push(i)
        }
      }
      if (this.memberBirth === '') {
        this.$swal.fire({
          title: '生日為必填',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
      }
    },
    getMemberInfo () {
      // ? 取得會員註冊資料
      this.getYearMonth()
    },
    getYearMonth () {
      // ? 產生生日"年"、"月"選單
      const year = new Date()
      for (let i = 1930; i < year.getFullYear() + 1; i++) {
        this.dateList.yearList.push(i)
      }
      for (let i = 1; i < 13; i++) {
        if (i < 10) {
          this.dateList.monthList.push('0' + i)
        } else {
          this.dateList.monthList.push(i)
        }
      }
    },
    //* 會員登入
    memberLogin () {
      window.fbq('track', 'Lead')
      const id = /^[a-z](1|2)\d{8}$/i
      if (id.test(this.login.Account)) {
        this.login.Account = this.login.Account.toUpperCase()
      }
      const url = `${process.env.VUE_APP_API}/api/members/LogIn`
      this.axios.post(url, this.login).then((res) => {
        this.login.Captcha = ''
        this.getRandomNum()
        if (res.data.rtnCode !== 0) {
          if (res.data.rtnCode === 1111) {
            this.enforce.memberId = res.data.info.memberId
            this.enforce.RememberMe = this.login.RememberMe
            this.phoneNumOld.show()
            return
          }
          this.$swal.fire({
            title: `${res.data.rtnMsg}`,
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
        // * 取得購物車商品數量
        this.$store.dispatch('getCartNum')
        this.cookieToken = res.data.info
        this.$store.dispatch('loginSetCookie', res.data.info)
        this.$swal
          .fire({
            title: '歡迎登入',
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          .then((result) => {
            if (result.isConfirmed) {
              if (this.$store.state.BirthdayData.fromBirthday) {
                this.$router.push('/memberboard/membercoupon')
                return
              } else if (localStorage.getItem('fromEvent') === 'event') {
              // ?從活動頁點擊登入，要導回活動頁
                localStorage.removeItem('fromEvent')
                this.$router.go(-1)
              }
              // 若有記錄前一頁的路由，則導到前一頁面，否則導到會員專區
              if (this.$store.state.clickCartPath) {
                this.$router.push(`${this.$store.state.clickCartPath}`)
                if (localStorage.getItem('fromEvent') === 'event') {
                  localStorage.removeItem('fromEvent')
                }
              } else if (this.$store.state.isClickCollection) {
                this.$router.push(`${this.$store.state.clickCollectionPath}`)
              } else if (sessionStorage.getItem('path')) {
                this.eventGift()
              } else {
                if (this.$store.state.isOldLogin) {
                  this.$router.push('/memberboard/membercoupon')
                } else {
                  const appId = checkToken.getAppId()
                  if (appId === 'ipasspay') {
                    this.$router.push('/')
                    return
                  }
                  this.$router.push('/memberboard/memberinfoupdate')
                }
              }
            }
          })
      })
    },
    //* 卡友註冊
    registerSubmitCreditCard () {
      if (this.terms === false) {
        this.getRandomNum()
        this.checkConfirm()
        this.$swal.fire({
          title: '請勾選權益說明書',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
      } if ((this.memberBirth.year || this.memberBirth.month || this.memberBirth.day) === '') {
        this.$swal.fire({
          title: '請填寫完整生日',
          confirmButtonColor: '#F8412E',
          customClass: {
            title: 'text-class'
          }
        })
      } else {
        //* 註冊API
        // 回傳memberToken, timeExpiredSeconds
        this.card.BirthDay = `${this.memberBirth.year}${this.memberBirth.month}${this.memberBirth.day}`
        const url = `${process.env.VUE_APP_API}/api/members/RegisterForUB`
        this.axios.post(url, this.card).then(res => {
          if (res.data.rtnCode !== 0) {
            this.getRandomNum()
            this.$swal.fire({
              title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
              allowOutsideClick: true,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            }).then(result => {
              if (result.isConfirmed) {
                this.count = 0
              }
            })
          } else {
            this.cookieToken = res.data.info
            this.$store.dispatch('loginSetCookie', res.data.info)
            this.$swal.fire({
              title: '註冊成功',
              allowOutsideClick: true,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            }).then(result => {
              if (result.isConfirmed) {
                if (this.$store.state.isClickCart === true) {
                  this.$router.push('/checkoutboard/checkoutcartlist')
                } else {
                  this.$router.push('/')
                }
              }
            })
          }
        })
      }
    },
    // * 亂數
    makeid () {
      let result = ''
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      const charactersLength = characters.length
      for (let i = 0; i < 3; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        )
      }
      return result
    },
    // *關閉modal close按鈕
    closeModal () {
      // * 關閉新會員、舊會員登入視窗
      this.$store.state.loginModal.hide()
      this.phoneNumOld.hide()
      this.$store.commit('refreshClickCart', false)
      // * 關閉後若無 token 且在會員專區，導到首頁
      const token = checkToken.getAccessToken()
      if (this.$route.fullPath.match('/memberboard/')) {
        if (!token) {
          this.$router.push('/')
        }
      }
    },
    //* 檢查是否有cookie
    checkCookie () {
      const AccessToken = checkToken.getAccessToken()
      const RefreshToken = checkToken.getFreshToken()
      if (AccessToken || RefreshToken) {
        return true
      } else {
        return false
      }
    },
    //* 手機驗證碼
    getMobileMsgCode () {
      //* 確認手機是否有填寫
      this.msg.phoneNumber = this.form.PhoneNum
      var reg = /^(09)[0-9]{8}$/
      if (this.msg.phoneNumber === '') {
        this.$swal.fire({
          title: '請輸入手機號碼',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
        //* 確認手機是否有正確的格式
      } else if (!reg.test(this.msg.phoneNumber)) {
        this.$swal.fire({
          title: '手機格式不正確',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
      } else {
        const url = `${process.env.VUE_APP_API}/api/members/CallNewsletter`
        this.axios
          .get(url, {
            // get params用法
            params: this.msg
          })
          .then((res) => {
            if (res.data.rtnCode !== 0) {
              this.$swal.fire({
                title: `${res.data.rtnMsg}`,
                allowOutsideClick: true,
                confirmButtonColor: '#F8412E',
                confirmButtonText: '確認',
                width: 400,
                customClass: {
                  title: 'text-class',
                  confirmButton: 'confirm-btn-class'
                }
              })
            } else {
              //* 有成功打入API才算
              this.form.TransactionId = res.data.info.transactionId
              this.$swal.fire({
                title: 'yesgogogo即食購商城驗證碼發送成功！！',
                allowOutsideClick: true,
                confirmButtonColor: '#F8412E',
                confirmButtonText: '確認',
                width: 400,
                customClass: {
                  title: 'text-class',
                  confirmButton: 'confirm-btn-class'
                }
              })
              //* 驗證碼倒數計時
              this.count = 300
              this.show = false
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= 300) {
                  this.count--
                } else {
                  this.show = true
                  clearInterval(this.timer)
                  this.timer = null
                }
              }, 1000)
            }
          })
      }
    },
    phoneNumberOld () {
      this.phoneNumOld.show()
    },
    //* 取得隨機4位數驗證碼
    getRandomNum () {
      const url = `${process.env.VUE_APP_API}/api/members/ValidateCode`
      this.axios.get(url).then((res) => {
        this.transactionInfo = res.data.info
        // 會員登入
        const transactionId = this.transactionInfo.validTransactionId
        this.login.ValidTransactionId = transactionId
        // 圖形驗證碼的圖
        // 會員登入傳入src
        var pictureContentCode = this.transactionInfo.captcha
        if (this.theme === 'login') {
          document.getElementById('imgInitMNewValidCode').src = pictureContentCode
        }
      })
    },
    checkConfirm () {
      if (this.form.FullName === '' || this.form.Email === '' || this.form.PhoneNum === '' || this.form.OtpCode === '' || this.form.SecretCode === '' || this.form.confirmPassword) {
        this.showConfirm = true
      } else {
        // eslint-disable-next-line no-return-assign
        return this.showConfirm = false
      }
    },
    //* 確認註冊後，會員直接登入
    registerSubmit () {
      if (this.terms === false) {
        this.getRandomNum()
        this.checkConfirm()
        this.$swal.fire({
          title: '請勾選權益說明書',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
      } else {
        //* 註冊API
        //* 回傳memberToken, timeExpiredSeconds
        const url = `${process.env.VUE_APP_API}/api/members/register`
        this.axios.post(url, this.form).then((res) => {
          if (res.data.rtnCode !== 0) {
            this.$swal
              .fire({
                title: `${res.data.rtnMsg}`,
                allowOutsideClick: true,
                confirmButtonColor: '#F8412E',
                confirmButtonText: '確認',
                width: 400,
                customClass: {
                  title: 'text-class',
                  confirmButton: 'confirm-btn-class'
                }
              })
              .then((result) => {
                if (result.isConfirmed) {
                  this.count = 0
                  this.getRandomNum()
                }
              })
          } else {
            this.cookieToken = res.data.info
            this.$store.dispatch('loginSetCookie', res.data.info)
            // * 取得購物車商品數量
            this.$store.dispatch('getCartNum')
            this.$swal
              .fire({
                title: '註冊成功',
                allowOutsideClick: true,
                confirmButtonColor: '#F8412E',
                confirmButtonText: '確認',
                width: 400,
                customClass: {
                  title: 'text-class',
                  confirmButton: 'confirm-btn-class'
                }
              })
              .then((result) => {
                if (result.isConfirmed) {
                  if (this.$store.state.clickCartPath) {
                    this.$router.push(`${this.$store.state.clickCartPath}`)
                    if (localStorage.getItem('fromEvent') === 'event') {
                      localStorage.removeItem('fromEvent')
                    }
                  } else if (this.$store.state.isClickCart === true) {
                    this.$router.push('/checkoutboard/checkoutcartlist')
                  } else if (sessionStorage.getItem('path')) {
                    this.eventGift()
                  } else {
                    this.$router.go(-1)
                  }
                }
              })
          }
        })
      }
    },
    // ? 聯邦卡友專屬優惠圖片
    getDiscount () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=cardMemberGift`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.cardGift = res.data.info
          }
        })
    },
    isaccount (value) {
      //* 手機驗證
      const phoneNumber = /^(09)[0-9]{8}$/
      //* 身分證驗證
      const id = /^[a-z](1|2)\d{8}$/i
      //* Email驗證
      const emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      //* 三個驗證判斷
      if (phoneNumber.test(value)) {
        return true
      } else {
        if (id.test(value)) {
          return true
        } else {
          if (emailRule.test(value)) {
            return true
          }
          return '請輸入正確的帳號'
        }
      }
    },
    toForgetPassword () {
      this.$router.push('/forgetpassword')
    },
    getMenu () {
      //* 商品種類(館別)清單 get
      const url = `${process.env.VUE_APP_API}/api/widgets/category`
      this.$http.get(url).then((res) => {
        if (res.data.rtnCode === 0) {
          this.menuList = res.data.info
        }
      })
    },
    // ? 檢查是否是 webview
    checkFromApp () {
      const appId = checkToken.getAppId()
      if (appId === 'ipasspay') {
        this.showRememberMe = false
        this.form.RememberMe = true
        this.login.RememberMe = true
        this.login.RememberMe = true
      }
    },
    //* 贈點或贈折價券的活動
    eventGift () {
      getGiftEvent().then((data) => {
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
        this.$router.push(sessionStorage.getItem('path'))
        sessionStorage.removeItem('path')
      })
    },
    backEvent () {
      if (sessionStorage.getItem('cardCode')) {
        // ?[卡友LINE事件-首次原路線返回]以('cardCode')做判斷
        sessionStorage.removeItem('cardCode')
        const now = moment().format('YYYY/MM/DD HH:mm:ss')
        setTimeout(() => {
          // ?[卡友LINE事件]回活動頁
          if (moment(now, 'YYYY/MM/DD HH:mm:ss').isAfter('2023-06-30 23:59:59')) {
            this.$router.push('/activity/cardMemberGiftSecondHalf')
          } else {
            this.$router.push('/activity/cardMemberGift')
          }
        }, '400')
      } else if (sessionStorage.getItem('path')) {
        // ?[卡友LINE事件-脫離路線返回]以('path')做判斷
        sessionStorage.removeItem('cardCode')
        setTimeout(() => {
          this.$router.push(sessionStorage.getItem('path'))
        }, '400')
      } else if (sessionStorage.getItem('putuEvent')) {
        sessionStorage.removeItem('putuEvent')
        setTimeout(() => {
          this.$router.push('/activity/ChungyuanPuTuBizCard')
        }, '400')
      } else {
        // ?[卡友修改密碼事件]不登入及一般消費者亂點
        this.$router.go(-1)
      }
    },
    //* 舊會員登入圖片
    getMemberImg () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=getBonus`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.eventbonus = res.data.info[0]
          }
        })
    },
    memberDiscountCardMobile () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=member_card_A`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.memberCard = res.data.info
          }
        })
    }
  },
  computed: {
    fullBirth () {
      return `${this.memberBirth.year}/${this.memberBirth.month}/${this.memberBirth.date}`
    }
  },
  watch: {
    $route (to, from) {
      this.$store.commit('refreshClickCart', false)
    }
  },
  created () {
    this.isLogOut = !this.checkCookie()
    this.checkFromApp()
  },
  mounted () {
    if (this.checkCookie()) {
      // * 取得購物車商品數量
      this.$store.dispatch('getCartNum')
    }
    if (this.$store.state.isOldLogin) {
      this.theme = 'login'
    }
    if (localStorage.getItem('fromEvent')) {
      this.$swal.fire({
        title: '您好，請登入後再領取優惠',
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
    }
    // this.phoneNumOld = new bootstrap.Modal(this.$refs.phoneNum, { backdrop: 'static' })
    this.getMenu()
    this.getRandomNum()
    this.memberDiscountCardMobile()
    this.getYearMonth()
    this.checkPwdRule()
    this.getDiscount()
    this.getMemberImg()
  }
}
</script>

<style lang="scss" scoped>
select {
  &:first-child {
    color: #999;
  }
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #f8412e;
}

.nav-link {
  color: #495057;
  // border-color: #dee2e6 #dee2e6 #fff;
  background-color: #fff;
}

.nav-item:first-child {
  border-right: none;
}

.passwordImage img {
  width: 22px;
}

.btn-primary {
  color: #fff;
}

.form_password,
.form_confirm_password {
  background-image: none;
}

.container {
  min-height: calc(100vh - 290px);
}
</style>
