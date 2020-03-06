"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.onErrorOccur = function (err, req, res, next) {
        console.warn("error occurred: " + err.message);
        res.status(500).json({ status: false, message: err.message });
    };
    return ErrorHandler;
}());
