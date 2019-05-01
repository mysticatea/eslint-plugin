/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

// This import requires `typescript` package. The MODULE_NOT_FOUND error should
// be ignored if people want to lint only JS.
let rules = null
try {
    rules = require("@typescript-eslint/eslint-plugin").rules
} catch (_error) {
    rules = {}
}

module.exports = Object.keys(rules).reduce((obj, ruleId) => {
    obj[`ts/${ruleId}`] = rules[ruleId]
    return obj
}, {})
