<template>
  <div>哈哈</div>
  <div>
    <div>测试数据</div>
    <div>{{ testData }}</div>
  </div>
</template>

<script setup lang="ts">
import BaseService from '~/service/base';

//

const s = new BaseService();
const testData = ref<unknown>();

const x = s.get({
  url: 'testGuard',
  params: {
    user: 'admin',
  },
});

void x.then((d) => {
  console.log(d);
  const data = d.data;

  testData.value = data;
});
</script>

<style lang="less" scoped>
//
</style>
