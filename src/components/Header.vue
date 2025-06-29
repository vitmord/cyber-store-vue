<script setup>
import Logo from './Logo.vue'
import SearchForm from './SearchForm.vue'

defineProps({
  cartCount: Number,
  favoriteCount: Number,
})
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <Logo />
      <SearchForm />
      <ul class="header__user-menu">
        <li class="header__user-item">
          <RouterLink to="/favorites" class="header__user-link header__user-link--favorites"
            ><span class="visually-hidden">Favorites</span
            ><span class="header__user-link-count">{{ favoriteCount }}</span></RouterLink
          >
        </li>
        <li class="header__user-item">
          <RouterLink to="/cart" class="header__user-link header__user-link--cart"
            ><span class="visually-hidden">Shopping Cart</span
            ><span class="header__user-link-count">{{ cartCount }}</span></RouterLink
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 16px 0;
  border-bottom: 1px solid #b5b5b5;
}
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__link {
}

.header__logo {
}

.header__search {
}

.header__user-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 24px;
}

.header__user-link {
  position: relative;
  display: block;
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background-position: center;

  &--favorites {
    background-image: url('/icons/favorites.svg');
  }

  &--cart {
    background-image: url('/icons/cart.svg');
  }
}

.header__user-link-count {
  position: absolute;
  top: -8px;
  right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: var(--Main-Black, #000);
  color: var(--Main-White, #fff);
  font-family: ABeeZee;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px; /* 100% */
  text-align: center;
  border-radius: 50%;
}
</style>
