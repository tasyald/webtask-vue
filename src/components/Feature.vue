<template>
  <div>
    <img class="feature-icon" src='@/assets/images/direction.png' alt="direction" />
    <h3 class="feature-title title is-4">{{ feature.title }}</h3>
    <p>{{ feature.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    feature: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.feature {
  text-align: center;

  .feature-icon {
    width: 40%;
  }

  .feature-title {
    margin: 0.75rem 0;
  }
}

@media screen and (max-width: 768px) {
  .feature {
    padding-top: 2rem;
  }
}
</style>
