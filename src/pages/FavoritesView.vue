<script setup>
import FavoriteItem from '../components/FavoriteItem.vue'

import { onMounted, ref } from 'vue'
import axios from 'axios'

const favorites = ref([])

const API_URL = 'https://a2ca8732969b72d4.mokky.dev'

onMounted(async () => {
  try {
    const { data } = await axios.get(`${API_URL}/favorites`)
    favorites.value = data.map(obj => obj.item)
  } catch {}
})
</script>

<template>
  <section class="favorite container">
    <h1 class="favorite__title">Favorite</h1>

    <ul class="favorite__list">
      <FavoriteItem v-for="item in favorites" :key="item.id"
        :id="item.id"
        :brand="item.brand"
        :title="item.name"
        :image-url="item.images?.[0]" />
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.favorite {
  width: 350px;
  margin: 0 auto;
  padding: 112px 0 141px;
}
.favorite__title {
  margin: 0;
  margin-bottom: 40px;
  color: #000;
  font-family: Abel;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 100% */
}
.favorite__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
