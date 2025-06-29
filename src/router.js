import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import CatalogView from './pages/CatalogView.vue'
import CartView from './pages/CartView.vue'
import FavoritesView from './pages/FavoritesView.vue'
import ProductView from './pages/ProductView.vue'

console.log('router.js loaded')

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/catalog', name: 'Catalog', component: CatalogView },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/favorites', name: 'Favorites', component: FavoritesView },
  { path: '/product/:id', name: 'Product', component: ProductView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
