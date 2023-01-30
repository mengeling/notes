import { AnyAction } from "redux";

import { Note } from "./types";

// const emptyNote: Note = {
//   id: 0,
//   title: "",
//   note: "",
//   tag: "",
//   createdAt: "",
//   updatedAt: "",
// };

export const initialState = {
  defaultNote: {},
  selectedNote: {},
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "SetDefaultNote": {
      const defaultNote = action.notes.sort((noteA: Note, noteB: Note) => {
        const noteADate = new Date(noteA.updatedAt);
        const noteBDate = new Date(noteB.updatedAt);
        return noteBDate.getTime() - noteADate.getTime();
      })[0];
      return {
        ...state,
        defaultNote: defaultNote,
      };
    }
    case "SetSelectedNote": {
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
