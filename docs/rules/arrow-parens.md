# Require parens of the arrow function argument list. (arrow-parens)

(fixable) The `--fix` option on the [command line](http://eslint.org/docs/user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

## Rule Details

This rule aims to flag argument lists which don't have parens.
The arrow function is able to not have parens for its argument list.

This rule ignores arrow functions that there is a open paren before itself.

### The following patterns are considered warnings:

```js
const twice = x => 2 * x;
```

```js
const obj = {
  twich: x => 2 * x
};
```

```js
p.then(x => 2 * x, err => console.error(err));
```

### The following patterns are not considered warnings:

```js
const twice = (x) => 2 * x;
const twice = (x => 2 * x);
```

```js
const obj = {
  twich: (x) => 2 * x
};
const obj2 = {
  twich: (x => 2 * x)
};
```

```js
xs.map(x => 2 * x);
```

```js
p.then(x => 2 * x, (err) => console.error(err));
```
