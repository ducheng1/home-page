<script setup lang="ts">
import Info from './info.vue'
import Links from './links.vue'

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="w-full max-w-(--ui-container) mx-auto p-4 pt-12">
    <div class="grid grid-cols-4">
      <Info class="col-span-2" />
      <Links />
    </div>
    <USeparator class="my-4" />
    <div class="flex-bc text-sm">
      <div>&copy; 2022-{{ year }} ducheng1. All rights reserved.</div>
      <div>浙ICP备2022032081号 | 浙公网安备33060202001281号</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
