<template>
  <section>
    <slot></slot>
  </section>
</template>

<style lang="scss">
@import "../includes/styles/sizes";

section {
  margin: $base $base 0 $base;
  text-align: center;

  p {
    margin: $base 0;
  }
}
</style>
