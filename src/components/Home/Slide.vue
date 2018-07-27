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

<script>
export default {
  name: 'Slide',
  props: {
    msg: String,
    title: String,
  },
};
</script>

<style lang="stylus">
@import '../../styles/sizes.styl';
@import '../../styles/palette.styl';

.slide {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: center;
  padding: 0 $sizes-m;
  text-align: center;
}

.title {
  font-size: $sizes-l;
  font-style: italic;
}

.msg {
  font-weight: lighter;
}
</style>
