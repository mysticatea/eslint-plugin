/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const config = require("../../../lib/configs/es2020")
const Rules = require("./_rules")

describe("'es2020.js'", () => {
    it("should be a valid config.", () => {
        Rules.validateConfig(config, "es2020.js")
    })
})
