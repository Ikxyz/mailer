"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mail_1 = require("../controller/mail");
var express_1 = require("express");
var route = express_1.Router();
route.post("/mail/send", mail_1.default.sendMail);
exports.default = route;
