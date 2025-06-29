<script setup>
import Filters from './Filters.vue'
import Products from './Products.vue'

import { provide, inject } from 'vue'

const items = inject('items')
const filters = inject('filters')

const onChangeSelect = (event) => {
  console.log(event.target.value)
  filters.sortBy = event.target.value
}

provide('onChangeSelect', onChangeSelect)
</script>

<template>
  <h1 class="visually-hidden">Cyber Store Catalog</h1>
  <div class="catalog container">
    <Filters />
    <Products :items="items" />
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  display: grid;
  grid-template-columns: 256px 1fr;
  grid-column-gap: 32px;
  padding: 24px 0 56px;
}
</style>
