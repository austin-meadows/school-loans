<script>
import { auth } from '@/main';

export default {
  data() {
    return {
      isSignedIn: this.$root.$data.isSignedIn,
    };
  },
  mounted() {
    this.$refs.menu.addEventListener(
      "animationend",
      function () {
        if (this.classList.contains('closed')) {
          this.classList.remove('closed');
        }
      },
      false,
    );
    this.$refs.menu.addEventListener(
      "webkitAnimationEnd",
      function () {
        if (this.classList.contains('closed')) {
          this.classList.remove('closed');
        }
      },
      false,
    );
    this.$refs.menu.addEventListener(
      "oanimationend",
      function () {
        if (this.classList.contains('closed')) {
          this.classList.remove('closed');
        }
      },
      false,
    );
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
$listItemHeight: ($base * 3);

@keyframes open {
  from {
    left: -400px;
  }
  to {
    left: 0px;
  }
}

@keyframes close {
  from {
    left: 0px;
  }
  to {
    left: -400px;
  }
}

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

    &.open {
      @media screen and (max-width: $screen-size-s) {
        animation-name: open;
        animation-duration: 0.33s;
        left: 0px;
        pointer-events: auto;
      }
    }

    &.closed {
      @media screen and (max-width: $screen-size-s) {
        animation-name: close;
        animation-duration: 0.33s;
        left: -400px;
        pointer-events: none;
      }
    }

    @media screen and (max-width: $screen-size-s) {
      pointer-events: none;
      left: -400px;
      z-index: 1;
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
    white-space: nowrap;
    user-select: none;

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
