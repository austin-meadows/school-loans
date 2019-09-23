import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/performance';
import { firestorePlugin } from 'vuefire';
import Vue from 'vue';
import Toasted from 'vue-toasted';

import App from './App.vue';
import './icons';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Toasted, {
  duration: 1500,
  iconPack: 'fontawesome',
});
Vue.use(firestorePlugin);

let app = '';
const config = {
  apiKey: 'AIzaSyAU07mWfFhGyw7SXGFVc1ceYwLjjnJToNQ',
  authDomain: 'student-loans-e6569.firebaseapp.com',
  databaseURL: 'https://student-loans-e6569.firebaseio.com',
  projectId: 'student-loans-e6569',
  storageBucket: '',
  messagingSenderId: '965857536415',
  appId: '1:965857536415:web:28d241b7b22c8258',
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      data() {
        return {
          uid: (user || {}).uid,
          isSignedIn: !!user,
        };
      },
      router,
      render: (h) => h(App),
    }).$mount('#app');
  }
});

export const auth = firebase.auth();
export const perf = firebase.performance();
export default firebase.firestore();
