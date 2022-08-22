import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login/login.vue'
import Home from '../views/Home/index.vue'

const Books = ()=>import ('../views/Books/books.vue')
const Category = ()=>import ('../views/Category/category.vue')
const CategoryYunnan = ()=>import ('../views/Category/CategoryYunnan/index.vue')
const CategoryLocal = ()=>import ('../views/Category/CategoryLocal/index.vue')
const CategoryForeign = ()=>import ('../views/Category/CategoryForeign/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component: Layout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path :'/books',
        name: 'Books',
        component: Books
      },
      {
        path :'/category',
        name: 'Category',
        component: Category,
        redirect: '/category/category-yunnan',
        children:[
          {
            path: 'category-yunnan',
            component: CategoryYunnan
          },
          {
            path: 'category-local',
            component: CategoryLocal
          },
          {
            path: 'category-foreign',
            component: CategoryForeign
          }
        ]
      }
    ]
  },
  {
    path:'/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
