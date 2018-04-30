/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const assert = require("assert")
const Rules = require("./_rules")

describe("'vue.js'", () => {
    const config = require("../../../lib/configs/_vue")
    const configuredRules = Object.assign(
        {},
        config.rules,
        ...config.overrides.map(c => c.rules)
    )
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
