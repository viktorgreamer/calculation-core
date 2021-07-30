"use strict";
exports.__esModule = true;
function Alias(alias) {
    return function (ctor) {
        ctor.prototype.alias = alias;
    };
}
exports["default"] = Alias;
