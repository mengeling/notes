const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/", (req, res) => res.send("Welcome"));
router.post("/notes", controllers.createNote);
router.get("/notes", controllers.getNotes);
router.get("/notes/:noteId", controllers.getNoteById);
router.put("/notes/:noteId", controllers.updateNote);
router.delete("/notes/:noteId", controllers.deleteNote);

module.exports = router;
