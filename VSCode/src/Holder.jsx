import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";

function Holder({ notes, setNotes, setSelectedNoteId }) {
  let renderCards;

  useEffect(() => {
    const id = setInterval(() => {
      fetch("/api/notes")
        .then((res) => res.json())
        .then((res) => setNotes(res));
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [notes]);

  if (notes.length > 0) {
    renderCards = notes.map((note, index) => (
      <Card key={index} note={note} setSelectedNoteId={setSelectedNoteId} />
    ));
  } else {
    renderCards = <p>ロード中</p>;
  }

  return <div className="app-holder">{renderCards}</div>;
}

export default Holder;
