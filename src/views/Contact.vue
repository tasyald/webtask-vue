<template>
  <div class="contact page container-body">
    <div class="columns">
      <contact-form />
      <contact-info />
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
import ContactInfo from '../components/ContactInfo.vue'

export default {
  name: 'Contact',
  components: {
    ContactForm,
    ContactInfo
  },
}
</script>
