<script setup lang="ts">
import { reactive } from 'vue'

const ProjectList = reactive(Array());
fetch("http://localhost:3000/projects").then(async res => {
  ProjectList.push(...await res.json());
});
</script>

<template>
  <div class="front-container" v-for="project in ProjectList">
    <img :src="`http://localhost:3000/images/showcase/${project?.name}.png`" class="image-front"/>
    <div class="front-info">
      <h1>{{ project?.name }}</h1>
      <p>{{ ProjectList.find(element => element.name == project?.name)?.description }}</p>
      <RouterLink :to="`/project/${project?.name}`">More about {{ project?.name }}</RouterLink>
    </div>
  </div>
</template>

<style>
.front-container {
  width: 100%;
  height: 350px;
  overflow: hidden;
}
.image-front {
  width: 63vw;
  vertical-align: middle;
  z-index: -10;
  top: 50%;
  transform: translateY(-50%);
}
.front-info {
  float: right;
  width: 45vw;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--vt-c-purple-dark);
  background: linear-gradient(90deg, #ffffff00 0%, var(--vt-c-purple-dark) 7%);
  overflow: hidden;
  padding: 15px;
  padding-left: 4vw;
}
.front-info > h1 {
  font-size: 3rem;
  line-height: 4rem;
  max-width: 39vw;
  color: white;
}
.front-info > p {
  overflow: hidden;
  font-size: 1rem;
  color: white;
  padding-left: 10px;
  max-height: 180px;
  max-width: 39vw;
  text-overflow: ellipsis; 
}
.front-info > a {
  font-size: 1.1rem;
  background-color: var(--vt-c-purple);
  display: inline-block;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: white;
  position: absolute;
  bottom: 5%;
  right: 2vw;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.4s;
}

@media (hover: hover) {
  .front-info > a:hover {
    background-color: var(--vt-c-purple-background);
  }
}
.front-container:nth-child(odd) > .showcase-info > a {
  right: 4vw;
}
</style>
