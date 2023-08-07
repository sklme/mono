/**
 * @file 对simple-git-hooks的配置
 */

module.exports = {
  // 'prepare-commit-msg': 'exec < /dev/tty && npx cz --hook || true',
  'pre-commit': 'npx lint-staged',
  'commit-msg': 'pnpm exec tsx scripts/verifyCommit.ts $1',
};
