<template>
  <div class="home">
    <Slide
      title="Student Loans are a problem"
      msg="It is estimated the current total student loan debt is close to $2 trillion."
    />
    <Slide
      title="We are the solution"
      msg="Together, we can eliminate this problem."
    />
    <Slide
      title="Post your student loan"
      msg="Track your student loan. Get money to pay off your loan directly."
    />
    <Slide
      title="Or help out students like you"
      msg="Help pay off other student's loans."
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Slide from '@/components/Home/Slide.vue';

export default {
  name: 'home',
  components: {
    Slide,
  },
};
</script>
