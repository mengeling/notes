import React, { useEffect, useState } from "react";

const GetNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
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
    fetchNotes();
  }, []);

  return (
    <div>
      <ul>
        {notes.map((note: { [k: string]: string }) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>Tag: {note.tag}</p>
            <p>Note: {note.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetNotes;
