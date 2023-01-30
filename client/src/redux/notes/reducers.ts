import { AnyAction } from "redux";

import { Note } from "./types";

export const initialState = {
  notes: [],
  defaultNote: {},
  selectedNote: {},
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "SET_DEFAULT_NOTE": {
      const defaultNote = action.notes.reduce(
        (latestNote: Note, currentNote: Note) => {
          const latestNoteDate = new Date(latestNote.updatedAt);
          const currentNoteDate = new Date(currentNote.updatedAt);
          return latestNoteDate > currentNoteDate ? latestNote : currentNote;
        }
      );
      return {
        ...state,
        defaultNote: defaultNote,
      };
    }
    case "SET_NOTES": {
      return {
        ...state,
        notes: action.notes,
      };
    }
    case "SET_SELECTED_NOTE": {
      const selectedNote = action.notes.find(
        (note: Note) => note.id === action.id
      );
      return {
        ...state,
        selectedNote: selectedNote,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
