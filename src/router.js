import { createRouter, createWebHistory } from 'vue-router'
import { LayoutCustom, LayoutDefault } from './layout/index'
import Welcome from './views/Welcome.vue'

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: LayoutDefault,
        children: Welcome 
    },
    {
        path: '/discover',
        name: 'discover',
        component: LayoutCustom,
        children: [{
            path: '',
            name: 'discover',
            component: () => import('./views/Discover.vue')
        }]
    },
    {
        path: '/favorite',
        name: 'favorite',
        component: LayoutCustom,
        children: [{
            path: '',
            name: 'favorite',
            component: () => import('./views/Favorite.vue')
        }]
    }
]

export default createRouter({
  history: createWebHistory(),
  routes
})