import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { client } from "api/client";
import { setNewNoteIsOpen } from "redux/notes";

const UnconnectedNewNote = ({ setNewNoteIsOpen }) => {
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

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    await client.post("http://localhost:5000/api/notes", newNote);
    setNewNoteIsOpen(false);
  }

  async function handleCancel() {
    setNewNoteIsOpen(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setNewNoteIsOpen: (newNoteIsOpen: boolean) =>
    dispatch(setNewNoteIsOpen(newNoteIsOpen)),
});

export default connect(null, mapDispatchToProps)(UnconnectedNewNote);
