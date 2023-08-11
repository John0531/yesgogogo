<template>
  <div class="userboard my-2">
    <div class="row">
      <div
        class="col-6 col-md-4 col-lg-3 mb-3"
        v-for="search in 20"
        :key="search+'4'"
      >
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
</template>

<style lang="scss" scoped>
.card-title-height{
  height: 4.5rem;
  @media (max-width: 768px) {
    height: 3.5rem;
  }
  @media (max-width: 576px) {
    height: 2.5rem;
  }
}
</style>
