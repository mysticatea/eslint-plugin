/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var fs = require("fs")
var path = require("path")

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

var ruleNames = fs
    .readdirSync(path.join(__dirname, "../lib/rules"))
    .map(function(name) {
        return path.basename(name, ".js")
    })

var rules = ruleNames
    .map(function(name) {
        return "\"" + name + "\": require(\"./lib/rules/" + name + "\"),"
    })
    .join("\n        ")

var rulesConfig = ruleNames
    .map(function(name) {
        return "\"" + name + "\": 0,"
    })
    .join("\n        ")

fs.writeFileSync(path.join(__dirname, "../index.js"), "/**\n\
 * @author Toru Nagashima\n\
 * @copyright 2015 Toru Nagashima. All rights reserved.\n\
 * See LICENSE file in root directory for full license.\n\
 */\n\
\"use strict\"\n\
\n\
module.exports = {\n\
    rules: {\n\
        " + rules + "\n\
    },\n\
    rulesConfig: {\n\
        " + rulesConfig + "\n\
    },\n\
}\n")
