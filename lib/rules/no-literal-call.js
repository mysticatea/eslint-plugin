/**
 * @fileoverview Rule to disallow a call of a literal.
 * @author Toru Nagashima
 */
"use strict"

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

var LITERAL_TYPE = /^(?:(?:Array|Object)Expression|(?:Template)?Literal)$/
var LITERAL_AND_CLASS_TYPE = /^(?:(?:Array|Class|Object)Expression|(?:Template)?Literal)$/

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Disallow a call of a literal.",
            category: "Possible Errors",
            recommended: false,
        },
        schema: [],
    },

    create: function(context) {
        /**
         * Reports a given node if it's a literal.
         *
         * @param {ASTNode} callee - A callee node to report.
         * @param {RegExp} pattern - A pattern of literal types.
         * @returns {void}
         */
        function check(callee, pattern) {
            if (pattern.test(callee.type)) {
                context.report({
                    node: callee,
                    message: "This is not a function.",
                })
            }
        }

        return {
            CallExpression: function(node) {
                check(node.callee, LITERAL_AND_CLASS_TYPE)
            },

            NewExpression: function(node) {
                check(node.callee, LITERAL_TYPE)
            },

            TaggedTemplateExpression: function(node) {
                check(node.tag, LITERAL_AND_CLASS_TYPE)
            },
        }
    },
}
