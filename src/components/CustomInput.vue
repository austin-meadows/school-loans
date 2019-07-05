<script>
export default {
  props: {
    /*
      autcomplete attribute, if necessary
      see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute
    */
    autocomplete: String,
    /*
      name of font-awesome icon to use
    */
    icon: String,
    /*
      if the input is hidden or not.
    */
    isHidden: {
      default: false,
      type: Boolean,
    },
    /*
      the unique name given to the input
    */
    name: String,
    /*
      placeholder text in the text input
    */
    placeholder: String,
    /*
      type of input
    */
    type: String,
  },
};
</script>

<template>
  <div
    v-if="icon"
    :class="[
      'input-block',
      { hidden: isHidden },
      type,
    ]"
    ref="inputBlock">
    <label :for="name">
      <span v-if="type === 'checkbox'">{{placeholder}}</span>
      <input
        :autocomplete="autocomplete"
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
    :autocomplete="autocomplete"
    :disabled="isHidden"
    :id="name"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    :type="type"
  >
</template>

<style lang="scss">
@import "../includes/styles/animations";
@import "../includes/styles/sizes";
@import "../includes/styles/palette";

$label-font-size: $sizes-m;

.input-block {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-height: $sizes-xl;
  opacity: 1;
  overflow: hidden;
  position: relative;
  transition: $default-transition;

  &.hidden {
    opacity: 0;
    max-height: 0;
    user-select: none;
  }

  &.checkbox {
    span, svg {
      cursor: pointer;
      user-select: none;
    }
    svg {
      margin: 0;
      margin-right: $sizes-s;
      order: 1;
      position: initial;
    }
    span {
      flex: 1;
      order: 2;
      text-align: left;
    }
    input {
      order: 3;
    }
  }
}

label {
  align-items: center;
  display: flex;
  position: relative;
  width: 100%;

  :last-child {
    font-size: $label-font-size;
    left: 0;
    margin: 0 $sizes-s;
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
    color: lighten($text, 40%);
    line-height: normal;
  }

  &[type="text"],
  &[type="email"],
  &[type="password"] {
    border: $border-m solid $whiteish;
    transition: $default-transition;
    min-width: 200px;
    width: 100%;
    + svg {
      transition: $default-transition;
    }
    &:not(:focus) {
      padding: 0 $sizes-s 0 $label-font-size * 2;
    }
    &:focus {
      padding: 0 $label-font-size * 2 0 $sizes-s;
      padding-right: $sizes-s;
      + svg {
        left: -$sizes-l;
      }
    }
  }

  &[type="submit"] {
    color: lighten($primary, 40%);
    cursor: pointer;
    background: $primary;
    border: 0;
    padding: 0 $label-font-size * 2;
    width: 100%;

    ~ svg {
      color: lighten($primary, 40%);
    }
  }

  &[type="checkbox"] {
    align-items: center;
    cursor: pointer;
    display: flex;
    margin: 0;
    margin-left: $sizes-s;
    position: relative;
    visibility: hidden;
    width: calc(#{$sizes-m} + 4px);

    &:before {
      border: $border-m solid $whiteish;
      content: "";
      display: block;
      height: $sizes-m;
      position: relative;
      top: 0;
      transition: $default-transition;
      visibility: visible;
      width: $sizes-m;
      z-index: 1;
    }

    &:checked {
      &:before {
        height: $sizes-s;
        border-color: $primary;
        border-right-style: none;
        border-top-style: none;
        position: relative;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
