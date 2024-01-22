// eslint-plugin-humand

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
  ],
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
    "comma-spacing": "off",
    "comma-dangle": "off",
    "radix": "off",

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
      "stroustrup"
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

    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "react/no-array-index-key": "off",

    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/anchor-is-valid": "off",

    // PROP: prender
    // "no-nested-ternary": "error",
    //
    // Evita ternarios nesteados que dificultan la lectura
    // "no-nested-ternary": "off",
     "no-nested-ternary": "error",

    // PROP: prender
    // "default-param-last": "off",
    // "@typescript-eslint/default-param-last": "error",
    //
    // Requiere que los parametros opcionales estén al final para que se puedan obviar al llamar a
    // la función
    // "@typescript-eslint/default-param-last": "off",
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",

    // PROP: prender
    // "no-console": ["error", { allow: ["error"] }],
    //
    // No permitir el uso de console, pero sí permitir console.error
    // "no-console": "off",
    "no-console": ["error", { allow: ["error"] }],

    // PROP: prender:
    // "react/hook-use-state": "error",
    //
    // Esta regla chequea que el useState siga el formato:
    // const [thing, setThing] = useState();
    "react/hook-use-state": "error",

    // PROP: prender
    // "react/destructuring-assignment": "error",
    //
    // Evita el uso de las props como `props.id` y requiere hacer `const { id } = props`
    // "react/destructuring-assignment": "off",
    "react/destructuring-assignment": "error",

    // PROP: prender:
    // "consistent-return": "error",
    //
    // Evita returns inconsistentes.
    // "consistent-return": "off",
    "consistent-return": "error",

    // PROP 1: propongo dejarlo apagado, ya que tira muchos errores cuando se quieren reutilizar
    // nombres. Como por ejemplo con nombres del tipo "error", "err", "item", "response", etc...
    //
    // PROP 2: a lo sumo consideraría prenderlo con una lista de nombres permitidos haciendo:
    // "@typescript-eslint/no-shadow": ["error", { allow: ["error", "err", "item", "event",
    // "response"] }],
    // Aunque parece medio molesto tener que estar definiendo los nombres permitidos.
    "@typescript-eslint/no-shadow": "off",

    // PROP: prender:
    // "no-extra-boolean-cast": ["error", {"enforceForLogicalOperands": true}],
    //
    // Evita casteos a booleanos innecesarios.
    // "no-extra-boolean-cast": "off",
    "no-extra-boolean-cast": ["error", {"enforceForLogicalOperands": true}],

    // DEPRECADO
    "object-curly-newline": "off",
    "no-confusing-arrow": "off",
    "implicit-arrow-linebreak": "off",
    "indent": "off",
  },
};
