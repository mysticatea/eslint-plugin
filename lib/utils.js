/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
let configuredRulesDocumentUrl = null

/**
 * Assign object properties deeply.
 * @param {any} x The destination object to assign.
 * @param {any} y The source object to assign.
 * @returns {any} Assigned object.
 */
function deepAssign(x, y) {
    if (typeof y === "object" && y !== null) {
        if (typeof x !== "object" || y === null) {
            /*eslint-disable no-param-reassign */
            if (Array.isArray(y)) {
                x = new Array(y.length)
            } else {
                x = {}
            }
            /*eslint-enable no-param-reassign */
        }
        for (const key of Object.keys(y)) {
            x[key] = y[key]
        }
        return x
    }
    return y
}

/**
 * Get the base URL from a given repository information.
 * @param {string|{type:string,url:string}} repository The repository information.
 * @returns {string|null} The base URL.
 */
function getBaseUrl(repository) {
    if (typeof repository === "string") {
        return `https://github.com/${repository}`
    }
    if (
        repository &&
        typeof repository.url === "string" &&
        /^git\+.+\.git$/u.test(repository.url)
    ) {
        return repository.url.slice(4, -4)
    }

    return null
}

module.exports = {
    /**
     * Merge multiple configuration objects.
     * @param {object} dest The destination config object to merge configurations.
     * @param {object} sources The source config objects to merge configurations.
     * @returns {object} The `dest`.
     */
    merge(dest, ...sources) {
        for (const source of sources) {
            for (const key of Object.keys(source)) {
                if (
                    key === "extends" ||
                    key === "files" ||
                    key === "overrides" ||
                    key === "plugins"
                ) {
                    dest[key] = []
                        .concat(dest[key], source[key])
                        .filter(Boolean)
                } else {
                    dest[key] = deepAssign(dest[key], source[key])
                }
            }
        }
        return dest
    },

    /**
     * The URL of rule's documentation for the `+eslint-plugin` config.
     * @type {string}
     */
    get rulesDocumentUrl() {
        if (configuredRulesDocumentUrl) {
            return configuredRulesDocumentUrl
        }
        try {
            const { version, repository } = JSON.parse(
                fs.readFileSync(
                    path.join(process.cwd(), "package.json"),
                    "utf8"
                )
            )
            const baseUrl = getBaseUrl(repository)
            if (baseUrl) {
                return `${baseUrl}/blob/v${version}/docs/rules/{{name}}.md`
            }
        } catch (_error) {
            // ignore
        }
        return undefined
    },

    set rulesDocumentUrl(value) {
        configuredRulesDocumentUrl = value
    },
}
