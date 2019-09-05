/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const assert = require("assert")
const Rules = require("./_rules")

describe("'ts.js'", () => {
    const config = require("../../../lib/configs/_override-ts")
    const configuredRules = Rules.getRulesOfConfig(config, "_override-ts")
    const existingRules = Rules.getPluginRuleNames("ts")

    it("should be a valid config.", () => {
        Rules.validateConfig(config, "ts.js")
    })

    for (const ruleId of existingRules) {
        it(`should include existing rule '${ruleId}'.`, () => {
            assert(ruleId in configuredRules)
        })
    }
})
