<template>
  <div class="contact page container-body">
    <div class="columns">
      <contact-form />
      <contact-info :number="phone" />
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Contact',
  components: {
    ContactForm,
    ContactInfo
  },
  computed: {
    ...mapGetters([
      'phone'
    ])
  }
}
</script>
