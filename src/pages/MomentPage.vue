<script lang="ts" setup>
import router from "@/router.ts"

const store = useStore()
const isLogin = computed(() => store.token !== "")

const navigateToLogin = () => {
  if (isLogin.value) {
    return
  }

  router.push("/login")
}
</script>

<template>
  <div class="flex">
    <div class="pl-4 pt-8">
      <div class="flex items-center justify-start">
        <md-icon>
          <span class="material-icons-outlined">my_location</span>
        </md-icon>
        <div
          class="ml-2 text-sm underline underline-offset-4"
          @click="navigateToLogin"
        >
          {{ isLogin ? "已登录" : "获取定位" }}
        </div>
      </div>
      <div class="flex justify-end pr-4">
        <div>{{}}</div>
        <div>{{}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
