import { createWebHistory, createRouter } from "vue-router";

// Views
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Offset untuk navbar height
      }
    }
    return { top: 0 }
  }
})

export default router
