<script>
import { auth } from "@/main";
import CustomInput from "@/components/CustomInput.vue";
import HeaderText from "@/components/HeaderText.vue";
import Section from "@/components/Section.vue";
import validate from "@/includes/js/validate";

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
          },
          err => {
            this.$toasted.show(err.message, { type: "error" });
          }
        );
      }

      if (!this.errors.length && this.formKind === "loginForm") {
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

      this.errors.forEach(error => {
        this.$toasted.show(error, { type: "error" });
      });

      this.isLoading = false;
      return false;
    },
    onClickSwitcher(e) {
      this.$refs.login.$el.classList.remove("active");
      this.$refs.signUp.$el.classList.remove("active");
      e.target.parentNode.classList.add("active");
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
        <HeaderText class="active" ref="login" id="loginForm">
          <a @click="onClickSwitcher">Login</a>
        </HeaderText>
        <HeaderText ref="signUp" id="signUpForm">
          <a @click="onClickSwitcher">Sign up</a>
        </HeaderText>
      </div>
      <form ref="form" @submit="checkForm" novalidate="true">
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
          autocomplete="current-password"
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
@import "../includes/styles/animations.scss";
@import "../includes/styles/sizes";
@import "../includes/styles/palette.scss";

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

  h1:not(.active) {
    color: $text;
    font-weight: normal;
  }
}
</style>
