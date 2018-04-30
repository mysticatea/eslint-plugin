/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    overrides: [
        {
            files: ["**/test/**", "**/tests/**"],
            globals: {
                after: false,
                afterEach: false,
                before: false,
                beforeEach: false,
                describe: false,
                it: false,
                mocha: false,
                xdescribe: false,
                xit: false,
            },
            rules: {
                "max-nested-callbacks": "off",
            },
        },
    ],
}
