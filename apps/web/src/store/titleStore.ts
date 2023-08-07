import { defineStore } from 'pinia';

export const useTitleStore = defineStore('test', {
  state: () => ({
    titleStr: 'Vue 3 开发环境',
  }),
  getters: {
    title(state) {
      return state.titleStr;
    },
  },
});
