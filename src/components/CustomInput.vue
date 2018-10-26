<script>
export default {
  props: {
    icon: String,
    isHidden: {
      default: null,
      type: Boolean,
    },
    name: String,
    placeholder: String,
    type: String,
  },
};
</script>

<template>
  <div
    v-if="icon"
    :class="
      ['input-block',
      { hidden: isHidden },
    ]"
    ref="inputBlock">
    <label v-if="name" :for="name">
      <input
        :disabled="isHidden"
        :id="name"
        @input="$emit('input', $event.target.value)"
        :placeholder="placeholder"
        :type="type"
      >
      <fa :icon="icon"/>
    </label>
  </div>
  <input
    v-else
    :disabled="isHidden"
    :id="name"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    :type="type"
  >
</template>

<style lang="scss">
@import "../utils/styles/animations";
@import "../utils/styles/sizes";
@import "../utils/styles/palette";

$label-font-size: $sizes-m;

.input-block {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-height: 4em;
  opacity: 1;
  overflow: hidden;
  position: relative;
  transition: $default-transition;

  &.hidden {
    opacity: 0;
    max-height: 0;
    user-select: none;
  }
}

label {
  align-items: center;
  display: flex;
  width: 100%;

  :last-child {
    font-size: $label-font-size;
    left: 0;
    padding: 0 ($label-font-size / 2);
    position: absolute;
  }
}

input,
button {
  border-radius: $sizes-s;
}

input {
  font-size: $label-font-size;
  height: $label-font-size * 2;
  margin: $sizes-s 0;
  padding: 0 $sizes-s 0 $label-font-size * 2;

  &::placeholder {
    color: $text;
    line-height: normal;
    opacity: 0.5;
  }

  &[type="text"],
  &[type="email"],
  &[type="password"] {
    border: 1px solid $whiteish;
    transition: $default-transition;
    min-width: 200px;
    + svg {
      transition: $default-transition;
    }
    &:not(:focus) {
      padding: 0 $sizes-s 0 $label-font-size * 2;
    }
    &:focus {
      padding: 0 $label-font-size * 2 0 $sizes-s;
      + svg {
        left: -2em;
      }
    }
  }

  &[type="submit"] {
    color: $whiteish;
    background: $primary;
    border: 0;
    padding: 0 $label-font-size * 2;
  }

  &[type="checkbox"] {
    cursor: pointer;
    margin: 0 1rem 0 0;
    position: relative;

    &:before {
      border: 2px solid $whiteish;
      content: "";
      height: $base;
      left: 0;
      position: absolute;
      transition: $default-transition;
      width: $base;
      z-index: 1;
    }

    &:checked {
      &:before {
        height: 0.5rem;
        border-color: $primary;
        border-right-style: none;
        border-top-style: none;
        transform: rotate(-45deg);
      }
    }

    &:after {
      content: "";
      position: absolute;
      left: 0;
      width: $sizes-l;
      height: $sizes-l;
      cursor: pointer;
    }
  }
}
</style>
