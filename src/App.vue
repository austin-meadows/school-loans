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
    <Navigation />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "normalize.css/opinionated.css";
@import "sanitize.css";
@import "./includes/styles/sizes";
@import "./includes/styles/palette";

html,
body {
  color: $text;
  font-size: $base;
  font-family: "Open Sans", sans-serif;
  // probably not necessary to be here,
  // but spiritually, the smallest the webpage we support is
  // 320px.
  min-width: $container-min-width;
}
</style>
