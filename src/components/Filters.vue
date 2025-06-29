<script setup>
import { inject, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const items = inject('items')
const filters = inject('filters')
const route = useRoute()

// Получаем уникальные категории из items
const categories = computed(() => {
  const set = new Set()
  items.value.forEach(item => {
    if (item.category) set.add(item.category)
  })
  return Array.from(set)
})

// Множественный выбор категорий
const onCategoryChange = (category) => {
  if (!Array.isArray(filters.category)) filters.category = []
  if (filters.category.includes(category)) {
    filters.category = filters.category.filter(c => c !== category)
  } else {
    filters.category = [...filters.category, category]
  }
}

onMounted(() => {
  if (route.query.category) {
    // поддержка множественного выбора через запятую
    if (Array.isArray(route.query.category)) {
      filters.category = route.query.category
    } else {
      filters.category = String(route.query.category).split(',')
    }
  } else {
    filters.category = []
  }
})
</script>

<template>
  <section class="catalog__filters filters">
    <h2 class="visually-hidden">Filters</h2>
    <form class="filters__form" action="#" method="get">

      <fieldset class="filters__group">
        <div class="filters__group-header">
          <legend class="filters__subtitle">Категория</legend>
          <button class="filters__group-btn filters__group-btn--expanded" type="button">
            <span class="visually-hidden">Expand / Collapse</span>
          </button>
        </div>
        <ul class="filters__list">
          <li class="filters__item" v-for="category in categories" :key="category">
            <label class="control">
              <input
                class="visually-hidden control__input"
                type="checkbox"
                :checked="filters.category.includes(category)"
                @change="() => onCategoryChange(category)"
              />
              <span class="control__mark"></span>
              <span class="control__label">{{ category }}</span>
            </label>
          </li>
        </ul>
      </fieldset>
    </form>
  </section>
</template>



<style lang="scss" scoped>
.filters__group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #b5b5b5;
  width: 100%;
  margin-bottom: 24px;
  padding: 12px 0;
}

.filters__group-btn {
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('/icons/arrow-md.svg');

  &--collapsed {
    transform: rotate(-90deg);
  }
  &--expanded {
    transform: rotate(90deg);
  }
}

.filters__subtitle {
  color: var(--Main-Black, #000);
  font-family: ABeeZee;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.54px;
}
.filters__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 24px;
}
.filters__item {
  &:not(:last-child) {
    margin-bottom: 8px;
  }
}
.filters__input {
  width: 100%;
  border: none;
  padding: 16px;
  padding-left: 48px;
  margin-bottom: 16px;
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

.control {
  position: relative;
  display: block;
  padding-left: 24px;
  cursor: pointer;
}

.control__mark {
  position: absolute;
  top: 4px;
  left: 0;
  width: 16px;
  height: 16px;

  border-radius: 3px;
  border: 0.5px solid #d3d3d3;
  transition: all 0.2s ease;
}

.control__input[type='checkbox']:checked + .control__mark::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background-color: var(--Main-Black, #000);
  background-image: url('/icons/check.svg');
  background-size: 8px 8px;
  background-repeat: no-repeat;
  background-position: center;
}

.control:hover .control__mark {
  border-color: var(--Main-Black, #000);
}

.control__input:disabled + .control__mark {
  border-color: var(--Main-Black, #000);
}

.control__label {
  color: var(--Main-Black, #000);
  font-family: ABeeZee;
  font-size: 15px;
//   font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 160% */
}
.control__label-qty {
  margin-left: 5px;
  color: var(--Main-Black, #929292);
  font-family: Abel;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>
