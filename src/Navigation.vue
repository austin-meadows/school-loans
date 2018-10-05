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
        this.hide()
      } else {
        this.show()
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
      <fa icon="bars" /> Menu
    </a>
    <div ref="menu" class="menu">
      <router-link @click.native="onClickMenuLink" to="/">
        <fa icon="home" /> Home
      </router-link>
      <router-link @click.native="onClickMenuLink" to="/give">
        <fa icon="piggy-bank" /> Give
      </router-link>
      <router-link @click.native="onClickMenuLink" to="/stats">
        <fa icon="chart-bar" /> Statistics
      </router-link>
      <router-link v-if="!isSignedIn" @click.native="onClickMenuLink" to="/login">
        <fa icon="sign-in-alt" /> Login
      </router-link>
      <router-link v-else @click.native="onClickSignOut" to="/login">
        <fa icon="sign-out-alt" /> Sign Out
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
$listItemHeight: ($base * 3) * $numLinks;

@keyframes open {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    max-height: $listItemHeight;
    opacity: 1;
  }
}

@keyframes close {
  from {
    max-height: $listItemHeight;
    opacity: 1;
  }
  to {
    opacity: 0;
    max-height: 0;
  }
}

#nav {
  background: linear-gradient(to bottom right, white, $whiteish);
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    &.open {
      @media screen and (max-width: $screen-size-s) {
        animation-name: open;
        animation-duration: 0.5s;
        max-height: $listItemHeight;
        opacity: 1;
        pointer-events: auto;
        position: relative;
      }
    }

    &.closed {
      @media screen and (max-width: $screen-size-s) {
        animation-name: close;
        animation-duration: 0.5s;
        max-height: 0;
        opacity: 0;
        pointer-events: none;
        position: relative;
        z-index: 1;
      }
    }

    @media screen and (max-width: $screen-size-s) {
      flex-direction: column;
      max-height: 0;
      opacity: 0;
      position: relative;
      pointer-events: none;
      height: auto;
      width: 100%;
    }
  }

  #menuButton {
    display: none;

    @media screen and (max-width: $screen-size-s) {
      display: inline-block;
      float: right;
      position: relative;
      z-index: 2;
    }
  }

  a {
    color: $text;
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
    user-select: none;

    &.router-link-exact-active {
      color: $primary;
    }

    &:hover {
      color: $primary;
    }
  }
}
</style>
