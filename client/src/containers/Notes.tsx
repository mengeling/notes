import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getSelectedNote } from "../redux/notes";
import { Notes } from "../components";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSelectedNote: (id: number, notes: Array<any>) =>
    dispatch(getSelectedNote(id, notes)),
});

export default connect(null, mapDispatchToProps)(Notes);
