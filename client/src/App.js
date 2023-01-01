import React, { useEffect, useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", tag: "", note: "" });

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

  function updateNewNoteState(value) {
    return setNewNote((prev) => {
      return { ...prev, ...value };
    });
  }

  const onChange = (field) => (event) => {
    updateNewNoteState({ [field]: event.target.value });
  };

  async function onSubmit(e) {
    e.preventDefault();
    await fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });

    setNotes([...notes, newNote]);
    setNewNote({ title: "", tag: "", note: "" });
  }

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={onSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={newNote.title}
            onChange={onChange("title")}
          />
        </label>
        <br />
        <label>
          Tag:
          <input type="text" value={newNote.tag} onChange={onChange("tag")} />
        </label>
        <br />
        <label>
          Note:
          <textarea value={newNote.note} onChange={onChange("note")} />
        </label>
        <br />
        <button type="submit">Add note</button>
      </form>
      <ul>
        {notes.map((note) => (
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

export default App;
