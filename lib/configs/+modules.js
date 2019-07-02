/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    parserOptions: {
        sourceType: "module",
    },
    rules: {
        "@mysticatea/node/no-extraneous-import": "error",
        "@mysticatea/node/file-extension-in-import": [
            "error",
            "always",
            { ".js": "never", ".ts": "never", ".tsx": "never" },
        ],
        "@mysticatea/node/no-missing-import": "error",
        "@mysticatea/node/no-unpublished-import": "error",
    },
}
