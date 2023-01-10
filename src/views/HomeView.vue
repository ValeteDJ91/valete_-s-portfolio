<script setup lang="ts">
import Presentation from '../components/Presentation.vue'
import Navigation from '../components/Navigation.vue'
import Showcase from '../components/Showcase.vue'

const ProjectList = [
  {name:"Showcase1",description:"Showcase1 description"}, 
  {name:"Showcase2",description:"Showcase2 description"}, 
  {name:"Showcase3",description:"Showcase3 description"}
]
</script>

<template>
  <header>
    <Presentation />
    <Navigation />
  </header>
  <div class="category-title">
    <a>About me</a>
  </div>
  <div class="me">
    <img :src="`src/assets/images/me/${Math.floor(Math.random() * 3 + 1)}.png`" class="Personal-Image">
    <div class="Personal-Info">
      <h1>👋 Hi, I'm Valentin Perier--Picard</h1>
      <p>a 18 year old system admin and developer</p>
      <RouterLink :to="`/aboutme`">More about me</RouterLink>
    </div>
  </div>
  <div class="category-title">
    <a>My main projects</a>
  </div>
  <Showcase v-for="project in ProjectList" :ProjectName="project.name"/>
</template>

<style>
.category-title {
  text-align: center;
  width: 100%;
  padding-bottom: 25px;
  padding-top: 10px;
}
.category-title > a {
  color: white;
  font-weight: 600;
  width: fit-content;
  font-size: 3rem;
  text-decoration: none;
  background-image: linear-gradient(90deg,#F17C58,#E94584,#24AADB,#27DBB1,#FFDC18,#FF3706);
  background-size: 400% 3px;
  background-repeat: no-repeat;
  background-position: left bottom;
  animation: titlegradient 15s linear infinite;
  animation-direction: alternate;
}
@keyframes titlegradient {
    0% {background-position: left bottom;}
    100% {background-position: right bottom;}
}
.category-title > a:hover {
  background-color: none;
}
.me {
  width: 55vw;
  text-align: center;
  vertical-align: middle;
  display: grid;
  grid-template-areas:
    'Personal-Image Personal-Info';
  margin: auto;
}
.Personal-Image {
  height: 35vh;
  width: 35vh;
  border-radius: 5%;
  object-fit: cover;
  margin-right: 20px;
  grid-area: Personal-Image;
}
.Personal-Info {
  grid-area: Personal-Info;
}
.Personal-Info > h1 {
  font-size: 2.8rem;
  line-height: 85px;
}
.Personal-Info > p {
  font-size: 1.15rem;
}
.Personal-Info > a {
  position: absolute;
  font-size: 1.1rem;
  background-color: var(--vt-c-purple);
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: white;
  bottom: 10px;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.4s;
  transform: translateX(-50%);
}

@media (hover: hover) {
  .Personal-Info > a:hover {
    background-color: var(--vt-c-purple-ligther);
  }
}
</style>
