<template>
  <div class="about page">
    <introduction :title="title" :description="description" />
    <features :title="title" :features="features" v-show="features.length > 0" />
  </div>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import Features from '@/components/Features.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'About',
  components: {
    Introduction,
    Features
  },
  mounted() {
    if (this.$store.getters.title === '' || this.$store.getters.description === '') {
      this.$store.dispatch('getAboutInfo')
    }
  },
  computed: {
    ...mapGetters([
      'title',
      'description'
    ]),
    features() {
      let feat = [];
      for (let i = 0; i < 4; i++) {
        feat.push({ title: this.$store.getters.title, description: this.$store.getters.description })
      }
      return feat
    }
  }
}
</script>
