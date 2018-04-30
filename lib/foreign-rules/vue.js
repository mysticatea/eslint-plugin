/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const rules = require("eslint-plugin-vue").rules

module.exports = Object.keys(rules).reduce((obj, ruleId) => {
    obj[`vue/${ruleId}`] = rules[ruleId]
    return obj
}, {})
