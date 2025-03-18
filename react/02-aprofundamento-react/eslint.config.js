import pluginJs from '@eslint/js'
import pluginImport from 'eslint-plugin-import'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      import: pluginImport,
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      'quotes': ['error', 'single', { avoidEscape: true }],
      '@typescript-eslint/no-empty-object-type': 'off',
      'semi': ['error', 'never']
    },
  },
]
