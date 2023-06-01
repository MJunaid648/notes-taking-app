import { useState } from "react";
import NotesList from "./components/NotesList";
import Card from "./components/UI/Card";
import Form from "./components/form/Form";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prev) => [note, ...prev]);
    console.log(notes);
  };

  return (
    <div
      className="
            flex flex-col items-center gap-6 font-sans
              p-4"
    >
      <header
        className=" text-center text-5xl  text-white
                    font-bold"
      >
        My notes
      </header>
      <hr className="h-2 w-[100%] md:w-[65%] lg:w-[70%]" />
      <Card className="w-[100%] md:w-[65%] lg:w-[70%] border-2 border-white">
        <Form addNote={addNote} />
      </Card>
      <div
        className=" text-center text-5xl  text-white
                    font-bold"
      >
        Previous notes
      </div>
      <NotesList className="w-[100%] md:w-[65%] lg:w-[70%]" notes={notes} />
    </div>
  );
}

export default App;
