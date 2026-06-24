import { Router, Request, Response } from "express";
import { z } from "zod";
import { pool } from "../db";

const router = Router();

const contactSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(255),
  message: z.string().min(1).max(5000),
});

router.post("/", async (req: Request, res: Response) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input", details: parsed.error.flatten() });
    return;
  }

  const { name, email, message } = parsed.data;

  try {
    await pool.query(
      "INSERT INTO contact_submissions (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );

    res.status(201).json({ success: true, message: "Message received" });
  } catch (err) {
    console.error("Failed to save contact submission:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
