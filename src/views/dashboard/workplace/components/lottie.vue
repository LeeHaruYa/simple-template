<template>
  <a-row class="lottie" @mouseover="play" @mouseleave="stop">
    <a-col>
      <a-typography-title :heading="5">
        lottie动画 hover出动画</a-typography-title
      >
      <Vue3Lottie
        ref="lottie"
        :animation-data="animationJSON"
        :auto-play="false"
        :height="200"
        :width="200"
      />
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
  import { ref, onBeforeUnmount } from 'vue';
  import animationJSON from '@/assets/lottie/animation.json';

  const lottie = ref();
  const play = () => {
    lottie.value?.play();
  };
  const stop = () => {
    lottie.value?.stop();
  };
  onBeforeUnmount(() => {
    lottie.value?.destroyed();
  });
</script>

<style scoped lang="less">
  .lottie {
    width: 100%;
    padding: 20px 20px 0 20px;
    background-color: var(--color-bg-2);
    border-radius: 4px 4px 0 0;
  }

  :deep(.arco-icon-home) {
    margin-right: 6px;
  }
</style>
