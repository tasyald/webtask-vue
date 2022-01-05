<template>
  <div class="contact-info column is-7">
    <customer-support :number="number" />
    <contact-social />
  </div>
</template>

<script>
import ContactSocial from '@/components/ContactSocial.vue'
import CustomerSupport from '@/components/CustomerSupport.vue'

export default {
  name: 'ContactInfo',
  components: {
    CustomerSupport,
    ContactSocial
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

.contact-info {
  padding: 3rem;
  text-align: left;
}

@media screen and (max-width: 768px) {
  .contact-info {
    display: none;
  }
}
</style>
