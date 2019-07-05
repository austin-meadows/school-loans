<script>
import CustomInput from '@/components/CustomInput.vue';
import Section from '@/components/Section.vue';

export default {
  components: {
    CustomInput,
    Section,
  },
};
</script>

<template>
  <div id="dashboard">
    <Section>
      <p>Welcome to our platform! Let's get you started.</p>
      <CustomInput icon="user-graduate" name="student" placeholder="Student" type="checkbox" />
      <CustomInput icon="donate" name="donor" placeholder="Donor" type="checkbox" />
      <CustomInput type="submit" value="Continue" />
    </Section>
  </div>
</template>
