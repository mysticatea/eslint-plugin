/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const rules = require("eslint-plugin-node").rules

module.exports = Object.keys(rules).reduce((obj, ruleId) => {
    obj[`node/${ruleId}`] = rules[ruleId]
    return obj
}, {})
