import Vue from "vue";
import { auth, router } from "../..";

export default ({ commit }) => {
  auth.signOut().then(() => {
    Vue.toasted.show("You have signed out!", {
      type: "success",
      icon: "fa-thumbs-up",
    });
    commit("auth", undefined);
    router.replace("/login");
  });
};
