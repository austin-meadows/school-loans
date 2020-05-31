<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import { db } from "../includes/firebase";
import { Heading, Input, Section } from "../components";

export default {
  components: {
    Heading,
    Input,
    Loading,
    Section,
  },
  computed: {
    auth() {
      return this.$store.state.auth;
    },
  },
  data() {
    return {
      donor: false,
      isLoadingPage: false,
      isLoadingForm: false,
      name: "",
      student: false,
    };
  },
  created() {
    this.isLoadingPage = true;
    db.collection("users")
      .doc(this.auth)
      .get()
      .then((doc) => {
        // if (doc.exists) {
        // } else {
        // }
        this.isLoadingPage = false;
        return doc.exists;
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
            type: (this.donor ? 2 : 0) + (this.student ? 1 : 0),
          },
          { merge: true }
        )
        .then(() => {
          this.isLoadingForm = false;
        })
        .catch(() => {
          this.isLoadingForm = false;
        });
    },
  },
};
</script>

<template>
  <Section>
    <loading loader="dots" :active.sync="isLoadingPage"></loading>
    <p>Welcome to our platform! Let's get you started.</p>
    <form ref="form" @submit="submit" novalidate="true">
      <Heading>I am a</Heading>
      <Input
        icon="user-graduate"
        name="student"
        placeholder="Student"
        type="checkbox"
        v-model="student"
      />
      <Input icon="donate" name="donor" placeholder="Donor" type="checkbox" v-model="donor" />
      <Heading>My name is</Heading>
      <Input icon="signature" name="name" placeholder="Name" type="text" v-model="name" />
      <Input icon="arrow-right" :isLoading="isLoadingForm" placeholder="Continue" type="submit" />
    </form>
  </Section>
</template>
