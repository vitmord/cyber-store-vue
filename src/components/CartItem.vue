<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  id: Number,
  imageUrl: String,
  brand: String,
  title: String,
  price: Number,
  alt: String,
  onClickRemoveFromCart: Function,
  qty: {
    type: Number,
    default: 1
  },
  onQtyChange: Function
})

const quantity = ref(props.qty)

const increment = () => {
  quantity.value++
}

const decrement = () => {
  if (quantity.value > 1) quantity.value--
}

watch(quantity, (val) => {
  if (props.onQtyChange) props.onQtyChange(props.id, val)
})
</script>

<template>
  <li class="cart__item cart-item">
    <img class="cart-item__img" :src="imageUrl" :alt="alt" />
    <h3 class="cart-item__title">{{ title }}</h3>
    <p class="cart-item__brand">{{ brand }}</p>
    <form class="cart-item__form" action="#">
      <button class="cart-item__btn cart-item__btn--minus" type="button" @click="decrement">
        <span class="visually-hidden">Minus</span>
      </button>
      <input class="cart-item__input" type="text" v-model="quantity" />
      <button class="cart-item__btn cart-item__btn--plus" type="button" @click="increment">
        <span class="visually-hidden">Plus</span>
      </button>
      <button class="visually-hidden" type="submit">Change qty</button>
    </form>
    <b class="cart-item__price">${{ price * quantity }}</b>
    <button class="cart-item__remove-btn" @click="onClickRemoveFromCart" type="button">
      <span class="visually-hidden">Remove product from cart</span>
    </button>
  </li>
</template>

<style lang="scss" scoped>
.cart-item {
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: 90px 190px 106px 1fr 24px;
  grid-template-rows: 1fr 1fr;
  &:not(:last-child) {
    border-bottom: 0.5px solid #a3a3a3;
  }
}
.cart-item__img {
  grid-row: 1/3;
  width: 100%;
  margin-right: 15px;
  justify-self: center;
  align-self: center;
}
.cart-item__title {
  grid-row: 1/2;
  align-self: end;
  margin: 0;
  margin-bottom: 8px;
  color: var(--Main-Black, #000);
  font-family: ABeeZee;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.cart-item__brand {
  align-self: center;
  grid-row: 2/3;
  margin: 0;
  color: var(--Main-Black, #000);
  font-family: Abel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
}
.cart-item__form {
  grid-row: 1/3;
  align-self: center;
  display: flex;
  align-items: center;
  gap: 8px;
}
.cart-item__btn {
  display: block;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.cart-item__btn--minus {
  background-image: url('/icons/minus.svg');
}

.cart-item__btn--plus {
  background-image: url('/icons/plus.svg');
}

.cart-item__input {
  max-width: 50px;
  padding: 8px 8px;
  border-radius: 4px;
  border: 0.5px solid #d9d9d9;
  color: var(--Main-Black, #000);
  text-align: center;
  font-family: ABeeZee;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px; /* 100% */
}

.cart-item__price {
  grid-row: 1/3;
  justify-self: center;
  align-self: center;
  color: var(--Main-Black, #000);
  font-family: ABeeZee;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  line-height: 32px; /* 160% */
  letter-spacing: 0.6px;
}
.cart-item__remove-btn {
  grid-row: 1/3;
  justify-self: center;
  align-self: center;
  display: block;
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;

  background-image: url('/icons/close.svg');
  background-repeat: no-repeat;
  background-position: center;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.3;
  }
}
</style>
