<script setup lang="ts">
import { reactive } from 'vue'

const ProjectList = reactive(Array());
fetch("http://localhost:3000/projects").then(async res => {
  ProjectList.push(...await res.json());
});
</script>

<template>
  <div class="showcase-container" v-for="project in ProjectList" :ProjectName="project?.name">
    <img :src="`http://localhost:3000/images/showcase/${project?.name}.png`" class="image-showcase"/>
    <div class="showcase-info">
      <h1>{{ project?.name }}</h1>
      <p>{{ ProjectList.find(element => element.name == project?.name)?.description }}</p>
      <RouterLink :to="`/project/${project?.name}`">More about {{ project?.name }}</RouterLink>
    </div>
  </div>
</template>

<style>
.showcase-container {
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.image-showcase {
  width: 63vw;
  vertical-align: middle;
  z-index: -10;
  top: 50%;
  transform: translateY(-50%);
}
.showcase-info {
  float: right;
  width: 45vw;
  height: 400px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--vt-c-purple-ligth);
  overflow: hidden;
  padding: 15px;
  padding-left: 125px;
  --mask:
    radial-gradient(168.24px at 228.00px 50%,#000 99%,#0000 101%) 0 calc(50% - 160px)/100% 320px,
    radial-gradient(168.24px at -148px 50%,#0000 99%,#000 101%) 80px 50%/100% 320px repeat-y;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}
.showcase-container:nth-child(even) > .image-showcase {
  width: 63vw;
  vertical-align: middle;
  z-index: -10;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  right: 0;
}
.showcase-container:nth-child(even) > .showcase-info {
  float: left;
  width: 45vw;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--vt-c-purple-ligth);
  overflow: hidden;
  padding: 15px;
  padding-right: 125px;
  --mask:
    radial-gradient(168.24px at calc(100% - 228.00px) 50%,#000 99%,#0000 101%) 0 calc(50% - 160px)/100% 320px,
    radial-gradient(168.24px at calc(100% + 148.00px) 50%,#0000 99%,#000 101%) calc(100% - 80px) 50%/100% 320px repeat-y;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}
.showcase-info > h1 {
  font-size: 3rem;
  line-height: 4rem;
  color: white;
}
.showcase-info > p {
  overflow: hidden;
  font-size: 1rem;
  color: white;
  padding-left: 10px;
  max-height: 230px;
  max-width: 36vw;
  text-overflow: ellipsis; 
}
.showcase-info > a {
  font-size: 1.1rem;
  background-color: var(--vt-c-purple);
  display: inline-block;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: white;
  position: absolute;
  bottom: 20px;
  right: 10vw;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.4s;
}

@media (hover: hover) {
  .showcase-info > a:hover {
    background-color: var(--vt-c-purple-background);
  }
}
.showcase-container:nth-child(odd) > .showcase-info > a {
  right: 4vw;
}
</style>
