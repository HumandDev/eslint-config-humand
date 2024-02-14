// eslint-config-humand

module.exports = {
  env: {
    "es6": true,
    "browser": true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": "./tsconfig.json",
  },
  extends: [
    "plugin:react/recommended",
    "airbnb-typescript",
    "prettier",
  ],
  settings: {
    "react": {
      "version": "detect",
    }
  },
  rules: {
    "max-len": [
      "error",
      {
        "code": 100,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreStrings": true,
        "ignoreRegExpLiterals": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-return-assign": "off",
    "no-restricted-properties": "off",
    "no-underscore-dangle": "off",
    "no-extra-semi": "error",
    "no-mixed-spaces-and-tabs": "off",
    "no-nested-ternary": "error",
    "no-console": [
      "error",
      { allow: ["error"] },
    ],
    "no-extra-boolean-cast": [
      "error",
      {"enforceForLogicalOperands": true},
    ],
    "consistent-return": "off",
    "comma-spacing": "off",
    "comma-dangle": "off",
    "radix": "off",
    "default-param-last": "off",

    "import/prefer-default-export": "off",
    "import/no-named-default": "off",
    "import/no-named-as-default": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",

    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/consistent-type-definitions": [2, "type"],
    "@typescript-eslint/brace-style": [
      "error",
      "1tbs"
    ],
    "@typescript-eslint/comma-spacing": [
      "error",
      { "before": false, "after": true }
    ],
    "@typescript-eslint/comma-dangle": [
      "error",
      "always-multiline"
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/no-shadow": "error",

    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    "react/hook-use-state": "error",
    "react/destructuring-assignment": "error",

    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/anchor-is-valid": "off",

    // DEPRECADO
    "object-curly-newline": "off",
    "no-confusing-arrow": "off",
    "implicit-arrow-linebreak": "off",
    "indent": "off",
  },
};
