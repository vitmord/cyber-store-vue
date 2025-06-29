<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import { onMounted, ref, watch, provide, reactive, computed } from 'vue'
import axios from 'axios'
import debounce from 'lodash.debounce'

const items = ref([])
const cart = ref([])
const favoritesCount = ref(0)
const cartCount = ref(0)
const subTotalPrice = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.price * (item.qty || 1), 0)
})
const filters = reactive({
  sortBy: 'count-review',
  searchQuery: '',
  category: null,
})

// Обработчик изменения поискового запроса
const onChangeSearchInput = debounce((event) => {
  console.log(event.target.value)
  filters.searchQuery = event.target.value
}, 300)

// Корзина покупок

const addToCart = (item) => {
  item.isAddedToCart = true
  cart.value.push(item)
  cartCount.value += 1
  console.log(cart.value)
}

const removeFromCart = (item) => {
  item.isAddedToCart = false
  cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id)
  cartCount.value -= 1
}

const clearCart = () => {
  cart.value.forEach((item) => {
    item.isAddedToCart = false // Сбрасываем флаг добавления в корзину
  })
  cart.value = [] // Очищаем корзину
  cartCount.value = 0
}

const onClickProductBtn = (item) => {
  if (!item.isAddedToCart) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }

  console.log(cart.value)
}

const API_URL = 'https://a2ca8732969b72d4.mokky.dev'

// Функция для получения товаров с сервера
const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    }

    if (filters.searchQuery) {
      params.name = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`${API_URL}/products`, { params })

    console.log('BACKEND DATA', data)
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false, // Добавляем поле isFavorite для каждого товара
      favoriteId: null, // Изначально нет ID избранного
      isAddedToCart: false, // Добавляем поле isAddedToCart для каждого товара
    }))
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
  }
}

// Отображение товаров при загрузке страницы
onMounted(async () => {
  await fetchItems()
  await fetchFavorites()
})

// Обработчики событий для фильтров
watch(filters, async () => {
  await fetchItems()
  await fetchFavorites()
})

// Функция для добавления товара в избранное
const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      item.isFavorite = true
      const { data } = await axios.post(`${API_URL}/favorites`, {
        parentId: item.id,
        item,
      })
      item.favoriteId = data.id // Сохраняем ID избранного товара
      favoritesCount.value += 1 // Увеличиваем количество избранных товаров
    } else {
      item.isFavorite = false

      await axios.delete(`${API_URL}/favorites/${item.favoriteId}`)
      item.favoriteId = null // Удаляем ID избранного товара
      favoritesCount.value -= 1 // Уменьшаем количество избранных товаров
    }
  } catch (error) {
    console.error(error)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`${API_URL}/favorites`)
    favoritesCount.value = favorites.length // Обновляем количество избранных товаров
    console.log('Избранные товары:', favorites)
    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.parentId === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true, // Устанавливаем флаг избранного
        favoriteId: favorite.id, // Сохраняем ID избранного товара
      }
    })
  } catch (error) {
    console.error('Ошибка при получении избранных товаров:', error)
  }
}

provide('favoritesCount', favoritesCount)
provide('cart', cart)
provide('items', items)
provide('cartCount', cartCount)
provide('filters', filters)
provide('onChangeSearchInput', onChangeSearchInput)
provide('addToFavorite', addToFavorite)
provide('onClickProductBtn', onClickProductBtn)
provide('removeFromCart', removeFromCart)
provide('clearCart', clearCart)
provide('subTotalPrice', subTotalPrice)
</script>

<template>
  <Header :favorite-count="favoritesCount" :cart-count="cartCount" />
  <main class="main">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
