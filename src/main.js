import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
    faSearch,
    faCircleNotch,
    faPlay,
    faBars,
    faClose,
    faCoins,
    faPlus,
    faMinus,
    faDivide,
    faXmark,
    
  } from "@fortawesome/free-solid-svg-icons";
  
  /* add icons to the library */
  library.add(faSearch, faCircleNotch, faPlay, faBars, faClose, faCoins, faPlus, faMinus, faDivide, faXmark);

createApp(App).component("font-awesome-icon", FontAwesomeIcon)
.use(router)
.mount("#app");
