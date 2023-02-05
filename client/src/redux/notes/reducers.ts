import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Note } from "redux/notes/types";

const emptyNote: Note = {
  id: 0,
  title: "",
  note: "",
  tag: "",
  createdAt: "",
  updatedAt: "",
};

export const initialState = {
  notes: [],
  selectedNote: emptyNote,
  newNoteIsOpen: false,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action: PayloadAction<{ notes: Note[] }>) => {
      state.notes = action.payload.notes.sort((noteA: Note, noteB: Note) => {
        const noteADate = new Date(noteA.updatedAt);
        const noteBDate = new Date(noteB.updatedAt);
        return noteBDate.getTime() - noteADate.getTime();
      });
      state.selectedNote = state.notes[0];
    },
    setSelectedNote: (state, action: PayloadAction<{ id: number }>) => {
      state.selectedNote = state.notes.find(
        (note: Note) => note.id === action.payload.id
      );
    },
  },
});

export const notesReducer = notesSlice.reducer;
