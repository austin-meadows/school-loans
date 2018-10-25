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
      ['input-block', { hidden: isHidden },
      { hideable: isHidden != null },
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
@import "../utils/styles/sizes";
@import "../utils/styles/palette";

$label-font-size: $sizes-m;

.input-block.hideable:not(.hidden) {
  transition: all 0.25s ease-in-out;
  max-height: 3em;
  opacity: 1;
}

.hidden {
  opacity: 0;
  max-height: 0em;
  transition: all 0.25s ease-in-out;
  user-select: none;
}

.input-block {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-x: hidden;
  position: relative;
}

label {
  align-items: center;
  display: flex;
  width: 100%;

  :last-child {
    animation-name: unfocusIcon;
    animation-duration: 0.33s;
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
    transition: all 0.25s ease-in-out;
    min-width: 200px;
    + svg {
      transition: left 0.25s ease-in-out;
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
    background: $primary;
    border: 0;
    padding: 0 $label-font-size * 2;
  }

  &[type="checkbox"] {
    cursor: pointer;
    margin: 0 1rem 0 0;
    position: relative;
    top: rem(-6);

    &:before {
      border: 2px solid $whiteish;
      content: "";
      height: $base;
      left: 0;
      position: absolute;
      transition: all 0.3s ease-in-out;
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
      top: rem(-2);
      left: 0;
      width: $sizes-l;
      height: $sizes-l;
      background: #fff;
      cursor: pointer;
    }
  }
}
</style>
