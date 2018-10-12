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
      <p>fuck:</p>
      <CustomInput icon="envelope" name="student" placeholder="Student" type="checkbox"/>
    </Section>
  </div>
</template>
