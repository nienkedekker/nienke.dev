module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'semi': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'require-await': 0,
    'no-extra-parens': 0,
    'vue/no-v-html': 0,
  }
};
