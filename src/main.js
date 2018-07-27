import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';

library.add(faHome, faSignInAlt);

Vue.component('fa', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
