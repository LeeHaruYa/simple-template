<template>
  <a-row class="animation">
    <a-col>
      <a-typography-title :heading="5">
        css动画-基础效果 【最终版本整体拆分背景 打光 车依次往上 细节处理
        此处略过】</a-typography-title
      >
      <div
        class="banner-wrapper"
        :style="{ backgroundImage: `url(${banner})` }"
      >
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
  import banner from '@/assets/images/banner-1.png';
</script>

<style scoped lang="less">
  .animation {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    transform-style: preserve-3d;

    .banner-wrapper {
      width: 100vw;
      position: absolute;
      top: 0px;
      left: 0px;
      overflow: hidden;
      height: 100vh;
      background-size: 150% 150%;
      background-position: 50%;
      animation: shrink 3s 1;
    }
  }

  @keyframes shrink {
    from {
      background-size: 100% 100%;
    }

    to {
      background-size: 150% 150%;
      background-position: 50%;
    }
  }
</style>
