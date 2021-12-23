import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { PHOTOS_URL } from '@/constants/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: []
  },
  mutations: {
    setPhotos(state, photos) {
      state.photos = photos
    }
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
  }
  },
  getters: {
    photos: state => state.photos
  }
})
