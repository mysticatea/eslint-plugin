/**
 * @fileoverview Rule to disallow unnecessary spread operators.
 * @author Toru Nagashima
 */
"use strict"

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether the given token is a comma.
 *
 * @param {Token} token - The token to check.
 * @returns {boolean} `true` if the token is a comma.
 */
function isCommaToken(token) {
    return token.type === "Punctuator" && token.value === ","
}

/**
 * Gets the last token of the given node's elements.
 * This skips trailing commas.
 *
 * @param {SourceCode} sourceCode - The source code object to get tokens.
 * @param {ASTNode} node - The node to get. This is one of ArrayExpression,
 * ArrayPattern, ObjectExpression, and ObjectPattern.
 * @returns {Token} The last element token.
 */
function getLastElementToken(sourceCode, node) {
    const token = sourceCode.getLastToken(node, 1)

    if (isCommaToken(token)) {
        return sourceCode.getTokenBefore(token)
    }
    return token
}

/**
 * Defines a fixer function.
 *
 * @param {SourceCode} sourceCode - The source code object to get tokens.
 * @param {ASTNode} node - A node to fix.
 * @returns {function} A fixer function.
 */
function defineFixer(sourceCode, node) {
    return (fixer) => {
        const child = node.argument

        // Remove this element if it's empty.
        if ((child.elements || child.properties).length === 0) {
            const next = sourceCode.getTokenAfter(node)
            if (isCommaToken(next)) {
                return fixer.removeRange([node.range[0], next.range[1]])
            }

            const prev = sourceCode.getTokenBefore(node)
            if (isCommaToken(prev)) {
                return fixer.removeRange([prev.range[0], node.range[1]])
            }

            return fixer.remove(node)
        }

        // Unwrap.
        const first = sourceCode.getFirstToken(child, 1)
        const last = getLastElementToken(sourceCode, child)
        const replaceText = sourceCode.text.slice(first.range[0], last.range[1])
        return fixer.replaceText(node, replaceText)
    }
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Disallow unnecessary spread operators.",
            category: "Best Practices",
            recommended: false,
        },
        fixable: "code",
        schema: [],
    },

    create(context) {
        const sourceCode = context.getSourceCode()

        return {
            SpreadElement(node) {
                if (node.argument.type === "ArrayExpression") {
                    context.report({
                        node,
                        message: "Unexpected a spread operator.",
                        fix: defineFixer(sourceCode, node),
                    })
                }
            },

            RestElement(node) {
                if (node.argument.type === "ArrayPattern") {
                    context.report({
                        node,
                        message: "Unexpected a rest operator.",
                        fix: defineFixer(sourceCode, node),
                    })
                }
            },

            SpreadProperty(node) {
                if (node.argument.type === "ObjectExpression") {
                    context.report({
                        node,
                        message: "Unexpected a spread property.",
                        fix: defineFixer(sourceCode, node),
                    })
                }
            },

            RestProperty(node) {
                if (node.argument.type === "ObjectPattern") {
                    context.report({
                        node,
                        message: "Unexpected a rest property.",
                        fix: defineFixer(sourceCode, node),
                    })
                }
            },

            ExperimentalSpreadProperty(node) {
                if (node.argument.type === "ObjectExpression") {
                    context.report({
                        node,
                        message: "Unexpected a spread property.",
                        fix: defineFixer(sourceCode, node),
                    })
                }
            },

            ExperimentalRestProperty(node) {
                if (node.argument.type === "ObjectPattern") {
                    context.report({
                        node,
                        message: "Unexpected a rest property.",
                        fix: defineFixer(sourceCode, node),
                    })
                }
            },
        }
    },
}
