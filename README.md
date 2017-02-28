# eslint-plugin-mysticatea

[![npm version](https://img.shields.io/npm/v/eslint-plugin-mysticatea.svg)](https://www.npmjs.com/package/eslint-plugin-mysticatea)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-plugin-mysticatea.svg)](http://www.npmtrends.com/eslint-plugin-mysticatea)
[![Build Status](https://travis-ci.org/mysticatea/eslint-plugin.svg?branch=master)](https://travis-ci.org/mysticatea/eslint-plugin)
[![codecov](https://codecov.io/gh/mysticatea/eslint-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/mysticatea/eslint-plugin)
[![Dependency Status](https://david-dm.org/mysticatea/eslint-plugin.svg)](https://david-dm.org/mysticatea/eslint-plugin)

Additional ESLint rules.

## :cd: Installation

```
npm install --save-dev eslint eslint-plugin-mysticatea
```

### Requirements

- Node.js `^4.0.0`, `^6.0.0`, or newer.
- ESLint `^3.1.0`, or newer.

## :book: Usage

Write in your ESLint configurations: http://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin

### Rules

- [mysticatea/arrow-parens](docs/rules/arrow-parens.md) enforces parens of argument lists (excludes too redundant parens) (fixable).
- [mysticatea/block-scoped-var](docs/rules/block-scoped-var.md) handles variables which are declared by `var` declaration as block-scoped. It disallows redeclarations, uses from outside of the scope, shadowing.
- [mysticatea/no-instanceof-array](docs/rules/no-instanceof-array.md) disallows 'instanceof' for Array (fixable).
- [mysticatea/no-instanceof-wrapper](docs/rules/no-instanceof-wrapper.md) disallows 'instanceof' for wrapper objects (fixable).
- [mysticatea/no-literal-call](docs/rules/no-literal-call.md) disallows a call of a literal.
- [mysticatea/no-this-in-static](docs/rules/no-this-in-static.md) disallows `this`/`super` in static methods.
- [mysticatea/no-use-ignored-vars](docs/rules/no-use-ignored-vars.md) disallows a use of ignored variables.
- [mysticatea/no-useless-rest-spread](docs/rules/no-useless-rest-spread.md) disallows unnecessary rest/spread operators (fixable).
- [mysticatea/prefer-for-of](docs/rules/prefer-for-of.md) requires `for-of` statements instead of `Array#forEach` or something like (fixable).

### Example

**.eslintrc.json**

```json
{
    "plugins": [
        "mysticatea"
    ],
    "rules": {
        "mysticatea/arrow-parens": "error",
        "mysticatea/block-scoped-var": "error",
        "mysticatea/no-instanceof-array": "error",
        "mysticatea/no-instanceof-wrapper": "error",
        "mysticatea/no-literal-call": "error",
        "mysticatea/no-this-in-static": "error",
        "mysticatea/no-use-ignored-vars": "error",
        "mysticatea/no-useless-rest-spread": "error",
        "mysticatea/prefer-for-of": "error",
        "arrow-parens": "off",
        "block-scoped-var": "off",
        "no-redeclare": "off"
    }
}
```

## :anchor: Semantic Versioning Policy

`eslint-plugin-mysticatea` follows [semantic versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

- Patch release (intended to not break your lint build)
    - A bug fix in a rule that results in `eslint-plugin-mysticatea` reporting fewer errors.
    - Improvements to documentation.
    - Non-user-facing changes such as refactoring code, adding, deleting, or modifying tests, and increasing test coverage.
    - Re-releasing after a failed release (i.e., publishing a release that doesn't work for anyone).
- Minor release (might break your lint build)
    - A bug fix in a rule that results in `eslint-plugin-mysticatea` reporting more errors.
    - A new rule is created.
    - A new option to an existing rule is created.
    - An existing rule is deprecated.
- Major release (likely to break your lint build)
    - A support for old Node version is dropped.
    - A support for old ESLint version is dropped.
    - An existing rule is removed.
    - An existing option of a rule is removed.
    - An existing config is updated.

## :newspaper: Changelog

- [GitHub Releases](https://github.com/mysticatea/eslint-plugin-mysticatea/releases)

## :muscle: Contributing

Welcome contributing!

Please use GitHub's Issues/PRs.

### Development Tools

- `npm test` runs tests and measures coverage.
- `npm run watch` runs tests and measures coverage when source code are changed.
- `npm run coverage` shows the coverage result of `npm test` command.
- `npm run clean` removes the coverage result of `npm test` command.
