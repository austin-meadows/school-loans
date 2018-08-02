<script>
export default {
  name: 'Slide',
  props: {
    msg: String,
    title: String,
  },
};
</script>

<template>
  <div class="slide">
    <div v-if="title" class="title">
      {{ title }}
    </div>
    <div class="msg">
      {{ msg }}
    </div>
  </div>
</template>

<style lang="scss">
@import '../../utils/styles/sizes';
@import '../../utils/styles/palette';

.slide {
  color: $text;
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: center;
  margin: 0 - $base 0 - $base 0 0 - $base;
  padding: 0 $base;
}

.title {
  font-size: $sizes-l;
  font-style: italic;
}

.msg {
  font-weight: lighter;
}
</style>
