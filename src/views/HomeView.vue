<script setup lang="ts">
import Presentation from '../components/Presentation.vue'
import Showcase from '../components/Showcase.vue'
</script>

<template>
  <main>
    <Presentation />
  </main>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
  <Showcase ProjectName="showcase1"/>
  <Showcase ProjectName="showcase1"/>
  <Showcase ProjectName="showcase1"/>
</template>

<style>
nav {
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
