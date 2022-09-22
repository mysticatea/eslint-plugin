# Disallow `this`/`super` in static methods (no-this-in-static)

`this` keyword on static methods refers the class (the constructor) instance.
However, probably it's confusing maintainers since this behavior is different to
most other languages.

This rule enforces a use of class itself to access static methods.

## Rule Details

Examples of **incorrect** code for this rule:

```js
/*eslint no-this-in-static: "error"*/

class A {
    static foo() {
        doSomething()
    }

    static bar() {
        this.foo() //ERROR: Unexpected 'this'.
    }
}

class B extends A {
    static foo() {
        super.foo() //ERROR: Unexpected 'super'.
    }
}
```

Examples of **correct** code for this rule:

```js
/*eslint no-this-in-static: "error"*/

class A {
    static foo() {
        doSomething()
    }

    static bar() {
        A.foo()
    }
}

class B extends A {
    static foo() {
        A.foo()
    }
}
```
