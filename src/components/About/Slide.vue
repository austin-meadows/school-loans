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

<style lang="scss"></style>
