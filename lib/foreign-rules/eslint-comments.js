/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { rules, utils } = require("eslint-plugin-eslint-comments")

utils.patch("@mysticatea/eslint-comments/no-unused-disable")

module.exports = Object.keys(rules).reduce((obj, ruleId) => {
    obj[`eslint-comments/${ruleId}`] = rules[ruleId]
    return obj
}, {})
