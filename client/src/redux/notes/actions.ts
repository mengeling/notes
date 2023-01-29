import { ActionTypes } from "./types";

export const getSelectedNote = (id: number, notes: Array<any>) => ({
  type: ActionTypes.GetSelectedNote,
  id: id,
  notes: notes,
});
