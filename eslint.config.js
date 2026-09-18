// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, {
  files: ['src/**/*.vue'],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
    },
    globals: {
      MouseEvent: 'readonly',
      Event: 'readonly',
      HTMLInputElement: 'readonly',
      WebSocket: 'readonly',
      MessageEvent: 'readonly',
      crypto: 'readonly',
    },
  },
}, {
  files: ['src/**/*.{ts,vue}'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
}, {
  files: ['src/**/*.stories.ts'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}, {
  ignores: ['node_modules/', 'dist/', '*.config.*'],
}, storybook.configs["flat/recommended"]);
