import { Dispatch } from "redux";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import { client } from "api/client";
import { useAppSelector } from "redux/hooks";
import { Note, Notes, setNotes, setSelectedNote } from "redux/notes";

const UnconnectedNotes = ({ setNotes, setSelectedNote }) => {
  const notes = useAppSelector((state) => state.notesReducer.notes);

  useEffect(() => {
    const getNotes = async () => {
      const response = await client.get("http://localhost:5000/api/notes");
      setNotes(response.notes);
    };
    getNotes();
  }, [setNotes]);

  const onClick = (noteId: number) => (e: React.SyntheticEvent) => {
    setSelectedNote(noteId);
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
  setNotes: (notes: Notes) => dispatch(setNotes(notes)),
  setSelectedNote: (id: number) => dispatch(setSelectedNote(id)),
});

export default connect(null, mapDispatchToProps)(UnconnectedNotes);
