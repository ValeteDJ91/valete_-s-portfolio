<script setup lang="ts">
</script>

<template>
  <div class="main-header">
    <div class="main-header-background">
      <i v-for="index in 300"></i>
    </div>
    <div class="main-header-text">
      <h1>All my projects</h1>
    </div>
  </div>
</template>

<style>
.main-header {
  text-align: center;
  height: 30vh;
}
.main-header-text {
  color: white;
  top: 50%;
  transform: translateY(-60%);
}
.main-header-text > h1 {
  font-size: 4.8rem;
  line-height: 85px;
  text-shadow: 0 0 20px #fff;
}
.main-header-background {
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
  background: linear-gradient(45deg,#F17C58,#E94584,#24AADB,#27DBB1,#FFDC18,#FF3706);
  background-size: 400% 100%;
  animation: gradient 16s linear infinite;
  animation-direction: alternate;
}
.main-header-background > i {
  position: relative;
  max-width: 70px;
  max-height: 70px;
  min-width: 60px;
  min-height: 60px;
  background-color: var(--vt-c-black-soft);
  flex-grow: 2
}
@keyframes gradient {
    0% {background-position: 0%}
    100% {background-position: 100%}
}
</style>
