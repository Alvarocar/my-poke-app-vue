import { RouteRecordRaw } from 'vue-router'

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
        path: 'search',
        name: 'Search',
        component: () => import('@src/pages/SearchView.vue'),
        props: route => ({ q: route.query.q })
      },
      {
        path: 'pokemon/:name',
        name: 'PokemonDetail',
        component: () => import('@src/pages/PokemonView.vue')
      }
    ]
  },
  {
    path: '/404',
    alias: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@src/pages/NotFoundView.vue')
  }
]