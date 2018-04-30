/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { es5, es2015 } = require("globals")
const { excludes } = require("../utils")

module.exports = {
    extends: ["plugin:mysticatea/es5"],
    parserOptions: {
        ecmaVersion: 2015,
    },
    globals: excludes(es2015, es5),
    rules: {
        // Enabled rules as errors
        "arrow-body-style": "error",
        "constructor-super": "error",
        "no-class-assign": "error",
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": ["error", { includeExports: true }],
        "no-new-symbol": "error",
        "no-redeclare": ["error", { builtinGlobals: true }],
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": [
            "error",
            "always",
            { avoidExplicitReturnArrows: true },
        ],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-numeric-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "require-yield": "error",
        "symbol-description": "error",

        // Enabled rules as warnings
        "class-methods-use-this": "warn",

        // Disabled rules as favor of Prettier.
        "arrow-parens": "off",
        "arrow-spacing": "off",
        "generator-star-spacing": "off",
        "no-confusing-arrow": "off",
        "rest-spread-spacing": "off",
        "template-curly-spacing": "off",
        "yield-star-spacing": "off",

        // Desabled rules
        "no-inner-declarations": "off",
        "no-restricted-imports": "off",
        "prefer-destructuring": "off",
        "sort-imports": "off",

        //
        // Plugins
        //

        // my own
        "mysticatea/block-scoped-var": "off",
        "mysticatea/no-this-in-static": "error",
        "mysticatea/no-useless-rest-spread": "error",
        "mysticatea/prefer-for-of": "error",
    },
}
