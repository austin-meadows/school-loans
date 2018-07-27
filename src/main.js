import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// font awesome icons
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';

import App from './App.vue';
import router from './router';

library.add(faHome, faSignInAlt);

Vue.component('fa', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
