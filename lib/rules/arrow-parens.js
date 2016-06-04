/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    return {
        ArrowFunctionExpression: function(node) {
            var first = context.getFirstToken(node)
            var before = context.getTokenBefore(first)

            if (isOpenParen(first)) {
                if (node.params.length === 1 &&
                    node.params[0].type === "Identifier" &&
                    isOpenParen(before) &&
                    isSameLine(before, first)
                ) {
                    context.report({
                        node: node,
                        message: "Unexpected parentheses enclosing this argument.",
                        fix: function(fixer) {
                            var id = node.params[0]
                            var begin = first.range[0]
                            var end = context.getTokenAfter(id).range[1]

                            return fixer.replaceTextRange([begin, end], id.name)
                        },
                    })
                }
            }
            else if (!isOpenParen(before) || !isSameLine(before, first)) {
                context.report({
                    node: node,
                    message: "Expected to enclose this argument with parentheses.",
                    fix: function(fixer) {
                        var id = node.params[0]

                        return fixer.replaceText(id, "(" + id.name + ")")
                    },
                })
            }
        },
    }
}

module.exports.schema = []
