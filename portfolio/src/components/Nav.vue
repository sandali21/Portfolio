<template>
    <div class="nav-class">
        <router-link to="/">HOME</router-link>
        <router-link to="/web">WEB DEVELOPMENT</router-link>
        <router-link to="/mobile">MOBILE DEVELOPMENT</router-link>
        <router-link to="/ui">UI/UX</router-link>
        <router-link to="/data">DATA ANALYTICS</router-link>
    </div>
</template>

<style scoped>
   .nav-class{
        justify-content: space-between;
   }

   .nav-class a:hover{
    color: #f8fafc;
   }
</style>