import axios from "axios";
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
  const EmptyCurrentNoteHandler = () => {
    setCurrentNote(null);
  };

  const getNotesHandler = async () => {
    try {
      const user = await axios.get("http://localhost:5000/notes/", {
        withCredentials: true,
      });
      if (user.data.status === 1) {
        setNotes(user.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNoteHandler = async (ctx) => {
    try {
      const user = await axios.delete(
        `http://localhost:5000/notes/${ctx?.currentNote._id}`,
        { withCredentials: true }
      );
      if (user.data.status === 1) {
        console.log(user.data);
        ctx.getNotesHandler();
        ctx.EmptyCurrentNoteHandler();
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppContext.Provider
      value={{
        notes,
        deleteNoteHandler,
        currentNote,
        currentNoteHandler,
        getNotesHandler,
        EmptyCurrentNoteHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
