import NotesList from "../components/NotesList";
import Card from "../components/UI/Card";
import Form from "../components/form/Form";
import { useState } from "react";

const HomePage = (props) => {
  const [notes, setNotes] = useState([
    {
      id: Math.random().toString(),
      title: "NOTE",
      desc: "desc",
      date: "aj di tareekh",
      time: "welay waqt di gal ay beeba",
    },
  ]);

  const addNote = (note) => {
    setNotes((prev) => [note, ...prev]);
    console.log(notes);
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className=" flex flex-col items-center gap-6 font-sans p-4">
      <Card className="w-[100%] md:w-[80%] lg:w-[70%] border-2 border-white">
        <Form addNote={addNote} editNote={null}/>
      </Card>
      <div className=" text-center text-5xl  text-white font-bold">
        Previous notes
      </div>
      <NotesList
        setCurrentNoteHandler={props.setCurrentNoteHandler}
        notes={notes}
      />
    </div>
  );
};

export default HomePage;
