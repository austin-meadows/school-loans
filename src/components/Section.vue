<template>
  <section>
    <slot></slot>
  </section>
</template>

<style lang="scss">
@import "../includes/styles/sizes";
@import "../includes/styles/breakpoints";

section {
  margin: auto;
  max-width: $container-max-width;
  text-align: center;
  width: 95%;

  @media (min-width: $screen-size-s) {
    width: 75%;
  }
}
</style>
