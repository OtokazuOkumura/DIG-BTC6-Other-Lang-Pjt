import React, { useState, useEffect, useId, useRef } from "react";

function Note({ setSelectedNoteId, selectedNoteId }) {
  const [selectedNote, setSelectedNote] = useState("");
  const postTextAreaId = useId();

  let renderNote;

  useEffect(() => {
    fetch(`/api/notes/${selectedNoteId}`)
      .then((res) => res.json())
      .then((res) => setSelectedNote(res));
  }, [selectedNoteId]);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        notetext: formJson.postContent,
        lastupdatedtime: new Date().toISOString().split(".")[0],
      }),
    });
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

  console.log(selectedNoteId);

  if (selectedNote) {
    renderNote = (
      <textarea
        id={postTextAreaId}
        name="postContent"
        defaultValue={selectedNote.notetext}
        className="note-disp-edit-area"
      />
    );
  }

  return (
    <div className="app-note">
      <button onClick={() => deleteNote()}>Delete</button>
      <button>New</button>

      <form method="POST" onSubmit={handleSubmit}>
        <button type="submit">Save</button>
        <hr />
        {renderNote}
      </form>
    </div>
  );
}

export default Note;
