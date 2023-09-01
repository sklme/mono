<template>
  <div>哈哈</div>
</template>

<script setup lang="ts">
import BaseService from '~/service/base';

//

const s = new BaseService();

const x = s.get({
  url: 'testGuard',
  params: {
    user: 'admin',
  },
});

void x.then((d) => {
  console.log(d);
});
</script>

<style lang="less" scoped>
//
</style>
