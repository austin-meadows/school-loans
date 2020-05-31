import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

import * as actions from "./store/actions";
import * as mutations from "./store/mutations";

const ls = new SecureLS();

Vue.use(Vuex);

export default new Vuex.Store({
  actions: { ...actions },
  mutations: { ...mutations },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
  state: {
    auth: null,
  },
});
