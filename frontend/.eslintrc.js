module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    "React": "writable"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "prettier/prettier": 'error',
    "import/no-webpack-loader-syntax": 0,
    "import/no-unresolved": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "no-unneeded-ternary": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
    "import/extensions": "off",
    "no-restricted-globals": "off",
    "consistent-return": "off"
  },
  "settings": {
    "import/resolver":"babel-plugin-root-import",
    },
};
