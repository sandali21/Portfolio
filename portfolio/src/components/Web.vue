<script setup>
  import Nav from './Nav.vue'
</script>

<template>
    <Nav></Nav> <br/>
    <div class="projects">
      <div class="list">
        <img src="@/assets/movie.png" width="350px"> 
      </div>
      <div class="list">
        <h3>Movie Exploration</h3> <br/>
        <p> A responsive web application that allows users to search for movies, view trending films, and explore detailed movie information using the TMDb (The Movie Database) API.</p>
        <p> Build with: <br/>
          React (for frontend), TMDb API,
          YouTube Embed (for trailers),
          Netlify (for deployment)
        </p>
        <a href="https://filmspot-movieexplorer.netlify.app/" class="demo" target="_blank" rel="noopener">👉 View the Live App </a> <br/> <br/>
        <p> <i class="fab fa-github"> </i> &nbsp; GitHub Link - <router-link to="https://github.com/sandali21/MovieExplorer" class="demo"> MovieExplorer </router-link></p>
      </div>
    </div>

    <!--
    <div class="projects">
      <div class="list">
        <h3>Aarudhra Matrimony Website</h3>
        <br />
        <p> React.js and MySQL. Internship Project </p>
        <a href="https://filmspot-movieexplorer.netlify.app/" class="demo" target="_blank" rel="noopener">👉 View the Live App </a> <br/> <br/>
        <p> <i class="fab fa-github"> </i> GitHub Link - <a href="https://github.com/sandali21/MovieExplorer" class="demo" target="_blank" rel="noopener"> Aarudhra </a></p>      
      </div>
      <div class="list">
        <img src="@/assets/wed2.png" width="300px"> 
      </div>
    </div>
    <div class="projects">
      <div class="list">
        <img src="@/assets/todo.png" width="300px"> 
      </div>
      <div class="list">
        <h3>To-Do List App</h3>
        <br />
        <p></p>
        <a href="https://filmspot-movieexplorer.netlify.app/" class="demo" target="_blank" rel="noopener">👉 View the Live App </a> <br/> <br/>
        <p> <i class="fab fa-github"> </i> GitHub Link - <a href="https://github.com/sandali21/MovieExplorer" class="demo" target="_blank" rel="noopener"> MovieExplorer </a></p>      
      </div>
    </div>
    <div class="projects">
      <div class="list">
        <h3>Book Review App</h3> <br/>
        <p>
          The Book Review App is a full-stack web application that allows users to browse, add, edit, and delete reviews for their favorite books. It provides an intuitive platform for users to share their opinions, rate books, and discover reviews from the community. The app is built using the MERN stack (SQL, Express.js, React.js, Node.js) and includes basic CRUD functionality with a responsive user interface.
        Built With
          </p>
        <a href="https://filmspot-movieexplorer.netlify.app/" class="demo">👉 View the Live App </a> <br/> <br/>
        <p> <i class="fab fa-github"> </i> GitHub Link - <a href="https://github.com/sandali21/MovieExplorer" class="demo"> MovieExplorer </a></p>
      </div>
      <div class="list">
        <img src="@/assets/review.png" width="350px" > 
      </div>
    </div>
    -->
</template>

<style scoped>
  
</style>
