# eslint-config-humand

eslint config by Humand

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-config-humand`:

```sh
npm install github:HumandDev/eslint-plugin-humand --save-dev
```

## Usage

Add `humand` to the extend section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
    "extends": [
        "humand"
    ]
}
```

You'll need to have a tsconfig.json.
