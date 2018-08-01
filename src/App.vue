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
@import '../node_modules/normalize.css/normalize';
@import './styles/sizes';

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
