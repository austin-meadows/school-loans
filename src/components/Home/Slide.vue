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
@import '../../styles/sizes';
@import '../../styles/palette';

.slide {
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: center;
  margin: 0 - $base 0 - $base 0 0 - $base;
  padding: 0 $base;

  &[color='1'] {
    background-color: $color1;

    .title, .msg {
      color: $color1;
    }
  }

  &[color='2'] {
    background-color: $color2;

    .title, .msg {
      color: $color2;
    }
  }

  &[color='3'] {
    background-color: $color3;

    .title, .msg {
      color: $color3;
    }
  }

  &[color='4'] {
    background-color: $color4;

    .title, .msg {
      color: $color4;
    }
  }

  &[color='5'] {
    background-color: $color5;

    .title, .msg {
      color: $color5;
    }
  }

  &[color='1'], &[color='2'], &[color='3'], &[color='4'], &[color='5'] {
    .title, .msg {
      filter: invert(1) grayscale(1) contrast(9);
    }
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
