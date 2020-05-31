import Vue from "vue";
import { auth, router } from "../..";

export default ({ commit }, { email, password }) => {
  auth.createUserWithEmailAndPassword(email, password).then(
    ({ user }) => {
      Vue.toasted.show("Your account has been created!", {
        type: "success",
      });
      commit("auth", user.uid);
      router.replace("/dashboard");
    },
    (err) => {
      Vue.toasted.show(err.message, { type: "error" });
    }
  );
};
