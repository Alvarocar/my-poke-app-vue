import { Router, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    alias: '/',
    component: () => import('@src/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@src/pages/HomeView.vue')
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import('@src/pages/SearchView.vue'),
        props: route => ({ q: route.query.q })
      }
    ]
  },
  {
    path: '/404',
    alias: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@src/pages/NotFound.vue')
  }
]