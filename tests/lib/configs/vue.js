/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const assert = require("assert")
const config = require("../../../lib/configs/_override-vue")
const Rules = require("./_rules")

describe("'vue.js'", () => {
    const configuredRules = Rules.getRulesOfConfig(config, "_override-ts")
    const existingRules = Rules.getPluginRuleNames("vue")

    it("should be a valid config.", () => {
        Rules.validateConfig(config, "vue.js")
    })

    for (const ruleId of existingRules) {
        it(`should include existing rule '${ruleId}'.`, () => {
            assert(ruleId in configuredRules)
        })
    }
})
