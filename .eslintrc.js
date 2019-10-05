module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  rules: {
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
	  'dot-notation': 0,
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
    }],
    'no-cond-assign': 'off',
    'indent': 'off',
    'max-len': 0,
	  'no-tabs': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // Allow console in development but not on production
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // Allow debugger in development but not on production
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
