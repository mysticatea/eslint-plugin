/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const rules = require("eslint-plugin-eslint-plugin").rules

module.exports = Object.keys(rules).reduce((obj, ruleId) => {
    obj[`eslint-plugin/${ruleId}`] = rules[ruleId]
    return obj
}, {})
