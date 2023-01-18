<script setup lang="ts">
import Presentation from '../components/HomeHeader.vue'
import Navigation from '../components/BaseNavigation.vue'
</script>

<template>
  <header>
    <Presentation />
    <Navigation />
  </header>
  <div class="Profil-Resume">
    <img :src="`http://localhost:3000/images/me/${Math.floor(Math.random() * 3 + 1)}.png`" class="Profil-Image">
    <div class="Profil-Info">
      <h1>👋 Hi, I'm Valentin Perier--Picard</h1>
      <p>a 18 year old french System Administrator and developer.</p>
      <p>I started developing in 2017 at a summer camp, where I created my first website in HTML and CSS. In 2018 I discovered discord and discord's bot, I tried creating one using Nodejs. At the same time, I was playing Minecraft and started developing mods and plugins in Java and also managing Linux VPS where I learned to use Linux, SSH, FTP, port management and firewall. Then, during Covid LockDown I tried other languages like PHP to create online management panels, Electron to create a desktop app using Javascript. And finally, in 2021 I fell in love with managing physical servers, I started a HomeLab with second-hand servers and switches. By managing and monitoring my servers I learned to use Proxmox, Grafana, and Prometheus.</p>
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
        <h2>Used Framework</h2>
        <ul>
          <li>Nodejs</li>
          <li>Express</li>
          <li>Vuejs</li>
          <li>Electron</li>
        </ul>
      </div>
      <div class="Skill-Database">
        <h2>Used Database</h2>
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
    <a>Education</a>
    <div class="Education-Container">
      <img src="https://via.placeholder.com/256x256">
      <div class="Education-Info">
        <h2>SCHOOL NAME</h2>
        <p>Bachelor's degree</p>
        <p>2020-2023</p>
      </div>
    </div>
  </div>
  <div class="category">
    <a>Experiences</a>
  </div>
  <div class="category">
    <a>Certifications</a>
  </div>
  <div class="category">
    <a>Links</a>
    <div class="Links-Container">
      <a href="http://google.com"><font-awesome-icon icon="fa-brands fa-linkedin" class="fa-icon-link"/><p>LinkedIn</p></a>
      <a href="http://google.com"><font-awesome-icon icon="fa-brands fa-github" class="fa-icon-link"/><p>Github</p></a>
      <a href="http://google.com"><font-awesome-icon icon="fa-brands fa-twitter" class="fa-icon-link"/><p>Twitter</p></a>
    </div>
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
  min-height: 200px;
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
.Education-Container {
  margin-top: 30px;
}
.Education-Container > img {
  height: 9rem;
  width: 9rem;
  object-fit: cover;
  display: inline-block;
}
.Education-Info {
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
  font-size: 1.2rem;
  text-align: left;
}
.Education-Info h2 {
  font-size: 1.9rem;
  font-weight: 600;
}
.Education-Info p {
  line-height: 1.25rem;
}
.Links-Container {
  margin-top: 20px;
}
.Links-Container > a {
  margin-top: 20px;
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
  border-left: 1px solid var(--color-border);
  margin-left: 8px;
  padding-left: 14px;
}
.Links-Container > a:hover > p {
  color: var(--vt-c-purple-ligther);
  text-decoration: underline;
}
.Links-Container > a > p {
  display: inline-block;
}
.Links-Container > a:first-of-type {
  border: 0
}
.Links-Container > * {
  display: inline-block;
}
.fa-icon-link {
  margin-right: 5px;
  font-size: 1.6rem;
}
</style>
