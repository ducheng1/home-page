<script lang="ts" setup>
const appConfig = useAppConfig()

useSeoMeta({
  titleTemplate: (title) => (title ? `${title} - ${appConfig.title}` : appConfig.title),
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
