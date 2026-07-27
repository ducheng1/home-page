<script setup lang="ts">
const linkList = ref([
  { text: '博客', link: '/blog' },
  { text: '项目', link: '/projects' },
  { text: '站点地图', link: '/sitemap.xml' },
])
</script>

<template>
  <div>
    <h2 class="font-bold text-xl mb-4">快捷链接</h2>
    <div class="text-sm flex flex-col gap-3">
      <div v-for="item in linkList" :key="item.text" class="flex items-center gap-2">
        <ULink
          :to="item.link"
          external
          class="inline-flex items-center gap-1 opacity-75 hover:opacity-100"
          inactive-class="text-neutral"
        >
          {{ item.text }}
        </ULink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
