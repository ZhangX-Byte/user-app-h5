import { createRouter, createWebHistory } from "vue-router"
import DemoPage from "@/pages/DemoPage.vue"
import Index from "@/pages/Index.vue"

const routes = [
  {
    path: "/",
    component: Index,
    meta: {
      title: "钓鱼之旅",
    },
  },
  {
    path: "/demo/",
    component: DemoPage,
    meta: {
      title: "Demo title",
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
