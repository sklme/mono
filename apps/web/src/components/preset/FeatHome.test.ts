import { render } from '@testing-library/vue';
import { it } from 'vitest';
import FeatHomeVue from '~/components/preset/FeatHome.vue';
FeatHomeVue;

it('FeatHome.vue', () => {
  const wrap = render(FeatHomeVue);

  wrap.getAllByAltText('编译、开发与发布');
});
