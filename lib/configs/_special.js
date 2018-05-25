/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { merge } = require("../utils")
const nodeConfig = require("./+node")
const relaxConfig = {
    rules: { "no-console": "off", "no-process-env": "off" },
}

const jsConfig = merge({}, nodeConfig, nodeConfig.overrides[0], relaxConfig)
delete jsConfig.overrides
jsConfig.files = [
    "**/scripts/**/*.js",
    ".eslintrc.js",
    "webpack.config.js",
    "**/.vuepress/config.js",
    "*.webpack.config.js",
]

const mjsConfig = merge({}, nodeConfig, nodeConfig.overrides[1], relaxConfig)
delete mjsConfig.overrides
mjsConfig.files = [
    "**/scripts/**/*.mjs",
    "**/scripts/rollup-plugin/**/*.js",
    "rollup.config.js",
    "*.rollup.config.js",
]

module.exports = {
    overrides: [jsConfig, mjsConfig],
}
