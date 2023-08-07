# Vue 3 开发环境

## 开发、构建、测试与发布

| 功能                               | 实现工具                                                                                                                                                |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 代码构建                           | Vite                                                                                                                                                    |
| JS 类型                            | TypeScript                                                                                                                                              |
| CSS 增强                           | Windi CSS                                                                                                                                               |
| markdown 组件化                    | vite-plugin-md 和 markdown-it, 使用 markdown-it-prism 实现代码高亮                                                                                      |
| 按需自动引用                       | unplugin-auto-import 自动按需引用 vue 的依赖，unplugin-vue-components 自动按需引用 vue 组件                                                             |
| 测试框架                           | vitest                                                                                                                                                  |
| vue Mounting Libraries（模拟组件） | vue-testing-library                                                                                                                                     |
| \*E2E 测试                         | cypress                                                                                                                                                 |
| \*File-base Routing                | [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)                                                                                      |
| \*Layout System                    | [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)和[vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) |
| \*ci and cd                        | -                                                                                                                                                       |
| \*changelog 生成                   | -                                                                                                                                                       |
| \*icon                             | -                                                                                                                                                       |

## 规范化

| 功能                         | 实现工具                                           |
| ---------------------------- | -------------------------------------------------- |
| 代码检查                     | ESLint                                             |
| TypeScript 类型检查          | ESlint 和 typescript-eslint                        |
| 代码美化与风格统一           | Prettier                                           |
| git 提交规范化               | [Commitizen](https://github.com/commitizen/cz-cli) |
| simple-git-hooks             | 支持 git hooks                                     |
| 对提交前 staged 文件执行处理 | lint-staged                                        |
| 生成 changelog               | standard-versio                                    |

### ESLint + Prettier

集成 ESlint 和 Prettier 作为代码检查和代码美化的工具

## 功能

| 功能                  | 实现工具  |
| --------------------- | --------- |
| 路由                  | vueRouter |
| 状态                  | Pinia     |
| \*coposition api 增强 | vueuse    |
