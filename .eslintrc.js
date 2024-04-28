module.exports = {
  plugins: ['prettier', 'eslint-plugin-html'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    'prettier/prettier': 'error',
  },
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
  },
  extends: ['plugin:prettier/recommended'],
};
