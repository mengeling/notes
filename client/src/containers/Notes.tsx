import { connect } from "react-redux";
import { Dispatch } from "redux";

import { setNotes, setDefaultNote, setSelectedNote } from "../redux/notes";
import { Notes } from "../components";
import { Notes as NotesType } from "../redux/notes";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setDefaultNote: (notes: NotesType) => dispatch(setDefaultNote(notes)),
  setNotes: (notes: NotesType) => dispatch(setNotes(notes)),
  setSelectedNote: (id: number, notes: NotesType) =>
    dispatch(setSelectedNote(id, notes)),
});

export default connect(null, mapDispatchToProps)(Notes);
