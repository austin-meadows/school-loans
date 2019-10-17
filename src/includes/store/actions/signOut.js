import Vue from "vue";

export default ({ commit }) => {
  commit("auth", undefined);
  Vue.toasted.show("You have signed out!", {
    type: "success",
    icon: "fa-thumbs-up"
  });
};
