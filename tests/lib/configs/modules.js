/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const config = require("../../../lib/configs/+modules")
const Rules = require("./_rules")

describe("'+modules.js'", () => {
    it("should be a valid config.", () => {
        Rules.validateConfig(config, "+modules.js")
    })
})
