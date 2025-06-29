<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'

const cart = inject('cart')
console.log(111, cart.value)
const removeFromCart = inject('removeFromCart')
</script>

<template>
  <section class="shopping-cart__cart cart">
    <h1 class="cart__title">Shopping Cart</h1>

    <ul class="cart__list" v-auto-animate>
      <CartItem
        v-for="item in cart"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        :brand="item.brand"
        :price="item.price"
        :image-url="item.images?.[0]"
        :alt="item.name"
        :onClickRemoveFromCart="() => removeFromCart(item)"
      />
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.cart__title {
  margin: 0;
  margin-bottom: 40px;
  color: #000;
  font-family: Abel;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 100% */
}
.cart__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.cart__item {
  &:not(:last-child) {
    margin-bottom: 40px;
  }
}
</style>
