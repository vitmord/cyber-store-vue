<script setup>
import Cart from './Cart.vue'
import Order from './Order.vue'

import { ref, inject } from 'vue'
const cart = inject('cart')

// defineProps({
//   subTotalPrice: Number,
//   clearCart: Function,
// })

// const subTotalPrice = ref(0)

const subTotalPrice = inject('subTotalPrice')
const clearCart = inject('clearCart')
</script>

<template>
  <div class="shopping-cart container">
    <Cart />
    <Order :sub-total-price="subTotalPrice" :clear-cart="clearCart" />
  </div>
</template>

<style lang="scss" scoped>
.shopping-cart {
  padding: 122px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 48px;
}
</style>
