<script>
import Slide from "@/components/About/Slide.vue";
import Section from "@/components/Section.vue";

export default {
  data() {
    return {
      slides: [
        {
          title: "Text",
          msg: "Text"
        },
        {
          title: "Text",
          msg: "Text"
        },
        {
          title: "Text",
          msg: "Text"
        },
        {
          title: "Text",
          msg: "Text."
        }
      ]
    };
  },
  components: {
    Section,
    Slide
  }
};
</script>

<template>
  <div id="onboarding">
    <Section>
      <Slide v-for="(slide, index) in slides" :key="index" :title="slide.title" :msg="slide.msg" />
    </Section>
  </div>
</template>
