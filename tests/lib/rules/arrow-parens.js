/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

var RuleTester = require("eslint").RuleTester
var rule = require("../../../lib/rules/arrow-parens");

(new RuleTester()).run("arrow-parens", rule, {
    valid: [
        {code: "var foo = (x) => x;", env: {es6: true}},
        {code: "var foo = (x => x);", env: {es6: true}},
        {code: "foo(x => x);", env: {es6: true}},
        {code: "foo(() => 0);", env: {es6: true}},
        {code: "foo((x, y) => x);", env: {es6: true}},
        {code: "foo((x = 0) => x);", env: {es6: true}},
        {code: "foo(([x]) => x);", env: {es6: true}},
        {code: "foo(({x}) => x);", env: {es6: true}},
        {code: "foo(x => x, (x) => x);", env: {es6: true}},
        {code: "foo(\n    (x) => x,\n    (x) => x\n);", env: {es6: true}},
    ],
    invalid: [
        {
            code: "var foo = x => x;",
            env: {es6: true},
            errors: [{type: "ArrowFunctionExpression", message: "enclose the argument with parens."}],
        },
        {
            code: "foo(x => x, x => x);",
            env: {es6: true},
            errors: [{type: "ArrowFunctionExpression", message: "enclose the argument with parens."}],
        },
        {
            code: "foo(\n    x => x,\n    x => x\n);",
            env: {es6: true},
            errors: [
                {type: "ArrowFunctionExpression", message: "enclose the argument with parens."},
                {type: "ArrowFunctionExpression", message: "enclose the argument with parens."},
            ],
        },
        {
            code: "foo((x) => x);",
            env: {es6: true},
            errors: [{type: "ArrowFunctionExpression", message: "remove redundant parens of the argument list."}],
        },
    ],
})
