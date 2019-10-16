<script>
import { auth } from "./includes/firebase";

export default {
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  data() {
    return {
      menuState: "closed"
    };
  },
  methods: {
    onClickMenu() {
      if (this.menuState === "open") this.menuState = "closed";
      else this.menuState = "open";
    },
    closeMenu() {
      this.menuState = "closed";
    },
    onClickSignOut() {
      auth.signOut();
      this.$store.commit("user", null);
      this.$toasted.show("You have signed out!", {
        type: "success",
        icon: "fa-thumbs-up"
      });
    }
  }
};
</script>

<template>
  <div id="nav">
    <a id="menuButton" @click="onClickMenu"> <fa icon="bars" />Menu</a>
    <div :class="['menu', menuState]">
      <router-link @click.native="closeMenu" to="/"><fa icon="home" />Home</router-link>
      <router-link v-if="!!user" @click.native="closeMenu" to="/dashboard">
        <fa icon="tachometer-alt" /> Dashboard
      </router-link>
      <router-link @click.native="closeMenu" to="/give"><fa icon="piggy-bank" />Give</router-link>
      <router-link @click.native="closeMenu" to="/stats">
        <fa icon="chart-bar" />Statistics
      </router-link>
      <router-link v-if="!user" @click.native="closeMenu" to="/login">
        <fa icon="sign-in-alt" />Login
      </router-link>
      <router-link v-else @click.native="onClickSignOut" to="/login">
        <fa icon="sign-out-alt" />Sign Out
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "./utils/styles/animations";
@import "./utils/styles/breakpoints";
@import "./utils/styles/palette";
@import "./utils/styles/sizes";

$nav-padding: $sizes-m;

#nav {
  background: linear-gradient(to bottom right, white, $whiteish);
  display: flex;
  overflow: hidden;
  width: 100%;

  .menu {
    display: flex;
    flex-direction: row;
    position: relative;
    transition: $default-transition;

    &.open {
      @media (max-width: $screen-size-s) {
        pointer-events: auto;
        overflow-x: scroll;
        right: 0px;
      }
    }

    &.closed {
      @media (max-width: $screen-size-s) {
        right: 150%;
        pointer-events: none;
      }
    }
  }

  #menuButton {
    background: white;
    display: none;

    @media (max-width: $screen-size-s) {
      display: inline-block;
      position: relative;
      z-index: 2;
    }
  }

  a {
    color: $text;
    cursor: pointer;
    font-size: $sizes-m;
    line-height: $sizes-m;
    padding: $nav-padding;
    text-decoration: none;
    transition: $default-transition;
    white-space: nowrap;
    user-select: none;

    &:before {
      background: white;
      content: "";
      left: 0;
      position: absolute;
      top: $nav-padding * 3;
      transition: $default-transition;
      width: 100%;
      z-index: -1;
    }

    > :first-child {
      margin-right: $sizes-s;
    }

    &.router-link-exact-active {
      color: $primary;
      position: relative;
      z-index: 1;

      &:before {
        height: 100%;
        top: 0;
      }
    }

    &:hover {
      color: $primary;
    }
  }
}
</style>
