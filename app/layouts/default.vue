<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    full?: boolean
  }>(),
  {
    full: false,
  },
)
</script>

<template>
  <div class="size-full">
    <LayoutHeader :fixed="props.full" />
    <!-- 主内容区 -->
    <template v-if="props.full">
      <UMain>
        <slot />
      </UMain>
    </template>
    <template v-else>
      <UMain>
        <UContainer class="py-4">
          <slot />
        </UContainer>
      </UMain>
    </template>
    <!-- 底部 -->
    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped></style>
