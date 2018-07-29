<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><fa icon="home" /> Home</router-link>
      <router-link to="/give"><fa icon="piggy-bank" /> Give</router-link>
      <router-link to="/login"><fa icon="sign-in-alt" /> Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
@import '../node_modules/normalize-styl/normalize';
@import './styles/breakpoints.styl';
@import './styles/palette.styl';

body {
  min-width: 320px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  overflow: auto;

  @media screen and (max-width: $screen-size-s) {
    justify-content: space-between;
  }

  a {
    color: #2c3e50;
    display: block;
    padding: 20px 30px;
    text-decoration: none;
    white-space: nowrap;

    &.router-link-exact-active {
      color: $color1;
    }
  }
}
</style>
