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
    <notifications group="auth" position="bottom center" width="75%"/>
    <Navigation />
    <router-view />
  </div>
</template>

<style lang="scss">
@import '../node_modules/normalize.css/normalize';
@import './utils/styles/sizes';
@import './utils/styles/palette';

textarea,
select,
input,
button {
  outline: none;
}

body {
  background: linear-gradient(to bottom right, white, $whiteish);
  color: $text;
  font-size: $base;
  min-width: 320px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
