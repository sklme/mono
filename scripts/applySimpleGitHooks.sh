# @file 安装simple-git-hooks的hook到git，使其生效
# 每次更新hooks，都要重新执行一次

# [Optional] These 2 steps can be skipped for non-husky users
git config core.hooksPath .git/hooks/
rm -rf .git/hooks

# Update ./git/hooks
npx simple-git-hooks
