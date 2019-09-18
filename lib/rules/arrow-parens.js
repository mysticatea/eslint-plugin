/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

/**
 * Checks whether or not a given token is `(`.
 * @param {Token} token - A token to check.
 * @returns {boolean} `true` when the token is `(`.
 */
function isOpenParen(token) {
    return token.type === "Punctuator" && token.value === "("
}

/**
 * Checks whether or not given two tokens are at a same line.
 * @param {Token} a - A left token.
 * @param {Token} b - A right token.
 * @returns {boolean} `true` when the tokens are at a same line.
 */
function isSameLine(a, b) {
    return a.loc.end.line === b.loc.start.line
}

module.exports = {
    meta: {
        docs: {
            description: "enforce the parentheses style of arrow functions.",
            category: "Stylistic Issues",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin/blob/v12.0.0/docs/rules/arrow-parens.md",
        },
        fixable: "code",
        schema: [],
        type: "suggestion",
    },
    create(context) {
        return {
            ArrowFunctionExpression(node) {
                const first = context
                    .getSourceCode()
                    .getFirstToken(node, node.async ? 1 : 0)
                const before = context.getSourceCode().getTokenBefore(first)

                if (isOpenParen(first)) {
                    if (
                        node.params.length === 1 &&
                        node.params[0].type === "Identifier" &&
                        isOpenParen(before) &&
                        isSameLine(before, first)
                    ) {
                        context.report({
                            node,
                            message:
                                "Unexpected parentheses enclosing this argument.",
                            fix(fixer) {
                                const id = node.params[0]
                                const begin = first.range[0]
                                const end = context
                                    .getSourceCode()
                                    .getTokenAfter(id).range[1]

                                return fixer.replaceTextRange(
                                    [begin, end],
                                    id.name
                                )
                            },
                        })
                    }
                } else if (!isOpenParen(before) || !isSameLine(before, first)) {
                    context.report({
                        node,
                        message:
                            "Expected to enclose this argument with parentheses.",
                        fix(fixer) {
                            const id = node.params[0]

                            return fixer.replaceText(id, `(${id.name})`)
                        },
                    })
                }
            },
        }
    },
}
