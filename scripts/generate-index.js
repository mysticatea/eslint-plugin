"use strict";

var fs = require("fs");
var path = require("path");

var ruleNames = fs
    .readdirSync(path.join(__dirname, "../lib/rules"))
    .map(function(name) {
        return path.basename(name, ".js");
    });

var rules = ruleNames
    .map(function(name) {
        return "        \"" + name + "\": require(\"./rules/" + name + "\")";
    })
    .join(",\n");

var rulesConfig = ruleNames
    .map(function(name) {
        return "        \"" + name + "\": 0";
    })
    .join(",\n");

fs.writeFileSync(path.join(__dirname, "../lib/index.js"), "\
\"use strict\";\n\
\n\
module.exports = {\n\
    rules: {\n\
" + rules + "\n\
    },\n\
    rulesConfig: {\n\
" + rulesConfig + "\n\
    }\n\
};\n\
");
