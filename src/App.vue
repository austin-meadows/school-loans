<script>
import Navigation from '@/Navigation.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<template>
  <div id="app">
    <notifications group="auth" position="bottom center" width="75%" />
    <Navigation />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "normalize.css/opinionated.css";
@import "sanitize.css";
@import "./includes/styles/sizes";
@import "./includes/styles/palette";

textarea,
select,
input,
button {
  outline: none;
}

html,
body {
  font-size: $base;
}

body {
  color: $text;
  // probably not necessary to be here,
  // but spiritually, the smallest the webpage we support is
  // 320px.
  min-width: 320px;
}

#app {
  font-family: "Open Sans", sans-serif;
}
</style>
