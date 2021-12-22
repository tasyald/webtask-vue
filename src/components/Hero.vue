<template>
  <section
    class="hero"
    :style="heroStyle"
  >
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="hero-title title">{{ title }}</h1>
        <h3 class="hero-subtitle subtitle">{{ subtitle }}</h3>
        <button class="hero-button button is-primary is-outlined">More Info</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Lorem Ipsum'
    },
    subtitle: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum turpis orci.'
    },
    image: {
      type: String,
      default: 'assets/images/placeholder_hero.jpg'
    }
  },
  computed: {
    heroStyle: function() {
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${this.image}')`
      }
    }
  }
}
</script>

<style lang="scss">
.hero {
  height: 22rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .hero-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    .hero-title {
      font-size: 50px;
      font-weight: 700;
      color: #FFFFFF;
    }

    .hero-subtitle {
      margin: 1rem 0 1.5rem;
      color: #FFFFFF;
    }

    .hero-button {
      color: #FFFFFF !important;
      border: 2px solid #FFFFFF !important;
      border-radius: 0;
      text-transform: uppercase;
      padding: 1rem 1.5rem;
      max-width: 8.75rem;
    }

    .hero-button:hover,
    .hero-button:focus {
      background-color: #FFFFFF !important;
      border: none;
      color: #3F4143 !important;
      font-weight: bold;
    }
  }
}
</style>
