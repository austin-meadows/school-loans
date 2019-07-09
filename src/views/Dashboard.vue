<script>
import db from '@/main';
import Onboarding from '@/components/Dashboard/Onboarding.vue';

export default {
  components: {
    Onboarding,
  },
  data() {
    const { uid } = this.$root.$data;
    let type;

    db.collection('users').doc(uid)
      .get().then(async (doc) => {
        if (doc.exists) {
          type = await doc.data();
        }
      });

    return {
      type,
    };
  },
};
</script>

<template>
  <div id="dashboard">
    <Onboarding />
  </div>
</template>
