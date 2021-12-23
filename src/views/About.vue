<template>
  <div class="about page">
    <introduction />
    <features v-show="features.length > 0" />
  </div>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import Features from '@/components/Features.vue'

export default {
  name: 'About',
  data() {
    return {
      features: []
    }
  },
  components: {
    Introduction,
    Features
  }
}
</script>
