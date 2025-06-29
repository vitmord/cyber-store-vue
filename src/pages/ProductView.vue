<script setup>
import Header from '../components/Header.vue'
import Product from '../components/Product.vue'
import Footer from '../components/Footer.vue'
import { useRoute } from 'vue-router'
import { inject, computed } from 'vue'

const route = useRoute()
const items = inject('items')

const product = computed(() => {
  return items.value.find(item => String(item.id) === route.params.id)
})
</script>

<template>

      <Product v-if="product" :product="product" />
      <div v-else>Товар не найден</div>

</template>
