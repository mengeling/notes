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
  defaultNote: emptyNote,
  selectedNote: emptyNote,
  newNoteIsOpen: false,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNewNoteIsOpen: (
      state,
      action: PayloadAction<{ newNoteIsOpen: boolean }>
    ) => {
      state.newNoteIsOpen = action.payload.newNoteIsOpen;
    },
    setNotes: (state, action: PayloadAction<{ notes: Note[] }>) => {
      state.notes = action.payload.notes.sort((noteA: Note, noteB: Note) => {
        const noteADate = new Date(noteA.updatedAt);
        const noteBDate = new Date(noteB.updatedAt);
        return noteBDate.getTime() - noteADate.getTime();
      });
      state.defaultNote = state.notes[0];
      state.selectedNote = emptyNote;
    },
    setSelectedNote: (state, action: PayloadAction<{ id: number }>) => {
      state.selectedNote = state.notes.find(
        (note: Note) => note.id === action.payload.id
      );
    },
  },
});

export const notesReducer = notesSlice.reducer;
