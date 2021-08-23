/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/block-scoped-var")
new RuleTester().run("block-scoped-var", rule, {
    valid: [
        "{ var a; a; } { var a; a; }",
        "{ var a; a; } { { var a; a; } { var a; { a; } } }",
        "if (true) { var a; a; } else if (true) { var a; a; } else { var a; a; }",
        "while (true) { var a; a; } do { var a; a; } while (true);",
        {
            code: "for (var a = 0; a; a) { a; var b; b; } for (var a in []) { a; var b; b; } for (var a of []) { a; var b; b; }",
            env: { es6: true },
        },
        "switch (0) { case 0: var a; a; case 1: a; default: a; } { var a; a; }",
        "var a = {}; module.exports = a",

        // below should be warned by no-shadow rule.
        // this rule ignores those merely.
        "var a; function foo() { var a; }",
        "var a; function foo(a) { }",
        "function a() { var a; }",
        "(function a() { var a; })();",
        { code: "class a { foo() { var a; } }", env: { es6: true } },
        { code: "(class a { foo() { var a; } })();", env: { es6: true } },
    ],
    invalid: [
        {
            code: "{ var a; a; } a;",
            errors: [{ type: "Identifier", message: '"a" is not defined.' }],
        },
        {
            code: "a; { var a; a; }",
            errors: [{ type: "Identifier", message: '"a" is not defined.' }],
        },
        {
            code: "for (var a; a; a) { } a;",
            errors: [{ type: "Identifier", message: '"a" is not defined.' }],
        },
        {
            code: "a; for (var a; a; a) { }",
            errors: [{ type: "Identifier", message: '"a" is not defined.' }],
        },
        {
            code: "{ var a; var a; }",
            errors: [
                { type: "Identifier", message: '"a" is already defined.' },
            ],
        },
        {
            code: "for (var a; a; a) { var a; }",
            errors: [
                { type: "Identifier", message: '"a" is already defined.' },
            ],
        },
        {
            code: "function foo(a) { var a; } var a;",
            errors: [
                { type: "Identifier", message: '"a" is already defined.' },
            ],
        },
        {
            code: "{ var a; { var a; } }",
            errors: [
                {
                    type: "Identifier",
                    message: '"a" is already defined in the upper scope.',
                },
            ],
        },
        {
            code: "{ var a; } { var a; a; }",
            errors: [
                {
                    type: "Identifier",
                    message: '"a" is defined but never used.',
                    column: 7,
                },
            ],
        },
        {
            code: "{ var {x: [a = 0]} = {x: [1]}; a; } { var a; ({x: [a = 0]} = {x: [1]}); }",
            env: { es6: true },
            errors: [
                {
                    type: "Identifier",
                    message: '"a" is defined but never used.',
                    column: 43,
                },
            ],
        },
    ],
})
