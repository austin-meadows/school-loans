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

<style scoped lang="stylus">
.section {
  height: 100vh;
}
</style>
