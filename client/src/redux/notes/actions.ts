import { Notes } from "./types";

export const setDefaultNote = (notes: Notes) => ({
  type: "SET_DEFAULT_NOTE",
  notes: notes,
});

export const setNewNoteIsOpen = (newNoteIsOpen: boolean) => ({
  type: "SET_NEW_NOTE_IS_OPEN",
  newNoteIsOpen: newNoteIsOpen,
});

export const setNotes = (notes: Notes) => ({
  type: "SET_NOTES",
  notes: notes,
});

export const setSelectedNote = (id: number, notes: Notes) => ({
  type: "SET_SELECTED_NOTE",
  id: id,
  notes: notes,
});
