<script setup lang="ts">
import { reactive } from 'vue'
import ProjectsPresentation from '../components/ProjectsPresentation.vue'
import Navigation from '../components/Navigation.vue'
import ProjectFront from '../components/ProjectFront.vue'

const ProjectList = reactive([
  {name:"Showcase1",description:"Showcase1 description"}, 
  {name:"Showcase2",description:"Showcase2 description"}, 
  {name:"Showcase3",description:"Showcase3 description"}
])

function debug() {
  document.getElementById("debug").innerHTML = JSON.stringify(ProjectList);
}

function append() {
  ProjectList.push({name:"Showcase4",description:"Showcase4 description"})
}
</script>

<template>
  <header>
    <ProjectsPresentation />
    <Navigation />
  </header>
  <div class="filter-container">
    
  </div>
  <ProjectFront v-for="project in ProjectList" :ProjectName="project.name"/>
  <button @click='append()'>Append</button>
  <button @click='debug()'>Debug</button><h1 id="debug"></h1>
</template>

<style>
</style>
