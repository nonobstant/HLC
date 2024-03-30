import { createRouter, createWebHashHistory } from 'vue-router'
//Views
import Home from '@/views/home-clone.vue'
import Cart from '@/views/cart.vue'
import Fav from '@/views/fav.vue'
import TheClubStory from '@/views/the-club-story.vue'
import TheLobby from '@/views/the-lobby.vue'
import TheClubNewspaper from '@/views/the-club-newspaper.vue'
import Contact from '@/views/contact.vue'
import TermesOfSale from '@/views/termes-of-sale.vue'
import Success from '@/views/success.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/fav',
    name: 'fav',
    component: Fav
  },
  {
    path: '/the-club-story',
    name: 'the-club-story',
    component: TheClubStory
  },
  {
    path: '/the-lobby',
    name: 'the-lobby',
    component: TheLobby
  },
  {
    path: '/the-club-newspaper',
    name: 'the-club-newspaper',
    component: TheClubNewspaper
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/termes-of-sale',
    name: 'termes-of-sale',
    component: TermesOfSale
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  }

]


// init router
const router = createRouter({
  history: createWebHashHistory(),
  routes, 
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  } 
})

export default router
