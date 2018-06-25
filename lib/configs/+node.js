/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { merge } = require("../utils")
const modulesConfig = require("./+modules")

module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
    },
    globals: {
        Buffer: false,
        URL: false,
        URLSearchParams: false,
        clearImmediate: false,
        global: false,
        process: false,
        setImmediate: false,
    },
    rules: {
        "@mysticatea/node/no-deprecated-api": "error",
        "@mysticatea/node/no-unpublished-bin": "error",
        "@mysticatea/node/no-unsupported-features": "error",
        "@mysticatea/node/process-exit-as-throw": "error",
        "@mysticatea/node/shebang": "error",
    },
    overrides: [
        {
            files: ["*.js"],
            globals: {
                __dirname: false,
                __filename: false,
                exports: false,
                module: false,
                require: false,
            },
            parserOptions: {
                ecmaFeatures: { globalReturn: true },
            },
            rules: {
                "@mysticatea/node/exports-style": ["error", "module.exports"],
                "@mysticatea/node/no-extraneous-require": "error",
                "@mysticatea/node/no-missing-require": "error",
                "@mysticatea/node/no-unpublished-require": "error",
            },
        },
        merge({ files: ["*.mjs"] }, modulesConfig, {
            rules: {
                "@mysticatea/node/no-unsupported-features": [
                    "error",
                    { ignores: ["modules"] },
                ],
            },
            settings: {
                node: {
                    tryExtensions: [".mjs", ".js", ".json", ".node"],
                },
            },
        }),
        {
            files: ["*.ts", "*.vue"],
            rules: {
                "@mysticatea/node/no-unsupported-features": [
                    "error",
                    { ignores: ["syntax"] },
                ],
            },
        },
    ],
}
