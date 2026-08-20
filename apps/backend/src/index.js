import express from "express";
import "dotenv/config";
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

const app = express();
const PORT = Number(process.env.PORT);
const FRONTEND_URL = String(process.env.FRONTEND_URL);

if (!Number.isSafeInteger(PORT) || PORT < 1 || PORT > 65_535) {
  throw new RangeError("PORT must be an integer between 1 and 65535");
}

app.disable("x-powered-by"); // globally hide tech stack (security)

// middleware
app.use(express.json()); // parse json data from client
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  }),
); // only allow frontend API requests
app.use(clerkMiddleware); // check/auth user

app.get("/health", (req, res) => {
  const { message, image, video } = req.body; // break data into Message vars
  res.status(200).json({
    ok: true,
    receivedData: { message, image, video },
  });
  // 200 HTTP Ok; to json, send back and close
});
app.listen(PORT, () => {
  connectDB();
  console.log("Server up and running on PORT: ", PORT);
});
