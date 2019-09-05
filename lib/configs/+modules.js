/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    parserOptions: {
        ecmaFeatures: { globalReturn: false },
        sourceType: "module",
    },
    globals: {
        __dirname: "off",
        __filename: "off",
        exports: "off",
        module: "off",
        require: "off",
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
        "@mysticatea/node/no-unsupported-features/es-syntax": [
            "error",
            { ignores: ["modules", "dynamicImport"] },
        ],
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx", "*.vue"],
            rules: {
                "@mysticatea/node/no-unsupported-features/es-syntax": "off",
            },
        },
    ],
}
