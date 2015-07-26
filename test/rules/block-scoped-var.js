/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 */
import {linter as eslint, ESLintTester} from "eslint";

(new ESLintTester(eslint)).addRuleTest("src/rules/block-scoped-var", {
    valid: [
        {code: "{ var a; a; } { var a; a; }"},
        {code: "{ var a; a; } { { var a; a; } { var a; { a; } } }"},
        {code: "if (true) { var a; a; } else if (true) { var a; a; } else { var a; a; }"},
        {code: "while (true) { var a; a; } do { var a; a; } while (true);"},
        {code: "for (var a = 0; a; a) { a; var b; b; } for (var a in []) { a; var b; b; } for (var a of []) { a; var b; b; }", ecmaFeatures: {forOf: true}},
        {code: "switch (0) { case 0: var a; a; case 1: a; default: a; } { var a; a; }"},
        {code: "{ var {x: [a = 0]} = {x: [1]}; a; } { var a; ({x: [a = 0]}) = {x: [1]}; }", ecmaFeatures: {destructuring: true}},

        // below should be warned by no-shadow rule.
        // this rule ignores those merely.
        {code: "var a; function foo() { var a; }"},
        {code: "var a; function foo(a) { }"},
        {code: "function a() { var a; }"},
        {code: "(function a() { var a; })();"},
        {code: "class a { foo() { var a; } }", ecmaFeatures: {classes: true}},
        {code: "(class a { foo() { var a; } })();", ecmaFeatures: {classes: true}}
    ],
    invalid: [
        {code: "{ var a; } a;", errors: [{type: "Identifier", message: "\"a\" is not defined."}]},
        {code: "a; { var a; }", errors: [{type: "Identifier", message: "\"a\" is not defined."}]},
        {code: "for (var a; a; a) { } a;", errors: [{type: "Identifier", message: "\"a\" is not defined."}]},
        {code: "a; for (var a; a; a) { }", errors: [{type: "Identifier", message: "\"a\" is not defined."}]},
        {code: "{ var a; var a; }", errors: [{type: "Identifier", message: "\"a\" is already defined."}]},
        {code: "for (var a; a; a) { var a; }", errors: [{type: "Identifier", message: "\"a\" is already defined."}]},
        {code: "{ var a; function a() {} }", errors: [{type: "Identifier", message: "\"a\" is already defined."}]},
        {code: "function foo(a) { var a; } var a;", errors: [{type: "Identifier", message: "\"a\" is already defined."}]},
        {code: "import a from \"a\"; var a;", ecmaFeatures: {modules: true}, errors: [{type: "Identifier", message: "\"a\" is already defined."}]},
        {code: "import a from \"a\"; import a from \"b/a\";", ecmaFeatures: {modules: true}, errors: [{type: "Identifier", message: "\"a\" is already defined."}]},
        {code: "{ var a; { var a; } }", errors: [{type: "Identifier", message: "\"a\" is already defined in the upper scope."}]},
        {code: "import a from \"a\"; { var a; }", ecmaFeatures: {modules: true}, errors: [{type: "Identifier", message: "\"a\" is already defined in the upper scope."}]}
    ]
});
