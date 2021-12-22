<template>
  <div class="home">
    <hero title="Photos" image="https://source.unsplash.com/random" />
    <photo-grid />
    <page-controller :pages="100" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import PhotoGrid from '@/components/PhotoGrid.vue'
import PageController from '@/components/PageController.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    PhotoGrid,
    PageController
  }
}
</script>
