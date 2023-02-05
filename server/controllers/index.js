const models = require("../models");

const createNote = async (req, res) => {
  try {
    const note = await models.Notes.create(req.body);
    return res.status(201).json({ note });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await models.Notes.findAll();
    return res.status(200).json({ notes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getNoteById = async (req, res) => {
  try {
    const { noteId } = req.params;
    const note = await models.Notes.findOne({
      where: { id: noteId },
    });
    if (note) {
      return res.status(200).json({ note });
    }
    return res.status(404).send("Note with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const [updated] = await models.Notes.update(req.body, {
      where: { id: noteId },
    });
    if (updated) {
      const updatedNote = await models.Notes.findOne({ where: { id: noteId } });
      return res.status(200).json({ updatedNote });
    }
    throw new Error("Note not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const deleted = await models.Notes.destroy({
      where: { id: noteId },
    });
    if (deleted) {
      return res.status(200).json({ noteId });
    }
    throw new Error("Note not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
