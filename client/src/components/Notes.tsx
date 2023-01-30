import React, { useEffect } from "react";

import { client } from "api/client";
import { Note } from "redux/notes";
import { useAppSelector } from "redux/hooks";

const Notes = ({ setDefaultNote, setNotes, setSelectedNote }) => {
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

export default Notes;
