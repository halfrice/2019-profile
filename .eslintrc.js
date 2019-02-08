module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "prettier",
    "prettier/react"
  ],
  plugins: ["react", "import", "emotion"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    "react/prop-types": 0,
    "no-console": 1,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/display-name": [0],
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error"
  }
}
