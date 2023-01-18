<script setup lang="ts">

defineProps({
  sectionInfo: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="text0-container">
    <img class="text0-image" v-if="sectionInfo.hasOwnProperty('image')" :src="`${sectionInfo?.image}`">
    <div class="text0-content">
      <h1 v-if="sectionInfo.hasOwnProperty('title')"> {{ sectionInfo?.title }} </h1>
      <h2 v-if="sectionInfo.hasOwnProperty('subtitle')"> {{ sectionInfo?.subtitle }} </h2>
      <p v-if="sectionInfo.hasOwnProperty('text')"> {{ sectionInfo?.text }} </p>
    </div>
  </div>
</template>

<style>
.text0-container{
  width: 100%;
  overflow: hidden;
}
.text0-image {
  height: 30vh;
  width: 30vh;
  object-fit: cover;
  margin-left: 7vw;
}
.text0-content {
  display: inline-block;
  vertical-align: top;
  margin-top: 1vh;
  margin-left: 6vw;
}
</style>
