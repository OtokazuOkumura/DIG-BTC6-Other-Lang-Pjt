import React, { useState, useEffect, useId } from "react";

function Note({ selectedNoteId }) {
  const [selectedNote, setSelectedNote] = useState("");
  const postTextAreaId = useId();

  let renderNote;

  useEffect(() => {
    fetch(`/api/notes/${selectedNoteId}`)
      .then((res) => res.json())
      .then((res) => setSelectedNote(res));
  }, [selectedNoteId]);

  const deleteNote = () => {
    fetch(`/api/notes/${selectedNoteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    });
  };

  if (selectedNote) {
    renderNote = (
      <textarea
        id={postTextAreaId}
        name="postContent"
        defaultValue={selectedNote.notetext}
      />
    );
  } else {
    renderNote = <p>selectedNote.length -le 0</p>;
  }

  return (
    <div className="app-note">
      <button>New</button>
      <button>Save</button>
      <button onClick={() => deleteNote()}>Delete</button>
      <hr />
      <div className="note-disp-edit-area">{renderNote}</div>
    </div>
  );
}

export default Note;
