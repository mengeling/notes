import { connect } from "react-redux";
import { Dispatch } from "redux";

import { setDefaultNote, setSelectedNote } from "../redux/notes";
import { Notes } from "../components";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSelectedNote: (id: number, notes: Array<any>) =>
    dispatch(setSelectedNote(id, notes)),
  setDefaultNote: (notes: Array<any>) => dispatch(setDefaultNote(notes)),
});

export default connect(null, mapDispatchToProps)(Notes);
