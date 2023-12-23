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
    <div
      class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    ></div>
    <div
      class="container relative max-w-2xl mx-auto bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <main>
        <router-view></router-view>
      </main>
    </div>
    <TabBar />
  </div>
</template>
