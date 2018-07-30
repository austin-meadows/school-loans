<script>
export default {
  methods: {
    onClickMenu() {
      const mobileMenu = document.querySelector('.mobileMenu');
      mobileMenu.classList.toggle('closed');
    },
    onClickMenuLink() {
      const mobileMenu = document.querySelector('.mobileMenu');
      mobileMenu.classList.add('closed');
    },
  },
};
</script>

<template>
  <div id="app">
    <div id="nav" class="small">
      <a @click="onClickMenu"><fa icon="bars" /> Menu</a>
      <div class="mobileMenu closed">
        <router-link v-on:click.native="onClickMenuLink" to="/">
          <fa icon="home" /> Home
        </router-link>
        <router-link v-on:click.native="onClickMenuLink" to="/give">
          <fa icon="piggy-bank" /> Give
        </router-link>
        <router-link v-on:click.native="onClickMenuLink" to="/stats">
          <fa icon="chart-bar" /> Statistics
        </router-link>
        <router-link v-on:click.native="onClickMenuLink" to="/login">
          <fa icon="sign-in-alt" /> Login
        </router-link>
      </div>
    </div>
    <div id="nav" class="large">
      <router-link to="/"><fa icon="home" /> Home</router-link>
      <router-link to="/give"><fa icon="piggy-bank" /> Give</router-link>
      <router-link to="/stats"><fa icon="chart-bar" /> Statistics</router-link>
      <router-link to="/login"><fa icon="sign-in-alt" /> Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
@import '../node_modules/normalize-styl/normalize';
@import './styles/breakpoints.styl';
@import './styles/palette.styl';
@import './styles/sizes.styl';

$screenSizeSmPlusOne = $screen-size-s + 1;

body {
  font-size: $base;
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
    &.large {
      display: none;
    }
  }

  @media screen and (min-width: $screenSizeSmPlusOne) {
    &.small {
      display: none;
    }
  }

  a {
    color: #2c3e50;
    cursor: pointer;
    display: block;
    line-height: $base;
    padding: $base;
    text-decoration: none;
    white-space: nowrap;

    &.router-link-exact-active {
      color: $color1;
    }

    &:hover {
      color: $color1;
    }
  }

  .closed {
    display: none;
  }
}

.mobileMenu {
  background: white;
  margin-top: ($base * 3); // comes from line-height + padding-top + padding-bottom.
  position: absolute;
  text-align: right;
  width: 100%;
  z-index: 2;
}
</style>
