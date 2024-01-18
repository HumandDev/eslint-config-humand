// eslint-plugin-humand

module.exports = {
  env: {
    "es6": true,
    "browser": true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": "./tsconfig.json",
    "tsconfigRootDir": "__dirname",
  },
  extends: [
    "airbnb-typescript",
  ],
  rules: {
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/comma-spacing": "off",
    "@typescript-eslint/no-shadow": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "implicit-arrow-linebreak": "off",
    "react/no-array-index-key": "off",
    "consistent-return": "off",
    "no-extra-boolean-cast": "off",
    "import/no-named-default": "off",
    "import/no-named-as-default": "off",
    "no-restricted-properties": "off",
    "no-underscore-dangle": "off",
    "no-confusing-arrow": "off",
    "import/no-cycle": "off",
    "react/destructuring-assignment": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-redeclare": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/consistent-type-definitions": [2, "type"],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
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
    "no-console": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-return-assign": "off",
    "object-curly-newline": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",
    "@typescript-eslint/default-param-last": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "radix": "off",
    "no-nested-ternary": "off",
    "jsx-a11y/media-has-caption": "off",
    "@typescript-eslint/brace-style": [
      "error",
      "stroustrup"
    ],
  },
};
