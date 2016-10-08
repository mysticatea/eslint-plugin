# Disallow 'instanceof' for wrapper objects (no-instanceof-wrapper)

## Rule Details

Examples of **incorrect** code for this rule:

```js
/*eslint no-instanceof-wrapper: "error"*/

x instanceof Boolean
x instanceof Number
x instanceof String
x instanceof Object
x instanceof Function
x instanceof Symbol
```

Examples of **correct** code for this rule:

```js
/*eslint no-instanceof-wrapper: "error"*/

typeof x === "boolean"
typeof x === "number"
typeof x === "string"
typeof x === "object"
typeof x === "function"
typeof x === "symbol"
```
