module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
    mocha: true,
    jasmine: true,
    'cypress/globals': true,
  },
  extends: [
    'airbnb-base',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
  },
  plugins: [
    'cypress',
  ],
};
