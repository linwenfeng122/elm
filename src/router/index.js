import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
import Layout from '@/views/layout/layout'
Vue.use(Router)
export const constantRouterMap = [
  {path: '/login',component: _import('login/index'),hidden: true},
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: {title: 'dashboard',icon:'dashboard'}
    }]
  },
  {
    path: '/document',
    component: Layout,
    children:[{
      path:'index',
      component: _import('document/index'),
      name: 'document',
      meta: {title: 'document',icon:'document'}
    }]
  },
  {
    path: '/components',
    component: Layout,
    name: 'components',
    redirect: 'noredirect',
    meta: {title: 'components',icon: 'components'},
    children: [{
      path: 'index',
      component: _import('components-demo/index'),
      name: 'componentIndex',
      meta: {title: 'componentIndex'}
     },
     {
      path: 'demo',
      component: _import('components-demo/demo'),
      name: 'componentDemo',
      meta: {title: 'componentDemo'}
     }
    ]
  },
  {
    path: '/example',
    component: Layout, 
    name: 'example',
    meta: {title: 'example',icon: 'example'},
    redirect: '/example/table/complexTable',
    children: [{
      path: '/example/table',
      name: 'table',
      component: _import('example/table/index'),
      redirect: '/example/table/complexTable',
      meta: {title: 'table',icon: 'table'},
      children: [{
        path: 'complexTable',
        name: 'complexTable',
        component: _import('example/table/complexTable'),
        meta: {title: 'complexTable'}
      },
      {
        path: 'dragTable',
        name: 'dragTable',
        component: _import('example/table/dragTable'),
        meta: {title: 'dragTable'}
      }
      ]
    }]
  },
  { path: '*', redirect: '/404', hidden: true }

    
]
export default new Router({
  routes: constantRouterMap
})
export const asyncRouterMap = [

]
