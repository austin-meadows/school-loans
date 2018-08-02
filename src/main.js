import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import { auth } from 'firebase';
import 'firebase/firestore';
import Notifications from 'vue-notification';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// font awesome icons
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faChartBar } from '@fortawesome/free-solid-svg-icons/faChartBar';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons/faPiggyBank';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';

import App from './App.vue';
import router from './router';
import { config } from '../firebase.json';

Vue.use(VueFire);
Vue.use(Notifications);

library.add(
  faBars,
  faChartBar,
  faEnvelope,
  faHome,
  faKey,
  faPiggyBank,
  faSignInAlt,
  faSignOutAlt,
);

Vue.component('fa', FontAwesomeIcon);

Vue.config.productionTip = false;

firebase.initializeApp(config);

auth().onAuthStateChanged((user) => {
  new Vue({
    data: {
      user,
      isSignedIn: !!user,
    },
    router,
    render: h => h(App),
  }).$mount('#app');
});

export default firebase.firestore();
