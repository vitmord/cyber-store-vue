<template>
  <section class="assistance">
    <h3 class="assistance__title">Assistance to the buyer</h3>
    <ul class="assistance__list">
      <li class="assistance__item"><a class="assistance__link" href="#">Find an order</a></li>
      <li class="assistance__item">
        <a class="assistance__link" href="#">Terms of delivery</a>
      </li>
      <li class="assistance__item">
        <a class="assistance__link" href="#">Exchange and return of goods</a>
      </li>
      <li class="assistance__item"><a class="assistance__link" href="#">Guarantee</a></li>
      <li class="assistance__item">
        <a class="assistance__link" href="#">Frequently asked questions</a>
      </li>
      <li class="assistance__item">
        <a class="assistance__link" href="#">Terms of use of the site</a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.assistance {
  grid-column: 3/4;
}
.assistance__title {
  margin: 0;
  margin-bottom: 24px;
  color: var(--Main-White, #fff);
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
}
.assistance__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.assistance__item {
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
