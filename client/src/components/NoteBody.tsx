import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";

import { NewNote } from ".";

const NoteBody = () => {
  const [newNoteIsOpen, setNewNoteIsOpen] = useState(false);
  const defaultNote = useAppSelector((state) => state.notes.defaultNote);
  const selectedNote = useAppSelector((state) => state.notes.selectedNote);
  const [note, setNote] = useState(defaultNote);

  useEffect(() => {
    setNote(
      Object.keys(selectedNote).length === 0 ? defaultNote : selectedNote
    );
  }, [defaultNote, selectedNote]);

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
            <h2>{note?.title || "Title"}</h2>
            <p>{note?.note || "Note Body"}</p>
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
