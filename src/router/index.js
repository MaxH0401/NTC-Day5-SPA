import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/products/:productId',
    name: 'product',
    component: ProductView
  }//和ProductsView同階層是為了同吃navbar
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
