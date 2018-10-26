<script>
import { auth } from '@/main';

export default {
  data() {
    return {
      isSignedIn: this.$root.$data.isSignedIn,
    };
  },
  methods: {
    show() {
      this.$refs.menu.classList.remove('closed');
      this.$refs.menu.classList.add('open');
    },
    hide() {
      this.$refs.menu.classList.remove('open');
      this.$refs.menu.classList.add('closed');
    },
    onClickMenu() {
      if (this.$refs.menu.classList.contains('open')) {
        this.hide();
      } else {
        this.show();
      }
    },
    onClickMenuLink() {
      this.$refs.menu.classList.remove('open');
      this.$refs.menu.classList.add('closed');
    },
    onClickSignOut() {
      auth.signOut();
    },
  },
};
</script>

<template>
  <div id="nav">
    <a id="menuButton" @click="onClickMenu">
      <fa icon="bars"/>Menu
    </a>
    <div ref="menu" class="menu closed">
      <router-link @click.native="onClickMenuLink" to="/">
        <fa icon="home"/>Home
      </router-link>
      <router-link @click.native="onClickMenuLink" to="/give">
        <fa icon="piggy-bank"/>Give
      </router-link>
      <router-link @click.native="onClickMenuLink" to="/stats">
        <fa icon="chart-bar"/>Statistics
      </router-link>
      <router-link v-if="!isSignedIn" @click.native="onClickMenuLink" to="/login">
        <fa icon="sign-in-alt"/>Login
      </router-link>
      <router-link v-else @click.native="onClickSignOut" to="/login">
        <fa icon="sign-out-alt"/>Sign Out
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "./utils/styles/breakpoints";
@import "./utils/styles/palette";
@import "./utils/styles/sizes";

$screenSizeSmPlusOne: $screen-size-s + 1;
$numLinks: 4;
$listItemHeight: ($base * 3);

#nav {
  background: linear-gradient(to bottom right, white, $whiteish);
  display: flex;
  overflow: hidden;

  .menu {
    display: flex;
    flex-direction: row;
    height: $base * 3;
    padding-bottom: $base * 3;
    margin-bottom: -($base * 3);
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    transition: right 0.3s ease-in-out;

    &.open {
      @media screen and (max-width: $screen-size-s) {
        right: 0px;
        pointer-events: auto;
      }
    }

    &.closed {
      @media screen and (max-width: $screen-size-s) {
        right: 100%;
        pointer-events: none;
      }
    }
  }

  #menuButton {
    background: white;
    display: none;

    @media screen and (max-width: $screen-size-s) {
      display: inline-block;
      position: relative;
      z-index: 2;
    }
  }

  a {
    border-top-left-radius: $sizes-s;
    border-top-right-radius: $sizes-s;
    color: $text;
    cursor: pointer;
    display: block;
    height: $base;
    // The following fixes a quirk with how text is sized so we can
    // ensure this is consistent.
    // https://stackoverflow.com/questions/41336177/font-size-vs-line-height-vs-actual-height/41336458
    line-height: $base;
    max-height: $base;
    padding: $base;
    text-align: right;
    text-decoration: none;
    transition: all 0.33s ease-in-out;
    white-space: nowrap;
    user-select: none;

    > :first-child {
      margin-right: $sizes-s;
    }

    &.router-link-exact-active {
      background: white;
      color: $primary;
    }

    &:hover {
      color: $primary;
    }
  }
}
</style>
