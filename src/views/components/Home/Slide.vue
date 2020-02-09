<script>
import Heading from "../../../components/Heading.vue";

export default {
  props: {
    msg: String,
    title: String
  },
  components: {
    Heading
  }
};
</script>

<template>
  <div class="slide">
    <Heading>{{ title }}</Heading>
    <div class="msg">{{ msg }}</div>
  </div>
</template>

<style lang="scss"></style>
