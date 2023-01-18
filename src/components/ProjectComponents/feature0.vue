<script setup lang="ts">

defineProps({
  sectionInfo: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="feature0-container">
    <div class="feature0-content-container" v-if="sectionInfo.hasOwnProperty('content')" v-for="content in sectionInfo?.content">
      <img class="feature0-image" :src="`${content.image}`">
      <h1>{{ content.title }}</h1>
      <h3>{{ content.description }}</h3>
    </div>
  </div>
</template>

<style>
.feature0-container{
  width: 100%;
  overflow: hidden;
  display: flex;
  margin: auto;
}
.feature0-content-container{
  display: inline-flex;
  padding: 20px;
  flex-direction: column;
  text-align: center;
  flex-grow: 2;
}
.feature0-content-container > h1 {
  font-size: 2.2rem;
  display: block;
  line-height: 1.2;
}
.feature0-content-container > h3 {
  display: block;
  line-height: 0.8;
}
.feature0-image {
  max-height: 30vh;
  max-width: 30vh;
  object-fit: cover;
  display: block;
  flex-grow: 2;
  margin: auto;
}
</style>
