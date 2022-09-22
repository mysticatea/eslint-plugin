# Requires `for-of` statements instead of `Array#forEach` (prefer-for-of)

ES2015 introduced new `for-of` syntax.
It's more readable than `Array#forEach` since it does not require closures.

## Rule Details

:-1: Examples of **incorrect** code for this rule:

```js
/*eslint prefer-for-of: "error"*/

list.forEach((value) => {
    doSomething(value)
})

for (let i = 0; i < list.length; ++i) {
    const value = list[i]
    doSomething(value)
}

for (const i in list) {
    if (obj.hasOwnProperty(i)) {
        doSomething(obj[i])
    }
}

for (const key in obj) {
    doSomething(key, obj[key])
}
```

:+1: Examples of **correct** code for this rule:

```js
/*eslint prefer-for-of: "error"*/

for (const value of list) {
    doSomething(value)
}

for (const key of Object.keys(obj)) {
    doSomething(key, obj[key])
}

// Allow for indices.
list.forEach((value, index) => {
    doSomething(index, value)
})
```

## Options

Nothing.
