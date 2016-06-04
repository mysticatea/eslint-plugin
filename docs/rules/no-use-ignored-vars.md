# Disallow a use of ignored variables (no-use-ignored-vars)

I use the name `_foo` as ignore patterns on [no-unused-vars].
This rule disallows a use of the ignored variables.

## Rule Details

Examples of **incorrect** code for this rule:

```js
/*eslint no-use-ignored-vars: "error"*/

let _foo = 0;
doSomething(_foo);

function foo(_a) {
    doSomething(_a);
}
```

Examples of **correct** code for this rule:

```js
/*eslint no-use-ignored-vars: "error"*/

let _foo = 0;

function foo(_a) {
    doSomething();
}
```

[no-unused-vars]: http://eslint.org/docs/rules/no-unused-vars
