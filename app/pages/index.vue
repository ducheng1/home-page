<script setup lang="ts">
import Hero from './components/hero.vue'

useSeoMeta({
  title: '主页',
})

definePageMeta({
  layout: {
    props: {
      full: true,
    },
  },
})
</script>

<template>
  <div>
    <Hero />
  </div>
</template>

<style lang="scss" scoped></style>
