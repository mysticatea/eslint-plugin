/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

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

    excludes(x, y) {
        const excluded = new Set(Object.keys(y))
        const result = {}

        for (const key of Object.keys(x)) {
            if (!excluded.has(key)) {
                result[key] = y[key]
            }
        }

        return result
    },
}
