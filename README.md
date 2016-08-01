# eslint-plugin-mysticatea

[![Build Status](https://travis-ci.org/mysticatea/eslint-plugin.svg?branch=master)](https://travis-ci.org/mysticatea/eslint-plugin)
[![Coverage Status](https://coveralls.io/repos/mysticatea/eslint-plugin/badge.svg?branch=master&service=github)](https://coveralls.io/github/mysticatea/eslint-plugin?branch=master)
[![npm version](https://badge.fury.io/js/eslint-plugin-mysticatea.svg)](http://badge.fury.io/js/eslint-plugin-mysticatea)

Additional rules of ESLint for me.

## Requirements

- Node v0.10, v0.12, v4 or later.
- ESLint v2.0.0 or later.

## Installation

```
npm install --save-dev eslint eslint-plugin-mysticatea
```

.eslintrc

```json
{
    "plugins": [
        "mysticatea"
    ],
    "rules": {
        "mysticatea/arrow-parens": "error",
        "mysticatea/block-scoped-var": "error",
        "mysticatea/no-literal-call": "error",
        "mysticatea/no-undefined": "error",
        "mysticatea/no-use-ignored-vars": "error",
        "mysticatea/no-useless-rest-spread": "error",
        "arrow-parens": "off",
        "block-scoped-var": "off",
        "no-redeclare": "off"
    }
}
```

## Rules

- [arrow-parens](docs/rules/arrow-parens.md) - Enforce parens of argument lists (excludes too redundant parens) (fixable).
- [block-scoped-var](docs/rules/block-scoped-var.md) - The complete emulation of block-scoping for `var`.
- [no-literal-call](docs/rules/no-literal-call.md) - Disallow a call of a literal.
- [no-undefined](docs/rules/no-undefined.md) - disallow the declarations of `undefined`.
- [no-use-ignored-vars](docs/rules/no-use-ignored-vars.md) - Disallow a use of ignored variables.
- [no-useless-rest-spread](docs/rules/no-useless-rest-spread.md) - Disallow unnecessary rest/spread operators (fixable).
