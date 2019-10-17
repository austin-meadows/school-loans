import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "onboarding" */ "../views/Home.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: {
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthed = store.getters.auth;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthed) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
