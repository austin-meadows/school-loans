import Vue from "vue";

import { auth, store, router } from "./includes";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) store.commit("auth", user.uid);
    });
  },
  render: (h) => h(App),
}).$mount("#app");
