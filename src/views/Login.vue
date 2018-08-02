<script>
import { auth } from 'firebase';

import HeaderText from '@/components/HeaderText.vue';
import Input from '@/components/Input.vue';
import Section from '@/components/Section.vue';
import validate from '@/utils/js/validate';

export default {
  components: {
    HeaderText,
    Input,
    Section,
  },
  data() {
    return {
      email: '',
      emailConfirm: '',
      errors: [],
      password: '',
      passwordConfirm: '',
      formKind: 'loginForm',
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];
      if (!validate('email', this.email)) {
        this.errors.push('Invalid email.');
      }
      if (this.formKind === 'signUpForm') {
        if (this.password.length < 8) {
          this.errors.push('Passwords must be at least 8 characters long.');
        } else if (this.password !== this.passwordConfirm) {
          this.errors.push("Passwords don't match");
        }
        if (this.email !== this.emailConfirm) {
          this.errors.push("Emails don't match.");
        }
      }
      if (this.formKind === 'signUpForm' && !this.errors.length) {
        auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            () => {
              this.$notify({
                group: 'auth',
                text: 'Your account has been created!',
                type: 'success',
              });
            },
            (err) => {
              this.$notify({
                group: 'auth',
                text: err.message,
                type: 'error',
              });
            },
          );
      }

      if (this.formKind === 'loginForm' && !this.errors.length) {
        auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            () => {
              this.$router.replace('/');
            },
            (err) => {
              this.$notify({
                group: 'auth',
                text: err.message,
                type: 'error',
              });
            },
          );
      }

      this.errors.forEach((error) => {
        this.$notify({
          group: 'auth',
          text: error,
          type: 'error',
        });
      });

      e.preventDefault();
      return false;
    },
    onClickSwitcher(e) {
      this.$refs.login.$el.classList.remove('active');
      this.$refs.signUp.$el.classList.remove('active');
      e.target.parentNode.classList.add('active');
      const selectedForm = e.target.parentNode.id;
      this.formKind = selectedForm;
      const confirmEmail = this.$refs.emailConfirm.$el;
      const confirmPassword = this.$refs.passwordConfirm.$el;
      if (selectedForm === 'signUpForm') {
        confirmEmail.classList.remove('hidden');
        confirmPassword.classList.remove('hidden');
      } else {
        this.passwordConfirm = null;
        this.emailConfirm = null;
        confirmEmail.classList.add('hidden');
        confirmPassword.classList.add('hidden');
      }
    },
  },
};
</script>

<template>
  <div id="login">
    <div class="login-switcher">
      <HeaderText class="active" ref="login" id="loginForm">
        <a @click="onClickSwitcher">Login</a>
      </HeaderText>
      <HeaderText ref="signUp" id="signUpForm">
        <a @click="onClickSwitcher">Sign up</a>
      </HeaderText>
    </div>
    <Section>
      <form @submit="checkForm" novalidate="true">
        <Input
          icon="envelope"
          name="email"
          placeholder="Email"
          type="email"
          v-model="email"
        />
        <Input
          class="hidden"
          icon="envelope"
          name="emailConfirm"
          placeholder="Confirm Email"
          ref="emailConfirm"
          type="email"
          v-model="emailConfirm"
        />
        <Input
          icon="key"
          name="password"
          placeholder="Password"
          type="password"
          v-model="password"
        />
        <Input
          class="hidden"
          icon="key"
          name="passwordConfirm"
          placeholder="Confirm Password"
          ref="passwordConfirm"
          type="password"
          v-model="passwordConfirm"
        />
        <Input type="submit" value="Submit" />
      </form>
    </Section>
  </div>
</template>

<style lang="scss">
@import '../utils/styles/sizes';
@import '../utils/styles/palette.scss';

#login {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - #{$navHeight * 2});
  justify-content: center;
  padding-bottom: $base * 3;
}

.login-switcher {
  display: flex;
  text-align: center;

  h1 {
    cursor: pointer;
    padding: 0 10px;
  }

  h1:not(.active) {
    color: $text;
    font-weight: normal;
  }
}

form {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
