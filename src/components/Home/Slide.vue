<script>
import HeaderText from '@/components/HeaderText.vue';

export default {
  props: {
    msg: String,
    title: String,
  },
  components: {
    HeaderText,
  },
};
</script>

<template>
  <div class="slide">
    <HeaderText>
      {{ title }}
    </HeaderText>
    <div class="msg">
      {{ msg }}
    </div>
  </div>
</template>

<style lang="scss">
@import '../../utils/styles/sizes';

.slide {
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: center;
  margin: 0 - $base 0 - $base 0 0 - $base;
  padding: 0 $base;
}

.msg {
  font-weight: lighter;
}
</style>
