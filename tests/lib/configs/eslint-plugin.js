/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const assert = require("assert")
const Rules = require("./_rules")

describe("'+eslint-plugin.js'", () => {
    const config = require("../../../lib/configs/+eslint-plugin")
    const configuredRules = config.overrides[0].rules
    const existingRules = Rules.getPluginRuleNames("eslint-plugin")

    it("should be a valid config.", () => {
        Rules.validateConfig(config, "+eslint-plugin.js")
    })

    for (const ruleId of existingRules) {
        it(`should include existing rule '${ruleId}'.`, () => {
            assert(ruleId in configuredRules)
        })
    }
})
