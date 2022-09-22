# Disallow a use of ignored variables (no-use-ignored-vars)

We can specify to ignore unused variables by a name pattern for [no-unused-vars] rule.
But [no-unused-vars] rule does not notify a use of the ignored variables.
A use of ignored variables causes confusing to developers.

This rule disallows a use of the ignored variables.

## Rule Details

Examples of **incorrect** code for this rule:

```js
/*eslint no-use-ignored-vars: "error"*/

let _foo = 0
doSomething(_foo)

function foo(_a) {
    doSomething(_a)
}
```

Examples of **correct** code for this rule:

```js
/*eslint no-use-ignored-vars: "error"*/

let _foo = 0

function foo(_a) {
    doSomething()
}
```

## Options

This rule has a string option.

```json
{
    "no-use-ignored-vars": ["error", "^_[a-zA-Z]+$"]
}
```

The string option is a regular expression of the ignored name pattern.
Default is `"^_[a-zA-Z]+$"`.

[no-unused-vars]: http://eslint.org/docs/rules/no-unused-vars
