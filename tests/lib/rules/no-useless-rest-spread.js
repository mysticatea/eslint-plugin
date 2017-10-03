/**
 * @fileoverview Tests for no-useless-rest-spread rule.
 * @author Toru Nagashima
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/no-useless-rest-spread")

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: { experimentalObjectRestSpread: true },
    },
})

ruleTester.run("no-useless-rest-spread", rule, {
    valid: [
        "let list = [...a, ...b]",
        "foo(...a, ...b)",
        "let [a, b, c, ...d] = obj",
        "function foo(a, b, c, ...d) {}",
        "let obj = {...a, ...b}",
        "let {a, ...b} = obj",

        // those are invalid. I'll separate to another rule.
        "let list = [...{a}]",
        "let obj = {...[a]}",
    ],
    invalid: [
        {
            code: "let list = [...[x, y, x], ...b]",
            output: "let list = [x, y, x, ...b]",
            errors: ["Unexpected a spread operator."],
        },
        {
            code: "foo(...a, ...[x, y, x])",
            output: "foo(...a, x, y, x)",
            errors: ["Unexpected a spread operator."],
        },
        {
            code: "let [a, ...[b, c, ...d]] = obj",
            output: "let [a, b, c, ...d] = obj",
            errors: ["Unexpected a rest operator."],
        },
        {
            code: "function foo(a, ...[b, c, ...d]) {}",
            output: "function foo(a, b, c, ...d) {}",
            errors: ["Unexpected a rest operator."],
        },
        {
            code: "let obj = {...{x, y, x}, ...b}",
            output: "let obj = {x, y, x, ...b}",
            errors: ["Unexpected a spread property."],
        },

        // Trailing commas
        {
            code: "let list = [...[x, y, x, ], ...b]",
            output: "let list = [x, y, x, ...b]",
            errors: ["Unexpected a spread operator."],
        },
        {
            code: "foo(...a, ...[x, y, x, ])",
            output: "foo(...a, x, y, x)",
            errors: ["Unexpected a spread operator."],
        },
        {
            code: "let [a, ...[b, c, ]] = obj",
            output: "let [a, b, c] = obj",
            errors: ["Unexpected a rest operator."],
        },
        {
            code: "function foo(a, ...[b, c, ]) {}",
            output: "function foo(a, b, c) {}",
            errors: ["Unexpected a rest operator."],
        },
        {
            code: "let obj = {...{x, y, x, }, ...b}",
            output: "let obj = {x, y, x, ...b}",
            errors: ["Unexpected a spread property."],
        },

        // Empty literals
        {
            code: "let list = [...[], ...b]",
            output: "let list = [ ...b]",
            errors: ["Unexpected a spread operator."],
        },
        {
            code: "foo(...a, ...[])",
            output: "foo(...a)",
            errors: ["Unexpected a spread operator."],
        },
        {
            code: "let [a, ...[]] = obj",
            output: "let [a] = obj",
            errors: ["Unexpected a rest operator."],
        },
        {
            code: "function foo(a, ...[b, c, ]) {}",
            output: "function foo(a, b, c) {}",
            errors: ["Unexpected a rest operator."],
        },
        {
            code: "let obj = {...{}, ...b}",
            output: "let obj = { ...b}",
            errors: ["Unexpected a spread property."],
        },
    ],
})

const babelRuleTester = new RuleTester({ parser: "babel-parser" })
babelRuleTester.run("no-useless-rest-spread with babel", rule, {
    valid: [],
    invalid: [
        {
            code: "let {a, ...{b, c, ...d}} = obj",
            output: "let {a, b, c, ...d} = obj",
            errors: ["Unexpected a rest property."],
        },
        {
            code: "let {a, ...{b, c, }} = obj",
            output: "let {a, b, c} = obj",
            errors: ["Unexpected a rest property."],
        },
        {
            code: "let {a, ...{}} = obj",
            output: "let {a} = obj",
            errors: ["Unexpected a rest property."],
        },
    ],
})
