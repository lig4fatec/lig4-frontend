import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { ROUTE_HOME, ROUTE_GAME, ROUTE_SETTINGS, ROUTE_PROFILE, ROUTE_LEADERBOARD } from '@/utils/constants'

const routes: RouteRecordRaw[] = [
  {
    path: ROUTE_HOME,
    name: 'home',
    component: (): Promise<unknown> => import('@/pages/Home/Home.vue'),
  },
  {
    path: `${ROUTE_GAME}/:id?`,
    name: 'game',
    component: (): Promise<unknown> => import('@/pages/Game/Game.vue'),
  },
  {
    path: ROUTE_SETTINGS,
    name: 'settings',
    component: (): Promise<unknown> => import('@/pages/Settings/Settings.vue'),
  },
  {
    path: ROUTE_PROFILE,
    name: 'profile',
    component: (): Promise<unknown> => import('@/pages/Profile/Profile.vue'),
  },
  {
    path: ROUTE_LEADERBOARD,
    name: 'leaderboard',
    component: (): Promise<unknown> => import('@/pages/Leaderboard/Leaderboard.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
