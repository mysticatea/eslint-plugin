/**
 * @fileoverview Rule to disallow unnecessary spread operators.
 * @author Toru Nagashima
 */

"use strict"

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

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

    create: function(context) {
        var sourceCode = context.getSourceCode()

        /**
         * Defines a fixer function.
         *
         * @param {ASTNode} node - A node to fix.
         * @returns {function} A fixer function.
         */
        function defineFixer(node) {
            var args = sourceCode.getText(node.argument).slice(1, -1)

            return function(fixer) {
                return fixer.replaceText(node, args)
            }
        }

        return {
            SpreadElement: function(node) {
                if (node.argument.type === "ArrayExpression") {
                    context.report({
                        node: node,
                        message: "Unexpected a spread operator.",
                        fix: defineFixer(node),
                    })
                }
            },

            RestElement: function(node) {
                if (node.argument.type === "ArrayPattern") {
                    context.report({
                        node: node,
                        message: "Unexpected a rest operator.",
                        fix: defineFixer(node),
                    })
                }
            },
        }
    },
}
