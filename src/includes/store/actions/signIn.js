import Vue from "vue";
import { auth, router } from "../..";

export default ({ commit }, { email, password }) => {
  auth.signInWithEmailAndPassword(email, password).then(
    ({ user }) => {
      Vue.toasted.show("You have signed in!", {
        type: "success",
        icon: "fa-thumbs-up"
      });
      commit("auth", user.uid);
      router.replace("/dashboard");
    },
    err => {
      Vue.toasted.show(err.message, { type: "error" });
    }
  );
};
