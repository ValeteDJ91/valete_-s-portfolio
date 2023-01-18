<script setup lang="ts">
import { ref } from 'vue'
import ProjectPresentation from '../components/ProjectHeader.vue'
import Navigation from '../components/BaseNavigation.vue'
import carrousel from '../components/ProjectComponents/carrousel.vue'
import text0 from '../components/ProjectComponents/text0.vue'
import text1 from '../components/ProjectComponents/text1.vue'
import image0 from '../components/ProjectComponents/image0.vue'
import feature0 from '../components/ProjectComponents/feature0.vue'
import {useRoute} from "vue-router";
const route = useRoute();

const projectInfo = ref();
fetch(`http://localhost:3000/project/${route.params.project}`).then(async res => {
  projectInfo.value = await res.json();
});
</script>

<template>
  <header>
    <ProjectPresentation :projectInfo="projectInfo"/>
    <Navigation />
  </header>
  <template v-for="section in projectInfo?.sections">
    <h2>{{ section }}</h2>
    <carrousel v-if="section.type == 'carrousel'" :sectionInfo="section"/>
    <text0 v-if="section.type == 'text0'" :sectionInfo="section"/>
    <text1 v-if="section.type == 'text1'" :sectionInfo="section"/>
    <image0 v-if="section.type == 'image0'" :sectionInfo="section"/>
    <feature0 v-if="section.type == 'feature0'" :sectionInfo="section"/>
  </template>
</template>

<style>
</style>
