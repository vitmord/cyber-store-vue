<script setup>
import Feature from './Feature.vue'
import Service from './Service.vue'
import Details from './Details.vue'
import Reviews from './Reviews.vue'
import Related from './Related.vue'
import { inject, provide } from 'vue'

const props = defineProps({
  product: Object
})

const addToFavorite = inject('addToFavorite')
const onClickProductBtn = inject('onClickProductBtn')

provide('product', props.product)
</script>

<template>
  <div class="product">
    <section class="product__main container">
      <div class="product__img-box">
        <img
              class="product__img"
              :src="`/${product?.images?.[0]}`"
              :alt="product?.name || 'Product Alt'"
            />
      </div>
      <div class="product__info">
        <h1 class="product__title">{{ product?.name || '...' }}</h1>
        <p class="product__price">
          ${{ product?.price || '...' }}
          <span class="product__price--old" v-if="product?.discount_price">${{ product.discount_price }}</span>
        </p>
        <ul class="product__features-list">
          <Feature
            v-for="(char, idx) in product?.characteristics || []"
            :key="char.characteristic + idx"
            :name="char.characteristic"
            :value="char.value"



          />
        </ul>
        <p class="product__description">
          Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...
          <a class="product__description-more-link" href="#">more...</a>
        </p>
        <div class="product__btn-wrapper">
          <button
            class="product__btn btn btn--light"
            :class="{ 'product__btn--favorite': product.isFavorite }"
            type="button"
            @click="addToFavorite(product)"
          >
            {{ product.isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
          </button>
          <button
            class="product__btn btn"
            :class="{ 'product__btn--incart': product.isAddedToCart }"
            type="button"
            @click="onClickProductBtn(product)"
          >
            {{ product.isAddedToCart ? 'Remove from cart' : 'Add to cart' }}
          </button>
        </div>
        <ul class="product__services-list">
          <Service />
        </ul>
      </div>
    </section>
    <Details />
    <section class="product__reviews">
      <div class="container">
        <h2 class="visually-hidden">Product rating</h2>
        <Reviews />
      </div>
    </section>
    <Related />
  </div>
</template>

<style lang="scss" scoped>
.product__main {
  padding: 112px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 48px;
}

.product__img-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 75px 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 48px;
  grid-row-gap: 24px;
}
.product__img-item {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.4;

  &--active,
  &--current {
    opacity: 1;
  }

  &:not(&--active) {
    cursor: pointer;
  }

  &:nth-child(1) {
    grid-column: 2/-1;
    grid-row: 1/-1;
  }

  &:nth-child(1) {
    grid-column: 2/-1;
    grid-row: 1/-1;
  }

  &:nth-child(1) {
    grid-column: 2/-1;
    grid-row: 1/-1;
  }

  &:nth-child(1) {
    grid-column: 2/-1;
    grid-row: 1/-1;
  }

  &:nth-child(1) {
    grid-column: 2/-1;
    grid-row: 1/-1;
  }
}

.product__title {
  margin: 0;
  margin-bottom: 24px;
  color: #000;
  font-family: ABeeZee;
  font-size: 40px;
  font-style: italic;
  font-weight: 400;
  line-height: 40px; /* 100% */
}
.product__price {
  display: flex;
  align-items: center;
  margin: 0;
  margin-bottom: 16px;
  color: #000;
  font-family: ABeeZee;
  font-size: 32px;
  font-style: italic;
  font-weight: 400;
  line-height: 48px; /* 150% */
  letter-spacing: 0.96px;
}
.product__price--old {
  margin-left: 16px;
  color: #a0a0a0;
  font-family: Abel;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.72px;
  text-decoration-line: line-through;
}
.product__features-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  grid-gap: 16px;
  list-style-type: none;
  margin: 0;
  margin-bottom: 24px;
  padding: 0;
}

.product__description {
  margin: 0;
  margin-bottom: 32px;
  color: #6c6c6c;
  font-family: Abel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.42px;
}
.product__description-more-link {
  color: #2c2c2c;
  font-family: Abel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.42px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
}
.product__btn-wrapper {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
}
.product__btn {
  flex-grow: 1;
}

.product__services-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
}

.product__reviews {
  padding-top: 100px;
  padding-bottom: 88px;
}
</style>
