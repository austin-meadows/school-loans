<script>
export default {
  name: 'section',
};
</script>

<template>
  <section>
    <slot></slot>
  </section>
</template>

<style lang="stylus">
@import '../styles/sizes.styl';

section {
  margin: 0 $sizes-m;
  text-align: center;
}
</style>
