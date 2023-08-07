<template>
  <div>
    <div>$ref: {{ refTest }}</div>
    <div>$(): {{ a }}, {{ t1 }}</div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';

let refTest = $ref('我最厉害');
// 解构reactive object, Destructuring with $()
const reactiveObject = reactive({
  a: 'a',
  b: 'b',
  c: 'c',
});
let { a } = $(reactiveObject);

// Convert Existing Refs to reactive variable with
function myCreateRef() {
  //
  return ref('t1');
}
let t1 = $(myCreateRef());

//
function trackChange(x: Ref<number>) {
  watch(x, (x) => {
    console.log('x changed!', x);
  });
}
let r = $ref(0);
trackChange($$(r));

onMounted(() => {
  setTimeout(() => {
    refTest = `${refTest} Changed`;
    a = `${a} change`;
    t1 = `${t1} change`;

    r = 2;
  }, 1000);
});
</script>

<style lang="less" scoped>
//
</style>
