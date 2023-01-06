import React, { useState } from "react";
import { NewNote } from ".";

const NoteBody = () => {
  const [newNoteIsOpen, setNetNoteIsOpen] = useState(false);

  const openNewNote = () => {
    setNetNoteIsOpen(!newNoteIsOpen);
  };

  return (
    <div className="notebody-wrapper">
      <div className="notebody">
        {newNoteIsOpen ? <NewNote /> : <p>Testing</p>}
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
