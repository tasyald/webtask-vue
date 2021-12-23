<template>
  <div class="home">
    <hero title="Photos" :subtitle="subtitle" image="https://source.unsplash.com/random" />
    <photo-grid :photos="paginate(photos, PAGE_SIZE, page)" />
    <page-controller :pages="pages" :onChange="onChangePage" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import PhotoGrid from '@/components/PhotoGrid.vue'
import PageController from '@/components/PageController.vue'
import axios from 'axios'
import { SUBTITLE_URL, PHOTOS_URL } from '@/constants/api'

export default {
  name: 'Home',
  data() {
    return {
      subtitle: undefined,
      photos: [],
      pages: 1,
      page: 1,
    }
  },
  components: {
    Hero,
    PhotoGrid,
    PageController
  },
  created() {
    this.PAGE_SIZE = 16
  },
  mounted() {
    this.fetchSubtitle()
    this.fetchPhotos()
  },
  methods: {
    async fetchSubtitle() {
      await axios.get(SUBTITLE_URL)
        .then((res) => {
          const { data } = res
          this.subtitle = data.value
        })
        .catch(() => {
        })
    },
    async fetchPhotos() {
      await axios.get(PHOTOS_URL)
        .then((res) => {
          const { data } = res
          this.photos = data
          this.pages = Math.ceil(data.length / this.PAGE_SIZE)
        })
        .catch(() => {
        })
    },
    paginate(array, pageSize, page) {
      return array.slice((page - 1) * pageSize, page * pageSize)
    },
    onChangePage(currentPage) {
      this.page = currentPage
    }
  }
}
</script>
