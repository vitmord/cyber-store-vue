<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  subTotalPrice: Number,
  clearCart: Function,
})

const tax = ref(0.1) // 10% tax
const shipping = ref(0.05) // 5% shipping
const totalPrice = computed(() => {
  return (
    props.subTotalPrice + props.subTotalPrice * tax.value + props.subTotalPrice * shipping.value
  )
})
</script>

<template>
  <section class="shopping-cart__order order">
    <h2 class="order__title">Order Summary</h2>

    <form class="order__form order-form" action="#">
      <div class="order-form__group">
        <label class="order-form__label" for="order-form-code">Discount code / Promo code</label
        ><input
          class="order-form__input"
          type="text"
          id="order-form-code"
          name="order-form-code"
          placeholder="Code"
        />
      </div>
      <div class="order-form__group">
        <label class="order-form__label" for="order-form-bonus-card">Your bonus card number</label>

        <div class="order-form__input-wrapper">
          <input
            class="order-form__input"
            type="text"
            id="order-form-bonus-card"
            name="order-form-bonus-card"
            placeholder="Enter Card Number"
          />
          <button class="order-form__input-btn" type="button">Apply</button>
        </div>
      </div>
      <b class="order-form__subtotal"
        >Subtotal<span class="order-form__subtotal-value">${{ subTotalPrice }}</span></b
      >
      <span class="order-form__tax"
        >Estimated Tax<span class="order-form__tax-value">${{ tax * subTotalPrice }}</span></span
      >
      <span class="order-form__shipping"
        >Estimated shipping & Handling<span class="order-form__shipping-value"
          >${{ shipping * subTotalPrice }}</span
        ></span
      >
      <b class="order-form__total"
        >Total<span class="order-form__total-value">${{ totalPrice }}</span></b
      >
      <button
        @click="clearCart"
        class="order-form__btn btn"
        type="button"
        :disabled="!subTotalPrice"
      >
        {{ subTotalPrice ? 'Checkout' : 'Your cart is empty' }}
      </button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.order {
  padding: 56px 64px;
  border-radius: 10px;
  border: 1px solid #ebebeb;
}
.order__title {
  margin: 0;
  margin-bottom: 40px;
  color: #111;
  font-family: ABeeZee;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px; /* 80% */
}

.order-form__group {
  margin-bottom: 24px;
}
.order-form__label {
  display: block;
  margin-bottom: 8px;
  color: #545454;
  font-family: ABeeZee;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
}
.order-form__input {
  display: block;
  width: 100%;

  padding: 16px;
  border-radius: 7px;
  border: 0.5px solid #9f9f9f;
  background-color: var(--Main-White, #fff);
  color: #979797;
  font-family: Abel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.07px;
}

.order-form__input-wrapper {
  position: relative;

  .order-form__input {
    padding-right: 120px;
  }
}

.order-form__input-btn {
  position: absolute;
  border-radius: 6px;
  border: 1px solid var(--Main-Black, #000);
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px 16px;
  background-color: transparent;
  color: var(--Main-Black, #000);
  text-align: center;
  font-family: ABeeZee;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
}
.order-form__subtotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: #000;
  font-family: ABeeZee;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.48px;
}

.order-form__tax {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #545454;
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
.order-form__tax-value {
  color: #000;
  font-family: ABeeZee;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 32px; /* 200% */
  letter-spacing: 0.48px;
}
.order-form__shipping {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: #545454;
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
  letter-spacing: 0.48px;
}
.order-form__shipping-value {
  color: #000;
  font-family: ABeeZee;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 32px; /* 200% */
  letter-spacing: 0.48px;
}
.order-form__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  color: #000;
  font-family: ABeeZee;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.48px;
}
.order-form__total-value {
}
.order-form__btn {
  width: 100%;
  padding: 16px 56px;
  color: var(--Main-White, #fff);
  text-align: center;
  font-family: ABeeZee;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 150% */

  &:disabled {
    background-color: #d4d4d4;
    color: #9f9f9f;
    cursor: not-allowed;
  }
}
</style>
