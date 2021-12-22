<template>
  <div class="home">
    <Hero title="Photos" image="https://source.unsplash.com/random" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Hero
  }
}
</script>
