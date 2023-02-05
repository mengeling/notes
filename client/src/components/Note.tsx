import { Dispatch } from "redux";
import React from "react";
import { connect } from "react-redux";

import { client } from "api/client";
import { useAppSelector } from "redux/hooks";
import { setNotes } from "redux/notes";
import { Notes } from "redux/notes";
import { formatTimestamp } from "utils";

const UnconnectedNoteBody = ({ setNotes }) => {
  const [newNoteIsOpen, selectedNote] = useAppSelector((state) => [
    state.notesReducer.newNoteIsOpen,
    state.notesReducer.selectedNote,
  ]);

  const createNote = async () => {
    await client.post("http://localhost:5000/api/notes", {
      title: "",
      tag: "",
      note: "",
    });
    const response = await client.get("http://localhost:5000/api/notes");
    setNotes(response.notes);
  };

  const handleTitleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await client.put(`http://localhost:5000/api/notes/${selectedNote.id}`, {
      title: e.target.value,
      note: selectedNote.note,
      tag: selectedNote.tag,
    });
    const response = await client.get("http://localhost:5000/api/notes");
    setNotes(response.notes);
  };

  const handleBodyChange = async (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    await client.put(`http://localhost:5000/api/notes/${selectedNote.id}`, {
      title: selectedNote.title,
      note: e.target.value,
      tag: selectedNote.tag,
    });
    const response = await client.get("http://localhost:5000/api/notes");
    console.log(response.notes);
    setNotes(response.notes);
  };

  const deleteNote = async () => {
    await client.delete(`http://localhost:5000/api/notes/${selectedNote.id}`);
    const response = await client.get("http://localhost:5000/api/notes");
    setNotes(response.notes);
  };

  return (
    <div className="note-wrapper">
      <div className="note-header">
        <p className="note-header-date">
          Last Edited on {formatTimestamp(selectedNote?.updatedAt)}
        </p>
        <button className="note-header-dropdown-button" onClick={deleteNote}>
          <p className="note-header-dropdown-text">...</p>
        </button>
      </div>
      <div className="note">
        <div>
          <input
            type="text"
            className="note-text title"
            value={selectedNote.title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
          <textarea
            className="note-text body"
            rows={20}
            value={selectedNote.note}
            onChange={handleBodyChange}
            placeholder="Start writing your note here"
          />
        </div>
      </div>
      <div className="note-footer">
        {!newNoteIsOpen && (
          <button className="newnote-button" onClick={createNote}>
            <i className="fa-solid fa-plus"></i>
            <span className="newnote-button-text">New</span>
          </button>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setNotes: (notes: Notes) => dispatch(setNotes(notes)),
});

export default connect(null, mapDispatchToProps)(UnconnectedNoteBody);
