# eslint-plugin-mysticatea

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
    ]
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
