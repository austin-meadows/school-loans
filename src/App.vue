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
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  overflow-y: scroll;
  position: fixed;
  width: 100%;
}

#app > *:last-child {
  flex: 1;
}
</style>
