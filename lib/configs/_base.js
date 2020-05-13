/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    root: true,
    plugins: ["@mysticatea"],
    rules: {
        "@mysticatea/arrow-parens": "off",
        "@mysticatea/block-scoped-var": "error",
        "@mysticatea/no-instanceof-array": "error",
        "@mysticatea/no-instanceof-wrapper": "error",
        "@mysticatea/no-literal-call": "error",
        "@mysticatea/no-this-in-static": "off",
        "@mysticatea/no-use-ignored-vars": ["error", "^_(?:[^_].*)?$"],
        "@mysticatea/no-useless-rest-spread": "off",
        "@mysticatea/prefer-for-of": "off",
    },
}
