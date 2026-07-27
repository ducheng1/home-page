<script setup lang="ts"></script>

<template>
  <div class="flex-c h-body">
    <UEmpty
      icon="lucide:navigation-off"
      title="404 Not Found"
      :description="`您所访问的页面 ${$route.fullPath} 不存在`"
      variant="naked"
      size="xl"
    >
      <template #actions>
        <UButton color="neutral" variant="outline" @click="$router.back()">返回上级</UButton>
        <UButton @click="$router.replace('/')">返回首页</UButton>
      </template>
    </UEmpty>
  </div>
</template>

<style lang="scss" scoped></style>
