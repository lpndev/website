import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import perfectionist from 'eslint-plugin-perfectionist'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      perfectionist.configs['recommended-natural'],
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          internalPattern: ['@/*'],
          groups: [
            ['builtin', 'external'],
            [
              'builtin-type',
              'external-type',
              'internal-type',
              'parent-type',
              'sibling-type',
              'index-type',
            ],
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
            'style',
          ],
        },
      ],
    },
  },
)
