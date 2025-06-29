<template>
  <section class="banners">
    <h2 class="visually-hidden">Banners</h2>
    <ul class="banners__list">
      <li class="banners__item banners__item--main">
        <div class="container">
          <p class="banners__lead">Pro.Beyond.</p>
          <h3 class="banners__title">
            <RouterLink to="/catalog" class="banners__link">IPhone 14 Pro</RouterLink>
          </h3>
          <p class="banners__text">Created to change everything for the better. For everyone</p>
          <RouterLink to="/catalog" class="banners__btn btn btn--dark">Shop Now</RouterLink>
        </div>
      </li>
      <li class="banners__item">
        <h3 class="banners__title">
          <RouterLink to="/catalog" class="banners__link">Playstation 5</RouterLink>
        </h3>
        <p class="banners__text">
          Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your
          PlayStation experience.
        </p>
      </li>
      <li class="banners__item">
        <h3 class="banners__title">
          <RouterLink to="/catalog" class="banners__link">Apple AirPods Max</RouterLink>
        </h3>
        <p class="banners__text">Computational audio. Listen, it's powerful</p>
      </li>
      <li class="banners__item">
        <h3 class="banners__title">
          <RouterLink to="/catalog" class="banners__link">Apple Vision Pro</RouterLink>
        </h3>
        <p class="banners__text">An immersive way to experience entertainment</p>
      </li>
      <li class="banners__item">
        <h3 class="banners__title">
          <RouterLink to="/catalog" class="banners__link">Macbook <span>Air</span></RouterLink>
        </h3>
        <p class="banners__text">
          The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid
          Retina display.
        </p>
        <RouterLink to="/catalog" class="banners__btn btn btn--light">Shop Now</RouterLink>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.banners__list {
  display: grid;
  width: 1440px;
  grid-template-columns: repeat(4, 1fr);
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
}
.banners__item {
  background-repeat: no-repeat;

  &:nth-child(2) {
    grid-column: 1/3;
    background-color: var(--Main-White, #fff);
    padding: 100px 48px 100px 334px;
    background-image: url('/images/playstation_hero@2x.png');
    background-size: contain;
    background-position: left -120px bottom;

    .banners__title {
      color: #000;
      margin: 0;
      margin-bottom: 16px;
      font-family: ABeeZee;
      font-size: 49px;
      font-style: italic;
      font-weight: 400;
      line-height: 40px; /* 81.633% */
    }

    .banners__text {
      margin: 0;
      color: #909090;
      font-family: ABeeZee;
      font-size: 14px;
      font-style: italic;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
    }
  }

  &:nth-child(3) {
    grid-column: 1/2;
    background-color: #ededed;
    padding: 50px 48px 50px 156px;
    background-image: url('/images/airpods_hero@2x.png');
    background-size: contain;
    background-position: left -170px bottom;

    .banners__title {
      color: #000;
      font-family: ABeeZee;
      font-size: 29px;
      font-style: italic;
      font-weight: 400;
      line-height: 40px; /* 137.931% */
    }

    .banners__text {
      color: #909090;
      font-family: ABeeZee;
      font-size: 14px;
      font-style: italic;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
    }
  }

  &:nth-child(4) {
    grid-column: 2/3;
    background-color: #353535;
    padding: 56px 58px 50px 156px;
    background-image: url('/images/apple_vision_pro_hero@2x.png');
    background-size: contain;
    background-position: left -205px center;

    .banners__title {
      color: var(--Main-White, #fff);
      font-family: ABeeZee;
      font-size: 29px;
      font-style: italic;
      font-weight: 400;
      line-height: 40px; /* 137.931% */
    }

    .banners__text {
      color: #909090;
      font-family: ABeeZee;
      font-size: 14px;
      font-style: italic;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
    }
  }

  &:nth-child(5) {
    grid-column: 3/5;
    grid-row: 2/4;
    background-color: #ededed;
    padding: 204px 300px 204px 56px;
    background-image: url('/images/macbook_air_hero@2x.png');
    background-size: contain;
    background-position: right center;

    .banners__title {
      color: #000;
      font-family: Abel;
      font-size: 64px;
      font-style: normal;
      font-weight: 400;
      line-height: 56px; /* 87.5% */

      span {
        color: #000;
        font-family: ABeeZee;
        font-size: 64px;
        font-style: italic;
        font-weight: 400;
        line-height: 56px;
      }
    }

    .banners__text {
      color: #909090;
      font-family: ABeeZee;
      font-size: 14px;
      font-style: italic;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
    }
  }
}
.banners__item--main {
  background-image: linear-gradient(91deg, #211c24 0.64%, #211c24 101%);
  grid-column: 1/-1;

  .container {
    padding: 188px 0;
    background-image: url('/images/iphone_hero@2x.png');
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: contain;
  }
}
.banners__lead {
  margin: 0;
  margin-bottom: 24px;
  color: #fff;
  font-family: Abel;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 128% */
}
.banners__title {
  margin: 0;
  margin-bottom: 24px;
  color: #fff;
  font-family: Abel;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px; /* 75% */
  letter-spacing: -0.96px;
}
.banners__text {
  margin: 0;
  margin-bottom: 24px;
  color: #909090;
  font-family: ABeeZee;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
}
.banners__btn {
  padding: 16px 56px;
}
</style>
