<script setup lang="ts">
import ProjectPresentation from '../components/ProjectPresentation.vue'
import Navigation from '../components/Navigation.vue'
</script>

<template>
  <header>
    <ProjectPresentation />
    <Navigation />
  </header>
  <h1>{{ $route.params.project }}</h1>
</template>

<style>
</style>
