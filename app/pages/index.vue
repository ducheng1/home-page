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
    <div v-for="item of 100" :key="item">home</div>
  </div>
</template>

<style lang="scss" scoped></style>
