<template>
  <section class="categories">
    <div class="container">
      <header class="categories__header">
        <h2 class="categories__title">Browse By Category</h2>
        <ul class="categories__nav">
          <li class="categories__nav-item">
            <button class="categories__nav-btn categories__nav-btn--prev" type="button">
              <span class="visually-hidden">Prev</span>
            </button>
          </li>
          <li class="categories__nav-item">
            <button class="categories__nav-btn categories__nav-btn--next" type="button">
              <span class="visually-hidden">Next</span>
            </button>
          </li>
        </ul>
      </header>

      <ul class="categories__list">
        <li class="categories__item">
          <RouterLink :to="{ path: '/catalog', query: { category: 'Смартфоны' } }" class="categories__link categories__link--phones">Phones</RouterLink>
        </li>
        <li class="categories__item">
          <RouterLink :to="{ path: '/catalog', query: { category: 'Часы' } }" class="categories__link categories__link--smart-watches">Smart Watches</RouterLink>
        </li>
        <li class="categories__item">
          <RouterLink :to="{ path: '/catalog', query: { category: 'Аксессуары' } }" class="categories__link categories__link--cameras">Accessories</RouterLink>
        </li>
        <li class="categories__item">
          <RouterLink :to="{ path: '/catalog', query: { category: 'Гаджеты' } }" class="categories__link categories__link--headphones">Headphones</RouterLink>
        </li>
        <li class="categories__item">
          <RouterLink :to="{ path: '/catalog', query: { category: 'Компьютеры' } }" class="categories__link categories__link--computers">Computers</RouterLink>
        </li>
        <li class="categories__item">
          <RouterLink :to="{ path: '/catalog', query: { category: 'Планшеты' } }" class="categories__link categories__link--gaming">Tablets</RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.categories {
  padding: 80px 0;
  background-color: #fafafa;
}

.categories__header {
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.categories__nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 16px;
}
.categories__nav-item {
}
.categories__nav-btn {
  display: block;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  transition: opacity 0.133s ease;

  &:hover {
    opacity: 0.8;
  }
}
.categories__nav-btn--prev {
  background-image: url('/icons/arrow-md.svg');
}

.categories__nav-btn--next {
  background-image: url('/icons/arrow-md.svg');
  transform: rotate(180deg);
}

.categories__title {
  margin: 0;
  color: var(--Main-Black, #000);
  font-family: ABeeZee;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.24px;
}
.categories__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
.categories__item {
  width: 160px;
}
.categories__link {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: #ededed;
  padding: 80px 10px 24px;
  color: var(--Main-Black, #000);
  text-align: center;
  font-family: ABeeZee;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 150% */
  background-repeat: no-repeat;
  background-position: top 24px center;
  background-size: 48px 48px;

  &--phones {
    background-image: url('/icons/phone-lg.svg');
  }

  &--smart-watches {
    background-image: url('/icons/smart_watch-lg.svg');
  }

  &--cameras {
    background-image: url('/icons/camera-lg.svg');
  }
  &--headphones {
    background-image: url('/icons/headphone-lg.svg');
  }
  &--computers {
    background-image: url('/icons/computer-lg.svg');
  }
  &--gaming {
    background-image: url('/icons/gaming-lg.svg');
  }
}
</style>
