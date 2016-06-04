/**
 * @fileoverview Tests for no-useless-rest-spread rule.
 * @author Toru Nagashima
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-useless-rest-spread")
var RuleTester = require("eslint").RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester()

ruleTester.run("no-useless-rest-spread", rule, {
    valid: [
        {code: "let list = [...a, ...b]", env: {es6: true}},
        {code: "foo(...a, ...b)", env: {es6: true}},
        {code: "let [a, b, c, ...d] = obj", env: {es6: true}},
        {code: "function foo(a, b, c, ...d) {}", env: {es6: true}},
    ],
    invalid: [
        {
            code: "let list = [...[x, y, x], ...b]",
            output: "let list = [x, y, x, ...b]",
            env: {es6: true},
            errors: ["Unexpected a spread operator."],
        },
        {
            code: "foo(...a, ...[x, y, x])",
            output: "foo(...a, x, y, x)",
            env: {es6: true},
            errors: ["Unexpected a spread operator."],
        },
        {
            code: "let [a, ...[b, c, ...d]] = obj",
            output: "let [a, b, c, ...d] = obj",
            env: {es6: true},
            errors: ["Unexpected a rest operator."],
        },

        // Acorn cannot parse this
        // {code: "function foo(a, ...[b, c, ...d]) {}", env: {es6: true}, errors: ["Unexpected a rest operator."]},
    ],
})
