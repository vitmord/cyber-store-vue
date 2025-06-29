<script setup>
const props = defineProps({
  id: Number,
  imageUrl: String,
  brand: String,
  title: String,
  price: Number,
  alt: String,
  isFavorite: Boolean,
  isAddedToCart: Boolean,
  onClickFavorite: Function,
  onClickAddToCart: Function,
})
</script>

<template>
  <li class="offers__item product-item">
    <button
      @click="onClickFavorite"
      :class="
        isFavorite
          ? 'product-item__favorite-btn product-item__favorite-btn--active'
          : 'product-item__favorite-btn'
      "
      type="button"
    >
      <span class="visually-hidden">Add to favorite</span></button
    ><img class="product-item__img" :src="imageUrl" :alt="alt" />
    <h3 class="product-item__title">
      <RouterLink :to="`/product/${id}`" class="product-item__link">{{ brand }} {{ title }}</RouterLink>
    </h3>
    <b class="product-item__price">${{ price }}</b
    ><button @click="onClickAddToCart" class="product-item__btn btn" type="button">{{
      isAddedToCart ? 'Remove from cart' : 'Buy now'
    }}</button>
  </li>
</template>

<style lang="scss" scoped>
.product-item {
  padding: 24px 16px;
  border-radius: 9px;
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-item__favorite-btn {
  align-self: end;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  background-image: url('/icons/like.svg');
  background-repeat: no-repeat;
  background-size: 32px 32px;
  background-position: center;
  margin-bottom: 16px;

  &--active {
    background-size: 26px 24px;
    background-image: url('/icons/like-active.svg');
  }

  &:hover {
    opacity: 0.8;
  }
}

.product-item__img {
  width: 160px;
  height: auto;
  margin-bottom: 16px;
}
.product-item__title {
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

.product-item__price {
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

.product-item__btn {
  width: 100%;
  padding: 12px;
}
</style>
