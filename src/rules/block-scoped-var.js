/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const scopeNodeType = /^(?:(?:Block|Switch|For(?:In|Of)?)Statement|CatchClause|Program)$/;
const containerNodeType = /^(?:For(?:In|Of)?Statement|(?:Arrow)?Function(?:Declaration|Expression))$/;

/**
 * Collects unresolved references from the global scope, then creates a map to references from its name.
 * @param {RuleContext} context - The current context.
 * @returns {object} A map object. Its key is the variable names. Its value is the references of each variable.
 */
function collectUnresolvedReferences(context) {
    const unresolved = Object.create(null);
    const references = context.getScope().through;

    for (let i = 0; i < references.length; ++i) {
        const reference = references[i];
        const name = reference.identifier.name;

        if (name in unresolved === false) {
            unresolved[name] = [];
        }
        unresolved[name].push(reference);
    }

    return unresolved;
}

/**
 * Checks whether or not a given definition should be skipped.
 * @param {escope.Variable.DefEntry} def - A definition to check.
 * @param {escope.Variable.DefEntry[]} defs - A definition list which includes `def`.
 * @param {escope.Variable} variable - A variable which is defined by the definition.
 * @returns {boolean} Whether or not the definition should be skipped.
 */
function shouldSkip(def, defs, variable) {
    // To check re-declarations.
    if (defs.length >= 2 && def.type !== "TDZ") {
        return false;
    }

    switch (def.type) {
        case "ClassName":
        case "FunctionName":
            return variable.scope.block === def.node;

        case "Parameter":
        case "TDZ":
            return true;

        case "Variable":
            return def.parent.kind !== "var";

        default:
            return false;
    }
}

/**
 * Gets a range info of a scope node which is containing a given declaration info.
 * @param {escope.Variable.DefEntry} def - A declaration info.
 * @returns {{identifier: ASTNode, start: number, end: number}} A range info of the containing scope.
 *   - `identifier` - The identifier node of the declaration.
 *   - `start` - The start position of the containing scope.
 *   - `end` - The end position of the containing scope.
 */
function getContainingScopeRange(def) {
    let node = null;

    if (def.type === "Parameter") {
        node = def.node;
    }
    else {
        node = (def.parent || def.node).parent;

        while (!scopeNodeType.test(node.type)) {
            node = node.parent;
        }
        if (node.parent != null && containerNodeType.test(node.parent.type)) {
            node = node.parent;
        }
    }

    return {identifier: def.name, start: node.range[0], end: node.range[1]};
}

/**
 * Finds and reports re-declarations.
 * @param {{identifier: ASTNode, start: number, end: number}[]} ranges - Ranges to check.
 * @param {RuleContext} context - The current context.
 * @returns {void}
 */
function checkRedeclaration(ranges, context) {
    for (let i = 0; i < ranges.length; ++i) {
        const a = ranges[i];

        for (let j = i + 1; j < ranges.length; ++j) {
            const b = ranges[j];

            if (a.start === b.start && a.end === b.end) {
                context.report(
                    b.identifier,
                    "\"{{name}}\" is already defined.",
                    {name: b.identifier.name});
            }
        }
    }
}

/**
 * Finds and reports shadowing.
 * @param {{identifier: ASTNode, start: number, end: number}[]} ranges - Ranges to check.
 * @param {RuleContext} context - The current context.
 * @returns {void}
 */
function checkShadowing(ranges, context) {
    for (let i = 0; i < ranges.length; ++i) {
        const outer = ranges[i];

        for (let j = 0; j < ranges.length; ++j) {
            const inner = ranges[j];

            if (inner.start >= outer.start &&
                inner.end <= outer.end &&
                (inner.start !== outer.start || inner.end !== outer.end)
            ) {
                context.report(
                    inner.identifier,
                    "\"{{name}}\" is already defined in the upper scope.",
                    {name: inner.identifier.name});
            }
        }
    }
}

/**
 * Finds and reports references which exist outside of valid scopes.
 * @param {escope.Reference[]} references - References to check.
 * @param {{identifier: ASTNode, start: number, end: number}[]} ranges - Ranges to check.
 * @param {RuleContext} context - The current context.
 * @returns {void}
 */
function checkUndefined(references, ranges, context) {
    for (let i = 0; i < references.length; ++i) {
        const identifier = references[i].identifier;
        let ok = false;

        // OK if the reference is inside any valid range.
        // e.g.
        //     if (true) { var a; foo(a); }
        //     else { var a; bar(a); }
        for (let j = 0; j < ranges.length; ++j) {
            const range = ranges[j];

            if (identifier.range[0] > range.start &&
                identifier.range[1] < range.end
            ) {
                ok = true;
                break;
            }
        }

        if (!ok) {
            context.report(
                identifier,
                "\"{{name}}\" is not defined.",
                {name: identifier.name});
        }
    }
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export default function rule(context) {
    let unresolvedReferences = Object.create(null);

    /**
     * Finds and reports references which are outside of valid scopes.
     * @param {ASTNode} node - A node to get variables.
     * @returns {void}
     */
    function checkForVariables(node) {
        const variables = context.getDeclaredVariables(node);
        for (let i = 0; i < variables.length; ++i) {
            const variable = variables[i];
            const defs = variable.defs;
            const lastDef = defs[defs.length - 1];

            // Skip except the last declaration.
            // Because `node.parent` is possibly not defined.
            if ((lastDef.parent || lastDef.node) !== node) {
                continue;
            }

            // Collect the containing scopes' range.
            const ranges = [];
            for (let j = 0; j < defs.length; ++j) {
                const def = defs[j];
                if (!shouldSkip(def, defs, variable)) {
                    ranges.push(getContainingScopeRange(def));
                }
            }
            if (ranges.length === 0) {
                continue;
            }

            // Some global variables are possibly unresolved.
            // In this case, use unresolved references.
            let references = variable.references;
            if (references.length === 0 && variable.name in unresolvedReferences) {
                references = unresolvedReferences[variable.name];
            }

            // Check.
            if (ranges.length >= 2) {
                // Report declarations which declared in a same block.
                // This check is a replacement for the `no-redeclare` rule.
                checkRedeclaration(ranges, context);

                // If this is redeclaration under normal considering but declared
                // in different blocks, this checks whether or not some variables
                // shadow others.
                // This check is NOT a replacement for the `no-shadow` rule.
                // This check should be used together with the `no-shadow` rule.
                checkShadowing(ranges, context);
            }
            checkUndefined(references, ranges, context);
        }
    }

    return {
        Program() {
            unresolvedReferences = collectUnresolvedReferences(context);
        },

        VariableDeclaration: checkForVariables,
        FunctionDeclaration: checkForVariables,
        ClassDeclaration: checkForVariables,
        ImportDeclaration: checkForVariables
    };
}

rule.schema = [];
