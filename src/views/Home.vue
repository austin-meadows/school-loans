<template>
  <div class="home">
    <Section
      title="Student Loans are a problem"
      msg="It is estimated the current total student loan debt is close to $2 trillion."
    />
    <Section
      title="We are the solution"
      msg="Together, we can eliminate this problem."
    />
    <Section
      title="Post your student loan"
      msg="Track your student loan. Get money to pay off your loan directly."
    />
    <Section
      title="Or help out students like you"
      msg="Help pay off other student's loans."
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Section from '@/components/Section.vue';

export default {
  name: 'home',
  components: {
    Section,
  },
};
</script>
