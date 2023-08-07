<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts"></script>

<style lang="less">
:root {
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  :root {
    padding: 15px;
  }
}
</style>
