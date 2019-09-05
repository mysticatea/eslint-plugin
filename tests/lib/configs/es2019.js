/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const Rules = require("./_rules")

describe("'es2019.js'", () => {
    const config = require("../../../lib/configs/es2019")

    it("should be a valid config.", () => {
        Rules.validateConfig(config, "es2019.js")
    })
})
