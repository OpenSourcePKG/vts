import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import {defineConfig} from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      stylistic.configs.recommended,
    ],
    files: ['**/*.ts'],
    plugins: {
      '@stylistic': stylistic,
      'js': js
    },
    rules: {
      // typescript-eslint rules
      '@typescript-eslint/no-explicit-any': 'off', // TODO: maybe omit this rule and try to fix all problems
      // eslint stylistic rules
      '@stylistic/arrow-parens': [
        'error',
        'always'
      ],
      '@stylistic/brace-style': 'off',
      '@stylistic/comma-dangle': 'off',
      '@stylistic/eol-last': [
        'error',
        'never'
      ],
      '@stylistic/indent': [
        'error',
        2,
        {
          'MemberExpression': 0,
          'SwitchCase': 1
        }
      ],
      '@stylistic/lines-between-class-members': 'off',
      '@stylistic/member-delimiter-style': [
        'error',
        {
          'multiline': {
            'delimiter': 'semi',
            'requireLast': true
          },
          'singleline': {
            'delimiter': 'semi',
            'requireLast': true
          }
        }
      ],
      '@stylistic/multiline-ternary': 'off',
      '@stylistic/object-curly-spacing': 'off',
      '@stylistic/operator-linebreak': [
        'error',
        'after'
      ],
      '@stylistic/padded-blocks': [
        'error',
        {
          'classes': 'always'
        }
      ],
      '@stylistic/semi': [
        'error',
        'always'
      ],
      '@stylistic/space-before-function-paren': [
        'error',
        {
          'anonymous': 'always',
          'named': 'never',
          'asyncArrow': 'never',
          'catch': 'always'
        }
      ]
    }
  }
]);
