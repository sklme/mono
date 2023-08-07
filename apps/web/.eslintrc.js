module.exports = {
  root: true,
  extends: [
    './eslint/vue3-ts-typecheck.js',
    './.eslintrc-auto-import.json',
    'prettier',
  ],
  overrides: [
    {
      // 根目录层级的*.ts没有纳入tsconfig的project，所以在这里设置为project为null，不进行type checking
      files: ['./*.ts', './scripts/*.ts'],
      env: {
        node: true,
      },
      parserOptions: {
        project: null,
      },
    },
  ],
};
