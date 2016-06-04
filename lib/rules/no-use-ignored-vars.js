/**
 * @fileoverview Rule to disallow a use of ignored variables.
 * @author Toru Nagashima
 */

"use strict"

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

var IGNORE_PATTERN = /^_[a-zA-Z]+$/

/**
 * Checks whether a given variable is ignored or not.
 *
 * @param {escope.Variable} variable - A variable to check.
 * @returns {boolean} `true` if the variable is ignored.
 */
function isIgnoredPattern(variable) {
    return IGNORE_PATTERN.test(variable.name)
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Disallow a use of ignored variables.",
            category: "Stylistic Issues",
            recommended: false,
        },
        schema: [],
    },

    create: function(context) {
        /**
         * Reports a reference.
         *
         * @param {escope.Reference} reference - A reference to report.
         * @returns {void}
         */
        function report(reference) {
            var id = reference.identifier

            context.report({
                node: id,
                message:
                    "Unexpected a use of '{{name}}'. " +
                    "This name is matched to ignored pattern.",
                data: id,
            })
        }

        /**
         * Reports references of a given variable.
         *
         * @param {escope.Variable} variable - A variable to report.
         * @returns {void}
         */
        function reportReferences(variable) {
            variable.references.forEach(report)
        }

        return {
            "Program:exit": function() {
                var queue = [context.getScope()]
                var scope = null

                while ((scope = queue.pop()) != null) {
                    scope.variables
                        .filter(isIgnoredPattern)
                        .forEach(reportReferences)

                    Array.prototype.push.apply(queue, scope.childScopes)
                }
            },
        }
    },
}
