<template>
  <div class="home">
    <font-awesome-icon icon="facebook-square" />
    <hero title="Photos" image="https://source.unsplash.com/random" />
    <photo-grid />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import PhotoGrid from '@/components/PhotoGrid.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    PhotoGrid
  }
}
</script>
