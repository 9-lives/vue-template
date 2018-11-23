module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'node': true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  // global variables
  globals: {},
  parserOptions: {
    ecmaVersion: 2018,
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  root: true,
  rules: {
    'no-console': [
      'error',
      {
        allow: [
          'error',
        ],
      },
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
  }
}