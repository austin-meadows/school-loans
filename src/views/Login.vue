<script>
import { auth } from "../includes/firebase";
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
      errors: [],
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

      this.errors = [];
      if (!validate("email", this.email)) {
        this.errors.push("Invalid email.");
      }
      if (this.formKind === "signUpForm") {
        if (this.password.length < 8) {
          this.errors.push("Passwords must be at least 8 characters long.");
        } else if (this.password !== this.passwordConfirm) {
          this.errors.push("Passwords don't match");
        }
        if (this.email !== this.emailConfirm) {
          this.errors.push("Emails don't match.");
        }
      }
      if (!this.errors.length && this.formKind === "signUpForm") {
        auth.createUserWithEmailAndPassword(this.email, this.password).then(
          () => {
            this.$toasted.show("Your account has been created!", {
              type: "success"
            });
            this.login();
          },
          err => {
            this.$toasted.show(err.message, { type: "error" });
          }
        );
      }

      if (!this.errors.length && this.formKind === "loginForm") {
        this.login();
      }

      this.errors.forEach(error => {
        this.$toasted.show(error, { type: "error" });
      });

      this.isLoading = false;
      return false;
    },
    onClickSwitcher(e) {
      const selectedForm = e.target.parentNode.id;
      if (this.formKind !== selectedForm) {
        this.isHidden = !this.isHidden;
        this.formKind = selectedForm;
      }
    },
    login() {
      auth.signInWithEmailAndPassword(this.email, this.password).then(
        () => {
          this.$router.replace("/");
          this.$toasted.show("You have signed in!", {
            type: "success",
            icon: "fa-thumbs-up"
          });
        },
        err => {
          this.$toasted.show(err.message, { type: "error" });
        }
      );
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
        <CustomInput :isLoading="isLoading" icon="sign-in-alt" type="submit" value="Login" />
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
