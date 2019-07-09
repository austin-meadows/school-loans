<script>
import db from '@/main';
import CustomInput from '@/components/CustomInput.vue';
import Section from '@/components/Section.vue';

export default {
  components: {
    CustomInput,
    Section,
  },
  data() {
    return {
      donor: false,
      student: false,
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();

      const { uid } = this.$root.$data;
      const type = (this.donor ? 2 : 0) + (this.student ? 1 : 0);

      db.collection('users').doc(uid)
        .set({
          type,
        }, { merge: true });
    },
  },
};
</script>

<template>
  <Section>
    <p>Welcome to our platform! Let's get you started.</p>
    <form ref="form" @submit="submit" novalidate="true">
      <CustomInput
        icon="user-graduate"
        name="student"
        placeholder="Student"
        type="checkbox"
        v-model="student"
      />
      <CustomInput icon="donate" name="donor" placeholder="Donor" type="checkbox" v-model="donor" />
      <CustomInput icon="arrow-right" type="submit" value="Continue" />
    </form>
  </Section>
</template>
