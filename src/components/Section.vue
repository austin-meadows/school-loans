<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  components: {
    Loading,
  },
  props: {
    isLoading: {
      default: false,
      type: Boolean,
    },
    spacing: {
      default: "l",
      type: String,
      validator: (value) => ["xs", "s", "m", "l", "xl"].indexOf(value) > -1,
    },
  },
};
</script>

<template>
  <section :class="['section', spacing]">
    <loading loader="dots" :active.sync="isLoading" :is-full-page="false"></loading>
    <slot></slot>
  </section>
</template>

<style lang="scss">
@import "../utils/styles/sizes";
@import "../utils/styles/breakpoints";

.section {
  margin: auto;
  max-width: $container-max-width;
  width: 95%;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: $screen-size-s) {
    width: 75%;
  }
}

.xs {
  margin: $sizes-xs auto;
}
.s {
  margin: $sizes-s auto;
}
.m {
  margin: $sizes-m auto;
}
.l {
  margin: $sizes-l auto;
}
.xl {
  margin: $sizes-xl auto;
}
</style>
