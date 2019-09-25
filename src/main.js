import Vue from "vue";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";
import { firestorePlugin } from "vuefire";

import Toasted from "vue-toasted";

import "./icons";
import "./registerServiceWorker";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(Toasted, {
  duration: 1500,
  iconPack: "fontawesome"
});
Vue.use(firestorePlugin);

let app = "";
const config = {
  apiKey: "AIzaSyDeCY8cfGRfgbE835G9brcsiNiQhkKhV4A",
  appId: "1:431090940964:web:90c18035de7941e5e9acb1",
  authDomain: "school-loans-59a5b.firebaseapp.com",
  databaseURL: "https://school-loans-59a5b.firebaseio.com",
  measurementId: "G-K9F6LMJJ2N",
  messagingSenderId: "431090940964",
  projectId: "school-loans-59a5b",
  storageBucket: "school-loans-59a5b.appspot.com"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      data() {
        return {
          uid: (user || {}).uid,
          isSignedIn: !!user
        };
      },
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});

export const auth = firebase.auth();
export const perf = firebase.performance();
export default firebase.firestore();
