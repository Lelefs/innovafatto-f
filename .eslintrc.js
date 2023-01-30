module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended', '@vue/airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'arrow-parens': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'max-len': ['error', { code: 120 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-return-assign': 0,
    'no-unused-vars': 0,
    'prettier/prettier': 0,
    'vue/multi-word-component-names': 0,
  },
};
