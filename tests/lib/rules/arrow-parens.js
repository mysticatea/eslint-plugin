/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/arrow-parens");

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
            output: "var foo = (x) => x;",
            env: {es6: true},
            errors: [
                {column: 11, message: "Expected to enclose this argument with parentheses."},
            ],
        },
        {
            code: "foo(x => x, x => x);",
            output: "foo(x => x, (x) => x);",
            env: {es6: true},
            errors: [
                {column: 13, message: "Expected to enclose this argument with parentheses."},
            ],
        },
        {
            code: "foo(\n    x => x,\n    x => x\n);",
            output: "foo(\n    (x) => x,\n    (x) => x\n);",
            env: {es6: true},
            errors: [
                {line: 2, message: "Expected to enclose this argument with parentheses."},
                {line: 3, message: "Expected to enclose this argument with parentheses."},
            ],
        },
        {
            code: "foo((x) => x);",
            output: "foo(x => x);",
            env: {es6: true},
            errors: [
                {message: "Unexpected parentheses enclosing this argument."},
            ],
        },
    ],
})
