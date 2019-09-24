<script>
import { auth } from "./main";

export default {
  data() {
    return {
      isSignedIn: this.$root.$data.isSignedIn
    };
  },
  methods: {
    show() {
      this.$refs.menu.classList.remove("closed");
      this.$refs.menu.classList.add("open");
    },
    hide() {
      this.$refs.menu.classList.remove("open");
      this.$refs.menu.classList.add("closed");
    },
    onClickMenu() {
      if (this.$refs.menu.classList.contains("open")) {
        this.hide();
      } else {
        this.show();
      }
    },
    onClickMenuLink() {
      this.$refs.menu.classList.remove("open");
      this.$refs.menu.classList.add("closed");
    },
    onClickSignOut() {
      auth.signOut();
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
    <div ref="menu" class="menu closed">
      <router-link @click.native="onClickMenuLink" to="/"><fa icon="home" />Home</router-link>
      <router-link @click.native="onClickMenuLink" to="/give">
        <fa icon="piggy-bank" />Give
      </router-link>
      <router-link @click.native="onClickMenuLink" to="/stats">
        <fa icon="chart-bar" />Statistics
      </router-link>
      <router-link v-if="!isSignedIn" @click.native="onClickMenuLink" to="/login">
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
    border-top-left-radius: $sizes-s;
    border-top-right-radius: $sizes-s;
    color: $text;
    cursor: pointer;
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
