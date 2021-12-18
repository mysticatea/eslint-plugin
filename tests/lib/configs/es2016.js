/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const config = require("../../../lib/configs/es2016")
const Rules = require("./_rules")

describe("'es2016.js'", () => {
    it("should be a valid config.", () => {
        Rules.validateConfig(config, "es2016.js")
    })
})
