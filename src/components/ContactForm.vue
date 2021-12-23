<template>
  <section class="contact-form column is-5">
    <h2 class="title">Contact Us</h2>
    <div class="is-mobile">
      <contact-number number="1-500-445" center />
      <p class="fill-form">Or kindly fill out this form, we'll get back to you as quickly as possible</p>
    </div>
    <form>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" />
        </div>
      </div>

      <div class="field">
        <label class="label">E-mail</label>
        <div class="control">
          <input class="input" type="email" />
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea"></textarea>
        </div>
      </div>
    </form>

    <button class="button-send button is-primary is-fullwidth">Send</button>
  </section>
</template>

<script>
import ContactNumber from '@/components/ContactNumber.vue'
export default {
  name: 'ContactForm',
  components: {
    ContactNumber
  }
}
</script>

<style lang="scss">
@import '../assets/scss/base';

.contact-form {
  padding: 3rem;
  text-align: left;

  .is-mobile {
    display: none;
  }

  .field:not(:last-child) {
    margin-bottom: 1.25rem;
  }

  .input:active,
  .textarea:active {
    border-color: $primary_color;
  }

  .textarea {
    resize: none;
  }

  .button-send {
    margin-top: 1.5rem;
    background-color: $primary_color;
  }

  .button-send:hover {
    background-color: #1081DE;
  }
}

@media screen and (max-width: 768px) {
  .contact-form {
    padding: 2.5rem 2rem;

    .title {
      margin-bottom: 0;
    }

    .is-mobile {
      display: block;

      .fill-form {
        text-align: center;
        margin: 1rem 0;
      }
    }
  }
}
</style>
