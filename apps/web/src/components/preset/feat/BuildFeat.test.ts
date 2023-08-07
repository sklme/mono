import { describe, test, expect, it } from 'vitest';
import BuildFeatVue from '~/components/preset/feat/BuildFeat.vue';
import { render } from '@testing-library/vue';
import { buildFeatures } from '~/components/preset/features';

describe('BuildFeat.vue', () => {
  it('标题正常', () => {
    const wrap = render(BuildFeatVue);
    wrap.getByText('编译、开发、测试与发布');
  });

  it('列表渲染正常', () => {
    // 列表渲染正确
    const wrap = render(BuildFeatVue);

    buildFeatures.forEach((o) => {
      wrap.getAllByText(o.title);
      wrap.getAllByText(o.desc);
    });
  });
});
