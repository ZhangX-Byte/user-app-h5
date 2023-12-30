import { defineStore } from "pinia"

const versionString =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_APP_VERSION + "-dev"
    : import.meta.env.VITE_APP_VERSION

export const useStore = defineStore("main", {
  state: () => ({
    debug: import.meta.env.MODE === "development",
    version: versionString,
    isInitialized: false,
    count: 0,
    activeTabIndex: 0,
    token: "",
  }),

  actions: {
    initApp() {
      this.isInitialized = true
      console.log("app initialized!")
    },

    increment(value = 1) {
      this.count += value
    },

    switchTab(index: number) {
      switch (index) {
        case 0:
          this.router.push("/")
          break
        case 1:
          this.router.push("/map/")
          break
        case 2:
          this.router.push("/mine/")
          break
      }
      this.activeTabIndex = index
    },
  },

  getters: {
    isReady: (state) => {
      return !state.isInitialized
    },
  },
})
