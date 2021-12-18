/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const assert = require("assert")
const config = require("../../../lib/configs/+node")
const Rules = require("./_rules")

describe("'+node.js'", () => {
    const configuredRules = Rules.getRulesOfConfig(config, "+node")
    const existingRules = Rules.getPluginRuleNames("node")

    it("should be a valid config.", () => {
        Rules.validateConfig(config, "+node.js")
    })

    for (const ruleId of existingRules) {
        it(`should include existing rule '${ruleId}'.`, () => {
            assert(ruleId in configuredRules)
        })
    }
})
