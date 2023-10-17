module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'false'
      }
    ],
    "no-var": 0,
    "comma-dangle": ["error", "always-multiline"],
    "indent": [2, 2, { "SwitchCase": 1}],
    "semi": ["error", "always"],
    "@typescript-eslint/no-extra-semi": "off",
    "eol-last": 2,
  },
};
