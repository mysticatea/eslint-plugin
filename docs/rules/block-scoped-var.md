# Treat `var` as Block Scoped (block-scoped-var)

This rule treats variables which are defined with `var` declarations as the same behavior as variables which are defined with `let` declarations.

Please turn `no-redeclare` rule off if you use this rule.

## Rule Details

This rule aims to flag below about variables which are defined with `var` declaration:

-   References from outside of the block which declare the variable.
-   Re-declarations in a same block.
-   Shadowing in a same function scope.

### The following patterns are considered warnings:

```js
{
    var a = 0
}
console.log(a) // not defined.
```

```js
for (var a = 0; ; ) {}
console.log(a) // not defined.
```

```js
var a = 0
var a = 0 // already defined.
```

```js
for (var a = 0; ; ) {
    var a = 0 // already defined.
}
```

```js
function foo(a) {
    var a = 0 // already defined.
}
```

```js
var a = 0
{
    var a = 0 // already defined in the upper scope.
}
```

```js
function foo(a) {
    if (Math.random() < 0.5) {
        var a = 0 // already defined in the upper scope.
    }
}
```

### The following patterns are not considered warnings:

```js
if (Math.random() < 0.5) {
    var a = 0
    console.log(a)
} else {
    var a = 1
    console.log(a)
}
```
