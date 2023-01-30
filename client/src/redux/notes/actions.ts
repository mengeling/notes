import { Note } from "./types";

export const setDefaultNote = (notes: Array<Note>) => ({
  type: "SetDefaultNote",
  notes: notes,
});

export const setSelectedNote = (id: number, notes: Array<Note>) => ({
  type: "SetSelectedNote",
  id: id,
  notes: notes,
});
