/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict";

const fs = require("fs");
const path = require("path");

const ruleNames = fs
    .readdirSync(path.join(__dirname, "../lib/rules"))
    .map(name => path.basename(name, ".js"));

const rules = ruleNames
    .map(name => `        "${name}": require("./rules/${name}")`)
    .join(",\n");

const rulesConfig = ruleNames
    .map(name => `        "${name}": 0`)
    .join(",\n");

fs.writeFileSync(path.join(__dirname, "../index.js"), `/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict\";

module.exports = {
    rules: {
${rules}
    },
    rulesConfig: {
${rulesConfig}
    }
};
`);
