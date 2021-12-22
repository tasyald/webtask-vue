import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bulma/css/bulma.css'

library.add(faHeart, faShareAlt, faFacebookSquare, faInstagram, faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
