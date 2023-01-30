import { connect } from "react-redux";
import { Dispatch } from "redux";

import { setDefaultNote } from "../redux/notes";

import { NoteBody } from "components";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setDefaultNote: (notes: Array<any>) => dispatch(setDefaultNote(notes)),
});

export default connect(null, mapDispatchToProps)(NoteBody);
