<script>
export default {
  props: {
    icon: String,
    name: String,
    placeholder: String,
    type: String,
  },
};
</script>

<template>
  <div class="input-block">
    <label :for="name">
      <fa :icon="icon" />
    </label>
    <input
      :id="name"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :type="type"
    >
  </div>
</template>

<style lang="scss">
@import '../utils/styles/sizes';

section {
  padding: $base $base 0 $base;
  text-align: center;
}
</style>
