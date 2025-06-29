<template>
  <section class="catalog__filters filters">
    <h2 class="visually-hidden">Filters</h2>
    <form class="filters__form" action="#" method="get">
      <fieldset class="filters__group">
        <div class="filters__group-header">
          <legend class="filters__subtitle">Brand</legend>
          <button class="filters__group-btn filters__group-btn--expanded" type="button">
            <span class="visually-hidden">Expand / Collapse</span>
          </button>
        </div>
        <ul class="filters__list">
          <li class="filters__item">
            <input class="filters__input" type="text" placeholder="Search" />
          </li>
          <li class="filters__item">
            <label class="control"
              ><input
                class="visually-hidden control__input"
                type="checkbox"
                name="apple"
                checked
              /><span class="control__mark"></span
              ><span class="control__label"
                >Apple <span class="control__label-qty">110</span></span
              ></label
            >
          </li>
          <li class="filters__item">
            <label class="control"
              ><input class="visually-hidden control__input" type="checkbox" name="samsung" /><span
                class="control__mark"
              ></span
              ><span class="control__label"
                >Samsung<span class="control__label-qty">125</span></span
              ></label
            >
          </li>
          <li class="filters__item">
            <label class="control"
              ><input class="visually-hidden control__input" type="checkbox" name="xiaomi" /><span
                class="control__mark"
              ></span
              ><span class="control__label"
                >Xiaomi<span class="control__label-qty">68</span></span
              ></label
            >
          </li>
          <li class="filters__item">
            <label class="control"
              ><input class="visually-hidden control__input" type="checkbox" name="poco" /><span
                class="control__mark"
              ></span
              ><span class="control__label"
                >Poco<span class="control__label-qty">44</span></span
              ></label
            >
          </li>
          <li class="filters__item">
            <label class="control"
              ><input class="visually-hidden control__input" type="checkbox" name="oppo" /><span
                class="control__mark"
              ></span
              ><span class="control__label"
                >OPPO<span class="control__label-qty">36</span></span
              ></label
            >
          </li>
          <li class="filters__item">
            <label class="control"
              ><input class="visually-hidden control__input" type="checkbox" name="honor" /><span
                class="control__mark"
              ></span
              ><span class="control__label"
                >Honor<span class="control__label-qty">10</span></span
              ></label
            >
          </li>
          <li class="filters__item">
            <label class="control"
              ><input class="visually-hidden control__input" type="checkbox" name="motorola" /><span
                class="control__mark"
              ></span
              ><span class="control__label"
                >Motorola<span class="control__label-qty">34</span></span
              ></label
            >
          </li>
          <li class="filters__item">
            <label class="control"
              ><input class="visually-hidden control__input" type="checkbox" name="nokia" /><span
                class="control__mark"
              ></span
              ><span class="control__label"
                >Nokia<span class="control__label-qty">22</span></span
              ></label
            >
          </li>
          <li class="filters__item">
            <label class="control"
              ><input class="visually-hidden control__input" type="checkbox" name="realme" /><span
                class="control__mark"
              ></span
              ><span class="control__label"
                >Realme<span class="control__label-qty">35</span></span
              ></label
            >
          </li>
        </ul>
      </fieldset>
      <fieldset class="filters__group">
        <div class="filters__group-header">
          <legend class="filters__subtitle">Battery capacity</legend>
          <button class="filters__group-btn filters__group-btn--collapsed" type="button">
            <span class="visually-hidden">Expand / Collapse</span>
          </button>
        </div>
      </fieldset>

      <fieldset class="filters__group">
        <div class="filters__group-header">
          <legend class="filters__subtitle">Screen type</legend>
          <button class="filters__group-btn filters__group-btn--collapsed" type="button">
            <span class="visually-hidden">Expand / Collapse</span>
          </button>
        </div>
      </fieldset>

      <fieldset class="filters__group">
        <div class="filters__group-header">
          <legend class="filters__subtitle">Screen diagonal</legend>

          <button class="filters__group-btn filters__group-btn--collapsed" type="button">
            <span class="visually-hidden">Expand / Collapse</span>
          </button>
        </div>
      </fieldset>

      <fieldset class="filters__group">
        <div class="filters__group-header">
          <legend class="filters__subtitle">Protection class</legend>
          <button class="filters__group-btn filters__group-btn--collapsed" type="button">
            <span class="visually-hidden">Expand / Collapse</span>
          </button>
        </div>
      </fieldset>

      <fieldset class="filters__group">
        <div class="filters__group-header">
          <legend class="filters__subtitle">Built-in memory</legend>
          <button class="filters__group-btn filters__group-btn--collapsed" type="button">
            <span class="visually-hidden">Expand / Collapse</span>
          </button>
        </div>
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
  font-style: italic;
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
