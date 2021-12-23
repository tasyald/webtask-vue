<template>
  <div class="home page">
    <hero title="Photos" :subtitle="subtitle" image="https://source.unsplash.com/random" />
    <photo-grid :photos="paginate(photos, PAGE_SIZE, page)" />
    <page-controller :pages="pages" :onChange="onChangePage" />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import PhotoGrid from '@/components/PhotoGrid.vue'
import PageController from '@/components/PageController.vue'
import axios from 'axios'
import { SUBTITLE_URL } from '@/constants/api'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      subtitle: undefined,
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
    if (this.$store.getters.photos.length === 0) {
      this.$store.dispatch('getPhotos')
    }
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
    paginate(array, pageSize, page) {
      return array.slice((page - 1) * pageSize, page * pageSize)
    },
    onChangePage(currentPage) {
      this.page = currentPage
    }
  },
  computed: {
    ...mapGetters([
      'photos'
    ]),
    pages() {
      return Math.ceil(this.$store.getters.photos.length / this.PAGE_SIZE)
    }
  }
}
</script>
