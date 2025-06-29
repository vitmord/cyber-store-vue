<script setup>
import ProductItem from './ProductItem.vue'
</script>

<template>
  <section class="offers">
    <div class="container">
      <h2 class="visually-hidden">offers</h2>
      <ul class="offers__filters-list">
        <li class="offers__filters-item">
          <button class="offers__filters-btn offers__filters-btn--current">New Arrival</button>
        </li>
        <li class="offers__filters-item">
          <button class="offers__filters-btn">Bestseller</button>
        </li>
        <li class="offers__filters-item">
          <button class="offers__filters-btn">Featured offers</button>
        </li>
      </ul>

      <ul class="offers__list">
        <ProductItem
          title="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)"
          :price="900"
          image-url="/images/iphone_14_pro@2x.png"
          alt="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)"
        />
        <ProductItem
          title="Blackmagic Pocket Cinema Camera 6k"
          :price="2535"
          image-url="/images/blackmagic_pocket_cinema@2x.png"
          alt="Blackmagic Pocket Cinema Camera 6k"
        />
        <ProductItem
          title="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case"
          :price="399"
          image-url="/images/apple_watch_9@2x.png"
          alt="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case"
        />
        <ProductItem
          title="AirPods Max Silver"
          :price="549"
          image-url="/images/airpods_max_silver@2x.png"
          alt="AirPods Max Silver"
        />
        <ProductItem
          title="Samsung Galaxy Watch6 Classic 47mm Black"
          :price="369"
          image-url="/images/samsung_galaxy_watch@2x.png"
          alt="Samsung Galaxy Watch6 Classic 47mm Black"
        />
        <ProductItem
          title="Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"
          :price="1799"
          image-url="/images/galaxy_z_fold5@2x.png"
          alt="Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"
          :is-favorite="true"
        />
        <ProductItem
          title="Galaxy Buds FE Graphite"
          :price="99.99"
          image-url="/images/galaxy_buds_fe@2x.png"
          alt="Galaxy Buds FE Graphite"
        />
        <ProductItem
          title="Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021"
          :price="398"
          image-url="/images/apple_ipad_9@2x.png"
          alt="Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021"
        />
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.offers {
  padding: 56px 0;
}

.offers__filters-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 32px;
  align-items: center;
  margin-bottom: 32px;
}

.offers__filters-btn {
  border: none;
  background-color: transparent;
  color: #8b8b8b;
  text-align: center;
  font-family: ABeeZee;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 32px; /* 177.778% */
}
.offers__filters-btn--current {
  color: var(--Main-Black, #000);
  text-align: center;
  font-family: ABeeZee;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 32px; /* 177.778% */
  border-bottom: 2px solid #000;
}
.offers__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
}
</style>
