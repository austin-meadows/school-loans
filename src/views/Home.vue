<script>
import Dashboard from '@/components/Home/Dashboard.vue';
import Onboarding from '@/components/Home/Onboarding.vue';

export default {
  data() {
    return {
      isSignedIn: this.$root.$data.isSignedIn,
    };
  },
  components: {
    Dashboard,
    Onboarding,
  },
};
</script>

<template>
  <div id="home">
    <Dashboard v-if="isSignedIn"/>
    <Onboarding v-else/>
  </div>
</template>
