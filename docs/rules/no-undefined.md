# disallow the declarations of `undefined` (no-undefined)

In JavaScript, `undefined` is not a keyword. So people can declare variables as `undefined`.

This rule disallow such variables.

## Rule Details

Examples of **incorrect** code for this rule:

```js
/*eslint no-undefined: "error"*/

var undefined;

function undefined() {
}

function foo(undefined) {
}
```

Examples of **correct** code for this rule:

```js
/*eslint no-undefined: "error"*/

// allow a use of undefined.
if (a === undefined) {
}
```

## Options

Nothing.
