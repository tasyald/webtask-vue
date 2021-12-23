<template>
  <div class="about page">
    <introduction :title="title" :description="description" />
    <features :title="title" :features="features" v-show="features.length > 0" />
  </div>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import Features from '@/components/Features.vue'
import axios from 'axios'
import { ABOUT_URL, ABOUT_BACKUP_URL } from '@/constants/api'

export default {
  name: 'About',
  data() {
    return {
      features: [],
      title: '',
      description: ''
    }
  },
  components: {
    Introduction,
    Features
  },
  mounted() {
    this.fetchAboutInfo()
  },
  methods: {
    async fetchAboutInfo() {
      await axios.get(ABOUT_URL)
        .then((res) => {
          const { data } = res
          this.title = data.title
          this.description = data.opening_crawl
          this.generateFeatures()
        })
        .catch(() => {
          this.fetchAboutInfoBackup();
        })
    },
    async fetchAboutInfoBackup() {
      await axios.get(ABOUT_BACKUP_URL)
        .then((res) => {
          const { data: { result: { properties } } }  = res
          this.title = properties.title
          this.description = properties.opening_crawl
          this.generateFeatures()
        })
        .catch(() => {
          this.title = undefined
          this.description = undefined
        })
    },
    generateFeatures() {
      for (let i = 0; i < 4; i++) {
        this.features.push({ title: this.title, description: this.description })
      }
    }
  }
}
</script>
