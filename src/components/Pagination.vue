<template>
  <ul class="pagination">
    <li class="pagination__item">
      <button class="pagination__btn pagination__btn--prev pagination__btn--disabled" type="button">
        <span class="visually-hidden">Prev page</span>
      </button>
    </li>
    <li class="pagination__item">
      <a class="pagination__link pagination__link--current">1</a>
    </li>
    <li class="pagination__item"><a class="pagination__link" href="#">2</a></li>
    <li class="pagination__item"><a class="pagination__link" href="#">3</a></li>
    <li class="pagination__item">....</li>
    <li class="pagination__item"><a class="pagination__link" href="#">12</a></li>
    <li class="pagination__item">
      <button class="pagination__btn pagination__btn--next" type="button">
        <span class="visually-hidden">Next page</span>
      </button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.pagination {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.pagination__link {
  display: block;
  padding: 4px 11px;
  border-radius: 5px;
  background-color: #f6f6f6;
  color: var(--Main-Black, #000);
  text-align: center;
  font-family: ABeeZee;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.48px;

  &--current {
    user-select: none;
    color: var(--Main-White, #fff);
    background: var(--Main-Black, #000);
  }
}

.pagination__btn {
  display: block;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  background-image: url('/icons/arrow-md.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;

  &--next {
    transform: rotate(180deg);
  }

  &--disabled {
    cursor: initial;
  }
}
</style>
