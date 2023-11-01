<template>
  <div class="col-md-8 my-md-6">
    <div class="p-5 p-md-0">
      <div class="position-relative m-4">
        <div
        name="progress"
        class="progress bg-gray"
        style="height: 4px;">
          <div
            class="progress-bar bg-gray"
            role="progressbar"
            style="width: 50%;"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <slot
        name="step1"
        >
            <button
            type="button"
            :class="{'btn-primary' : step === '1' , 'btn-secondary' : step !== '1'}"
            class="position-absolute top-0 start-0 translate-middle btn btn-sm  rounded-pill fs-5 fs-md-4 text-light step1"
            style="width: 3rem; height:3rem;">
              1
              <span class="fw-normal text-dark position-absolute text-nowrap step1"
                >購物車</span
              >
            </button>
        </slot>
        <slot
        name="step2"
        >
          <button
            type="button"
            :class="{'btn-primary' : step === '2' , 'btn-secondary' : step !== '2'}"
            class="position-absolute top-0 start-50 translate-middle btn btn-sm  rounded-pill fs-5 fs-md-4 text-light step2"
            style="width: 3rem; height:3rem;">
            2
            <span class="fw-normal text-dark position-absolute text-nowrap step2"
              >填寫資料</span
            >
          </button>
        </slot>
        <slot
        name="step3"
        >
          <button
            type="button"
            :class="{'btn-primary' : step === '3' , 'btn-secondary' : step !== '3'}"
            class="position-absolute top-0 start-100 translate-middle btn btn-sm  rounded-pill fs-5 fs-md-4 text-light step3"
            style="width: 3rem; height:3rem;"
          >
            3
              <span class="fw-normal text-dark position-absolute text-nowrap step3"
                >訂單確認</span
              >
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  props: {
    step: { // ?從購物流程傳來的階段值
      type: String,
      default: null
    }
  }

})
</script>

<style>
  .progress-bar {
  background-color: #e9ecef;
}
.step {
  pointer-events: none;
}
.step1 {
  bottom: -100%;
  left: -25%;
  font-weight: bold;
}
.step2,
.step3 {
  bottom: -100%;
  left: -50%;
  font-weight: bold;
}
</style>
