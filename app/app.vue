<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const appConfig = useAppConfig()

useSeoMeta({
  titleTemplate: (title) => (title ? `${title} - ${appConfig.nuxt.title}` : appConfig.nuxt.title),
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
