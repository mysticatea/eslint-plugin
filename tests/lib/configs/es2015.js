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
    const version = def && def.meta && def.meta.docs && def.meta.docs.version

    return version === "es2015"
}

describe("'es2015.js'", () => {
    const config = require("../../../lib/configs/es2015")
    const configuredRules = Rules.getRulesOfConfig(config, "es2015")
    const existingRules = Rules.getPluginRuleNames("mysticatea")

    it("should be a valid config.", () => {
        Rules.validateConfig(config, "es2015.js")
    })

    for (const ruleId of existingRules) {
        if (isES6Rule(ruleId)) {
            it(`should include ES2015 rule '${ruleId}'.`, () => {
                assert(ruleId in configuredRules)
            })
        }
    }
})
