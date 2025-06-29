<template>
  <section class="discounts">
    <div class="container">
      <h2 class="discounts__title">Discounts up to -50%</h2>

      <ul class="discounts__list">
        <li class="discounts__item discounts-item">
          <img
            class="discounts-item__img"
            src="/images/discounts_apple_iphone_14_pro_1tb_gold@2x.png"
            alt="Apple iPhone 14 Pro 512GB Gold (MQ233)"
          />
          <h3 class="discounts-item__title">
            <a class="discounts-item__link" href="#">Apple iPhone 14 Pro 512GB Gold (MQ233)</a>
          </h3>
          <b class="discounts-item__price">$1437</b
          ><a class="discounts-item__btn btn" href="#">Buy Now</a>
        </li>
        <li class="discounts__item discounts-item">
          <img
            class="discounts-item__img"
            src="/images/discounts_airpods_max_silver@2x.png"
            alt="AirPods Max Silver"
          />
          <h3 class="discounts-item__title">
            <a class="discounts-item__link" href="#">AirPods Max Silver</a>
          </h3>
          <b class="discounts-item__price">$549</b
          ><a class="discounts-item__btn btn" href="#">Buy Now</a>
        </li>
        <li class="discounts__item discounts-item">
          <img
            class="discounts-item__img"
            src="/images/discounts_apple_watch_9@2x.png"
            alt="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case"
          />
          <h3 class="discounts-item__title">
            <a class="discounts-item__link" href="#"
              >Apple Watch Series 9 GPS 41mm Starlight Aluminium Case</a
            >
          </h3>
          <b class="discounts-item__price">$399</b
          ><a class="discounts-item__btn btn" href="#">Buy Now</a>
        </li>
        <li class="discounts__item discounts-item">
          <img
            class="discounts-item__img"
            src="/images/discounts_apple_iphone_14_pro_1tb_gold@2x.png"
            alt="Apple iPhone 14 Pro 1TB Gold (MQ2V3)"
          />
          <h3 class="discounts-item__title">
            <a class="discounts-item__link" href="#">Apple iPhone 14 Pro 1TB Gold (MQ2V3)</a>
          </h3>
          <b class="discounts-item__price">$1499</b
          ><a class="discounts-item__btn btn" href="#">Buy Now</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.discounts {
  padding: 80px 0;
}
.discounts__title {
  margin: 0;
  margin-bottom: 32px;
  color: #000;
  font-family: ABeeZee;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
}
.discounts__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
}
.discounts-item {
  padding: 24px 16px;
  border-radius: 9px;
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.discounts-item__title {
  text-align: center;
}

.discounts-item__img {
  width: 160px;
  height: auto;
  margin-bottom: 16px;
}
.discounts-item__link {
  margin: 0;
  margin-bottom: 16px;
  color: var(--Main-Black, #000);
  text-align: center;
  font-family: ABeeZee;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.discounts-item__price {
  margin-top: auto;
  margin-bottom: 24px;
  color: var(--Main-Black, #000);
  text-align: center;
  font-family: Abel;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 100% */
  letter-spacing: 0.72px;
}
</style>
