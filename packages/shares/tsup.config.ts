import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/types/index.ts', 'src/utils/index.ts'],
  clean: true,
  dts: true,
  outDir: 'dist',
  format: ['cjs', 'esm'],
});
