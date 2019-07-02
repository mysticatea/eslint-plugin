/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { Linter } = require("eslint")
const Validator = require("eslint/lib/shared/config-validator")
const { rules: PluginRulesIndex } = require("@mysticatea/eslint-plugin")

const coreRules = new Linter().getRules()
const pluginRules = new Map(
    Object.keys(PluginRulesIndex).map(key => [
        `@mysticatea/${key}`,
        PluginRulesIndex[key],
    ])
)
const allRules = new Map([...coreRules, ...pluginRules])

const deprecatedRuleNames = new Set(
    Array.from(allRules)
        .filter(([, rule]) => rule && rule.meta && rule.meta.deprecated)
        .map(([ruleId]) => ruleId)
)
const removedRuleNames = new Set(
    Object.keys(require("eslint/conf/replacements.json").rules)
)

module.exports = {
    /**
     * Validate the given config object.
     * @param {any} config The config object to check.
     * @param {string} source The filename of the configuration to show error messages.
     * @returns {void}
     */
    validateConfig(config, source) {
        Validator.validate(config, source, ruleId => allRules.get(ruleId))

        /* istanbul ignore next */
        for (const ruleId of [].concat(
            Object.keys(config.rules || {}),
            ...(config.overrides || []).map(c => Object.keys(c.rules || {}))
        )) {
            const rule = allRules.get(ruleId)
            if (rule == null) {
                throw new Error(`The '${ruleId}' rule does not exist.`)
            }
            if (deprecatedRuleNames.has(ruleId)) {
                throw new Error(`The '${ruleId}' rule was deprecated.`)
            }
            if (removedRuleNames.has(ruleId)) {
                throw new Error(`The '${ruleId}' rule was removed.`)
            }
        }
    },

    /**
     * Get the rule definition of the given ID.
     * @param {string} ruleId The rule ID to get.
     * @returns {object} The rule definition.
     */
    getRuleDefinition(ruleId) {
        return allRules.get(ruleId)
    },

    /**
     * Get the core rules.
     * @returns {string[]} The core rule names.
     */
    getCoreRuleNames() {
        return Array.from(coreRules.keys()).filter(
            ruleId =>
                !deprecatedRuleNames.has(ruleId) &&
                !removedRuleNames.has(ruleId)
        )
    },

    /**
     * Get the plugin rules.
     * @param {"eslint-comments"|"node"|"ts"|"vue"} pluginName The plugin name to get.
     * @returns {object} The core rules. Keys are rule IDs and values are each rule definition.
     */
    getPluginRuleNames(pluginName) {
        return Object.keys(PluginRulesIndex)
            .filter(ruleId =>
                pluginName === "@mysticatea"
                    ? !ruleId.includes("/")
                    : ruleId.startsWith(`${pluginName}/`)
            )
            .map(ruleId => `@mysticatea/${ruleId}`)
            .filter(
                ruleId =>
                    !deprecatedRuleNames.has(ruleId) &&
                    !removedRuleNames.has(ruleId)
            )
    },
}
