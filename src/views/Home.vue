<template>
  <div class="home">
    <Slide
      v-for="(slide, index) in slides"
      :key="index"
      :title="slide.title"
      :msg="slide.msg"
      :id="index % 5 + 1"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Slide from '@/components/Home/Slide.vue';

export default {
  name: 'home',
  data() {
    return {
      slides: [
        {
          title: 'Student Loans are a problem',
          msg: 'It is estimated the current total student loan debt is close to $2 trillion.',
        },
        {
          title: 'We are the solution',
          msg: 'Together, we can eliminate this problem.',
        },
        {
          title: 'Post your student loan',
          msg: 'Track your student loan. Get money to pay off your loan directly.',
        },
        {
          title: 'Or help out students like you',
          msg: 'Help pay off other student\'s loans.'
        },
      ],
    };
  },
  components: {
    Slide,
  },
};
</script>
