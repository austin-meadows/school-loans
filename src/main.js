import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firestorePlugin } from 'vuefire';

import Vue from 'vue';
import Notifications from 'vue-notification';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faChartBar } from '@fortawesome/free-solid-svg-icons/faChartBar';
import { faDonate } from '@fortawesome/free-solid-svg-icons/faDonate';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons/faPiggyBank';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons/faUserGraduate';

import App from './App.vue';
import router from './router';
import { config } from '../firebase.json';

Vue.use(firestorePlugin);
Vue.use(Notifications);

library.add(
  faBars,
  faChartBar,
  faDonate,
  faEnvelope,
  faHome,
  faKey,
  faPiggyBank,
  faSignInAlt,
  faSignOutAlt,
  faUserGraduate,
);

Vue.component('fa', FontAwesomeIcon);

Vue.config.productionTip = false;

firebase.initializeApp(config);

export const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
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
