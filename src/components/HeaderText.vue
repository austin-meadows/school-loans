<script>
export default {
  name: 'header-text',
  props: {
    msg: String,
    title: String,
  },
};
</script>

<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<style lang="scss">
@import '../styles/sizes';

h1 {
  margin: 0;
}
</style>
