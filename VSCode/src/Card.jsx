import React, { Component } from "react";

function Card({ note, setSelectedNoteId }) {
  return (
    <div className="holder-card">
      <p>{note.notetext}</p>
      <p>{note.lastupdatedtime}</p>
      <button
        onClick={() => {
          setSelectedNoteId(note.id);
        }}
      >
        Select
      </button>
    </div>
  );
}

export default Card;
