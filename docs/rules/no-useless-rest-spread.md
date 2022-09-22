# Disallow unnecessary rest/spread operators (no-useless-rest-spread)

(fixable) The `--fix` option on the [command line](http://eslint.org/docs/user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

## Rule Details

Examples of **incorrect** code for this rule:

```js
/*eslint no-useless-rest-spread: "error"*/

let list = [a, ...[b, c], d]
let obj = {a, ...{b, c}, d}
foo(...[a, b, c])

let [a, b, ...[c, d]] = list;
let {a, b, ...{c, d}} = obj;
function foo(a, b, ...[c, d]) {
}
```

Examples of **correct** code for this rule:

```js
/*eslint no-useless-rest-spread: "error"*/

let list = [a, b, c, d]
let obj = { a, b, c, d }
foo(a, b, c)

let [a, b, c, d] = list
let { a, b, c, d } = obj
function foo(a, b, c, d) {}
```
