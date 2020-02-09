<script>
export default {
  props: {
    type: String
  }
};
</script>

<template>
  <span :class="['header', { primary: !type, [type]: type }]">
    <slot></slot>
  </span>
</template>

<style lang="scss">
@import "../utils/styles/palette";
@import "../utils/styles/sizes";

.header {
  color: $primary;
  font-size: $sizes-l;
  font-weight: bold;
  line-height: $sizes-l;
  margin: 0;

  &.primary {
    color: $primary;
  }

  &.secondary {
    color: $text;
  }
}
</style>
