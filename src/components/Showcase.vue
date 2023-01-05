<script setup lang="ts">
defineProps({
  ProjectName: {
    type: String,
    required: false
  }
})

const ProjectList = [
  {name:"Showcase1",description:"Showcase1 description"}, 
  {name:"Showcase2",description:"Showcase2 description"}, 
  {name:"Showcase3",description:"Showcase3 description"}
]
</script>

<template>
  <div class="showcase-container">
    <img :src="`src/assets/images/showcase/${ProjectName}.png`" class="image-showcase"/>
    <div class="showcase-info">
      <h1>{{ ProjectName }}</h1>
      <p>{{ ProjectList.find(element => element.name == ProjectName)?.description }}</p>
      <RouterLink :to="`/project/${ProjectName}`">{{ ProjectName }}</RouterLink>
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
  font-size: 2.5rem;
  line-height: 3.5rem;
  color: white;
}
.showcase-info > p {
  font-size: 0.8rem;
  color: white;
  padding-left: 10px;
}
</style>
