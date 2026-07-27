<script setup lang="ts">
const infoList = ref([
  { icon: 'lucide:mail', text: 'w729567588@163.com', link: 'mailto:w729567588@163.com' },
  { icon: 'lucide:map-pin', text: '浙江绍兴' },
  { icon: 'lucide:github', text: 'ducheng1', link: 'https://github.com/ducheng1' },
])
</script>

<template>
  <div>
    <h1 class="font-bold text-2xl mb-4">ducheng1</h1>
    <div class="mb-8 text-base">希望我们都能成为彼此之友</div>
    <div class="text-sm flex flex-col gap-3">
      <div v-for="item in infoList" :key="item.text" class="flex items-center gap-2">
        <UIcon :name="item.icon" class="size-4.5" />
        <ULink
          v-if="item.link"
          :href="item.link"
          external
          target="_blank"
          class="inline-flex items-center gap-1 opacity-75 hover:opacity-100"
          inactive-class="text-neutral"
        >
          {{ item.text }}<UIcon name="lucide:external-link" />
        </ULink>
        <span v-else class="opacity-75">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
