import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ProductsComponent from '@/components/Products'
import AddProductComponent from '@/components/AddProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsComponent
    },
    {
      path: '/products/add',
      name: 'AddProducts',
      component: AddProductComponent
    }
  ]
})
