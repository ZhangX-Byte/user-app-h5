<script lang="ts" setup>
const handleTabChange = (event: CustomEvent) => {
  console.log(event.target.activeTabIndex)
}
</script>

<template>
  <div class="absolute bottom-0 left-0 right-0">
    <md-tabs @change="handleTabChange">
      <md-primary-tab>
        <md-icon slot="icon" class="material-icons-outlined"
          >bubble_chart
        </md-icon>
        动态
      </md-primary-tab>
      <md-primary-tab>
        <md-icon slot="icon" class="material-icons-outlined">map</md-icon>
        地图
      </md-primary-tab>
      <md-primary-tab>
        <md-icon slot="icon" class="material-icons-outlined">person</md-icon>
        我的
      </md-primary-tab>
    </md-tabs>
  </div>
</template>

<style scoped></style>
