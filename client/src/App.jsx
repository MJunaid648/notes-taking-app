import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NoteDetail from "./pages/NoteDetail";
import { useState } from "react";
import EditPage from "./pages/EditPage";
function App() {
  const [currentNote, setCurrentNote] = useState({});
  const [editNote,setEditNote] = useState({})
  const setCurrentNoteHandler = (note) => {
    setCurrentNote(note);
  };
  const editNoteHandler=(note)=>{
    setEditNote(note)
  }
  return (
    <div className=" flex flex-col gap-6 font-sans p-4">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage setCurrentNoteHandler={setCurrentNoteHandler} />} />
          <Route path="/home/details" element={<NoteDetail currentNote={currentNote} editNoteHandler={editNoteHandler} />} />
          <Route path="/home/edit" element={<EditPage note={editNote}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
