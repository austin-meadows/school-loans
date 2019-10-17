import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

const ls = new SecureLS();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: null
  },
  getters: {
    auth: state => state.auth
  },
  mutations: {
    auth(state, auth) {
      state.auth = auth;
    }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })
  ]
});
