import { RouteRecordRaw } from 'vue-router';
import BuildFeatVue from '~/components/preset/feat/BuildFeat.vue';
import CriteriaFeatVue from '~/components/preset/feat/CriteriaFeat.vue';
import LogicFeatVue from '~/components/preset/feat/LogicFeat.vue';
import FeatHomeVue from '~/components/preset/FeatHome.vue';

const feature: RouteRecordRaw = {
  path: '/feature',
  name: 'Feature',
  redirect: () => {
    return { name: 'BuildFeat' };
  },
  children: [
    {
      path: 'build_dev_test_deploy',
      name: 'BuildFeat',
      component: BuildFeatVue,
    },
    {
      path: 'creteria',
      name: 'Creteria',
      component: CriteriaFeatVue,
    },
    {
      path: 'logic',
      name: 'Logic',
      component: LogicFeatVue,
    },
  ],
};

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: FeatHomeVue,
  },
  // 功能
  feature,
];
