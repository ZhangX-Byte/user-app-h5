import { createHead } from "@vueuse/head"
import { createPinia } from "pinia"
import { createApp, markRaw } from "vue"
import App from "./App.vue"
import "./assets/index.postcss"
import "@material/web/tabs/tabs.js"
import "@material/web/tabs/primary-tab.js"
import "@material/web/icon/icon.js"
import "material-icons/iconfont/outlined.css"
import router from "./router"

const head = createHead()

const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(pinia)
app.use(router)
app.use(head)

app.mount("#app")
