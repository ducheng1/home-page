<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import Menu from './menu.vue'

const props = withDefaults(
  defineProps<{
    fixed?: boolean
  }>(),
  { fixed: false },
)

const appConfig = useAppConfig()

const { y } = useScroll(window)

const headerClass = computed(() => {
  if (!props.fixed) {
    return ''
  }
  if (y.value > 10) {
    return 'fixed w-full'
  }
  return 'absolute w-full bg-transparent border-none backdrop-blur-none'
})
</script>

<template>
  <UHeader
    :title="appConfig.title"
    mode="slideover"
    :ui="{
      root: cn(headerClass, 'transition-all'),
    }"
  >
    <Menu />
    <template #body>
      <Menu orientation="vertical" />
    </template>
    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>

<style lang="scss" scoped></style>
