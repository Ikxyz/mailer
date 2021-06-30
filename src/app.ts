import * as Express from "express";
import * as body_parser from "body-parser";
import * as cors from "cors";
import { _print } from "./middleware/helpers";
import mailRoute from "./routes/mail";
import errorHandler from "./middleware/error";

const app = Express();

// allow all origin access
app.use(cors());

// parse request body to json object
app.use(body_parser.json({ type: 'application/json' }));

app.get("/", (req, res) => {
    return res.send({ msg: "Mailer Online!", status: true, });
})

app.use("/api", mailRoute);


// Error Handler
app.use(errorHandler.onErrorOccur);

const PORT = Number(`${process.env.PORT}` || "") || 5100;

// START SERVER
const server = app.listen(PORT, () => {
    console.log(`Server Running on host:http://127.0.0.1:${PORT}`);
});

process.on("SIGTERM", () => {
    console.log("Graceful Shutdown")
    server.close()
})