import React, { useState, useEffect } from "react";
import Title from "./Title.jsx";
import Holder from "./Holder.jsx";
import Note from "./Note.jsx";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(0);

  return (
    <>
      <Title />
      <div className="app-holder-note">
        <Holder
          notes={notes}
          setNotes={setNotes}
          setSelectedNoteId={setSelectedNoteId}
        />
        <Note
          setSelectedNoteId={setSelectedNoteId}
          selectedNoteId={selectedNoteId}
        />
      </div>
    </>
  );
}

export default App;
