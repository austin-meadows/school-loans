import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// font awesome icons
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faChartBar } from '@fortawesome/free-solid-svg-icons/faChartBar';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons/faPiggyBank';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';

import App from './App.vue';
import router from './router';

library.add(faBars, faChartBar, faHome, faPiggyBank, faSignInAlt);

Vue.component('fa', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
