import React, { Component } from "react";

function Card({ note, setSelectedNoteId }) {
  return (
    <div className="holder-card">
      <p>{note.notetext}</p>
      <p>{note.lastupdatedtime.replace("T", " ").split(".")[0]}</p>
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
