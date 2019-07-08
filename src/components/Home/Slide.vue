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
    <HeaderText>{{ title }}</HeaderText>
    <div class="msg">{{ msg }}</div>
  </div>
</template>

<style lang="scss">
@import "../../includes/styles/sizes";

.slide {
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: center;
  margin: 0 - $sizes-m 0 - $sizes-m 0 0 - $sizes-m;
  padding: 0 $sizes-m;
}

.msg {
  font-weight: lighter;
}
</style>
