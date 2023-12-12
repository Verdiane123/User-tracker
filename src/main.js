import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

// createApp(App).mount('#app')

import '@/assets/styles/css/style.css';

library.add(fas, faHome, faBars, faCog, faFutbol, faEllipsisH)

library.add(faUserSecret)

/* add font awesome icon component */
//Vue.component('font-awesome-icon', FontAwesomeIcon)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')


// const app = createApp(App);

// app.use(router);

// app.mount('#app');
