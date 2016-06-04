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
            category: "Stylistic Issues",
            recommended: false,
        },
        schema: [],
    },

    create: function(context) {
        return {
            SpreadElement: function(node) {
                if (node.argument.type === "ArrayExpression") {
                    context.report({
                        node: node,
                        message: "Unexpected a spread operator.",
                    })
                }
            },

            RestElement: function(node) {
                if (node.argument.type === "ArrayPattern") {
                    context.report({
                        node: node,
                        message: "Unexpected a rest operator.",
                    })
                }
            },
        }
    },
}
