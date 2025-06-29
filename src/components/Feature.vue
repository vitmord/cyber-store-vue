<template>
  <li class="product__features-item feature feature--screen-size">
    <span class="feature__name">Screen size</span><span class="feature__value">6.7"</span>
  </li>
  <li class="product__features-item feature feature--cpu">
    <span class="feature__name">CPU</span><span class="feature__value">Apple A16 Bionic</span>
  </li>
  <li class="product__features-item feature feature--number-of-cores">
    <span class="feature__name">Number of Cores</span><span class="feature__value">6</span>
  </li>
  <li class="product__features-item feature feature--main-camera">
    <span class="feature__name">Main camera</span><span class="feature__value">48-12-12 MP</span>
  </li>
  <li class="product__features-item feature feature--front-camera">
    <span class="feature__name">Front-camera</span><span class="feature__value">12 MP</span>
  </li>
  <li class="product__features-item feature feature--battery-capacity">
    <span class="feature__name">Battery capacity</span><span class="feature__value">4323 mAh</span>
  </li>
</template>

<style lang="scss" scoped>
.feature {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 16px 16px 48px;
  border-radius: 7px;
  background-color: #f4f4f4;
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: left 16px center;

  &--screen-size {
    background-image: url('/icons/screen.svg');
  }

  &--cpu {
    background-image: url('/icons/cpu.svg');
  }

  &--number-of-cores {
    background-image: url('/icons/cpu_2.svg');
  }

  &--main-camera {
    background-image: url('/icons/camera.svg');
  }

  &--front-camera {
    background-image: url('/icons/camera_2.svg');
  }

  &--battery-capacity {
    background-image: url('/icons/battery.svg');
  }
}

.feature__name {
  display: block;
  color: #a7a7a7;
  font-family: Abel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
}

.feature__value {
  display: block;
  color: #4e4e4e;
  font-family: ABeeZee;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px;
}
</style>
