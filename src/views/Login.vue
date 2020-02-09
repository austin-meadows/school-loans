<script>
import { CustomInput, HeaderText, Section } from "../components";
import { validate } from "../utils/js";

export default {
  components: {
    HeaderText,
    CustomInput,
    Section
  },
  data() {
    return {
      email: "",
      emailConfirm: "",
      formKind: "loginForm",
      isHidden: true,
      isLoading: false,
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();

      this.isLoading = true;

      const { email, emailConfirm, formKind, password, passwordConfirm } = this;
      const errors = [];

      if (!validate("email", email)) {
        errors.push("Invalid email.");
      }

      // Validation checks specific to the Sign Up form
      if (formKind === "signUpForm") {
        if (password.length < 8) {
          errors.push("Passwords must be at least 8 characters long.");
        } else if (password !== passwordConfirm) {
          errors.push("Passwords don't match");
        }
        if (email !== emailConfirm) {
          errors.push("Emails don't match.");
        }
      }

      // If there are no validation errors, attempt to sign in
      if (!errors.length) {
        // Signup form action
        if (formKind === "signUpForm") {
          this.$store.dispatch("signUp", { email, password });
        }
        // Login form action
        if (formKind === "loginForm") {
          this.$store.dispatch("signIn", { email, password });
        }
      }
      // If there are errors, show each of them.
      else {
        errors.forEach(error => {
          this.$toasted.show(error, { type: "error" });
          this.isLoading = false;
        });
      }
    },
    onClickSwitcher(e) {
      const selectedForm = e.target.parentNode.id;
      if (this.formKind !== selectedForm) {
        this.isHidden = !this.isHidden;
        this.formKind = selectedForm;
      }
    }
  }
};
</script>

<template>
  <div id="login">
    <Section>
      <div class="login-switcher">
        <HeaderText :class="{ active: isHidden }" id="loginForm">
          <a @click="onClickSwitcher">Login</a>
        </HeaderText>
        <HeaderText :class="{ active: !isHidden }" id="signUpForm">
          <a @click="onClickSwitcher">Sign up</a>
        </HeaderText>
      </div>
      <form ref="form" @submit="checkForm" novalidate="true" autocomplete="true">
        <CustomInput
          autocomplete="email"
          icon="envelope"
          name="email"
          placeholder="Email"
          type="email"
          v-model="email"
        />
        <CustomInput
          :isHidden="isHidden"
          autocomplete="email"
          icon="envelope"
          name="emailConfirm"
          placeholder="Confirm Email"
          ref="emailConfirm"
          type="email"
          v-model="emailConfirm"
        />
        <CustomInput
          :autocomplete="{ 'new-password': !isHidden, 'current-password': isHidden }"
          icon="key"
          name="password"
          placeholder="Password"
          type="password"
          v-model="password"
        />
        <CustomInput
          :isHidden="isHidden"
          autocomplete="new-password"
          icon="key"
          name="passwordConfirm"
          placeholder="Confirm Password"
          ref="passwordConfirm"
          type="password"
          v-model="passwordConfirm"
        />
        <CustomInput
          :isLoading="isLoading"
          icon="sign-in-alt"
          :placeholder="this.formKind === 'loginForm' ? 'Login' : 'Sign Up'"
          type="submit"
        />
      </form>
    </Section>
  </div>
</template>

<style lang="scss">
@import "../utils/styles/animations";
@import "../utils/styles/palette";
@import "../utils/styles/sizes";

.login-switcher {
  margin-bottom: $sizes-m;
  text-align: center;
  user-select: none;

  > * {
    cursor: pointer;
    display: inline-block;
    padding: 0 $sizes-xs;
    transition: $default-transition;
  }

  .header:not(.active) {
    color: $text;
    font-weight: normal;
  }
}
</style>
