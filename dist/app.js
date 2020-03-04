"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var body_parser = require("body-parser");
var cors = require("cors");
var helpers_1 = require("./middleware/helpers");
var app = Express();
// allow all origin access
app.use(cors());
// parse request body to json object
app.use(body_parser.json({ type: 'application/*+json' }));
app.get("/", function (req, res) {
    return res.send({ msg: "Mailer Online!", status: true, });
});
var PORT = 5100;
app.listen(PORT, function () {
    helpers_1._print("server running on port http://localhost:" + PORT);
});
