"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = function (fun) { return function (req, res, next) {
    Promise.resolve(fun(req, res, next)).catch(next);
}; };
