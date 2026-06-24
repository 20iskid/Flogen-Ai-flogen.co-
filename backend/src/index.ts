import express from "express";
import cors from "cors";
import healthRouter from "./routes/health";
import contactRouter from "./routes/contact";
import { initDb } from "./db";

const app = express();
const PORT = Number(process.env.PORT) || 4000;
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? "http://localhost:3000";

app.use(
  cors({
    origin: CORS_ORIGIN.split(",").map((o) => o.trim()),
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

app.use("/health", healthRouter);
app.use("/contact", contactRouter);

async function start() {
  try {
    if (process.env.DATABASE_URL) {
      await initDb();
      console.log("Database initialized");
    }
  } catch (err) {
    console.warn("Database not available, running without persistence:", err);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Flogen API running on port ${PORT}`);
  });
}

start();
