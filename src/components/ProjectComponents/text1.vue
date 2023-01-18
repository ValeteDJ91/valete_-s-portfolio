<script setup lang="ts">

defineProps({
  sectionInfo: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="text1-container">
    <div class="text1-content-container1">
      <img class="text1-image" v-if="sectionInfo.hasOwnProperty('image1')" :src="`${sectionInfo?.image1}`">
      <div class="text1-content">
        <h1 v-if="sectionInfo.hasOwnProperty('title1')"> {{ sectionInfo?.title1 }} </h1>
        <h2 v-if="sectionInfo.hasOwnProperty('subtitle1')"> {{ sectionInfo?.subtitle1 }} </h2>
        <p v-if="sectionInfo.hasOwnProperty('text1')"> {{ sectionInfo?.text1 }} </p>
      </div>
    </div>
    <div class="text1-content-container2">
      <img class="text1-image" v-if="sectionInfo.hasOwnProperty('image2')" :src="`${sectionInfo?.image2}`">
      <div class="text1-content">
        <h1 v-if="sectionInfo.hasOwnProperty('title2')"> {{ sectionInfo?.title2 }} </h1>
        <h2 v-if="sectionInfo.hasOwnProperty('subtitle2')"> {{ sectionInfo?.subtitle2 }} </h2>
        <p v-if="sectionInfo.hasOwnProperty('text2')"> {{ sectionInfo?.text2 }} </p>
      </div>
    </div>
  </div>
</template>

<style>
.text1-container{
  width: 90%;
  overflow: hidden;
  display: grid;
  grid-template-areas:
    'text1-content-container1 text1-content-container2';
  grid-template-columns: repeat(auto-fit, minmax(min(80%, 250px), 1fr));
  margin: auto;
}
.text1-image {
  height: 30vh;
  width: 30vh;
  object-fit: cover;
}
.text1-content-container1 {
  grid-area: text1-content-container1;
}
.text1-content-container2 {
  grid-area: text1-content-container2;
  margin-left: 15px;
}
.text1-content {
  display: inline-block;
  vertical-align: top;
  margin-top: 1vh;
  margin-left: 3vw;
}
</style>
