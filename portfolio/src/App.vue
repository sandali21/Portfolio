<script setup>
import Home from './components/Home.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1> Welcome to My Portfolio! </h1> <br/>
      <img alt="Vue logo" class="logo" src="./assets/favicon.png" width="125" height="125" />
    </div>
  </header>

  <main>
    <Home />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  color: rgb(34, 223, 182);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
