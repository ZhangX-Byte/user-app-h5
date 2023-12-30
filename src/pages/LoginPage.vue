<script lang="ts" setup>
let phoneNumber = ref("")
let password = ref("")

const handleSubmit = () => {
  // 在这里处理表单提交
  console.log(`手机号: ${phoneNumber.value}, 密码: ${password.value}`)
}
</script>

<template>
  <div>
    <div class="pl-4 pt-8">
      <div class="flex justify-start">
        <md-icon>
          <span class="material-icons-outlined">arrow_back_ios</span>
        </md-icon>
        <div class="ml-2 text-sm underline underline-offset-4">返回</div>
      </div>
    </div>
    <div class="pt-16">
      <div class="mb-4 text-center space-y-2">
        <div class="flex justify-center">
          <img
            alt="App Logo"
            class="w-20 rounded-full shadow-lg"
            src="https://img.insight-into.life/user-app/logo.png"
          />
        </div>
        <h2 class="text-xl font-bold">钓鱼之旅</h2>
      </div>
    </div>

    <div class="space-y-6" @submit.prevent="handleSubmit">
      <div class="flex justify-center">
        <md-outlined-text-field
          v-model="phoneNumber"
          :error="phoneNumber !== '' && !/^1[3456789]\d{9}$/.test(phoneNumber)"
          error-text="请输入正确的手机号"
          label="手机号"
          placeholder="请输入手机号"
          required
          type="tel"
        >
          >
          <md-icon slot="leading-icon">
            <span class="material-icons-outlined">contact_phone</span>
          </md-icon>
        </md-outlined-text-field>
      </div>
      <div class="flex justify-center">
        <md-outlined-text-field
          v-model="password"
          label="密码"
          required
          type="password"
        >
          <md-icon slot="leading-icon">
            <span class="material-icons-outlined">password</span>
          </md-icon>
        </md-outlined-text-field>
      </div>
      <div class="flex justify-center">
        <md-filled-button class="md-raised md-primary w-2/3"
          >登录
        </md-filled-button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
