<script setup>
const props = defineProps({
  name: String,
  value: String
})
</script>

<template>
  <li class="product__features-item feature">
    <span class="feature__name">{{ props.name || '—' }}</span>
    <span class="feature__value">{{ props.value || '—' }}</span>
  </li>
</template>

<style lang="scss" scoped>
.feature {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 10px 10px 48px;
  border-radius: 7px;
  background-color: #f4f4f4;
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: left 16px center;
  background-image: url('/icons/screen.svg');

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
  margin-bottom: 8px;
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
