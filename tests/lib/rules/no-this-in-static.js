/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/no-this-in-static")

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const tester = new RuleTester({ parserOptions: { ecmaVersion: 6 } })

tester.run("no-this-in-static", rule, {
    valid: [
        "function foo() { this }",
        "() => { this }",
        "class A { constructor() { this } }",
        "class A { foo() { this } }",
        "class A { static foo() { function foo() { this } } }",
    ],
    invalid: [
        {
            code: "class A { static foo() { this } }",
            errors: ["Unexpected 'this'."],
        },
        {
            code: "class A { static foo() { () => { this } } }",
            errors: ["Unexpected 'this'."],
        },
        {
            code: "class A { static foo() { super.foo() } }",
            errors: ["Unexpected 'super'."],
        },
        {
            code: "class A { static foo() { () => { super.foo() } } }",
            errors: ["Unexpected 'super'."],
        },
    ],
})
