/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a given token is `(`.
 * @param {Token} token - A token to check.
 * @returns {boolean} `true` when the token is `(`.
 */
function isOpenParen(token) {
    return token.type === "Punctuator" && token.value === "(";
}

/**
 * Checks whether or not given two tokens are at a same line.
 * @param {Token} a - A left token.
 * @param {Token} b - A right token.
 * @returns {boolean} `true` when the tokens are at a same line.
 */
function isSameLine(a, b) {
    return a.loc.end.line === b.loc.start.line;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export default function rule(context) {
    return {
        ArrowFunctionExpression(node) {
            const first = context.getFirstToken(node);
            const before = context.getTokenBefore(first);

            if (isOpenParen(first)) {
                if (isOpenParen(before) && isSameLine(before, first)) {
                    context.report(
                        node,
                        "remove redundant parens of the argument list.");
                }
            }
            else {
                if (!isOpenParen(before) || !isSameLine(before, first)) {
                    context.report(
                        node,
                        "enclose the argument with parens.");
                }
            }
        }
    };
}

rule.schema = [];
