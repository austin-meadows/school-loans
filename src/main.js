import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/performance';
import { firestorePlugin } from 'vuefire';

import Vue from 'vue';
import Toasted from 'vue-toasted';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faChartBar } from '@fortawesome/free-solid-svg-icons/faChartBar';
import { faDonate } from '@fortawesome/free-solid-svg-icons/faDonate';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons/faPiggyBank';
import { faSignature } from '@fortawesome/free-solid-svg-icons/faSignature';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons/faUserGraduate';

import App from './App.vue';
import router from './router';

dom.watch({
  autoReplaceSvgRoot: document.body,
  observeMutationsRoot: document.body,
});

const config = {
  apiKey: 'AIzaSyAU07mWfFhGyw7SXGFVc1ceYwLjjnJToNQ',
  authDomain: 'student-loans-e6569.firebaseapp.com',
  databaseURL: 'https://student-loans-e6569.firebaseio.com',
  projectId: 'student-loans-e6569',
  storageBucket: '',
  messagingSenderId: '965857536415',
  appId: '1:965857536415:web:28d241b7b22c8258',
};

Vue.use(Toasted, {
  duration: 1500,
  iconPack: 'fontawesome',
});
Vue.use(firestorePlugin);
Vue.component('fa', FontAwesomeIcon);

library.add(
  faArrowRight,
  faBars,
  faChartBar,
  faDonate,
  faEnvelope,
  faHome,
  faKey,
  faPiggyBank,
  faSignature,
  faSignInAlt,
  faSignOutAlt,
  faThumbsUp,
  faUserGraduate,
);


Vue.config.productionTip = false;

firebase.initializeApp(config);

export const auth = firebase.auth();
export const perf = firebase.performance();

auth.onAuthStateChanged((user) => {
  new Vue({
    data() {
      return {
        uid: (user || {}).uid,
        isSignedIn: !!user,
      };
    },
    router,
    render: h => h(App),
  }).$mount('#app');
});

export default firebase.firestore();
