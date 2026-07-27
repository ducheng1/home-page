<script setup lang="ts"></script>

<template>
  <div class="size-full">
    <LayoutHeader />
    <UMain>
      <UContainer class="py-4">
        <slot />
      </UContainer>
    </UMain>
    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped></style>
