# Disallow a call of a literal (no-literal-call)

A call of a literal is a valid syntax, but it would cause a runtime error.

## Rule Details

Examples of **incorrect** code for this rule:

```js
/*eslint no-literal-call: "error"*/

123()
"hello"()
```

Examples of **correct** code for this rule:

```js
/*eslint no-literal-call: "error"*/

foo()
;(function () {})()
```
