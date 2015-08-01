/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 */
import {RuleTester} from "eslint";
import rule from "../../src/rules/arrow-parens";

(new RuleTester()).run("arrow-parens", rule, {
    valid: [
        {code: "var foo = (x) => x;", ecmaFeatures: {arrowFunctions: true}},
        {code: "var foo = (x => x);", ecmaFeatures: {arrowFunctions: true}},
        {code: "foo(x => x);", ecmaFeatures: {arrowFunctions: true}},
        {code: "foo(() => 0);", ecmaFeatures: {arrowFunctions: true}},
        {code: "foo((x, y) => x);", ecmaFeatures: {arrowFunctions: true}},
        {code: "foo((x = 0) => x);", ecmaFeatures: {arrowFunctions: true, defaultParams: true}},
        {code: "foo(([x]) => x);", ecmaFeatures: {arrowFunctions: true, destructuring: true}},
        {code: "foo(({x}) => x);", ecmaFeatures: {arrowFunctions: true, destructuring: true}},
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
