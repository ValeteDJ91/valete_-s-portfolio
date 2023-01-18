<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <footer>
    <a>Valete_ © 2022-2023</a>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}
footer {
  float: right;
  right: 40px;
  font-size: 1rem;
  font-weight: 600;
}
</style>
