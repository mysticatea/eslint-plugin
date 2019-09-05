/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    extends: ["plugin:@mysticatea/es2019"],
    parserOptions: {
        ecmaVersion: 2020,
    },
    globals: {
        BigInt: "readonly",
        BigInt64Array: "readonly",
        BigUint64Array: "readonly",
    },
    rules: {},
}
