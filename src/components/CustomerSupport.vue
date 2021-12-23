<template>
  <div class="customer-support">
    <h2 class="title">Customer Support</h2>
    <contact-number :number="number" />
    <p class="contact-description">
      Contact our customer support or email us at <a href="mailto:help@dana.id" class="email"><b>help@dana.id</b></a> if you need help
    </p>
  </div>
</template>

<script>
import ContactNumber from '@/components/ContactNumber.vue'

export default {
  name: 'CustomerSupport',
  components: {
    ContactNumber
  },
  props: {
    number: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/base';

.customer-support {
  .title {
    margin-bottom: 0.5rem;
  }

  .email {
    color: $primary_color;
  }
}
</style>
