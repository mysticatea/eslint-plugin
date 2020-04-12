# @mysticatea/eslint-plugin-core

[![npm version](https://img.shields.io/npm/v/@mysticatea/eslint-plugin-core.svg)](https://www.npmjs.com/package/@mysticatea/eslint-plugin-core)
[![Downloads/month](https://img.shields.io/npm/dm/@mysticatea/eslint-plugin-core.svg)](http://www.npmtrends.com/@mysticatea/eslint-plugin-core)
[![Build Status](https://github.com/mysticatea/eslint-plugin-core/workflows/CI/badge.svg)](https://github.com/mysticatea/eslint-plugin-core/actions)
[![codecov](https://codecov.io/gh/mysticatea/eslint-plugin-core/branch/master/graph/badge.svg)](https://codecov.io/gh/mysticatea/eslint-plugin-core)
[![Dependency Status](https://david-dm.org/mysticatea/eslint-plugin-core.svg)](https://david-dm.org/mysticatea/eslint-plugin-core)

Additional ESLint rules and ESLint configurations.

## 💿 Installation

```
npm install --save-dev eslint @mysticatea/eslint-plugin-core
```

### Requirements

- Node.js `^8.10.0` or newer versions.
- ESLint `^6.3.0` or newer versions.

## 📖 Usage

Write in your ESLint configurations: http://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin

### Configs

- `plugin:@mysticatea/core/es5` ... Basic configuration for ES5.

### Rules

- [@mysticatea/arrow-parens](docs/rules/arrow-parens.md) enforces parens of argument lists (excludes too redundant parens) (fixable).
- [@mysticatea/block-scoped-var](docs/rules/block-scoped-var.md) handles variables which are declared by `var` declaration as block-scoped. It disallows redeclarations, uses from outside of the scope, shadowing.
- [@mysticatea/no-instanceof-array](docs/rules/no-instanceof-array.md) disallows 'instanceof' for Array (fixable).
- [@mysticatea/no-instanceof-wrapper](docs/rules/no-instanceof-wrapper.md) disallows 'instanceof' for wrapper objects (fixable).
- [@mysticatea/no-literal-call](docs/rules/no-literal-call.md) disallows a call of a literal.
- [@mysticatea/no-this-in-static](docs/rules/no-this-in-static.md) disallows `this`/`super` in static methods.
- [@mysticatea/no-use-ignored-vars](docs/rules/no-use-ignored-vars.md) disallows a use of ignored variables.
- [@mysticatea/no-useless-rest-spread](docs/rules/no-useless-rest-spread.md) disallows unnecessary rest/spread operators (fixable).
- [@mysticatea/prefer-for-of](docs/rules/prefer-for-of.md) requires `for-of` statements instead of `Array#forEach` or something like (fixable).

## 🚥 Semantic Versioning Policy

This plugin follows [semantic versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## 📰 Changelog

- [GitHub Releases](https://github.com/mysticatea/eslint-plugin-core/releases)

## ❤️ Contributing

Welcome contributing!

Please use GitHub's Issues/PRs.

### Development Tools

- `npm test` runs tests and measures coverage.
- `npm run clean` removes the coverage result of `npm test` command.
- `npm run coverage` shows the coverage result of `npm test` command.
- `npm run update` updates auto-generated files.
- `npm run watch` runs tests and measures coverage when source code are changed.
