import React, { useEffect, useState } from "react";

const Notes = ({ getSelectedNote }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getNotes() {
      await fetch("http://localhost:5000/api/notes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setNotes(data.notes);
        });
    }
    getNotes();
  }, []);

  const onClick = (noteId: string) => (e: React.SyntheticEvent) => {
    const selectedNote = getSelectedNote(noteId, notes);
    console.log(selectedNote);
  };

  return (
    <div className="notes-wrapper">
      {notes.map((note: { [k: string]: string }) => (
        <button
          key={note.id}
          className="notes-button"
          onClick={onClick(note.id)}
          id={note.id}
        >
          <h4>{note.title}</h4>
          <p>{note.note}</p>
        </button>
      ))}
    </div>
  );
};

export default Notes;
