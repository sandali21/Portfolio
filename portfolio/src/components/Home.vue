<script setup>
import WelcomeItem from './Item.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon> <router-link to="/web" ></router-link>
    </template>
    <template #heading>Web App Development</template>

    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon> <router-link to="/mobile" ></router-link>
    </template>
    <template #heading>Mobile App Development</template>

    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon> <router-link to="/ui" ></router-link>
    </template>
    <template #heading>UI/UX</template>

    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon> <router-link to="/data" ></router-link>
    </template>
    <template #heading>Data Analytics</template>

   
  </WelcomeItem>
</template>
