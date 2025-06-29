<template>
  <section class="product__related related">
    <div class="container">
      <h2 class="related__title">Related Products</h2>
      <ul class="related__list">
        <li class="related__item product-item">
          <button class="product-item__favorite-btn" type="button">
            <span class="visually-hidden">Add to favorite</span></button
          ><img
            class="product-item__img"
            src="/images/discounts_apple_iphone_14_pro_1tb_gold@2x.png"
            alt="Apple iPhone 14 Pro 512GB Gold (MQ233)"
          />
          <h3 class="product-item__title">
            <a class="product-item__link" href="#">Apple iPhone 14 Pro 512GB Gold (MQ233)</a>
          </h3>
          <b class="product-item__price">$1437</b
          ><a class="product-item__btn btn" href="#">Buy now</a>
        </li>
        <li class="related__item product-item">
          <button class="product-item__favorite-btn" type="button">
            <span class="visually-hidden">Add to favorite</span></button
          ><img
            class="product-item__img"
            src="/images/discounts_airpods_max_silver@2x.png"
            alt="AirPods Max Silver"
          />
          <h3 class="product-item__title">
            <a class="product-item__link" href="#">AirPods Max Silver</a>
          </h3>
          <b class="product-item__price">$549</b
          ><a class="product-item__btn btn" href="#">Buy now</a>
        </li>
        <li class="related__item product-item">
          <button class="product-item__favorite-btn" type="button">
            <span class="visually-hidden">Add to favorite</span></button
          ><img
            class="product-item__img"
            src="/images/discounts_apple_watch_9@2x.png"
            alt="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case)"
          />
          <h3 class="product-item__title">
            <a class="product-item__link" href="#"
              >Apple Watch Series 9 GPS 41mm Starlight Aluminium Case</a
            >
          </h3>
          <b class="product-item__price">$399</b
          ><a class="product-item__btn btn" href="#">Buy now</a>
        </li>
        <li class="related__item product-item">
          <button class="product-item__favorite-btn" type="button">
            <span class="visually-hidden">Add to favorite</span></button
          ><img
            class="product-item__img"
            src="/images/discounts_apple_iphone_14_pro_1tb_gold@2x.png"
            alt="Apple iPhone 14 Pro 1TB Gold (MQ2V3)"
          />
          <h3 class="product-item__title">
            <a class="product-item__link" href="#">Apple iPhone 14 Pro 1TB Gold (MQ2V3)</a>
          </h3>
          <b class="product-item__price">$1499</b
          ><a class="product-item__btn btn" href="#">Buy now</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.related {
  padding: 80px 0;
}
.related__title {
  margin: 0;
  margin-bottom: 32px;
  color: #000;
  font-family: ABeeZee;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
}
.related__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
}
</style>
