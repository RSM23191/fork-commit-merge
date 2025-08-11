"use strict";
// Vitest - Easy
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sum;
//! Don't modify this file
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total + number; }, 0);
}
