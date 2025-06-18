<script setup>
  import Nav from './Nav.vue'
</script>


<template>
    <Nav></Nav> <br/>
    <div class="projects">
      <div class="list">
        <img src="@/assets/mobile3.png" width="325px"> 
      </div>
      <div class="list">
        <h3>Fitness App</h3> <br/>
        <p> Frontend
          Flutter (Dart) – Cross-platform mobile app development
          Backend / Logic
          Dart (in-app logic) – For TF-IDF vectorization and Cosine Similarity-based recommendation engine
          Knowledge-based system logic – To generate personalized day-wise plans </p>
        <router-link to="https://github.com/sandali21/FitGenius"> FitGenius </router-link>
      </div>
    </div>
    
</template>
  