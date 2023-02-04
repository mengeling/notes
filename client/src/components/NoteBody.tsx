import { Dispatch } from "redux";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { NewNote } from "components";
import { useAppSelector } from "redux/hooks";
import { setNewNoteIsOpen } from "redux/notes";

const UnconnectedNoteBody = ({ setNewNoteIsOpen }) => {
  const [newNoteIsOpen, defaultNote, selectedNote] = useAppSelector((state) => [
    state.notesReducer.newNoteIsOpen,
    state.notesReducer.defaultNote,
    state.notesReducer.selectedNote,
  ]);
  const [note, setNote] = useState(defaultNote);

  useEffect(() => {
    setNote(selectedNote.title === "" ? defaultNote : selectedNote);
  }, [defaultNote, selectedNote]);

  const openNewNote = () => {
    setNewNoteIsOpen(true);
  };

  return (
    <div className="notebody-wrapper">
      <div className="notebody">
        {newNoteIsOpen ? (
          <NewNote />
        ) : (
          <div>
            <h2>{note?.title}</h2>
            <p>{note?.note}</p>
          </div>
        )}
      </div>
      <div className="notebody-footer">
        {!newNoteIsOpen && (
          <button className="newnote-button" onClick={openNewNote}>
            <i className="fa-solid fa-plus"></i>
            <span className="newnote-button-text">New</span>
          </button>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setNewNoteIsOpen: (newNoteIsOpen: boolean) =>
    dispatch(setNewNoteIsOpen(newNoteIsOpen)),
});

export default connect(null, mapDispatchToProps)(UnconnectedNoteBody);
