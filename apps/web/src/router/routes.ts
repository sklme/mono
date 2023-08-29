import { RouteRecordRaw } from 'vue-router';
import HomePage from '~/Pages/HomePage.vue';

export const routes: RouteRecordRaw[] = [
  // #region 主页
  {
    path: '/',
    name: 'Index',
    component: HomePage,
  },
  // #endregion 主页
];
