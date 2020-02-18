import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'


import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'


import ItemEdit from '../views/ItemsEdit.vue'
import ItemList from '../views/ItemList.vue'

import OperatorEdit from '../views/OperatorEdit.vue'
import OperatorList from '../views/OperatorList.vue'

import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'

import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(Router)

const routes = [
  {
    path:'/login',
    name:'login',
    component:Login,
    meta:{isPublic: true}//访问登录组件没有限制
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      //分类子路由
      {path: '/categories/create',component:CategoryEdit},
      {path: '/categories/list',component:CategoryList},
      {path: '/categories/edit/:id',component:CategoryEdit,props:true},


      //物品子路由
      {path: '/items/create',component:ItemEdit},
      {path: '/items/list',component:ItemList},
      {path: '/items/edit/:id',component:ItemEdit,props:true},

      //干员子路由
      {path: '/operators/create',component:OperatorEdit},
      {path: '/operators/list',component:OperatorList},
      {path: '/operators/edit/:id',component:OperatorEdit,props:true},

      //文章子路由
      {path: '/articles/create',component:ArticleEdit},
      {path: '/articles/list',component:ArticleList},
      {path: '/articles/edit/:id',component:ArticleEdit,props:true},

      //广告位子路由
      {path: '/ads/create',component:AdEdit},
      {path: '/ads/list',component:AdList},
      {path: '/ads/edit/:id',component:AdEdit,props:true},

      //管理员子路由
      {path: '/admin_users/create',component:AdminUserEdit},
      {path: '/admin_users/list',component:AdminUserList},
      {path: '/admin_users/edit/:id',component:AdminUserEdit,props:true},

      
    ]
  }
 
]

const router = new Router({
  routes
})

router.beforeEach((to,from,next)=>{
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
    // console.log('需要登陆')
  }
  next()
})

export default router
