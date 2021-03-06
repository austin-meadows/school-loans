<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  components: {
    Loading,
  },
  data() {
    return {
      parsedAutocomplete() {
        if (typeof this.autocomplete === "string") return this.autocomplete;
        if (
          typeof this.autocomplete === "object" &&
          this.autocomplete !== null
        ) {
          return Object.keys(this.autocomplete).filter(
            (key) => this.autocomplete[key]
          )[0];
        }
        return null;
      },
    };
  },
  props: {
    /*
      autcomplete attribute, if necessary
      see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute
    */
    autocomplete: [Object, String],
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
      (usually on a submit button) if an action is "loading" due to a button press
    */
    isLoading: {
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
  <div v-if="icon" :class="['input-block', { hidden: isHidden }, type]">
    <label class="input-label" :for="name">
      <loading
        v-if="isLoading"
        loader="dots"
        :active.sync="isLoading"
        :is-full-page="false"
      ></loading>
      <span class="input-placeholder" v-if="type === 'checkbox'">{{
        placeholder
      }}</span>
      <input
        :autocomplete="this.parsedAutocomplete()"
        class="input"
        :disabled="isHidden || isLoading"
        :id="name"
        @input="
          $emit(
            'input',
            type === 'checkbox' ? $event.target.checked : $event.target.value
          )
        "
        :placeholder="placeholder"
        :type="type"
      />
      <fa :icon="icon" />
    </label>
  </div>
  <input
    v-else
    :autocomplete="this.parsedAutocomplete()"
    class="input"
    :disabled="isHidden || isLoading"
    :id="name"
    @input="
      $emit(
        'input',
        type === 'checkbox' ? $event.target.checked : $event.target.value
      )
    "
    :placeholder="placeholder"
    :type="type"
  />
</template>

<style lang="scss">
@import "../utils/styles/animations";
@import "../utils/styles/sizes";
@import "../utils/styles/palette";

$label-font-size: $sizes-m;

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
      height: $label-font-size * 3 + $border-m;
    }
  }

  .vld-overlay {
    ~ .input {
      pointer-events: none;
    }
    svg {
      height: $label-font-size * 3;
    }
  }
}

.input-label {
  align-items: center;
  cursor: pointer;
  display: flex;
  position: relative;

  > :last-child {
    font-size: $label-font-size;
    left: 0;
    line-height: $label-font-size;
    margin-left: $label-font-size + $border-m;
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
    border: $border-m solid $text;
    transition: $default-transition;

    + svg {
      transition: $default-transition;
    }
    &:focus {
      padding: $label-font-size $label-font-size * 2 $label-font-size
        $label-font-size;
      padding-right: $label-font-size;

      + svg {
        left: -$label-font-size * 2 - ($border-m * 3);
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
    height: $label-font-size * 3 - ($border-m * 5);
    margin: 0;
    padding: 1em;
    position: relative;
    visibility: hidden;
    width: $label-font-size * 2 + $border-m * 2;

    &:before {
      border: $border-m solid $text;
      content: "";
      display: block;
      padding: $label-font-size;
      position: absolute;
      right: 0;
      top: $border-m;
      transition: $default-transition;
      visibility: visible;
      z-index: 1;
    }

    &:checked {
      &:before {
        border-color: $primary;
        border-right-style: none;
        border-top-style: none;
        padding-top: $label-font-size * 0.1;
        top: $border-m * 4;
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
