<template>
  <section class="popular">
    <h2 class="visually-hidden">Popular categories</h2>
    <ul class="popular__list">
      <li class="popular__item">
        <img
          class="popular__img"
          src="/images/banner_popular_products@2x.png"
          alt="Popular products"
        />
        <h3 class="popular__title"><a class="popular__link" href="#">Popular products</a></h3>
        <p class="popular__description">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking
          and ease of use.
        </p>
        <a class="popular__btn btn btn--light" href="#">Shop Now</a>
      </li>
      <li class="popular__item">
        <img class="popular__img" src="/images/banner_ipad_pro@2x.png" alt="Ipad Pro" />
        <h3 class="popular__title"><a class="popular__link" href="#">Ipad Pro</a></h3>
        <p class="popular__description">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking
          and ease of use.
        </p>
        <a class="popular__btn btn btn--light" href="#">Shop Now</a>
      </li>
      <li class="popular__item">
        <img class="popular__img" src="/images/banner_samsung_galaxy@2x.png" alt="Samsung Galaxy" />
        <h3 class="popular__title"><a class="popular__link" href="#">Samsung Galaxy</a></h3>
        <p class="popular__description">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking
          and ease of use.
        </p>
        <a class="popular__btn btn btn--light" href="#">Shop Now</a>
      </li>
      <li class="popular__item">
        <img class="popular__img" src="/images/banner_macbook_pro@2x.png" alt="Macbook Pro" />
        <h3 class="popular__title"><a class="popular__link" href="#">Macbook Pro</a></h3>
        <p class="popular__description">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking
          and ease of use.
        </p>
        <a class="popular__btn btn btn--dark" href="#">Shop Now</a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.popular {
  max-width: 1440px;
  margin: 0 auto;
}
.popular__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.popular__item {
  padding: 46px 32px 56px;
  display: flex;
  flex-direction: column;

  &:nth-child(1) {
  }

  &:nth-child(2) {
    background-color: #f9f9f9;
  }

  &:nth-child(3) {
    background-color: #eaeaea;
  }

  &:nth-child(4) {
    background-color: #2c2c2c;

    .popular__title {
      color: #fff;
    }
  }
}
.popular__img {
}
.popular__title {
  margin: 0;
  margin-bottom: 16px;
  margin-top: auto;
  color: #000;
  font-family: ABeeZee;
  font-size: 33px;
  font-style: italic;
  font-weight: 400;
  line-height: 48px; /* 145.455% */
}
.popular__link {
}
.popular__description {
  margin: 0;
  margin-bottom: 16px;
  color: #909090;
  font-family: ABeeZee;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
}
.popular__btn {
  align-self: start;
}
</style>
