import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { PHOTOS_URL, ABOUT_URL, ABOUT_BACKUP_URL } from '@/constants/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: [],
    title: '',
    description: '',
    phone: '1-500-445'
  },
  mutations: {
    setPhotos(state, photos) {
      state.photos = photos
    },
    setTitle(state, title) {
      state.title = title
    },
    setDescription(state, description) {
      state.description = description
    },
  },
  actions: {
    getPhotos({ commit }) {
      axios.get(PHOTOS_URL)
      .then((res) => {
        const { data } = res
        commit('setPhotos', data)
      })
      .catch(() => {
      })
    },
    getAboutInfo({ commit }) {
      axios.get(ABOUT_URL)
        .then((res) => {
          const { data } = res
          commit('setTitle', data.title)
          commit('setDescription', data.opening_crawl)
        })
        .catch(() => {
          this.getAboutInfoBackup();
        })
    },
    getAboutInfoBackup({ commit }) {
      axios.get(ABOUT_BACKUP_URL)
        .then((res) => {
          const { data } = res
          commit('setTitle', data.title)
          commit('setDescription', data.opening_crawl)
        })
        .catch(() => {
          commit('setTitle', undefined)
          commit('setDescription', undefined)
        })
    }
  },
  getters: {
    photos: state => state.photos,
    title: state => state.title,
    description: state => state.description,
    phone: state => state.phone
  }
})
