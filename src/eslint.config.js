import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import {defineConfig} from 'eslint/config';
import pkgEslintConfig from 'pkg-eslint-config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      stylistic.configs.recommended,
      pkgEslintConfig.configs.stylistic.base,
      pkgEslintConfig.configs.stylistic.spe,
      pkgEslintConfig.configs.tseslint.base
    ],
    files: ['**/*.ts'],
    plugins: {
      '@stylistic': stylistic,
      'js': js
    },
    rules: {
      // TODO: maybe omit this rule and try to fix all problems
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
]);
