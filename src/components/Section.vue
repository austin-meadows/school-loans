<script>
export default {
  name: 'section',
};
</script>

<template>
  <div class="section">
    <slot></slot>
  </div>
</template>

<style lang="stylus">
@import '../styles/sizes.styl';

.section {
  margin: 0 $sizes-m;
  text-align: center;
}
</style>
