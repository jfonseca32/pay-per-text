import express from "express";
import "dotenv/config";

const app = express();
const port = Number(process.env.PORT ?? "3000");

if (!Number.isSafeInteger(port) || port < 1 || port > 65_535) {
  throw new RangeError("PORT must be an integer between 1 and 65535");
}

app.disable("x-powered-by");
app.listen(port, () => console.log("Server up and running on PORT: ", port));
