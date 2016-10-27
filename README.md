# eslint-config-vast-react
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for React and [react-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) to be used with [eslint-config-vast](https://github.com/vast-engineering/eslint-config-vast)

[![NPM version](https://badge.fury.io/js/eslint-config-vast-react.svg)](https://www.npmjs.org/package/eslint-config-vast-react) [![Dependency Status](https://david-dm.org/vast-engineering/eslint-config-vast-react.svg)](https://david-dm.org/vast-engineering/eslint-config-vast-react) [![devDependency Status](https://david-dm.org/vast-engineering/eslint-config-vast-react/dev-status.svg)](https://david-dm.org/vast-engineering/eslint-config-vast-react?type=dev) [![devDependency Status](https://david-dm.org/vast-engineering/eslint-config-vast-react/peer-status.svg)](https://david-dm.org/vast-engineering/eslint-config-vast-react?type=peer)

## Installation

    npm install --save-dev eslint-config-vast-react eslint-plugin-react eslint-plugin-jsx-a11y

## Usage

Create `.eslintrc` file in the root of your project with the following config:

```javascript
{
  "extends": ["eslint-config-vast", "eslint-config-vast-react"],
}
```

You'll probably need to add another config file in the root folder of the client-side code (e.g. `app/client/.eslintrc`):

```javascript
{
    "env": {
        "browser": true
    },
    "parserOptions": {
        "sourceType": "module", // if using Babel
        "ecmaVersion": 8 // if using Babel
    },
    "globals": {
            "SOME_GLOBAL": false
    },
    "rules": {
        // Your overrides...
    }
}
```

> **Note:** You don't need to use babel-eslint (`"parser": "babel-eslint"`) if you are using ES2015 (ES6), ES2016 (ES7) or ES2017 (ES8).
>
> ESLint actually supports ES2015/ES2016/ES2017, JSX, and object rest/spread by default now.
>
> At the moment, you'll need it if you use stuff like class properties, decorators, async/await, types.

### Setting up ESLint

To set up ESLint on your project, run:

    npm install eslint --save-dev

Add "eslint" to "scripts" in `package.json`:

```json
"scripts": {
    "eslint": "eslint app tests '*.js' --ext .js --ext .jsx"
}
```

...and then you can run:

    npm run eslint

## Related
- [eslint-config-vast](https://github.com/vast-engineering/eslint-config-vast)
- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) for React
- [eslint-config-xo-react](https://github.com/sindresorhus/eslint-config-xo-react) for React

## License

[MIT](LICENSE) © 2016 Vast.com, Inc.
