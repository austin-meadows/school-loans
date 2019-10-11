<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import { db } from "../includes/firebase";
import About from "./About.vue";
import Dashboard from "./Dashboard.vue";
import Onboarding from "./Onboarding.vue";

export default {
  components: {
    About,
    Dashboard,
    Onboarding,
    Loading
  },
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
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  data() {
    return {
      isLoading: true,
      type: 0
    };
  }
};
</script>

<template>
  <div id="home">
    <Onboarding v-if="user && !isLoading && !type" :type="type" />
    <Dashboard v-else-if="user && !isLoading && type" />
    <About v-else-if="!isLoading" />
    <loading :active.sync="isLoading"></loading>
  </div>
</template>
