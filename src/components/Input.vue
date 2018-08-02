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
  <div v-if="icon" class="input-block">
    <label v-if="name" :for="name">
      <fa :icon="icon" />
    </label>
    <input
      :id="name"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :type="type"
    >
  </div>
  <input
    v-else
    :id="name"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    :type="type"
  >
</template>

<style lang="scss">
@import '../utils/styles/sizes';
@import '../utils/styles/palette';

$label-font-size: $sizes-m;

.input-block {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;

  &.hidden {
    display: none;
  }
}

label {
  align-items: center;
  display: flex;
  font-size: $label-font-size;
  left: 0;
  padding: 0 ($label-font-size / 2);
  position: absolute;
}

input {
  border: 1px solid $text;
  border-radius: $label-font-size / 2;
  font-size: $label-font-size;
  height: $label-font-size * 2;
  margin: $sizes-s 0;
  min-width: 200px;
  padding: 0 $sizes-s 0 $label-font-size * 2;

  &::placeholder {
    color: $text;
    line-height: normal;
    opacity: 0.5;
  }

  &[type='submit'] {
    background: $color1;
    border: 0;
    padding: 0 $label-font-size * 2;
  }
}
</style>
