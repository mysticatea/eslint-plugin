/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { merge } = require("../utils")
const browserConfig = require("./+browser")
const modulesConfig = require("./+modules")

module.exports = {
    overrides: [
        merge({ files: ["*.vue"] }, browserConfig, modulesConfig, {
            parser: require.resolve("vue-eslint-parser"),
            rules: {
                // Enabled rules
                "mysticatea/vue/max-attributes-per-line": [
                    "error",
                    {
                        singleline: 3,
                        multiline: {
                            max: 1,
                            allowFirstLine: false,
                        },
                    },
                ],
                "mysticatea/vue/comment-directive": "error",
                "mysticatea/vue/jsx-uses-vars": "error",
                "mysticatea/vue/no-async-in-computed-properties": "error",
                "mysticatea/vue/no-dupe-keys": "error",
                "mysticatea/vue/no-duplicate-attributes": "error",
                "mysticatea/vue/no-parsing-error": "error",
                "mysticatea/vue/no-reserved-keys": "error",
                "mysticatea/vue/no-shared-component-data": "error",
                "mysticatea/vue/no-side-effects-in-computed-properties":
                    "error",
                "mysticatea/vue/no-template-key": "error",
                "mysticatea/vue/no-textarea-mustache": "error",
                "mysticatea/vue/no-unused-vars": "error",
                "mysticatea/vue/require-component-is": "error",
                "mysticatea/vue/require-render-return": "error",
                "mysticatea/vue/require-v-for-key": "error",
                "mysticatea/vue/require-valid-default-prop": "error",
                "mysticatea/vue/return-in-computed-property": "error",
                "mysticatea/vue/valid-template-root": "error",
                "mysticatea/vue/valid-v-bind": "error",
                "mysticatea/vue/valid-v-cloak": "error",
                "mysticatea/vue/valid-v-else-if": "error",
                "mysticatea/vue/valid-v-else": "error",
                "mysticatea/vue/valid-v-for": "error",
                "mysticatea/vue/valid-v-html": "error",
                "mysticatea/vue/valid-v-if": "error",
                "mysticatea/vue/valid-v-model": "error",
                "mysticatea/vue/valid-v-on": "error",
                "mysticatea/vue/valid-v-once": "error",
                "mysticatea/vue/valid-v-pre": "error",
                "mysticatea/vue/valid-v-show": "error",
                "mysticatea/vue/valid-v-text": "error",
                "mysticatea/vue/attribute-hyphenation": "error",
                "mysticatea/vue/html-end-tags": "error",
                "mysticatea/vue/html-indent": ["error", 4],
                "mysticatea/vue/html-self-closing": "error",
                "mysticatea/vue/mustache-interpolation-spacing": "error",
                "mysticatea/vue/name-property-casing": "error",
                "mysticatea/vue/no-multi-spaces": "error",
                "mysticatea/vue/require-default-prop": "error",
                "mysticatea/vue/require-prop-types": "error",
                "mysticatea/vue/v-bind-style": "error",
                "mysticatea/vue/v-on-style": "error",
                "mysticatea/vue/attributes-order": "error",
                "mysticatea/vue/html-quotes": "error",
                "mysticatea/vue/no-confusing-v-for-v-if": "error",
                "mysticatea/vue/order-in-components": "error",
                "mysticatea/vue/this-in-template": "error",
                "mysticatea/vue/html-closing-bracket-newline": [
                    "error",
                    {
                        singleline: "never",
                        multiline: "always",
                    },
                ],
                "mysticatea/vue/html-closing-bracket-spacing": "error",
                "mysticatea/vue/prop-name-casing": "error",

                // Disabled rules
                "mysticatea/vue/script-indent": "off",
            },
            settings: {
                node: {
                    tryExtensions: [
                        ".vue",
                        ".ts",
                        ".mjs",
                        ".js",
                        ".json",
                        ".node",
                    ],
                },
            },
        }),
    ],
}