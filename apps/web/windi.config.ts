import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  // 开启直接用属性代替类名
  attributify: true,
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,ts}'],
    exclude: [
      'node_modules',
      '.git',
      'excluded',
      'dist',
      'windi.config.{ts,js}',
    ],
  },
  alias: {
    icon: 'w-6 h-6 fill-current',
  },
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096 ',
        },
      },
    },
  },
});
