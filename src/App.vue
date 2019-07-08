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
  height: 100%;
  // probably not necessary to be here,
  // but spiritually, the smallest the webpage we support is
  // 320px.
  min-width: $container-min-width;
}

#app {
  display: flex;
  flex-flow: column wrap;
  height: 100%;

  > :last-child:not(:only-child) {
    flex-grow: 1;
  }
}

// browser highlight removal
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
</style>
