<template>
  <h2 text="2xl " mb="8">{{ title }}</h2>
  <div>
    <!-- <h4 text="2xl" mb="4">{{ title }}</h4> -->
    <div
      v-for="feat in props.features"
      :key="feat.title"
      pt="12px"
      first-of-type:pt="0"
    >
      <div class="link" cursor="pointer" @click="jump(feat.src)">
        <div text="lg" hover:text="underline" class="title">
          {{ feat.title }}
        </div>
        <p text="base 14px gray-500" py="8px">{{ feat.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Feat } from '~/components/preset/type';
// 路由
const router = useRouter();

interface Props {
  features: Feat[];
  title: string;
}

const props = defineProps<Props>();

// 跳转到其他地方
const jump = (src?: string) => {
  if (!src) return;
  if (/^http/.test(src)) {
    window.open(src, '_blank');
  } else {
    void router.push(src);
  }
};
</script>

<style lang="less" scoped>
//
.link {
  &:hover {
    .title {
      @apply underline;
    }
  }
}
</style>
