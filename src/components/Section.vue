<template>
  <div class="section">
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
  name: 'Section',
  props: {
    msg: String,
    title: String,
  },
};
</script>

<style lang="stylus">
@import '../styles/palette.styl';
@import '../styles/sizes.styl';

.section {
  align-items: center;
  background-color: $color1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}

.title {
  font-size: $sizes-l;
  font-style: italic;
  margin-right: $sizes-xl;
}

.msg {
  font-weight: lighter;
  margin-left: $sizes-xl;
}

</style>
