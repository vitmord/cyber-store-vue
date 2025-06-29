<template>
  <section class="footer__social social">
    <h3 class="visually-hidden">Social</h3>
    <ul class="social__list">
      <li class="social__item">
        <a class="social__link social__link--tw" href="#"
          ><span class="visually-hidden">Twitter</span></a
        >
      </li>
      <li class="social__item">
        <a class="social__link social__link--fb" href="#"
          ><span class="visually-hidden">Facebook</span></a
        >
      </li>
      <li class="social__item">
        <a class="social__link social__link--tiktok" href="#"
          ><span class="visually-hidden">Tiktok</span></a
        >
      </li>
      <li class="social__item">
        <a class="social__link social__link--ig" href="#"
          ><span class="visually-hidden">IG</span></a
        >
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.social__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 175px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.social__item {
  width: 16px;
  height: 16px;
}
.social__link {
  display: block;
  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-position: center;
}
.social__link--tw {
  background-image: url('/icons/twitter.svg');
}
.social__link--fb {
  background-image: url('/icons/facebook.svg');
}
.social__link--tiktok {
  background-image: url('/icons/tiktok.svg');
}
.social__link--ig {
  background-image: url('/icons/instagram.svg');
}
</style>
