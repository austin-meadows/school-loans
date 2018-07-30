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

<style lang="stylus">
@import '../node_modules/normalize-styl/normalize';
@import './styles/sizes.styl';

div, li, p {
  box-sizing: border-box;
}

body {
  font-size: $base;
  min-width: 320px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
