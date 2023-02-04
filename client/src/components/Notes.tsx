import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { client } from "api/client";
import {
  Note,
  Notes,
  setNotes,
  setDefaultNote,
  setSelectedNote,
} from "redux/notes";
import { useAppSelector } from "redux/hooks";

const UnconnectedNotes = ({ setDefaultNote, setNotes, setSelectedNote }) => {
  const notes = useAppSelector((state) => state.notes.notes);

  useEffect(() => {
    const getNotes = async () => {
      const response = await client.get("http://localhost:5000/api/notes");
      setNotes(response.notes);
      setDefaultNote(response.notes);
    };
    getNotes();
  }, [setDefaultNote, setNotes]);

  const onClick = (noteId: number) => (e: React.SyntheticEvent) => {
    setSelectedNote(noteId, notes);
  };

  return (
    <div className="notes-wrapper">
      {notes.map((note: Note) => (
        <button
          key={note.id}
          className="notes-button"
          onClick={onClick(note.id)}
          id={note.id.toString()}
        >
          <h4>{note.title}</h4>
          <p>{note.note}</p>
        </button>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setDefaultNote: (notes: Notes) => dispatch(setDefaultNote(notes)),
  setNotes: (notes: Notes) => dispatch(setNotes(notes)),
  setSelectedNote: (id: number, notes: Notes) =>
    dispatch(setSelectedNote(id, notes)),
});

export default connect(null, mapDispatchToProps)(UnconnectedNotes);
