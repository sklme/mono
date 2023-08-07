import { Feat } from '~/components/preset/type';

export const buildFeatures: Feat[] = [
  {
    title: 'Vite',
    desc: '使用Vite作为代码构建工具，提升开发体验',
  },
  {
    title: 'typescript',
    desc: 'typescript增加类型校验',
  },
  {
    title: 'Windi CSS',
    desc: '使用另一种方式写样式',
  },
  {
    title: 'vite-plugin-md',
    desc: '让md文件可以作为vue组件引用',
  },
  {
    title: 'markdown-it-prism',
    desc: 'markdown的代码关键字抽取，与css可以达到高亮的目的',
  },
  {
    title: 'unplugin-auto-import和unplugin-vue-components',
    desc: '自动引用vue api和组件',
  },
  { title: 'vitest', desc: '单元测试框架', src: 'https://vitest.dev/' },
  {
    title: 'vue test library',
    desc: '模拟vue组件挂载，测试vue组件生成的元素',
    src: 'https://testing-library.com/docs/vue-testing-library/intro/',
  },
  {
    title: '*cypress',
    desc: 'E2E测试',
  },
  {
    title: '*vite-plugin-pages',
    desc: '基于文件的路由增强插件',
  },
  {
    title: '*vite-plugin-vue-layouts',
    desc: '和vite-plugin-pages结合使用，支持抽象的布局系统',
  },
  {
    title: '*ci and cd',
    desc: 'To be complete',
  },
  {
    title: '* icon增强',
    desc: '收到',
  },
];

export const criteriaFeatures: Feat[] = [
  {
    title: 'ESLint',
    desc: '代码的检查',
  },
  {
    title: 'Prettier',
    desc: '代码的美化和风格的统一',
  },
  {
    title: 'Commitizen',
    desc: 'git提交规范化',
    src: 'https://github.com/commitizen/cz-cli',
  },
  {
    title: 'simple-git-hooks',
    desc: 'git hook的抽象，可以用来实现pre-commit的时候lint，和prepare-commit-msg的时候执行cz。相比husky更加轻量和副作用比较小，坏处是每次修改都得手动去执行hooks更新',
    src: 'https://github.com/toplenboren/simple-git-hooks',
  },
  {
    title: 'lint-staged',
    desc: '在提交代码之前，对staged的文件进行处理，可以定义自己的处理逻辑，一般用于提交前的lint',
    src: 'https://github.com/okonet/lint-staged#readme',
  },
  {
    title: 'standard-version',
    desc: '从Commitizen规范化的git提交信息中，自动提取changlog（使用了conventional changelog under the hook），而且自动检查version bump，升级packge.json，然后产生提交和tag',
    src: 'https://github.com/conventional-changelog/standard-version',
  },
];

export const logicFeatures: Feat[] = [
  {
    title: 'vueRouter',
    desc: '路由',
  },
  {
    title: 'Pinia',
    desc: '全局转台与储存管理',
  },
  {
    title: '*vueuse',
    desc: 'coposition api风格的功能增强',
  },
];
