<script>
import Navigation from "./Navigation.vue";

export default {
  components: {
    Navigation
  }
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
@import "./utils/styles/breakpoints";
@import "./utils/styles/palette";
@import "./utils/styles/sizes";

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
  flex-flow: column nowrap;
  height: 100%;

  > :last-child:not(:only-child) {
    flex-grow: 1;
  }
}

// style overrides for toasted
#app ~ .toasted-container.top-right {
  font-family: "Open Sans", sans-serif;
  top: 0;
  right: 0;

  .toasted {
    font-size: initial;
    line-height: initial;
    margin-top: 0;
    padding: $sizes-m;

    @media (max-width: $screen-size-s) {
      justify-content: center;
    }
  }

  svg {
    margin-right: $sizes-s;
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
