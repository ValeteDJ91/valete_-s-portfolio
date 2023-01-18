<script setup lang="ts">
import {useRoute} from "vue-router";
const route = useRoute();
const id = route.params.id;

defineProps({
  projectInfo: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="project-header">
    <div class="project-header-background" :style="`background-image:url(http://localhost:3000/images/showcase/${$route.params.project}.png)`">
    </div>
    <div class="project-header-text">
      <h1>{{ projectInfo?.name }}</h1>
      <h3>{{ projectInfo?.description }}</h3>
    </div>
  </div>
</template>

<style>
.project-header {
  text-align: center;
  height: 40vh;
}
.project-header-text {
  color: white;
  top: 50%;
  transform: translateY(-50%);
}
.project-header-text > h1 {
  font-size: 4.8rem;
  line-height: 85px;
  text-shadow: 0 0 20px #fff;
}
.project-header-text > h3 {
  font-size: 1.4rem;
  text-shadow: 0 0 20px #fff;
}
.project-header-background {
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  overflow: hidden;
  background: none;
  background-size: 100%;
  animation: initial;
  animation-direction: initial;
  background-position: center;
}
</style>
