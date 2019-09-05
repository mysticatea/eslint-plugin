/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    parserOptions: {
        ecmaFeatures: { globalReturn: true },
        ecmaVersion: 2020,
        sourceType: "script",
    },
    globals: {
        // ECMAScript (experimental)
        globalThis: "readonly",
        // ECMA-404
        Intl: "readonly",

        // Web Standard
        TextDecoder: "readonly",
        TextEncoder: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        WebAssembly: "readonly",
        clearInterval: "readonly",
        clearTimeout: "readonly",
        console: "readonly",
        queueMicrotask: "readonly",
        setInterval: "readonly",
        setTimeout: "readonly",

        // Node.js
        Buffer: "readonly",
        GLOBAL: "readonly",
        clearImmediate: "readonly",
        global: "readonly",
        process: "readonly",
        root: "readonly",
        setImmediate: "readonly",

        // CommonJS
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
        module: "readonly",
        require: "readonly",
    },
    rules: {
        "@mysticatea/node/exports-style": ["error", "module.exports"],
        "@mysticatea/node/file-extension-in-import": [
            "error",
            "always",
            { ".js": "never", ".ts": "never", ".tsx": "never" },
        ],
        "@mysticatea/node/no-callback-literal": "off",
        "@mysticatea/node/no-deprecated-api": "error",
        "@mysticatea/node/no-exports-assign": "error",
        "@mysticatea/node/no-extraneous-import": "error",
        "@mysticatea/node/no-extraneous-require": "error",
        "@mysticatea/node/no-missing-import": "error",
        "@mysticatea/node/no-missing-require": "error",
        "@mysticatea/node/no-unpublished-bin": "error",
        "@mysticatea/node/no-unpublished-import": "error",
        "@mysticatea/node/no-unpublished-require": "error",
        "@mysticatea/node/no-unsupported-features/es-builtins": "error",
        "@mysticatea/node/no-unsupported-features/es-syntax": "error",
        "@mysticatea/node/no-unsupported-features/node-builtins": "error",
        "@mysticatea/node/prefer-global/buffer": "error",
        "@mysticatea/node/prefer-global/console": "error",
        "@mysticatea/node/prefer-global/process": "error",
        "@mysticatea/node/prefer-global/text-decoder": "off",
        "@mysticatea/node/prefer-global/text-encoder": "off",
        "@mysticatea/node/prefer-global/url-search-params": "off",
        "@mysticatea/node/prefer-global/url": "off",
        "@mysticatea/node/prefer-promises/dns": "off",
        "@mysticatea/node/prefer-promises/fs": "off",
        "@mysticatea/node/process-exit-as-throw": "error",
        "@mysticatea/node/shebang": "error",
    },
    settings: {
        node: {
            tryExtensions: [
                ".vue",
                ".tsx",
                ".ts",
                ".mjs",
                ".cjs",
                ".js",
                ".json",
                ".node",
            ],
        },
    },
    overrides: [
        {
            files: ["*.mjs", "*.ts", "*.tsx", "*.vue"],
            extends: [require.resolve("./+modules.js")],
        },
    ],
}
