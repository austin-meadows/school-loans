<template>
  <section>
    <slot></slot>
  </section>
</template>

<style lang="scss">
@import '../utils/styles/sizes';

section {
  padding: $base $base 0 $base;
  text-align: center;
}
</style>
