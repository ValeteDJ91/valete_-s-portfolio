<script setup lang="ts">
import Presentation from '../components/Presentation.vue'
import Navigation from '../components/Navigation.vue'
</script>

<template>
  <header>
    <Presentation />
    <Navigation />
  </header>
  <div class="Profil-Resume">
    <img :src="`src/assets/images/me/${Math.floor(Math.random() * 3 + 1)}.png`" class="Profil-Image">
    <div class="Profil-Info">
      <h1>👋 Hi, I'm Valentin Perier--Picard</h1>
      <p>a 18 year old french Sustem Administrator and developer</p>
    </div>
  </div>
  <div class="category">
    <a>Skills</a>
    <div class="Skill-Container">
      <div class="Skill-Languages">
        <h2>Programming Languages</h2>
        <ul>
          <li>Javascript</li>
          <li>HTML/CSS</li>
          <li>PHP</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </div>
      <div class="Skill-Framework">
        <h2>Known Framework</h2>
        <ul>
          <li>Nodejs</li>
          <li>Express</li>
          <li>Vuejs</li>
          <li>Electron</li>
        </ul>
      </div>
      <div class="Skill-Database">
        <h2>Known Database</h2>
        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
      <div class="Skill-Devops">
        <h2>Devops</h2>
        <ul>
          <li>Git</li>
          <li>Bash</li>
        </ul>
      </div>
      <div class="Skill-SysAdmin">
        <h2>SysAdmin</h2>
        <ul>
          <li>Proxmox</li>
          <li>GNU/Linux</li>
          <li>Switch Management</li>
        </ul>
      </div>
      <div class="Skill-Other">
        <h2>Other</h2>
        <ul>
          <li>NONE</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="category">
    <a>Educations</a>
  </div>
  <div class="category">
    <a>Experiences</a>
  </div>
  <div class="category">
    <a>Certifications</a>
  </div>
</template>

<style>
.Profil-Resume {
  width: 60vw;
  text-align: center;
  vertical-align: middle;
  display: grid;
  grid-template-areas:
    'Profil-Image Profil-Info';
  grid-template-columns: 40vh 2fr;
  margin: auto;
  margin-top: 30px;
}
.Profil-Image {
  height: 40vh;
  width: 40vh;
  border-radius: 5%;
  object-fit: cover;
  grid-area: Profil-Image;
}
.Profil-Info {
  margin-left: 20px;
  text-align: left;
  grid-area: Profil-Info;
}
.Profil-Info > h1 {
  font-size: 2.8rem;
  line-height: 85px;
}
.Profil-Info > p {
  font-size: 1.15rem;
}
.category {
  text-align: center;
  width: 100%;
  min-height: 400px;
  padding-bottom: 20px;
  /*background: linear-gradient(0deg, var(--vt-c-black-soft) 0%, var(--vt-c-black) 10%, var(--vt-c-black) 100%); */
}
/*.category:nth-child(odd) {
  background: linear-gradient(0deg, var(--vt-c-black) 0%, var(--vt-c-black-soft) 10%, var(--vt-c-black-soft) 100%)
  background-color: var(--vt-c-black-soft);
}*/
.category > a {
  color: white;
  font-weight: 700;
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
.category > a:hover {
  background-color: none;
}
.Skill-Container {
  width: 70vw;
  display: grid;
  grid-template-areas:
    'Languages Framework Database'
    'Devops SysAdmin Other';
  margin: auto;
  margin-top: 20px;
  grid-template-columns: repeat(3, minmax(min(80%, 250px), 1fr));
  grid-template-rows: repeat(auto-fit, minmax(min(80%, 250px), 1fr));
  text-align: left;
  font-size: 1.05rem;
}
.Skill-Container h2 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  text-decoration: underline;
}
.Skill-Languages {
  grid-area: Languages;
}
.Skill-Framework {
  grid-area: Framework;
}
.Skill-Database {
  grid-area: Database;
}
.Skill-Devops {
  grid-area: Devops;
}
.Skill-SysAdmin {
  grid-area: SysAdmin;
}
.Skill-Other {
  grid-area: Other;
}
</style>
