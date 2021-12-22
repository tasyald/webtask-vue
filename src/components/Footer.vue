<template>
  <footer class="footer">
    <div class="container-body columns is-multiline">
      <div class="column is-6 is-12-mobile footer-follow">
        <div class="footer-follow-us">
          Follow Us:
        </div>
        <social-media />
      </div>

      <div class="column is-6 footer-copyrights">
        <div class="footer-links">
          <router-link to="/about" class="footer-link">About</router-link>
          <router-link to="/contact" class="footer-link">Contact Us</router-link>
        </div>
        <div>
          <span class="copyright-year">&copy; 2017</span> DANA – PT. Espay Debit Koe. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  components: {
    SocialMedia
  }
}
</script>

<style lang="scss">
@import '../assets/scss/base';

.footer {
  background: $primary_color !important;
  padding: 5rem 1.5rem 3rem !important;

  .columns {
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;

    .footer-follow {
      text-align: left;
    }
  
    .footer-copyrights {
      text-align: right;
  
      .footer-links {
        text-transform: uppercase;
  
        .footer-link {
          color: #FFFFFF;
          margin-left: 2rem;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .footer {
    padding-top: 3rem;

    .column {
      text-align: center !important;

      .footer-follow-us {
        margin-bottom: 1rem;
      }

      .footer-links {
        display: flex;
        justify-content: space-around;
        margin-bottom: 3rem;

        .footer-link {
          margin-left: 0 !important;
        }
      }

      .copyright-year {
        display: block;
      }
    }
  }
}
</style>
