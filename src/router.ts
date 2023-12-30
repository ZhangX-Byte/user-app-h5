import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    meta: {
      title: "钓鱼之旅",
    },
    children: [
      {
        path: "",
        component: () => import("@/pages/MomentPage.vue"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "/Map",
        component: () => import("@/pages/MapPage.vue"),
        meta: {
          title: "地图",
        },
      },
      {
        path: "/Mine",
        component: () => import("@/pages/MinePage.vue"),
        meta: {
          title: "我的",
        },
      },
    ],
  },
  {
    path: "/Login",
    component: () => import("@/pages/LoginPage.vue"),
    meta: {
      title: "登录",
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
