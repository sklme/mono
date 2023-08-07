/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// 自动引入
import Components from 'unplugin-vue-components/vite';
// api
import AutoImport from 'unplugin-auto-import/vite';

// windicss
import WindiCSS from 'vite-plugin-windicss';

// 编译输出的配置
const ASSETS_DIR = 'res';
const OUT_DIR = 'dist';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    WindiCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue/macros'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      resolvers: [],
    }),
  ],
  // 测试配置
  test: {
    environment: 'jsdom',
  },
  server: {
    port: 8061,
  },
  resolve: {
    alias: {
      '~': `${path.resolve(__dirname, 'src')}`,
    },
  },
  // 编译配置
  build: {
    outDir: OUT_DIR,
    assetsDir: ASSETS_DIR,
    rollupOptions: {
      output: {
        chunkFileNames: `${ASSETS_DIR}/js/[name]-[hash].js`,
        entryFileNames: `${ASSETS_DIR}/js/[name]-[hash].js`,

        assetFileNames: ({ name }) => {
          const namePattern = '[name]-[hash][extname]';
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return `${ASSETS_DIR}/images/${namePattern}`;
          }

          if (/\.css$/.test(name ?? '')) {
            return `${ASSETS_DIR}/css/${namePattern}`;
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return `${ASSETS_DIR}/${namePattern}`;
        },
      },
    },
  },
});
