import React, { useState } from "react";

const NewNote = () => {
  const [newNote, setNewNote] = useState({ title: "", tag: "", note: "" });

  const onChange =
    (field: string) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setNewNote((prev) => {
        return { ...prev, [field]: e.target.value };
      });
    };

  async function onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });

    setNewNote({ title: "", tag: "", note: "" });
  }

  return (
    <div>
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
    </div>
  );
};

export default NewNote;
