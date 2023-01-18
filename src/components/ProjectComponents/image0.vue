<script setup lang="ts">

defineProps({
  sectionInfo: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="image0-container" v-if="sectionInfo.hasOwnProperty('image')">
    <img class="image0-image" v-for="image in sectionInfo?.image" :src="`${image}`">
  </div>
</template>

<style>
.image0-container{
  width: 100%;
  overflow: hidden;
  display: flex;
  padding: 20px;
  overflow-x: scroll;
}
.image0-image {
  max-height: 30vh;
  max-width: 30vw;
  object-fit: cover;
  display: inline-block;
  margin: auto;
  padding-right: 13px;
  padding-left: 13px;
}
</style>
