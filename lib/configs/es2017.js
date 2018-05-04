/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { es2015, es2017 } = require("globals")
const { excludes } = require("../utils")

module.exports = {
    extends: ["plugin:mysticatea/es2016"],
    parserOptions: {
        ecmaVersion: 2017,
    },
    globals: excludes(es2017, es2015),
    rules: {
        "mysticatea/prettier": [
            "error",
            {
                tabWidth: 4,
                semi: false,
                trailingComma: "all",
            },
            {
                usePrettierrc: false,
            },
        ],
    },
}
