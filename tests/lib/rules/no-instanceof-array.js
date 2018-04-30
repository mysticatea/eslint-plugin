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
const rule = require("../../../lib/rules/no-instanceof-array")

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const tester = new RuleTester()

tester.run("no-instanceof-array", rule, {
    valid: [
        "Array",
        "Array.isArray(x)",
        "function foo(Array) { x instanceof Array }",
    ],
    invalid: [
        {
            code: "x instanceof Array",
            output: "Array.isArray(x)",
            errors: [
                "Unexpected 'instanceof' operator. Use 'Array.isArray' instead.",
            ],
        },
    ],
})
