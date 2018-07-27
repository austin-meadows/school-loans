<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><fa icon="home" /> Home</router-link>
      <router-link to="/about"><fa icon="sign-in-alt" /> Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
@import '../node_modules/normalize-styl/normalize';
@import './styles/palette.styl';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    color: #2c3e50;
    display: block;
    font-weight: bold;
    padding: 30px;
    text-decoration: none;

    &.router-link-exact-active {
      color: $color1;
    }
  }
}
</style>
