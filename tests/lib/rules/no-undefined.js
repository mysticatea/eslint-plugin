/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-undefined")
var RuleTester = require("eslint").RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

;(new RuleTester()).run("no-undefined", rule, {
    valid: [
        "if (a === undefined) {}",
    ],
    invalid: [
        {code: "var undefined", errors: ["Unexpected 'undefined'."]},
        {code: "function undefined() {}", errors: ["Unexpected 'undefined'."]},
        {code: "function foo() { var undefined }", errors: ["Unexpected 'undefined'."]},
        {code: "function foo(undefined) {}", errors: ["Unexpected 'undefined'."]},
    ],
})
