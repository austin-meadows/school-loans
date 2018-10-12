<script>
import { auth } from '@/main';

import CustomInput from '@/components/CustomInput.vue';
import HeaderText from '@/components/HeaderText.vue';
import Section from '@/components/Section.vue';
import validate from '@/utils/js/validate';

export default {
  components: {
    HeaderText,
    CustomInput,
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
      if (!this.errors.length && this.formKind === 'signUpForm') {
        auth.createUserWithEmailAndPassword(this.email, this.password).then(
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

      if (!this.errors.length && this.formKind === 'loginForm') {
        auth.signInWithEmailAndPassword(this.email, this.password).then(
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
      const confirmEmailInput = document.getElementById('emailConfirm');
      const confirmPasswordInput = document.getElementById('passwordConfirm');
      if (selectedForm === 'signUpForm') {
        confirmEmail.classList.remove('hidden');
        confirmEmailInput.disabled = false;
        confirmPassword.classList.remove('hidden');
        confirmPasswordInput.disabled = false;
      } else {
        confirmEmail.classList.add('hidden');
        confirmEmailInput.disabled = true;
        confirmPassword.classList.add('hidden');
        confirmPasswordInput.disabled = true;
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
        <CustomInput
          icon="envelope"
          name="email"
          placeholder="Email"
          type="email"
          v-model="email"
        />
        <CustomInput
          disabled
          class="hidden hideable"
          icon="envelope"
          name="emailConfirm"
          placeholder="Confirm Email"
          ref="emailConfirm"
          type="email"
          v-model="emailConfirm"
        />
        <CustomInput
          icon="key"
          name="password"
          placeholder="Password"
          type="password"
          v-model="password"
        />
        <CustomInput
          disabled
          class="hidden hideable"
          icon="key"
          name="passwordConfirm"
          placeholder="Confirm Password"
          ref="passwordConfirm"
          type="password"
          v-model="passwordConfirm"
        />
        <CustomInput type="submit" value="Submit" />
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

.hideable {
  animation-name: showInput;
  animation-duration: 0.33s;
  max-height: 3em;
  &.hidden {
    animation-name: hideInput;
    animation-duration: 0.33s;
    max-height: 0;
  }
}

.login-switcher {
  display: flex;
  text-align: center;
  user-select: none;

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
</style>
