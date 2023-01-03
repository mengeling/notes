import { Router } from "express";
import {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from "../controllers/index.js";

const router = Router();
router.get("/", (req, res) => res.send("Welcome"));
router.post("/notes", createNote);
router.get("/notes", getNotes);
router.get("/notes/:noteId", getNoteById);
router.put("/notes/:noteId", updateNote);
router.delete("/notes/:noteId", deleteNote);

export default router;
