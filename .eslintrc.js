module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    use: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-empty-function': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-console': "off",
    camelcase: 'off',
    strict: 'off',
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: 'request|response|view|next|params' },
    ],
  },
};