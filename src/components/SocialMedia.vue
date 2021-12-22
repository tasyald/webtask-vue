<template>
  <div class="social-media">
    <span class="icon" :style="iconStyle">
      <a href="https://www.facebook.com/danawallet" target="_blank" rel="noreferrer" class="social-link">
        <font-awesome-icon :icon="['fab', 'facebook-square']" />
      </a>
    </span>
    <span class="icon" :style="iconStyle">
      <a href="https://www.instagram.com/dana.id" target="_blank" rel="noreferrer" class="social-link">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </span>
    <span class="icon" :style="iconStyle">
      <a href="https://twitter.com/danasupport" target="_blank" rel="noreferrer" class="social-link">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '24px'
    },
    margin: {
      type: String,
      default: '1rem'
    }
  },
  computed: {
    iconStyle: function() {
      return {
        fontSize: this.size,
        marginRight: this.margin
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/base';

.social-media {
  .social-link {
    color: $primary_color;
  }

  .icon {
    font-size: 24px;
    margin-right: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .social-media {
    display: flex;
    justify-content: space-around;

    .icon {
      margin-right: 0 !important;
    }
  }
}

</style>
