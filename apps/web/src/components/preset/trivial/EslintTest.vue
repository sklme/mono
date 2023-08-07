<template>
  <div>ESlint 的测试</div>
  {{ numberTest }}
</template>

<script setup lang="ts">
interface Test {
  x: number;
}

const x = 1;
const x1 = 1;
if (x == x1) {
  console.log(12);
}

const props = defineProps<Test>();

//
let numberTest = 123;

async function asyncFunc() {
  return 2;
}
asyncFunc();
</script>

<style lang="less" scoped>
//
div {
  text-align: center;
}
</style>
