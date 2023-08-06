<template>
  <a-row class="animation">
    <a-col>
      <a-typography-title :heading="5">
        css动画-基础效果 【最终版本整体拆分背景 打光 车依次往上 细节处理
        此处略过】</a-typography-title
      >
      <div class="car-wrapper">
        <img class="car" :src="car" />
        <img class="light" :src="light" />
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
  import car from '@/assets/images/car.png';
  import light from '@/assets/images/light.png';
</script>

<style scoped lang="less">
  .animation {
    width: 100%;
    padding: 20px 20px 0 20px;
    background-color: var(--color-bg-2);
    border-radius: 4px 4px 0 0;
    .car-wrapper {
      position: relative;
      width: 301px;
    }
    .car {
      width: 301px;
    }
    .light {
      position: absolute;
      right: 0px;
      top: 80px;
      width: 243.5px;
      animation: shrink 5s infinite;
    }
    @keyframes shrink {
      from {
        right: 40px;
        transform: scale(0);
      }
      to {
        transform: scale(1);
        right: 0px;
      }
    }
  }
</style>
