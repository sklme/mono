module.exports = {
  env: {
    'vue/setup-compiler-macros': true,
  },
  extends: [require.resolve('./base.js'), 'plugin:vue/vue3-recommended'],
};
