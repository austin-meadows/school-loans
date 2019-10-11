import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

const isAuthed = !!store.getters.user;

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => {
        if (!isAuthed) {
          return import(/* webpackChunkName: "onboarding" */ "../views/About.vue");
        }
        // additional check to see if user has completed onboarding should be added...
        return import(/* webpackChunkName: "dashboard" */ "../views/Onboarding.vue");
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue")
    }
  ]
});
