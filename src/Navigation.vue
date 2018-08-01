<script>
export default {
  methods: {
    onClickMenu() {
      this.$refs.menu.classList.toggle('closed');
    },
    onClickMenuLink() {
      this.$refs.menu.classList.add('closed');
    },
  },
};
</script>

<template>
  <div id="nav">
    <a id="menuButton" @click="onClickMenu"><fa icon="bars" /> Menu</a>
    <div ref="menu" class="menu closed">
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
</template>

<style lang="scss">
@import './styles/breakpoints';
@import './styles/palette';
@import './styles/sizes';

$screenSizeSmPlusOne: $screen-size-s + 1;

#nav {
  background: white;

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    @media screen and (max-width: $screen-size-s) {
      background: white;
      flex-direction: column;
      position: absolute;
      width: 100%;
    }
  }

  #menuButton {
    display: none;

    @media screen and (max-width: $screen-size-s) {
      display: block;
    }
  }

  a {
    color: #2c3e50;
    cursor: pointer;
    display: block;
    // The following fixes a quirk with how text is sized so we can
    // ensure this is consistent.
    // https://stackoverflow.com/questions/41336177/font-size-vs-line-height-vs-actual-height/41336458
    line-height: $base;
    max-height: $base;
    padding: $base;
    text-align: right;
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
    @media screen and (max-width: $screen-size-s) {
      display: none;
    }
  }
}
</style>
