/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    extends: ["plugin:@mysticatea/es2017"],
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        "prefer-object-spread": "error",
    },
}
