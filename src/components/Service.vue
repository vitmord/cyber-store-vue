<template>
  <li class="product__services-item service service--free-delivery">
    <span class="service__name">Free Delivery</span><span class="service__value">1-2 day</span>
  </li>
  <li class="product__services-item service service--in-stock">
    <span class="service__name">In Stock</span><span class="service__value">Today</span>
  </li>
  <li class="product__services-item service service--guaranteed">
    <span class="service__name">Guaranteed</span><span class="service__value">1 year</span>
  </li>
</template>

<style lang="scss" scoped>
.service {
  position: relative;
  padding: 4px 1px 12px 72px;

  &::before {
    content: '';
    display: block;
    width: 56px;
    height: 56px;
    border-radius: 11px;
    background-color: #f6f6f6;
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px 24px;
  }

  &--free-delivery {
    &::before {
      background-image: url('/icons/delivery.svg');
    }
  }

  &--in-stock {
    &::before {
      background-image: url('/icons/shop.svg');
    }
  }

  &--guaranteed {
    &::before {
      background-image: url('/icons/verify.svg');
    }
  }
}

.service__name {
  display: block;
  color: #717171;
  font-family: ABeeZee;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
}
.service__value {
  display: block;
  color: #000;
  font-family: ABeeZee;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
}
</style>
