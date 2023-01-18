import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
//import { faSolid } from '@fortawesome/free-solid-svg-icons'
//import { faRegular } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faLinkedin, faGithub, faTwitter)

import './assets/main.css'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
