module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
    'object-curly-newline': 'off',
    'spaced-comment': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'default-case': 'off',
    'max-len': 'off',
    'no-plusplus': 'off',
    'comma-dangle': 'off',
    'no-unused-vars': 'warn',
    'import/no-cycle': 'off',
    'no-restricted-properties': 'off',
    'prefer-exponentiation-operator': 'off',
    'no-case-declarations': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: false,
      },
    ],
  },
};
