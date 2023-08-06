<template>
  <a-row class="banner">
    <a-col :span="24">
      <a-typography-title :heading="5"> 国际化处理 </a-typography-title>
      {{ $t('workplace.welcome') }} {{ userInfo.name }}
      {{ $t('workplace.study') }} {{ userInfo.name }}
      {{ $t('workspace-test') }} {{ userInfo.name }}
      <a-week-picker style="width: 200px" />
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useUserStore } from '@/store';

  const userStore = useUserStore();
  const userInfo = computed(() => {
    return {
      name: userStore.name,
    };
  });
</script>

<style scoped lang="less">
  .banner {
    width: 100%;
    padding: 20px 20px 0 20px;
    background-color: var(--color-bg-2);
    border-radius: 4px 4px 0 0;
  }

  :deep(.arco-icon-home) {
    margin-right: 6px;
  }
</style>
