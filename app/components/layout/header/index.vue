<script setup lang="ts">
import Menu from './menu.vue'
</script>

<template>
  <UHeader title="渡城电子日记">
    <Menu />
    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>

<style lang="scss" scoped></style>
