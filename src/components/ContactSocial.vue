<template>
  <section class="contact-social">
    <h2 class="title">Social Media</h2>
    <p>Feel free to contact us at one of our social media outlets below</p>
    <div class="socials">
      <social-media size="30px" margin="1.5rem" />
    </div>
  </section>
</template>

<script>
import SocialMedia from "@/components/SocialMedia.vue"

export default {
  name: 'ContactSocial',
  components: {
    SocialMedia
  }
}
</script>

<style lang="scss">
@import '../assets/scss/base';

.contact-social {
  margin-top: 1.5rem;

  .title {
    margin-bottom: 0.5rem;
  }

  .socials {
    margin-top: 1rem;
    color: $primary_color;
  }
}

</style>
