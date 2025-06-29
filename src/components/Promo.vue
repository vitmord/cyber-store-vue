<template>
  <section class="promo">
    <div class="content">
      <h2 class="promo__title">Big Summer <span>Sale</span></h2>
      <p class="promo__text">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
      <RouterLink to="/catalog" class="promo__btn btn btn--dark"> Shop Now </RouterLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.promo {
  max-width: 1440px;
  margin: 0 auto;
  background-image: linear-gradient(100deg, #2e2e2e 42.36%, #000 98.65%);

  .content {
    padding: 160px 20px 90px;
    background-image: url('/images/sale_group_left@2x.png'), url('/images/sale_group_right@2x.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position:
      left center,
      right center;
    text-align: center;
  }
}
.promo__title {
  margin: 0;
  color: #fff;
  text-align: center;
  font-family: Abel;
  font-size: 72px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px; /* 100% */
  letter-spacing: -0.72px;

  span {
    color: #fff;
    font-family: ABeeZee;
    font-size: 72px;
    font-style: italic;
    font-weight: 400;
    line-height: 72px;
    letter-spacing: -0.72px;
  }
}
.promo__text {
  margin: 0;
  margin-bottom: 40px;
  color: #787878;
  text-align: center;
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
</style>
