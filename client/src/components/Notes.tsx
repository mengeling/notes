import React, { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState({});

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
    const note = notes.find(
      (note: { [k: string]: string }) => note.id === noteId
    );
    setSelectedNote(note || {});
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
