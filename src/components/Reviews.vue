<template>
  <p class="reviews">
    <b class="reviews__rating">4.8</b>
    <span class="reviews__qty">of 125 reviews</span>
  </p>
</template>

<style lang="scss" scoped>
.reviews {
  width: 184px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 32px 32px 72px 32px;
  border-radius: 25px;
  background-color: #fafafa;
  background-image: url('../../images/stars.svg');
  background-repeat: no-repeat;
  background-position: bottom 32px center;
  background-size: 120px 24px;
}

.reviews__rating {
  margin-bottom: 16px;
  color: var(--Main-Black, #000);
  text-align: center;
  font-family: ABeeZee;
  font-size: 56px;
  font-style: italic;
  font-weight: 400;
  line-height: 56px; /* 100% */
}
.reviews__qty {
  color: var(--Main-Black, #000);
  text-align: center;
  font-family: ABeeZee;
  font-size: 15px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px; /* 106.667% */
  opacity: 0.3;
}
</style>
