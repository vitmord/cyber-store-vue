<script setup>
const props = defineProps({
  id: Number,
  imageUrl: String,
  brand: String,
  title: String,
})
</script>

<template>
  <li class="favorite__item favorite-item">
    <img class="favorite-item__img" :src="imageUrl" :alt="title" />
    <h2 class="favorite-item__title">{{ title }}</h2>
    <span class="favorite-item__code">{{ brand }}</span>
  </li>
</template>

<style lang="scss" scoped>
.favorite-item {
  padding: 56px 0;
  border-top: 0.5px solid #a3a3a3;
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 15px;
}
.favorite-item__img {
  grid-row: 1/3;
  width: 100%;
  justify-self: center;
  align-self: center;
}
.favorite-item__title {
  color: var(--Main-Black, #000);
  font-family: ABeeZee;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin: 0;
  margin-bottom: 8px;
  grid-row: 1/2;
  align-self: end;
}
.favorite-item__code {
  color: var(--Main-Black, #000);
  font-family: Abel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
}
</style>
