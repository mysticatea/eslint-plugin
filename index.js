/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    configs: require("./lib/configs"),
    processors: {
        ".vue": require("eslint-plugin-vue").processors[".vue"],
    },
    rules: require("./lib/rules"),
    utils: require("./lib/utils"),
}
