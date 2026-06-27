import tseslint from 'typescript-eslint'
import nextPlugin from '@next/eslint-plugin-next'

const eslintConfig = tseslint.config(
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**'],
  }
)

export default eslintConfig
