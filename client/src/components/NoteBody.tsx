import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";

import { NewNote } from ".";

const NoteBody = ({ setDefaultNote }) => {
  const [newNoteIsOpen, setNewNoteIsOpen] = useState(false);
  const selectedNoteFromStore = useAppSelector(
    (state) => state.notes.selectedNote
  );
  const [selectedNote, setSelectedNote] = useState(selectedNoteFromStore);

  useEffect(() => {
    setSelectedNote(selectedNoteFromStore);
  }, [selectedNoteFromStore]);

  const openNewNote = () => {
    setNewNoteIsOpen(!newNoteIsOpen);
  };

  return (
    <div className="notebody-wrapper">
      <div className="notebody">
        {newNoteIsOpen ? (
          <NewNote />
        ) : (
          <div>
            <h2>{selectedNote?.title || "Title"}</h2>
            <p>{selectedNote?.note || "Note Body"}</p>
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

export default NoteBody;
