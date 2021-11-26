import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import { auth } from "./stores/auth";

export enum Routes {
  Home = "home",
  Login = "login",
  Register = "register",
  Game = "game",
  Score = "score",
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: Routes.Home,
    component: () => import("@/views/Home.vue"),
    //meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: Routes.Login,
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: Routes.Register,
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/game",
    name: Routes.Game,
    component: () => import("@/views/Register.vue"),
    //meta: { requiresAuth: true },
  },
  {
    path: "/my-score",
    name: Routes.Login,
    component: () => import("@/views/Score.vue"),
    //meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== Routes.Login && to.meta.requiresAuth && !auth.isLoggedIn) {
//     next({ name: Routes.Login });
//   } else {
//     next();
//   }
// });

export default router;
