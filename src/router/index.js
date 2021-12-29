import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue');
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue');
const Contact = () => import(/* webpackChunkName: "contact" */ '@/views/Contact.vue');

const routes = [
  {
    path: '/home',
    alias: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
