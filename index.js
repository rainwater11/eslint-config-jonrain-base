module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
  },
  env: {
    browser: true,
    node: true,
    meteor: true,
    mongo: true,
    jquery: true,
    es6: true
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: ['html', 'css', 'js']
      }
    },

    "prettier/prettier": ['error', {
      singleQuote: true,
      trailingComma: 'all',
      bracketSpacing: false,
      jsxBracketSameLine: true,
    }],
  },
  rules: {
    strict: 0,

    semi: [2, 'never'],
    'comma-dangle': ['error', 'never'],

    'prefer-const': 1,

    "react/jsx-uses-vars": [2],
    "class-methods-use-this": [0],
  },
  plugins: ['prettier', 'react']
}
