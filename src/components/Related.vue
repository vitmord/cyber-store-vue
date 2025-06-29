<script setup>
import ProductItem from './ProductItem.vue'
</script>

<template>
  <section class="product__related related">
    <div class="container">
      <h2 class="related__title">Related Products</h2>
      <ul class="related__list">

        <ProductItem
          title="Apple iPhone 14 Pro 512GB Gold (MQ233)"
          :price="1437"
          image-url="/images/discounts_apple_iphone_14_pro_1tb_gold@2x.png"
          alt="Apple iPhone 14 Pro 512GB Gold (MQ233)"
        />
        <ProductItem
          title="AirPods Max Silver"
          :price="549"
          image-url="/images/discounts_airpods_max_silver@2x.png"
          alt="AirPods Max Silver"
        />
        <ProductItem
          title="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case"
          :price="399"
          image-url="/images/discounts_apple_watch_9@2x.png"
          alt="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case)"
        />
        <ProductItem
          title="Apple iPhone 14 Pro 1TB Gold (MQ2V3)"
          :price="1499"
          image-url="/images/discounts_apple_iphone_14_pro_1tb_gold@2x.png"
          alt="Apple iPhone 14 Pro 1TB Gold (MQ2V3)"
        />
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
