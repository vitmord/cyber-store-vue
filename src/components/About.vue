<template>
  <section class="footer__about about">
    <h2 class="visually-hidden">About us</h2>

    <RouterLink to="/" class="about__logo logo">
      <img
        class="logo__img logo__img--light"
        src="/images/logo_white.svg"
        alt="Cyber Store Logo"
        width="65"
        height="23"
    /></RouterLink>
    <p class="about__text">
      We are a residential interior design firm located in Portland. Our boutique-studio offers more
      than
    </p>
  </section>
</template>

<style lang="scss" scoped>
.about {
  max-width: 384px;
}

.about__logo {
  display: block;
  margin-bottom: 24px;
}
</style>
