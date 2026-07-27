<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const menuItems = computed<NavigationMenuItem[]>(() => [
  {
    label: '主页',
    to: '/',
    active: route.path === '/',
  },
  {
    label: '博客',
    to: '/blog',
    active: route.path.startsWith('/blog'),
  },
  {
    label: '项目',
    to: '/projects',
    active: route.path.startsWith('/projects'),
  },
  {
    label: '关于',
    to: '/about',
    active: route.path === '/about',
  },
  {
    label: '友链',
    to: '/friend-link',
    active: route.path === '/friend-link',
  },
])
</script>

<template>
  <UNavigationMenu :items="menuItems" />
</template>

<style lang="scss" scoped></style>
