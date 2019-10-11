import Vue from "vue";

import "./includes/icons";
import "./includes/serviceWorker";
import "./includes/toast";
import { auth } from "./includes/firebase";
import router from "./includes/router";
import store from "./includes/store";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  created() {
    auth.onAuthStateChanged(user => {
      if (user) store.commit("user", user);
    });
  },
  render: h => h(App)
}).$mount("#app");
