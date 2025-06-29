<template>
  <section class="product__details details">
    <div class="details__content container">
      <h2 class="details__title">Details</h2>

      <p class="details__text">
        Just as a book is judged by its cover, the first thing you notice when you pick up a modern
        smartphone is the display. Nothing surprising, because advanced technologies allow you to
        practically level the display frames and cutouts for the front camera and speaker, leaving
        no room for bold design solutions. And how good that in such realities Apple everything is
        fine with displays. Both critics and mass consumers always praise the quality of the picture
        provided by the products of the Californian brand. And last year's 6.7-inch Retina panels,
        which had ProMotion, caused real admiration for many.
      </p>

      <ul class="details__list">
        <li class="details__item" v-for="(char, idx) in product?.characteristics || []" :key="char.characteristic + idx">
          <span class="details__name">{{ char.characteristic }}</span>
          <span class="details__value">{{ char.value }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'
const product = inject('product')
</script>

<style lang="scss" scoped>
.details {
  background-color: #fafafa;
  padding: 80px 0;
}

.details__content {
  padding: 48px 40px 40px;
  background-color: #fff;
  border-radius: 8px;
}
.details__title {
  margin: 0;
  margin-bottom: 32px;
  color: #000;
  font-family: ABeeZee;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
}
.details__text {
  margin: 0;
  margin-bottom: 32px;
  color: #9d9d9d;
  font-family: ABeeZee;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
}
.details__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.details__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;

  border-bottom: 0.5px solid #cdcdcd;
  color: #000;
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  &:not(:last-child) {
    margin-bottom: 24px;
  }
}
</style>
