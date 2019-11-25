<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import { db } from "../includes/firebase";
import { CustomInput, HeaderText, Section } from "../components";

export default {
  components: {
    CustomInput,
    HeaderText,
    Loading,
    Section
  },
  computed: {
    auth() {
      return this.$store.state.auth;
    }
  },
  data() {
    return {
      donor: false,
      isLoadingPage: false,
      isLoadingForm: false,
      name: "",
      student: false
    };
  },
  created() {
    this.isLoadingPage = true;
    db.collection("users")
      .doc(this.auth)
      .get()
      .then(doc => {
        if (doc.exists) {
          this.isLoadingPage = false;
        }
      });
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.isLoadingForm = true;

      return db
        .collection("users")
        .doc(this.auth)
        .set(
          {
            name: this.name,
            type: (this.donor ? 2 : 0) + (this.student ? 1 : 0)
          },
          { merge: true }
        )
        .then(() => {
          this.isLoadingForm = false;
        })
        .catch(() => {
          this.isLoadingForm = false;
        });
    }
  }
};
</script>

<template>
  <Section>
    <loading loader="dots" :active.sync="isLoadingPage"></loading>
    <p>Welcome to our platform! Let's get you started.</p>
    <form ref="form" @submit="submit" novalidate="true">
      <HeaderText>I am a</HeaderText>
      <CustomInput
        icon="user-graduate"
        name="student"
        placeholder="Student"
        type="checkbox"
        v-model="student"
      />
      <CustomInput icon="donate" name="donor" placeholder="Donor" type="checkbox" v-model="donor" />
      <HeaderText>My name is</HeaderText>
      <CustomInput icon="signature" name="name" placeholder="Name" type="text" v-model="name" />
      <CustomInput
        icon="arrow-right"
        :isLoading="isLoadingForm"
        placeholder="Continue"
        type="submit"
      />
    </form>
  </Section>
</template>
