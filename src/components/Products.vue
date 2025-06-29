<script setup>
import ProductItem from './ProductItem.vue'
import Pagination from './Pagination.vue'

import { inject, computed } from 'vue'

const props = defineProps({
  items: Array,
})

const onChangeSelect = inject('onChangeSelect')
const addToFavorite = inject('addToFavorite')
const onClickProductBtn = inject('onClickProductBtn')
const filters = inject('filters')

const filteredItems = computed(() => {
  if (!filters.category || filters.category.length === 0) return props.items
  if (Array.isArray(filters.category)) {
    return props.items.filter(item => filters.category.includes(item.category))
  }
  return props.items.filter(item => item.category === filters.category)
})
</script>

<template>
  <section class="catalog__products products">
    <h2 class="visually-hidden">Products</h2>

    <header class="products__header">
      <p class="products__count">
        Selected Products: <span class="products__count-value">{{ filteredItems.length }}</span>
      </p>
      <form class="products__sorting" action="#">
        <div class="select">
          <label class="visually-hidden" for="sorting">Sorting</label>
          <select @change="onChangeSelect" class="select__control" name="sorting" id="sorting">
            <option value="price">Price - Low to High</option>
            <option value="-price">Price - High to Low</option>
            <option value="rating">By rating - Low to High</option>
            <option value="-rating">By rating - High to Low</option>
            <option value="count-review" selected>Count of Reviews</option>
          </select>
        </div>
        <button class="visually-hidden" type="submit">Sort</button>
      </form>
    </header>

    <ul class="products__list" v-auto-animate>
      <ProductItem
        v-for="item in filteredItems"
        :key="item.id"
        :id="item.id"
        :brand="item.brand"
        :title="item.name"
        :price="item.price"
        :image-url="item.images?.[0]"
        :alt="item.name"
        :is-favorite="item.isFavorite"
        :is-added-to-cart="item.isAddedToCart"
        :onClickFavorite="() => addToFavorite(item)"
        :onClickAddToCart="() => onClickProductBtn(item)"
      />
    </ul>

    <Pagination />
  </section>
</template>

<style lang="scss" scoped>
.products__header {
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.products__count {
  color: #6c6c6c;
  font-family: ABeeZee;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px; /* 100% */
  letter-spacing: 0.48px;
}
.products__count-value {
  margin-left: 6px;
  color: #000;
  text-align: center;
  font-family: ABeeZee;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px; /* 80% */
  letter-spacing: 0.6px;
}

.sorting-type {
  margin-right: auto;
}

.select {
  position: relative;
  // display: flex;
  // align-items: center;
  width: 256px;
}

.select__control {
  width: 100%;
  padding: 8px 16px;
  padding-right: 56px;
  color: #000;
  font-family: Abel;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 106.667% */
  letter-spacing: -0.075px;

  border-radius: 8px;
  border: 0.5px solid #d4d4d4;
  background-color: #fff;
  background-image: url('../../icons/arrow.svg');
  background-repeat: no-repeat;
  background-position: right center;
  appearance: none;
}

.select__control:hover,
.select__control:focus,
.select__control:active {
  opacity: 0.8;
}

.select__control:focus,
.select__control:active {
  opacity: 0.8;
}

.products__list {
  list-style-type: none;
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px 16px;
}
</style>
