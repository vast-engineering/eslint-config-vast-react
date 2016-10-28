# eslint-config-vast-react
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for React to be used with [eslint-config-vast](https://github.com/vast-engineering/eslint-config-vast)

[![NPM version](https://badge.fury.io/js/eslint-config-vast-react.svg)](https://www.npmjs.org/package/eslint-config-vast-react) [![Dependency Status](https://david-dm.org/vast-engineering/eslint-config-vast-react.svg)](https://david-dm.org/vast-engineering/eslint-config-vast-react) [![devDependency Status](https://david-dm.org/vast-engineering/eslint-config-vast-react/dev-status.svg)](https://david-dm.org/vast-engineering/eslint-config-vast-react?type=dev) [![devDependency Status](https://david-dm.org/vast-engineering/eslint-config-vast-react/peer-status.svg)](https://david-dm.org/vast-engineering/eslint-config-vast-react?type=peer)

This config uses [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for linting React and JSX, and [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) for basic accessibility checks.

## Installation

    npm install --save-dev eslint-config-vast-react eslint-plugin-react eslint-plugin-jsx-a11y

## Usage

Create `.eslintrc` file in the root of your project with the following config:

```javascript
{
  "extends": ["eslint-config-vast", "eslint-config-vast-react"]
}
```

See [eslint-config-vast](https://github.com/vast-engineering/eslint-config-vast) for further instructions.

## Related
- [eslint-config-vast](https://github.com/vast-engineering/eslint-config-vast)
- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) for React
- [eslint-config-xo-react](https://github.com/sindresorhus/eslint-config-xo-react) for React

## License

[MIT](LICENSE) © 2016 Vast.com, Inc.
