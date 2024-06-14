import React, { useState, useEffect, useId, useRef } from "react";

function Note({ setSelectedNoteId, selectedNoteId }) {
  const [selectedNote, setSelectedNote] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  useEffect(() => {
    fetch(`/api/notes/${selectedNoteId}`)
      .then((res) => res.json())
      .then((res) => setSelectedNote(res));
  }, [selectedNoteId]);

  function saveNote() {
    const date = new Date();
    date.setHours(date.getHours() + 9);

    fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        notetext: textAreaValue,
        // lastupdatedtime: new Date().toISOString().split(".")[0],
        lastupdatedtime: date.toISOString().split(".")[0],
      }),
    });

    window.location.reload();
  }

  function deleteNote() {
    fetch(`/api/notes/${selectedNoteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    });
  }

  return (
    <div className="app-note">
      <button onClick={() => deleteNote()}>Delete</button>
      <button onClick={() => saveNote()}>Save</button>
      <hr />
      <textarea
        defaultValue={selectedNote.notetext}
        onChange={(e) => setTextAreaValue(e.target.value)}
        className="note-disp-edit-area"
      />
    </div>
  );
}

export default Note;
