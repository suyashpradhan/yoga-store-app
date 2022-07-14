/** @format */

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-underscore-dangle': 'off',
    'react/require-default-props': 'off',
    'no-tabs': 'off',
    'no-unused-expressions': 'off',
    'space-before-function-paren': 'off',
    'no-console': 'error',
    'no-use-before-define': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-indent': 'off',
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.ts']
      }
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx']
      }
    }
  }
};
