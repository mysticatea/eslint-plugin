/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 */
import {linter as eslint, ESLintTester} from "eslint";

(new ESLintTester(eslint)).addRuleTest("src/rules/arrow-parens", {
    valid: [
        {code: "var foo = (x) => x;", ecmaFeatures: {arrowFunctions: true}},
        {code: "var foo = (x => x);", ecmaFeatures: {arrowFunctions: true}},
        {code: "foo(x => x);", ecmaFeatures: {arrowFunctions: true}},
        {code: "foo(x => x, (x) => x);", ecmaFeatures: {arrowFunctions: true}},
        {code: "foo(\n    (x) => x,\n    (x) => x\n);", ecmaFeatures: {arrowFunctions: true}}
    ],
    invalid: [
        {
            code: "var foo = x => x;",
            ecmaFeatures: {arrowFunctions: true},
            errors: [{type: "ArrowFunctionExpression", message: "enclose the argument with parens."}]
        },
        {
            code: "foo(x => x, x => x);",
            ecmaFeatures: {arrowFunctions: true},
            errors: [{type: "ArrowFunctionExpression", message: "enclose the argument with parens."}]
        },
        {
            code: "foo(\n    x => x,\n    x => x\n);",
            ecmaFeatures: {arrowFunctions: true},
            errors: [
                {type: "ArrowFunctionExpression", message: "enclose the argument with parens."},
                {type: "ArrowFunctionExpression", message: "enclose the argument with parens."}
            ]
        },
        {
            code: "foo((x) => x);",
            ecmaFeatures: {arrowFunctions: true},
            errors: [{type: "ArrowFunctionExpression", message: "remove redundant parens of the argument list."}]
        }
    ]
});
