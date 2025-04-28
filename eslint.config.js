import js from '@eslint/js';
import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    ignores: ['**/node_modules/', '**/live/'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/js/eol-last': ['error', 'always'],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single', {'allowTemplateLiterals': true}],
      '@stylistic/js/semi': ['error', 'always'],
      'no-unused-vars': ['error', {'caughtErrors': 'none'}],
      'no-var': 'error',
      'prefer-const': 'error',
      'consistent-return': 'error',
    },
  },
];
