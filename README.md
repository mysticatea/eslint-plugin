# eslint-plugin-mysticatea

[![Build Status](https://travis-ci.org/mysticatea/eslint-plugin.svg?branch=master)](https://travis-ci.org/mysticatea/eslint-plugin)
[![Coverage Status](https://coveralls.io/repos/mysticatea/eslint-plugin/badge.svg?branch=master&service=github)](https://coveralls.io/github/mysticatea/eslint-plugin?branch=master)
[![npm version](https://badge.fury.io/js/eslint-plugin-mysticatea.svg)](http://badge.fury.io/js/eslint-plugin-mysticatea)

Additional rules of ESLint for me.

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
        "mysticatea/arrow-parens": 2,
        "mysticatea/block-scoped-var": 2,
        "arrow-parens": 0,
        "block-scoped-var": 0,
        "no-redeclare": 0
    }
}
```

## Rules

- [arrow-parens](docs/arrow-parens.md) - Enforce parens of argument lists (excludes too redundant parens).
- [block-scoped-var](docs/block-scoped-var.md) - The complete emulation of block-scoping for `var`.
