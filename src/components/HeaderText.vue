<script>
export default {
  props: {
    type: String,
  },
};
</script>

<template>
  <h1 :class="{'primary': !type, [type]: type}">
    <slot></slot>
  </h1>
</template>

<style lang="scss">
@import '../includes/styles/palette';
@import '../includes/styles/sizes';

h1 {
  color: $primary;
  font-size: $sizes-l;
  margin: 0;

  &.primary {
    color: $primary;
  }

  &.secondary {
    color: $text;
  }
}
</style>
