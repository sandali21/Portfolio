<script setup>
  import Nav from './Nav.vue'
</script>

<template>
    <Nav></Nav> <br/>
    <div class="projects">
      <div class="list">
        <img src="@/assets/wed1.png" width="300px"> 
      </div>
      <div class="list">
        <h3>UI/UX Design for Aarudhra Matrimony Website</h3> <br/>
        <p> Internship Project </p> <br/>
        <p> <i class="fab fa-github"> </i> Link to Figma - <router-link to="https://github.com/sandali21/MovieExplorer" class="demo"> Aarudhra </router-link></p>    
      </div>
    </div>
    <div class="projects">
      <div class="list">
        <h3>UI/UX Re-Design for Smart Market Website</h3>
        <br />
        <p> React.js and MySQL. Internship Project</p>
        <router-link to="https://filmspot-movieexplorer.netlify.app/" class="demo">👉 View the Current App </router-link> <br/> <br/>
        <p> <i class="fab fa-github"> </i> Link to Figma - <router-link to="https://github.com/sandali21/MovieExplorer" class="demo"> Smart Market </router-link></p>
      </div>
      <div class="list">
        <img src="@/assets/market.png" width="300px"> 
      </div>
    </div>
    
</template>
  