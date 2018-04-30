/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const rules = require("eslint-plugin-eslint-comments").rules

module.exports = Object.keys(rules).reduce((obj, ruleId) => {
    obj[`eslint-comments/${ruleId}`] = rules[ruleId]
    return obj
}, {})
