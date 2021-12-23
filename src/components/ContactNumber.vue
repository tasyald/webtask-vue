<template>
  <div class="contact-number" :style="{ justifyContent: center ? 'center' : 'initial' }">
    <div class="contact-icon">
      <font-awesome-icon icon="comments" />
    </div>
    <div class="contact-phone"><b>{{ number }}</b></div>
  </div>
</template>

<script>
export default {
  name: 'ContactNumber',
  props: {
    number: {
      type: String,
      default: ''
    },
    center: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/base';

.contact-number {
  color: $primary_color;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;

  .contact-icon {
    font-size: 40px;
    margin-right: 1rem;
  }

  .contact-phone {
    font-size: 28px;
  }
}
</style>
