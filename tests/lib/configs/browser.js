/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const Rules = require("./_rules")

describe("'+browser.js'", () => {
    const config = require("../../../lib/configs/+browser")

    it("should be a valid config.", () => {
        Rules.validateConfig(config, "+browser.js")
    })
})
