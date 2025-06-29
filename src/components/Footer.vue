<script setup>
import About from './About.vue'
import Services from './Services.vue'
import Assistance from './Assistance.vue'
import Social from './Social.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer__wrapper container">
      <About />
      <Services />
      <Assistance />
      <Social />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--Main-Black, #000);
}
.footer__wrapper {
  padding: 104px 0;
  display: grid;
  grid-template-columns: 1fr 295px 295px;
}

.footer__about {
  margin: 0;
  color: #cfcfcf;
  font-family: ABeeZee;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 170.5%; /* 23.87px */
}
</style>
