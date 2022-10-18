/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/prefer-for-of")

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } })

tester.run("prefer-for-of", rule, {
    valid: [
        "for (const value of list);",
        "list.forEach(() => {})",
        "list.forEach((value, index) => {})",
        "list.forEach(function() {})",
        "list.forEach(function(value, index) {})",
        "list.forEach(doSomething)",
        "list.forEach(function foo(value) { foo })",
        "foo(list.forEach((value) => {}))",
        "for (let i = 0; i < list.length; ++i) { const value = list[i]; i }",
        "for (let i = 0; i < list.length && a; ++i) { const value = list[i]; }",
        "for (let i = 0; i < list.length; i += 2) { const value = list[i]; }",
        "forEach(function(value) {})",
        "forEach((value) => {})",
        "for (let i = 0; i < list.length; ++i) { const value = list[i]; list[i] = 0 }",
    ],
    invalid: [
        {
            code: "list.forEach(function(value) { return; function foo() { return } });",
            output: "for (let value of list) { continue; function foo() { return } }",
            errors: ["Expected for-of statement."],
        },
        {
            code: "list.forEach(function(value) { return; this.a });",
            output: "for (let value of list) { continue; list.a }",
            globals: { list: false, obj: false },
            errors: ["Expected for-of statement."],
        },
        {
            code: "a.b.c.forEach(function(value) { return; this.a });",
            output: "for (let value of a.b.c) { continue; a.b.c.a }",
            globals: { list: false, a: false },
            errors: ["Expected for-of statement."],
        },
        {
            code: "list.forEach(function(value) { return; this.a }, obj);",
            output: "for (let value of list) { continue; obj.a }",
            globals: { list: false, obj: false },
            errors: ["Expected for-of statement."],
        },
        {
            code: "list.forEach(function(value) { return; let obj; this.a }, obj);",
            output: null,
            globals: { list: false, obj: false },
            errors: ["Expected for-of statement."],
        },
        {
            code: "foo().forEach(function(value) { return; this.a });",
            output: null,
            globals: { list: false, foo: false },
            errors: ["Expected for-of statement."],
        },
        {
            code: "list.forEach(function(value) { return; this.a }, foo());",
            output: null,
            globals: { list: false, foo: false },
            errors: ["Expected for-of statement."],
        },
        {
            code: "list.forEach(function(value) { return this });",
            output: "for (let value of list) { continue; }",
            globals: { list: false, obj: false },
            errors: ["Expected for-of statement."],
        },
        {
            code: "list.forEach(function(value) { return; foo(a => this[a]) });",
            output: "for (let value of list) { continue; foo(a => list[a]) }",
            globals: { list: false, obj: false },
            errors: ["Expected for-of statement."],
        },
        {
            code: "list.forEach((value) => { return });",
            output: "for (let value of list) { continue; }",
            errors: ["Expected for-of statement."],
        },
        {
            code: "list.forEach(value => { return });",
            output: "for (let value of list) { continue; }",
            errors: ["Expected for-of statement."],
        },
        {
            code: "foo().forEach(value => { return });",
            output: "for (let value of foo()) { continue; }",
            errors: ["Expected for-of statement."],
        },
        {
            code: "list.forEach(value => { this });",
            output: "for (let value of list) { this }",
            globals: { list: false },
            errors: ["Expected for-of statement."],
        },
        {
            code: "list.forEach(value => { let list; this });",
            output: "for (let value of list) { let list; this }",
            globals: { list: false },
            errors: ["Expected for-of statement."],
        },
        {
            code: "list.forEach(value => value);",
            output: "for (let value of list) value;",
            errors: ["Expected for-of statement."],
        },
        {
            code: "list.filter(p)\n    .map(t)\n    .forEach(value => { return });",
            output: null,
            errors: ["Expected for-of statement."],
        },
        {
            code: "for (const key in obj) { }",
            output: null,
            errors: ["Expected for-of statement."],
        },
        {
            code: "function wrap() { for (let i = 0; i < list.length; ++i) { return } }",
            output: null,
            errors: ["Expected for-of statement."],
        },
        {
            code: "function wrap() { for (let i = 0; i < list.length; ++i) { const value = list[i]; return } }",
            output: "function wrap() { for (let value of list) { return } }",
            errors: ["Expected for-of statement."],
        },
        {
            code: "function wrap() { for (let i = 0; i < list.length; i++) { const value = list[i]; return } }",
            output: "function wrap() { for (let value of list) { return } }",
            errors: ["Expected for-of statement."],
        },
        {
            code: "function wrap() { for (let i = 0; i < list.length; i += 1) { const value = list[i]; return } }",
            output: "function wrap() { for (let value of list) { return } }",
            errors: ["Expected for-of statement."],
        },
        {
            code: "for (let i = 0, end = list.length; i < end;i = 1 + i) { const value = list[i]; }",
            output: "for (let value of list) { }",
            errors: ["Expected for-of statement."],
        },
        {
            code: "for (let i = 0, length = list.length; i < length; i = i + 1) { const value = list[i]; }",
            output: "for (let value of list) { }",
            errors: ["Expected for-of statement."],
        },
    ],
})
