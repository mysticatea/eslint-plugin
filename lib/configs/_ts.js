/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { merge } = require("../utils")
const moduleConfig = require("./+modules")

module.exports = {
    overrides: [
        merge({ files: ["*.ts", "*.tsx"] }, moduleConfig, {
            parser: require.resolve("@typescript-eslint/parser"),
            parserOptions: {
                loggerFn: false,
                project: "tsconfig.json",
            },
            rules: {
                // Enabled rules
                "@mysticatea/ts/adjacent-overload-signatures": "error",
                "@mysticatea/ts/array-type": "error",
                "@mysticatea/ts/await-thenable": "error",
                "@mysticatea/ts/ban-ts-ignore": "error",
                "@mysticatea/ts/class-name-casing": "error",
                "@mysticatea/ts/explicit-member-accessibility": "error",
                "@mysticatea/ts/interface-name-prefix": "error",
                "@mysticatea/ts/member-naming": "error",
                "@mysticatea/ts/no-angle-bracket-type-assertion": "error",
                "@mysticatea/ts/no-array-constructor": "error",
                "@mysticatea/ts/no-empty-interface": "error",
                "@mysticatea/ts/no-extraneous-class": "error",
                "@mysticatea/ts/no-floating-promises": "error",
                "@mysticatea/ts/no-for-in-array": "error",
                "@mysticatea/ts/no-inferrable-types": "error",
                "@mysticatea/ts/no-misused-new": "error",
                "@mysticatea/ts/no-object-literal-type-assertion": "error",
                "@mysticatea/ts/no-parameter-properties": "error",
                "@mysticatea/ts/no-require-imports": "error",
                "@mysticatea/ts/no-this-alias": [
                    "error",
                    { allowDestructuring: true },
                ],
                "@mysticatea/ts/no-triple-slash-reference": "error",
                "@mysticatea/ts/no-unnecessary-qualifier": "error",
                "@mysticatea/ts/no-unnecessary-type-assertion": "error",
                "@mysticatea/ts/no-var-requires": "error",
                // https://github.com/typescript-eslint/typescript-eslint/issues/454
                "@mysticatea/ts/prefer-function-type": "off",
                "@mysticatea/ts/prefer-includes": "error",
                "@mysticatea/ts/prefer-namespace-keyword": "error",
                "@mysticatea/ts/prefer-regexp-exec": "error",
                "@mysticatea/ts/prefer-string-starts-ends-with": "error",
                "@mysticatea/ts/restrict-plus-operands": "error",
                "@mysticatea/ts/require-array-sort-compare": "error",
                "@mysticatea/ts/unbound-method": [
                    "error",
                    { ignoreStatic: true },
                ],
                // https://github.com/typescript-eslint/typescript-eslint/issues/452
                "@mysticatea/ts/unified-signatures": "off",
                "@mysticatea/prettier": [
                    "error",
                    {
                        tabWidth: 4,
                        semi: false,
                        trailingComma: "all",
                        parser: "typescript",
                    },
                    {
                        usePrettierrc: false,
                    },
                ],

                // Replacements
                camelcase: "off",
                "@mysticatea/ts/camelcase": "error",
                "no-empty-function": "off",
                "@mysticatea/ts/no-empty-function": "error",
                "no-useless-constructor": "off",
                "@mysticatea/ts/no-useless-constructor": "error",

                // Disabled rules
                "func-style": "off",
                "init-declarations": "off",
                "lines-between-class-members": "off",
                "no-dupe-class-members": "off",
                "no-invalid-this": "off",
                "no-loop-func": "off",
                "no-redeclare": "off",
                "no-undef": "off",
                "no-unused-vars": "off",
                "no-use-before-define": "off",
                "one-var": "off",
                "@mysticatea/ts/ban-types": "off",
                "@mysticatea/ts/consistent-type-definitions": "off",
                "@mysticatea/ts/explicit-function-return-type": "off", // I want but this is not so...
                "@mysticatea/ts/func-call-spacing": "off", // favor of Prettier.
                "@mysticatea/ts/generic-type-naming": "off",
                "@mysticatea/ts/indent": "off", // favor of Prettier.
                "@mysticatea/ts/member-delimiter-style": "off", // favor of Prettier.
                "@mysticatea/ts/member-ordering": "off",
                "@mysticatea/ts/no-explicit-any": "off",
                "@mysticatea/ts/no-extra-parens": "off", // favor of Prettier.
                "@mysticatea/ts/no-magic-numbers": "off",
                "@mysticatea/ts/no-namespace": "off", // I like the namespace for interfaces (type only things).
                "@mysticatea/ts/no-non-null-assertion": "off",
                "@mysticatea/ts/no-type-alias": "off",
                "@mysticatea/ts/no-unused-vars": "off", // tsc verifies it.
                "@mysticatea/ts/no-use-before-define": "off", // tsc verifies it.
                "@mysticatea/ts/prefer-for-of": "off",
                "@mysticatea/ts/promise-function-async": "off",
                "@mysticatea/ts/semi": "off", // favor of Prettier.
                "@mysticatea/ts/type-annotation-spacing": "off", // favor of Prettier.
            },
            settings: {
                node: {
                    tryExtensions: [
                        ".ts",
                        ".tsx",
                        ".mjs",
                        ".js",
                        ".json",
                        ".node",
                    ],
                },
            },
        }),
        {
            files: ["*.d.ts"],
            rules: {
                strict: "off",
            },
        },
    ],
}
