<script>
import Section from '@/components/Section.vue';
import HeaderText from '@/components/HeaderText.vue';
import validate from '@/utils/js/validate';

export default {
  name: 'login',
  components: {
    HeaderText,
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
      if (!this.errors.length) {
        return true;
      }
      // eslint-disable-next-line
      this.errors.forEach(error => {
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
      const confirmEmail = document.getElementById('input-email-confirm');
      const confirmPassword = document.getElementById('input-password-confirm');
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
        <a @click=" onClickSwitcher">Sign up</a>
      </HeaderText>
    </div>
    <Section>
      <form @submit="checkForm" novalidate="true">
        <div class="input-block">
          <label for="email">
            <fa icon="envelope" />
          </label>
          <input type="email" v-model="email" id="email" placeholder="Email">
        </div>
        <div class="input-block hidden" id="input-email-confirm">
          <label for="emailConfirm">
            <fa icon="envelope" />
          </label>
          <input type="email" v-model="emailConfirm" id="emailConfirm" placeholder="Confirm Email">
        </div>
        <div class="input-block">
          <label for="password">
            <fa icon="key" />
          </label>
          <input type="password" v-model="password" id="password" placeholder="Password">
        </div>
        <div class="input-block hidden" id="input-password-confirm">
          <label for="passwordConfirm">
            <fa icon="key" />
          </label>
          <input
            type="password"
            v-model="passwordConfirm"
            id="passwordConfirm"
            placeholder="Confirm Password"
          >
        </div>
        <input type="submit" value="Submit">
      </form>
    </Section>
  </div>
</template>

<style lang="scss">
@import '../styles/sizes';
@import '../styles/palette.scss';

$label-font-size: $sizes-m;

#login {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - #{$navHeight});
  justify-content: center;
  padding-bottom: $base * 3;
}

.login-switcher {
  display: flex;
  text-align: center;

  h1 {
    color: $color1;
    cursor: pointer;
    padding: 0 10px;
  }
  h1:not(.active) {
    color: $text;
    opacity: 0.25;
    font-weight: normal;
  }
}

form {
  display: flex;
  flex-direction: column;
  position: relative;

  .input-block {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;

    &.hidden {
      display: none;
    }
  }

  label {
    align-items: center;
    display: flex;
    font-size: $label-font-size;
    left: 0;
    padding: 0 ($label-font-size / 2);
    position: absolute;
  }

  input {
    border: 1px solid $text;
    border-radius: $label-font-size / 2;
    font-size: $label-font-size;
    height: $label-font-size * 2;
    margin: $sizes-s 0;
    padding: 0 $label-font-size * 2;

    &::placeholder {
      color: #bbb;
      line-height: normal;
    }

    &[type='submit'] {
      background: $color1;
      border: 0;
    }
  }
}
</style>
