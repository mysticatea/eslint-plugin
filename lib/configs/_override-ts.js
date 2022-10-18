/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: [require.resolve("./+modules.js")],
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
                "@mysticatea/ts/ban-ts-comment": "error",
                "@mysticatea/ts/ban-tslint-comment": "error",
                "@mysticatea/ts/class-literal-property-style": "error",
                "@mysticatea/ts/comma-dangle": "error",
                "@mysticatea/ts/comma-spacing": "error",
                "@mysticatea/ts/consistent-indexed-object-style": "error",
                "@mysticatea/ts/consistent-type-assertions": "error",
                "@mysticatea/ts/consistent-type-imports": "error",
                "@mysticatea/ts/default-param-last": "error",
                "@mysticatea/ts/dot-notation": "error",
                "@mysticatea/ts/explicit-member-accessibility": "error",
                "@mysticatea/ts/explicit-module-boundary-types": "error",
                "@mysticatea/ts/init-declarations": "error",
                "@mysticatea/ts/keyword-spacing": "error",
                "@mysticatea/ts/lines-between-class-members": "error",
                "@mysticatea/ts/method-signature-style": "error",
                "@mysticatea/ts/naming-convention": "error",
                "@mysticatea/ts/no-array-constructor": "error",
                "@mysticatea/ts/no-base-to-string": "error",
                "@mysticatea/ts/no-confusing-non-null-assertion": "error",
                "@mysticatea/ts/no-confusing-void-expression": "error",
                "@mysticatea/ts/no-dupe-class-members": "error",
                "@mysticatea/ts/no-duplicate-imports": "error",
                "@mysticatea/ts/no-dynamic-delete": "error",
                "@mysticatea/ts/no-empty-interface": "error",
                "@mysticatea/ts/no-extra-non-null-assertion": "error",
                "@mysticatea/ts/no-extra-semi": "error",
                "@mysticatea/ts/no-extraneous-class": "error",
                "@mysticatea/ts/no-floating-promises": "error",
                "@mysticatea/ts/no-for-in-array": "error",
                "@mysticatea/ts/no-implicit-any-catch": "error",
                "@mysticatea/ts/no-implied-eval": "error",
                "@mysticatea/ts/no-inferrable-types": "error",
                "@mysticatea/ts/no-invalid-this": "error",
                "@mysticatea/ts/no-invalid-void-type": "error",
                "@mysticatea/ts/no-loss-of-precision": "error",
                "@mysticatea/ts/no-loop-func": "error",
                "@mysticatea/ts/no-meaningless-void-operator": "error",
                "@mysticatea/ts/no-misused-new": "error",
                "@mysticatea/ts/no-misused-promises": "error",
                "@mysticatea/ts/no-non-null-asserted-nullish-coalescing":
                    "error",
                "@mysticatea/ts/no-non-null-asserted-optional-chain": "error",
                "@mysticatea/ts/no-parameter-properties": "error",
                "@mysticatea/ts/no-redeclare": "error",
                "@mysticatea/ts/no-require-imports": "error",
                "@mysticatea/ts/no-restricted-imports": "error",
                "@mysticatea/ts/no-shadow": "error",
                "@mysticatea/ts/no-this-alias": [
                    "error",
                    { allowDestructuring: true },
                ],
                "@mysticatea/ts/no-throw-literal": "error",
                "@mysticatea/ts/no-unnecessary-boolean-literal-compare":
                    "error",
                "@mysticatea/ts/no-unnecessary-qualifier": "error",
                "@mysticatea/ts/no-unnecessary-type-arguments": "error",
                "@mysticatea/ts/no-unnecessary-type-assertion": "error",
                "@mysticatea/ts/no-unnecessary-type-constraint": "error",
                "@mysticatea/ts/no-unsafe-argument": "error",
                "@mysticatea/ts/no-unsafe-assignment": "error",
                "@mysticatea/ts/no-unsafe-call": "error",
                "@mysticatea/ts/no-unsafe-member-access": "error",
                "@mysticatea/ts/no-unsafe-return": "error",
                "@mysticatea/ts/no-unused-expressions": "error",
                "@mysticatea/ts/no-var-requires": "error",
                "@mysticatea/ts/non-nullable-type-assertion-style": "error",
                "@mysticatea/ts/object-curly-spacing": "error",
                "@mysticatea/ts/padding-line-between-statements": "error",
                "@mysticatea/ts/prefer-as-const": "error",
                "@mysticatea/ts/prefer-enum-initializers": "error",
                // https://github.com/typescript-eslint/typescript-eslint/issues/454
                "@mysticatea/ts/prefer-function-type": "off",
                "@mysticatea/ts/prefer-includes": "error",
                "@mysticatea/ts/prefer-literal-enum-member": "error",
                "@mysticatea/ts/prefer-namespace-keyword": "error",
                "@mysticatea/ts/prefer-nullish-coalescing": "error",
                "@mysticatea/ts/prefer-optional-chain": "error",
                "@mysticatea/ts/prefer-readonly-parameter-types": "error",
                // https://github.com/typescript-eslint/typescript-eslint/issues/946
                "@mysticatea/ts/prefer-readonly": "off",
                "@mysticatea/ts/prefer-reduce-type-parameter": "off",
                "@mysticatea/ts/prefer-regexp-exec": "error",
                "@mysticatea/ts/prefer-return-this-type": "off",
                "@mysticatea/ts/prefer-string-starts-ends-with": "error",
                "@mysticatea/ts/prefer-ts-expect-error": "off",
                "@mysticatea/ts/restrict-plus-operands": "error",
                "@mysticatea/ts/require-array-sort-compare": "error",
                "@mysticatea/ts/restrict-template-expressions": "error",
                "@mysticatea/ts/return-await": "error",
                "@mysticatea/ts/sort-type-union-intersection-members": "error",
                "@mysticatea/ts/space-before-function-paren": "error",
                "@mysticatea/ts/space-infix-ops": "error",
                "@mysticatea/ts/switch-exhaustiveness-check": "error",
                "@mysticatea/ts/triple-slash-reference": "error",
                // なんか誤検知が多い...
                "@mysticatea/ts/unbound-method": [
                    "off",
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
                "no-empty-function": "off",
                "@mysticatea/ts/no-empty-function": "error",
                "no-useless-constructor": "off",
                "@mysticatea/ts/no-useless-constructor": "error",
                "require-await": "off",
                "@mysticatea/ts/require-await": "error",

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
                "@mysticatea/ts/brace-style": "off", // favor of Prettier.
                "@mysticatea/ts/consistent-type-definitions": "off",
                "@mysticatea/ts/explicit-function-return-type": "off", // I want but this is not so...
                "@mysticatea/ts/func-call-spacing": "off", // favor of Prettier.
                "@mysticatea/ts/indent": "off", // favor of Prettier.
                "@mysticatea/ts/member-delimiter-style": "off", // favor of Prettier.
                "@mysticatea/ts/member-ordering": "off",
                "@mysticatea/ts/no-explicit-any": "off",
                "@mysticatea/ts/no-extra-parens": "off", // favor of Prettier.
                "@mysticatea/ts/no-magic-numbers": "off",
                "@mysticatea/ts/no-namespace": "off", // I like the namespace for interfaces (type only things).
                "@mysticatea/ts/no-non-null-assertion": "off",
                "@mysticatea/ts/no-type-alias": "off",
                "@mysticatea/ts/no-unnecessary-condition": "off", // This was problematic for test code.
                "@mysticatea/ts/no-unused-vars": "off", // tsc verifies it.
                "@mysticatea/ts/no-use-before-define": "off", // tsc verifies it.
                "@mysticatea/ts/prefer-for-of": "off",
                "@mysticatea/ts/promise-function-async": "off",
                "@mysticatea/ts/quotes": "off", // favor of Prettier.
                "@mysticatea/ts/semi": "off", // favor of Prettier.
                "@mysticatea/ts/strict-boolean-expressions": "off",
                "@mysticatea/ts/type-annotation-spacing": "off", // favor of Prettier.
                "@mysticatea/ts/typedef": "off",
            },
        },
        {
            files: ["*.d.ts"],
            rules: {
                strict: "off",
            },
        },
    ],
}
