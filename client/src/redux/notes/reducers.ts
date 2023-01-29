import { AnyAction } from "redux";
import { ActionTypes } from "./types";

export const initialState = {
  selectedNote: {},
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.GetSelectedNote: {
      const selectedNote = action.notes.find(
        (note: { [k: string]: string }) => note.id === action.id
      );
      return {
        selectedNote: selectedNote,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
