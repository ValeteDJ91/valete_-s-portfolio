<script setup lang="ts">

defineProps({
  sectionInfo: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="carrousel-container">
    <img src="http://localhost:3000/images/home.png">
  </div>
</template>

<style>
.carrousel-container {
  height: 100px;
  overflow: hidden;
}
</style>
