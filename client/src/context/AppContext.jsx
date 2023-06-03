import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentNote, setCurrentNote] = useState(null);
  const [notes, setNotes] = useState([]);
  const currentNoteHandler = (note) => {
    setCurrentNote(note);
  };

  const addNoteHandler = (note) => {
    setNotes((prev) => [note, ...prev]);
    setCurrentNote(null);
  };
  const updateNoteHandler = (updated_note) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        if (note.id === updated_note.id) {
          return updated_note;
        } else {
          return note;
        }
      })
    );

    setCurrentNote(null);
  };
  const deleteNoteHandler = (currNote) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note !== currNote));
    setCurrentNote(null);
    navigate("/home");
  };
  return (
    <AppContext.Provider
      value={{
        notes,
        addNoteHandler,
        deleteNoteHandler,
        currentNote,
        currentNoteHandler,
        updateNoteHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
