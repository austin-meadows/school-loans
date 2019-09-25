<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  components: {
    Loading
  },
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
      type: Boolean
    },
    /*
      (usually on a submit button) if an action is "loading" due to a button press
    */
    isLoading: {
      default: false,
      type: Boolean
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
    type: String
  }
};
</script>

<template>
  <div v-if="icon" :class="['input-block', { hidden: isHidden }, type]" ref="inputBlock">
    <label class="input-label" :for="name">
      <loading :active.sync="isLoading" :is-full-page="false"></loading>

      <span class="input-placeholder" v-if="type === 'checkbox'">{{ placeholder }}</span>
      <input
        :autocomplete="autocomplete"
        class="input"
        :disabled="isHidden"
        :id="name"
        @input="$emit('input', type === 'checkbox' ? $event.target.checked : $event.target.value)"
        :placeholder="placeholder"
        :type="type"
      />
      <fa :icon="icon" />
    </label>
  </div>
  <input
    v-else
    :autocomplete="autocomplete"
    class="input"
    :disabled="isHidden"
    :id="name"
    @input="$emit('input', type === 'checkbox' ? $event.target.checked : $event.target.value)"
    :placeholder="placeholder"
    :type="type"
  />
</template>

<style lang="scss">
@import "../utils/styles/animations";
@import "../utils/styles/sizes";
@import "../utils/styles/palette";

$label-font-size: $sizes-m;
$checkbox-size: $label-font-size * 0.75;

.input-block {
  // this should just be large, it doesnt matter.
  // used for transition
  max-height: $label-font-size * 10;
  opacity: 1;
  overflow: hidden;
  transition: $default-transition;

  &.hidden {
    opacity: 0;
    max-height: 0;
    user-select: none;
  }

  &.checkbox {
    .input-placeholder,
    svg {
      cursor: pointer;
      user-select: none;
    }
    svg {
      margin: 0;
      margin-right: $sizes-s;
      order: 1;
      position: initial;
    }
    .input-placeholder {
      flex: 1;
      order: 2;
      text-align: left;
    }
    .input {
      order: 3;
    }
    .input-label {
      height: calc(#{$label-font-size} * 3 + 2px);
    }
  }
}

.input-label {
  align-items: center;
  display: flex;
  position: relative;

  > :last-child {
    font-size: $label-font-size;
    left: 0;
    line-height: $label-font-size;
    margin-left: $label-font-size;
    position: absolute;
  }
}

.input {
  border: 0;
  border-radius: $label-font-size;
  font-size: $label-font-size;
  // sanitize/normalize.css seems to reset what we select.
  font-family: "Open Sans", sans-serif;
  line-height: $label-font-size;
  margin: $sizes-s 0;
  padding: $label-font-size $label-font-size $label-font-size $label-font-size +
    (2 * $label-font-size);
  width: 100%;
  &::placeholder {
    color: lighten($text, 40%);
    line-height: normal;
  }

  &[type="text"],
  &[type="email"],
  &[type="password"] {
    border: $border-m solid $whiteish;
    transition: $default-transition;

    + svg {
      transition: $default-transition;
    }
    &:focus {
      padding: $label-font-size $label-font-size * 2 $label-font-size $label-font-size;
      padding-right: $label-font-size;

      + svg {
        left: -$label-font-size * 3;
      }
    }
  }

  &[type="submit"] {
    color: lighten($primary, 40%);
    cursor: pointer;
    background: $primary;
    padding: $label-font-size;

    ~ svg {
      color: lighten($primary, 40%);
    }
  }

  &[type="checkbox"] {
    cursor: pointer;
    position: relative;
    visibility: hidden;
    height: calc(50% + #{$border-m * 2});
    width: calc(#{$checkbox-size * 2} + #{$border-m * 2});

    &:before {
      border: $border-m solid $whiteish;
      content: "";
      display: block;
      padding: $checkbox-size;
      transition: $default-transition;
      visibility: visible;
      z-index: 1;
    }

    &:checked {
      &:before {
        border-color: $primary;
        border-right-style: none;
        border-top-style: none;
        padding-top: $checkbox-size * 0.1;
        transform: rotate(-45deg);
      }
    }
  }

  // fix for mobile safari adding shadow
  &:not([type="checkbox"]):not([type="radio"]) {
    -webkit-appearance: none;
  }
}
</style>
