/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow the declarations of `undefined`",
            category: "Best Practices",
            recommended: false,
        },
        fixable: false,
        schema: [],
    },

    create: function(context) {
        /**
         * Checks whether the given variable has `undefined` as its name or not.
         *
         * @param {escope.Variable} variable - The variable to check.
         * @returns {boolean} `true` if the varaible is `undefined`.
         */
        function isUndefined(variable) {
            return variable.name === "undefined"
        }

        /**
         * Reports the given variable.
         *
         * @param {escope.Variable} variable - The variable to report.
         * @returns {void}
         */
        function report(variable) {
            variable.defs.forEach(function(def) {
                var id = def.name

                context.report({
                    node: id,
                    message: "Unexpected 'undefined'.",
                })
            })
        }

        return {
            Program: function() {
                var globalScope = context.getScope()
                var scopes = [globalScope]
                var scope = null

                while ((scope = scopes.shift()) != null) {
                    Array.prototype.push.apply(scopes, scope.childScopes)

                    scope.variables.filter(isUndefined).forEach(report)
                }
            },
        }
    },
}
