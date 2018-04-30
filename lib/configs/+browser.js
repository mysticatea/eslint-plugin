/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const originalGlobals = require("globals").browser
const globals = {}
const allows = new Set([
    "atob",
    "btoa",
    "cancelAnimationFrame",
    "document",
    "fetch",
    "indexedDB",
    "localStorage",
    "matchMedia",
    "requestAnimationFrame",
    "sessionStorage",
    "window",
])

for (const key of Object.keys(originalGlobals)) {
    if (key[0] === key[0].toUpperCase() || allows.has(key)) {
        globals[key] = originalGlobals[key]
    }
}

module.exports = {
    globals,
}
