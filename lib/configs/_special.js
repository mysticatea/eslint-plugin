/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { merge } = require("../utils")
const nodeConfig = require("./+node")

const jsConfig = merge({}, nodeConfig, nodeConfig.overrides[0])
delete jsConfig.overrides
jsConfig.files = ["**/scripts/**/*.js", ".eslintrc.js", "webpack.config.js"]

const mjsConfig = merge({}, nodeConfig, nodeConfig.overrides[1])
delete mjsConfig.overrides
mjsConfig.files = ["**/scripts/**/*.mjs", "rollup.config.js"]

module.exports = {
    overrides: [jsConfig, mjsConfig],
}
