# Disallow 'instanceof' for Array (no-instanceof-array)

## Rule Details

Examples of **incorrect** code for this rule:

```js
/*eslint no-instanceof-array: "error"*/

x instanceof Array
```

Examples of **correct** code for this rule:

```js
/*eslint no-instanceof-array: "error"*/

Array.isArray(x)
```
