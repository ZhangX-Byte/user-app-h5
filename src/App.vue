<script lang="ts" setup>
// See vite.config.ts for details about automatic imports
const route = useRoute()

useHead({
  title: () => route.meta.title || "Vite + Vue Template",
  meta: [
    {
      property: "og:title",
      content: () => route.meta.title,
    },
    {
      name: "twitter:title",
      content: () => route.meta.title,
    },
  ],
})
</script>
<template>
  <div>
    <main class="h-full">
      <router-view></router-view>
    </main>
  </div>
</template>
