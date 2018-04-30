/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const assert = require("assert")
const Rules = require("./_rules")

/**
 * Checks whether a given core rule is an ES6 rule or not.
 *
 * @param {string} ruleId - The name of a core rule.
 * @returns {boolean} `true` if the rule is an ES6 rule.
 */
function isES6Rule(ruleId) {
    const def = Rules.getRuleDefinition(ruleId)
    const category = def && def.meta && def.meta.docs && def.meta.docs.category

    return category === "ECMAScript 6"
}

describe("'es5.js'", () => {
    const config = require("../../../lib/configs/es5")
    const existingRules = [].concat(
        Rules.getCoreRuleNames(),
        Rules.getPluginRuleNames("eslint-comments"),
        Rules.getPluginRuleNames("prettier"),
        Rules.getPluginRuleNames("mysticatea")
    )

    it("should be a valid config.", () => {
        Rules.validateConfig(config, "es5.js")
    })

    for (const ruleId of existingRules) {
        it(`should include existing rule '${ruleId}'.`, () => {
            assert(ruleId in config.rules)
        })

        if (isES6Rule(ruleId)) {
            it(`should disable ES2015 rule '${ruleId}'.`, () => {
                assert.strictEqual(config.rules[ruleId], "off")
            })
        }
    }
})
