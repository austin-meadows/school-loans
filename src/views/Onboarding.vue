<script>
import db from "@/main";
import CustomInput from "@/components/CustomInput.vue";
import HeaderText from "@/components/HeaderText.vue";
import Section from "@/components/Section.vue";

export default {
  components: {
    CustomInput,
    HeaderText,
    Section
  },
  data() {
    return {
      donor: false,
      isLoading: false,
      name: "",
      student: false
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.isLoading = true;

      return db
        .collection("users")
        .doc(this.$root.$data.uid)
        .set(
          {
            name: this.name,
            type: (this.donor ? 2 : 0) + (this.student ? 1 : 0)
          },
          { merge: true }
        )
        .then(() => {
          this.isLoading = false;
        })
        .always(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<template>
  <Section>
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
      <CustomInput icon="arrow-right" :isLoading="isLoading" type="submit" value="Continue" />
    </form>
  </Section>
</template>
