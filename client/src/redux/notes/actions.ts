import { Notes } from "redux/notes/types";

export const setNotes = (notes: Notes) => ({
  type: "notes/setNotes",
  payload: { notes },
});

export const setSelectedNote = (id: number) => ({
  type: "notes/setSelectedNote",
  payload: { id },
});
