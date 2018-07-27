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
@import '../styles/sizes.styl';
@import '../styles/palette.styl';

.section {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 $sizes-m;

  &[num='1'] {
    background-color: $color1;
  }

  &[num='2'] {
    background-color: $color2;
  }

  &[num='3'] {
    background-color: $color3;
  }

  &[num='4'] {
    background-color: $color4;
  }
}

.title {
  font-size: $sizes-l;
  font-style: italic;
}

.msg {
  font-weight: lighter;
}
</style>
