### eslint-config-iivanovw7

Contains the following shareable [ESLint](https://eslint.org/docs/user-guide/configuring/configuration-files) configs:

* [iivanovw7](index.js)
* [iivanovw7/jsdoc](jsdoc.js)
* [iivanovw7/node](node.js)
* [iivanovw7/react](react.js)
* [iivanovw7/test-jest](test-jest.js)
* [iivanovw7/typescript](typescript.js)

---
### Installation

npm install `git+{{gitUrl}}`

#### Example:
```bash
pnpm install git+https://github.com/iivanovw7/eslint-config-iivanovw7 --save-dev -E
```


---

### React >= 17

If you are using the [new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) from React 17, extend `react/jsx-runtime` in your eslint config (add "plugin:react/jsx-runtime" to "extends") to disable the relevant rules.
See [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) for more information.

---

### Non-standard tsconfig.json paths

If you use a TS configuration file other than the default (`tsconfig.json` under the project's root), you need to specify its path:

```json
{
  "eslintConfig": {
    "parserOptions": {
      "project": "./packages/tsconfig.dev.json"
    }
  }
}
```
### Examples

```json
{
  "eslintConfig": {
    "extends": [
        "iivanovw7"
    ]
  }
}
```

```json
{
  "eslintConfig": {
    "extends": [
        "iivanovw7",
        "iivanovw7/node"
    ]
  }
}
```

```json
{
  "eslintConfig": {
    "extends": [
        "iivanovw7/react",
        "iivanovw7/typescript"
    ]
  }
}
```
