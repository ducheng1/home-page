<script setup lang="ts">
useSeoMeta({
  title: '主页',
})
</script>

<template>
  <div>
    <div v-for="item of 100" :key="item">home</div>
  </div>
</template>

<style lang="scss" scoped></style>
