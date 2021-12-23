<template>
  <section class="features container-body">
    <h1 class="features-title title is-2">{{ title }}</h1>
    <div class="columns is-variable is-4">
      <div class="feature column" v-for="feature in features" :key="feature.id">
        <feature :feature="feature" />
      </div>
    </div> 
  </section>
</template>

<script>
import Feature from '@/components/Feature.vue'

export default {
  name: 'Features',
  components: {
    Feature
  },
  props: {
    title: {
      type: String,
      default: 'Lorem Ipsum'
    },
    features: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.features {
  padding: 3rem;

  .features-title {
    text-align: center;
    margin-bottom: 3rem;
  }
}

@media screen and (max-width: 768px) {
  .features {
    padding: 2.5rem 1rem;

    .features-title {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
