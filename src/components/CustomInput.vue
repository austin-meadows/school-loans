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
  data() {
    return {
      noAnimation: true,
    };
  },
  methods: {
    allowAnimation() {
      if (this.$refs.inputBlock) {
        this.$refs.inputBlock.classList.remove('no-animation');
        this.noAnimation = false;
      }
    },
  },
  mounted() {
    setTimeout(() => this.allowAnimation(), 201);
  },
};
</script>

<template>
  <div
    v-if="icon"
    :class="
      ['input-block', { hidden: isHidden },
      { hideable: isHidden != null },
      { 'no-animation': this.noAnimation }
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

.no-animation.hideable, .no-animation * {
  animation-duration: 0s !important;
}

@keyframes showInput {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 3em;
    opacity: 100%;
  }
}

@keyframes hideInput {
  from {
    max-height: 3em;
    opacity: 100%;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
}

.input-block.hideable:not(.hidden) {
  animation-name: showInput;
  animation-duration: 0.2s;
  max-height: 3em;
}

.hidden {
  animation-name: hideInput;
  animation-duration: 0.2s;
  max-height: 0;
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
    animation-duration: 0.2s;
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
    animation-name: unfocusInput;
    animation-duration: 0.2s;
    border: 1px solid $whiteish;
    min-width: 200px;
    &:not(:focus) {
      padding: 0 $sizes-s 0 $label-font-size * 2;
    }
    &:focus {
      animation-name: focusInput;
      animation-duration: 0.2s;
      padding: 0 $label-font-size * 2 0 $sizes-s;
      + svg {
        animation-name: focusInput;
        animation-duration: 0.2s;
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

$slideDistance: 100;
$slideDuration: 0.4s;

%slide-up {
  animation-duration: $slideDuration;
  animation-fill-mode: both;
  animation-name: slideUp;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideUp {
  0% {
    transform: translateY(rem($slideDistance));
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes focusInput {
  from {
    padding: 0 $sizes-s 0 $label-font-size * 2;
  }
  to {
    padding: 0 $label-font-size * 2 0 $sizes-s;
  }
}

@keyframes unfocusInput {
  from {
    padding: 0 $label-font-size * 2 0 $sizes-s;
  }
  to {
    padding: 0 $sizes-s 0 $label-font-size * 2;
  }
}

@keyframes focusIcon {
  from {
    left: 0;
  }
  to {
    left: -2em;
  }
}

@keyframes unfocusIcon {
  from {
    left: -2em;
  }
  to {
    left: 0;
  }
}
</style>
