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

  &[id='1'] {
    background-color: $color1;

    .title, .msg {
      color: $color1;
    }
  }

  &[id='2'] {
    background-color: $color2;

    .title, .msg {
      color: $color2;
    }
  }

  &[id='3'] {
    background-color: $color3;

    .title, .msg {
      color: $color3;
    }
  }

  &[id='4'] {
    background-color: $color4;

    .title, .msg {
      color: $color4;
    }
  }

  &[id='5'] {
    background-color: $color5;

    .title, .msg {
      color: $color5;
    }
  }

  &[id='1'], &[id='2'], &[id='3'], &[id='4'], &[id='5'] {
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
