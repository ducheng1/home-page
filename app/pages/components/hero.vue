<script setup lang="ts">
import gsap from 'gsap'

const container = useTemplateRef<HTMLElement | null>('containerRef')
const ctx = ref<gsap.core.Timeline>()

onMounted(() => {
  if (!container.value) return
  ctx.value = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
    },
  })
})

onBeforeUnmount(() => {
  if (ctx.value) {
    ctx.value.revert()
  }
})

function handleScrollDown() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div ref="containerRef" class="w-full h-screen relative">
    <NuxtImg
      src="https://cdn.dcwedu.top/common/2026/06/24/1782290952-72525f98f5e63a315ed28ad3a97df6f6.jpg"
      class="size-full absolute dark:brightness-50 z-0 select-none"
    />
    <div class="z-1 absolute bottom-1/2 left-1/2 text-center -translate-1/2">
      <h1 class="font-bold text-white text-[48px]">渡城电子日记</h1>
      <h2 class="text-white text-3xl">希望我们都能成为彼此之友</h2>
    </div>
    <button
      class="z-1 text-white cursor-pointer absolute bottom-0 left-1/2 -translate-1/2 animate-pulse"
      @click="handleScrollDown"
    >
      <UIcon name="lucide:chevrons-down" class="size-6" />
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
