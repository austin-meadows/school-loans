<template>
  <section>
    <slot></slot>
  </section>
</template>

<style lang="scss">
@import "../utils/styles/sizes";
@import "../utils/styles/breakpoints";

section {
  margin: auto;
  margin-top: $sizes-m;
  max-width: $container-max-width;
  width: 95%;

  @media (min-width: $screen-size-s) {
    width: 75%;
  }
}
</style>
