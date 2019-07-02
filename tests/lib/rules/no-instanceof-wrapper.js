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
const rule = require("../../../lib/rules/no-instanceof-wrapper")

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const tester = new RuleTester()

tester.run("no-instanceof-wrapper", rule, {
    valid: [
        'typeof x === "boolean"',
        'typeof x === "number"',
        'typeof x === "string"',
        'typeof x === "object"',
        'typeof x === "function"',
        { code: 'typeof x === "symbol"', env: { es6: true } },
        "function foo(Boolean) { x instanceof Boolean }",
        "function foo(Number) { x instanceof Number }",
        "function foo(String) { x instanceof String }",
        "function foo(Object) { x instanceof Object }",
        "function foo(Function) { x instanceof Function }",
        {
            code: "function foo(Symbol) { x instanceof Symbol }",
            env: { es6: true },
        },
        "Boolean",
    ],
    invalid: [
        {
            code: "x instanceof Boolean",
            output: 'typeof x === "boolean"',
            errors: [
                "Unexpected 'instanceof' operator. Use 'typeof x === \"boolean\"' instead.",
            ],
        },
        {
            code: "x instanceof Number",
            output: 'typeof x === "number"',
            errors: [
                "Unexpected 'instanceof' operator. Use 'typeof x === \"number\"' instead.",
            ],
        },
        {
            code: "x instanceof String",
            output: 'typeof x === "string"',
            errors: [
                "Unexpected 'instanceof' operator. Use 'typeof x === \"string\"' instead.",
            ],
        },
        {
            code: "x instanceof Object",
            output: 'typeof x === "object"',
            errors: [
                "Unexpected 'instanceof' operator. Use 'typeof x === \"object\"' instead.",
            ],
        },
        {
            code: "x instanceof Function",
            output: 'typeof x === "function"',
            errors: [
                "Unexpected 'instanceof' operator. Use 'typeof x === \"function\"' instead.",
            ],
        },
        {
            code: "x instanceof Symbol",
            output: 'typeof x === "symbol"',
            env: { es6: true },
            errors: [
                "Unexpected 'instanceof' operator. Use 'typeof x === \"symbol\"' instead.",
            ],
        },
    ],
})
