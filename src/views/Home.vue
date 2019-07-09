<script>
import About from '@/views/About.vue';
import Dashboard from '@/views/Dashboard.vue';

export default {
  data() {
    return {
      isSignedIn: this.$root.$data.isSignedIn,
    };
  },
  components: {
    About,
    Dashboard,
  },
};
</script>

<template>
  <div id="home">
    <Dashboard v-if="isSignedIn" />
    <About v-else />
  </div>
</template>
