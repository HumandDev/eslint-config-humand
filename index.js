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
    "airbnb",
    "airbnb-typescript",
  ],
  rules: {
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],

    "@typescript-eslint/no-use-before-define": "off",

    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error", { "before": false, "after": true }],

    // PROP 1: propongo dejarlo apagado, ya que tira muchos errores cuando se quieren reutilizar
    // nombres. Como por ejemplo con nombres del tipo "error", "err", "item", "response", etc...
    //
    // PROP 2: a lo sumo consideraría prenderlo con una lista de nombres permitidos haciendo:
    // "@typescript-eslint/no-shadow": ["error", { allow: ["error", "err", "item", "event",
    // "response"] }],
    // Aunque parece medio molesto tener que estar definiendo los nombres permitidos.
    "@typescript-eslint/no-shadow": "off",

    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": "off",

    // DEPRECADO
    // "implicit-arrow-linebreak": "off",

    "react/no-array-index-key": "off",

    // PROP: prender:
    // "consistent-return": "error",
    //
    // Evita returns inconsistentes.
    // "consistent-return": "off",
    "consistent-return": "error",

    // PROP: prender:
    // "no-extra-boolean-cast": ["error", {"enforceForLogicalOperands": true}],
    //
    // Evita casteos a booleanos innecesarios.
    // "no-extra-boolean-cast": "off",
    "no-extra-boolean-cast": ["error", {"enforceForLogicalOperands": true}],

    "import/no-named-default": "off",
    "import/no-named-as-default": "off",
    "no-restricted-properties": "off",
    "no-underscore-dangle": "off",

    // DEPRECADO
    // "no-confusing-arrow": "off",

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

    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-redeclare": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/consistent-type-definitions": [2, "type"],
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

    // PROP: prender
    // "no-console": ["error", { allow: ["error"] }],
    //
    // No permitir el uso de console, pero sí permitir console.error
    // "no-console": "off",
    "no-console": ["error", { allow: ["error"] }],

    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-return-assign": "off",

    // DEPRECADO
    // "object-curly-newline": "off",

    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",

    // PROP: prender
    // "default-param-last": "off",
    // "@typescript-eslint/default-param-last": "error",
    //
    // Requiere que los parametros opcionales estén al final para que se puedan obviar al llamar a
    // la función
    // "@typescript-eslint/default-param-last": "off",
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",

    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "radix": "off",

    // PROP: prenderr
    // "no-nested-ternary": "error",
    //
    // Evita ternarios nesteados que dificultan la lectura
    // "no-nested-ternary": "off",
     "no-nested-ternary": "error",

    "jsx-a11y/media-has-caption": "off",
    "@typescript-eslint/brace-style": [
      "error",
      "stroustrup"
    ],

    // Indent con errores
  },
};
