<script>
import Input from '@/components/Input.vue';
import Section from '@/components/Section.vue';

export default {
  components: {
    Input,
    Section,
  },
};
</script>

<template>
  <div id="dashboard">
    <Section>
      <p>Welcome to our platform! Let's get you started.</p>
      <p>fuck:</p>
      <Input icon="envelope" name="student" placeholder="Student" type="checkbox">
    </Section>
  </div>
</template>
