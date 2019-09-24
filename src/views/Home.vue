<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import db from "../main";
import About from "../views/About.vue";
import Dashboard from "../views/Dashboard.vue";
import Onboarding from "../views/Onboarding.vue";

export default {
  created() {
    const { uid } = this.$root.$data;

    if (uid) {
      db.collection("users")
        .doc(uid)
        .get()
        .then(async doc => {
          if (doc.exists) {
            this.type = await doc.data().type;
          }
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    } else {
      this.isLoading = false;
    }
  },
  data() {
    return {
      isLoading: true,
      isSignedIn: this.$root.$data.isSignedIn,
      type: 0
    };
  },
  components: {
    About,
    Dashboard,
    Onboarding,
    Loading
  }
};
</script>

<template>
  <div id="home">
    <Onboarding v-if="isSignedIn && !isLoading && !type" :type="type" />
    <Dashboard v-else-if="isSignedIn && !isLoading && type" />
    <About v-else-if="!isLoading" />
    <loading :active.sync="isLoading"></loading>
  </div>
</template>
