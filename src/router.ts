import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { auth, logOut } from '@/stores/auth'

export enum Routes {
  Home = 'home',
  Signin = 'signin',
  Logout = 'logout',
  Register = 'register',
  Game = 'game',
  Score = 'score',
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: Routes.Home,
    component: () => import('@/views/Home.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/signin',
    name: Routes.Signin,
    component: () => import('@/views/Signin.vue'),
  },
  {
    path: '/register',
    name: Routes.Register,
    component: () => import('@/views/Register.vue'),
  },
  //A revoir parce que c'est pas le bon path mais je peux pas enlever le component :/
  {
    path: '/logout',
    name: Routes.Logout,
    component: () => import('@/views/Signin.vue'),
  },
  {
    path: '/game',
    name: Routes.Game,
    component: () => import('@/views/Game.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/my-score',
    name: Routes.Score,
    component: () => import('@/views/Score.vue'),
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name !== Routes.Signin && to.meta.requiresAuth && !auth.isLoggedIn) {
    next({ name: Routes.Signin })
  } else {
    next()
  }
  if (to.name === Routes.Logout) {
    logOut()
    next()
  }
})

export default router
