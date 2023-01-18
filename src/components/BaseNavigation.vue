<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/aboutme">About me</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/homeLab">HomeLab</RouterLink>
    </nav>
  </div>
</template>

<style>
nav {
  width: 100%;
  font-size: 1.4rem;
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
</style>
