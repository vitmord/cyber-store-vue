<script setup>
import { inject } from 'vue'

const onChangeSearchInput = inject('onChangeSearchInput')
</script>

<template>
  <form class="header__search search-form" action="" method="get">
    <label class="visually-hidden" for="search-form-text">Search field</label>
    <input
      @input="onChangeSearchInput"
      class="search-form__input"
      type="text"
      placeholder="Search"
      id="search-form-text"
    />
  </form>
</template>

<style lang="scss" scoped>
.search-form__input {
  width: 372px;
  border: none;
  padding: 16px;
  padding-left: 48px;
  border-radius: 8px;
  background: #f5f5f5;
  color: #656565;
  font-family: inherit;
  font-size: inherit;
  font-style: italic;

  background-image: url('/icons/search.svg');
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: left 16px center;

  &:focus {
    outline: none;
  }
}
</style>
