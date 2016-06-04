# Disallow unnecessary rest/spread operators (no-useless-rest-spread)

## Rule Details

Examples of **incorrect** code for this rule:

```js
/*eslint no-useless-rest-spread: "error"*/

let list = [a, ...[b, c], d]
foo(...[a, b, c])

let [a, b, ...[c, d]] = list;
function foo(a, b, ...[c, d]) {
}
```

Examples of **correct** code for this rule:

```js
/*eslint no-useless-rest-spread: "error"*/

let list = [a, b, c, d]
foo(a, b, c)

let [a, b, c, d] = list;
function foo(a, b, c, d) {
}
```
