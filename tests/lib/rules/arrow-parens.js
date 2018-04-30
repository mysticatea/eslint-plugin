/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/arrow-parens")
new RuleTester({ parserOptions: { ecmaVersion: 2015 } }).run(
    "arrow-parens",
    rule,
    {
        valid: [
            "var foo = (x) => x;",
            "var foo = (x => x);",
            "foo(x => x);",
            "foo(() => 0);",
            "foo((x, y) => x);",
            "foo((x = 0) => x);",
            "foo(([x]) => x);",
            "foo(({x}) => x);",
            "foo(x => x, (x) => x);",
            "foo(\n    (x) => x,\n    (x) => x\n);",

            {
                code: "var foo = async (x) => x;",
                parserOptions: { ecmaVersion: 2017 },
            },
            {
                code: "var foo = async (x => x);",
                parserOptions: { ecmaVersion: 2017 },
            },
            {
                code: "foo(async () => 0);",
                parserOptions: { ecmaVersion: 2017 },
            },
            {
                code: "foo(async (x, y) => x);",
                parserOptions: { ecmaVersion: 2017 },
            },
            {
                code: "foo(async (x = 0) => x);",
                parserOptions: { ecmaVersion: 2017 },
            },
            {
                code: "foo(async ([x]) => x);",
                parserOptions: { ecmaVersion: 2017 },
            },
            {
                code: "foo(async ({x}) => x);",
                parserOptions: { ecmaVersion: 2017 },
            },
            {
                code: "foo(x => x, async (x) => x);",
                parserOptions: { ecmaVersion: 2017 },
            },
            {
                code: "foo(\n    async (x) => x,\n    async (x) => x\n);",
                parserOptions: { ecmaVersion: 2017 },
            },
        ],
        invalid: [
            {
                code: "var foo = x => x;",
                output: "var foo = (x) => x;",
                errors: [
                    {
                        column: 11,
                        message:
                            "Expected to enclose this argument with parentheses.",
                    },
                ],
            },
            {
                code: "foo(x => x, x => x);",
                output: "foo(x => x, (x) => x);",
                errors: [
                    {
                        column: 13,
                        message:
                            "Expected to enclose this argument with parentheses.",
                    },
                ],
            },
            {
                code: "foo(\n    x => x,\n    x => x\n);",
                output: "foo(\n    (x) => x,\n    (x) => x\n);",
                errors: [
                    {
                        line: 2,
                        message:
                            "Expected to enclose this argument with parentheses.",
                    },
                    {
                        line: 3,
                        message:
                            "Expected to enclose this argument with parentheses.",
                    },
                ],
            },
            {
                code: "foo((x) => x);",
                output: "foo(x => x);",
                errors: [
                    {
                        message:
                            "Unexpected parentheses enclosing this argument.",
                    },
                ],
            },

            {
                code: "var foo = async x => x;",
                output: "var foo = async (x) => x;",
                parserOptions: { ecmaVersion: 2017 },
                errors: [
                    {
                        column: 11,
                        message:
                            "Expected to enclose this argument with parentheses.",
                    },
                ],
            },
            {
                code: "foo(async x => x, async x => x);",
                output: "foo(async (x) => x, async (x) => x);",
                parserOptions: { ecmaVersion: 2017 },
                errors: [
                    {
                        column: 5,
                        message:
                            "Expected to enclose this argument with parentheses.",
                    },
                    {
                        column: 19,
                        message:
                            "Expected to enclose this argument with parentheses.",
                    },
                ],
            },
            {
                code: "foo(\n    async x => x,\n    async x => x\n);",
                output: "foo(\n    async (x) => x,\n    async (x) => x\n);",
                parserOptions: { ecmaVersion: 2017 },
                errors: [
                    {
                        line: 2,
                        message:
                            "Expected to enclose this argument with parentheses.",
                    },
                    {
                        line: 3,
                        message:
                            "Expected to enclose this argument with parentheses.",
                    },
                ],
            },
        ],
    }
)
