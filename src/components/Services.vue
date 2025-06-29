<template>
  <section class="footer__services services">
    <h3 class="services__title">Services</h3>
    <ul class="services__list">
      <li class="services__item"><a class="services__link" href="#">Bonus program</a></li>
      <li class="services__item"><a class="services__link" href="#">Gift cards</a></li>
      <li class="services__item"><a class="services__link" href="#">Credit and payment</a></li>
      <li class="services__item"><a class="services__link" href="#">Service contracts</a></li>
      <li class="services__item"><a class="services__link" href="#">Non-cash account</a></li>
      <li class="services__item"><a class="services__link" href="#">Payment</a></li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.services {
  grid-column: 2/3;
}
.services__title {
  margin: 0;
  margin-bottom: 24px;
  color: var(--Main-White, #fff);
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
}
.services__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.services__item {
  color: #cfcfcf;
  font-family: Abel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 228.571% */
  &:not(:last-child) {
    margin-bottom: 24px;
  }
}
</style>
