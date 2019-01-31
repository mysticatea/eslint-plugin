/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const rules = require("@typescript-eslint/eslint-plugin").rules

module.exports = Object.keys(rules).reduce((obj, ruleId) => {
    obj[`ts/${ruleId}`] = rules[ruleId]
    return obj
}, {})
