/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    extends: ["plugin:mysticatea/+node"],
    overrides: [
        {
            files: ["**/rules/**", "**/internal-rules/**"],
            rules: {
                // Enabled rules
                "mysticatea/eslint-plugin/consistent-output": "error",
                "mysticatea/eslint-plugin/fixer-return": "error",
                "mysticatea/eslint-plugin/no-deprecated-context-methods":
                    "error",
                "mysticatea/eslint-plugin/no-deprecated-report-api": "error",
                "mysticatea/eslint-plugin/no-identical-tests": "error",
                "mysticatea/eslint-plugin/no-missing-placeholders": "error",
                "mysticatea/eslint-plugin/no-unused-placeholders": "error",
                "mysticatea/eslint-plugin/no-useless-token-range": "error",
                "mysticatea/eslint-plugin/prefer-output-null": "error",
                "mysticatea/eslint-plugin/prefer-placeholders": "error",
                "mysticatea/eslint-plugin/prefer-replace-text": "error",
                "mysticatea/eslint-plugin/report-message-format": [
                    "error",
                    "[^a-z].*\\.$",
                ],
                "mysticatea/eslint-plugin/require-meta-docs-url": "error",
                "mysticatea/eslint-plugin/require-meta-fixable": "error",
                "mysticatea/eslint-plugin/test-case-property-ordering": "error",
                "mysticatea/eslint-plugin/test-case-shorthand-strings": "error",
            },
        },
    ],
}
