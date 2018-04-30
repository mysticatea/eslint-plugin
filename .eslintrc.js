/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const { version } = require("./package.json")
const selfPath = __dirname
const modulePath = path.resolve(
    __dirname,
    "node_modules/eslint-plugin-mysticatea"
)

// Make symlink to use itself.
if (!fs.existsSync(modulePath)) {
    fs.symlinkSync(selfPath, modulePath, "junction")
}

module.exports = {
    extends: ["plugin:mysticatea/es2015", "plugin:mysticatea/+eslint-plugin"],
    rules: {
        "mysticatea/eslint-plugin/require-meta-docs-url": [
            "error",
            {
                pattern: `https://github.com/mysticatea/eslint-plugin/blob/v${version}/docs/rules/{{name}}.md`,
            },
        ],
    },
}
