/**
 * @fileoverview Tests for no-literal-call rule.
 * @author Toru Nagashima
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/no-literal-call")

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester()

ruleTester.run("no-literal-call", rule, {
    valid: [
        "foo();",
        "obj.foo();",
        "(function() {})();",
        { code: "(() => 0)();", env: { es6: true } },
        "new foo();",
        "new obj.foo();",
        "new (function() {})();",
        { code: "new (class {})();", env: { es6: true } },
        { code: "new (() => 0)();", env: { es6: true } },
        { code: "foo``;", env: { es6: true } },
        { code: "obj.foo``;", env: { es6: true } },
        { code: "(function() {})``;", env: { es6: true } },
        { code: "(() => 0)``;", env: { es6: true } },
    ],
    invalid: [
        { code: "true();", errors: ["This is not a function."] },
        { code: "false();", errors: ["This is not a function."] },
        { code: "null();", errors: ["This is not a function."] },
        { code: "100();", errors: ["This is not a function."] },
        { code: '"hello"();', errors: ["This is not a function."] },
        { code: "/abc/();", errors: ["This is not a function."] },
        { code: "[1,2,3]();", errors: ["This is not a function."] },
        { code: "({foo: 0})();", errors: ["This is not a function."] },
        {
            code: "`hello`();",
            errors: ["This is not a function."],
            env: { es6: true },
        },
        {
            code: "(class A {})();",
            errors: ["This is not a function."],
            env: { es6: true },
        },
        { code: "new true();", errors: ["This is not a function."] },
        { code: "new false();", errors: ["This is not a function."] },
        { code: "new null();", errors: ["This is not a function."] },
        { code: "new 100();", errors: ["This is not a function."] },
        { code: 'new "hello"();', errors: ["This is not a function."] },
        { code: "new /abc/();", errors: ["This is not a function."] },
        { code: "new [1,2,3]();", errors: ["This is not a function."] },
        { code: "new ({foo: 0})();", errors: ["This is not a function."] },
        {
            code: "new `hello`();",
            errors: ["This is not a function."],
            env: { es6: true },
        },
        {
            code: "true``;",
            errors: ["This is not a function."],
            env: { es6: true },
        },
        {
            code: "false``;",
            errors: ["This is not a function."],
            env: { es6: true },
        },
        {
            code: "null``;",
            errors: ["This is not a function."],
            env: { es6: true },
        },
        {
            code: "100``;",
            errors: ["This is not a function."],
            env: { es6: true },
        },
        {
            code: '"hello"``;',
            errors: ["This is not a function."],
            env: { es6: true },
        },
        {
            code: "/abc/``;",
            errors: ["This is not a function."],
            env: { es6: true },
        },
        {
            code: "[1,2,3]``;",
            errors: ["This is not a function."],
            env: { es6: true },
        },
        {
            code: "({foo: 0})``;",
            errors: ["This is not a function."],
            env: { es6: true },
        },
        {
            code: "`hello```;",
            errors: ["This is not a function."],
            env: { es6: true },
        },
        {
            code: "(class A {})``;",
            errors: ["This is not a function."],
            env: { es6: true },
        },
    ],
})
