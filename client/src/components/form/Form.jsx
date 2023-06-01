import { useState } from "react";

const Form = (props) => {
  const [note, setNote] = useState("");

  const noteChangeHandler = (event) => {
    setNote(event.target.value);
  };

  const noteSubmitHandler = (event) => {
    event.preventDefault();
    const now = new Date();
    const time = now.toLocaleTimeString("en-US");
    const date = now.toISOString().slice(0, 10);
    props.addNote({
      id: Math.random().toString(),
      note: note,
      date: date,
      time: time,
    });
    setNote("");
  };
  return (
    <form
      onSubmit={noteSubmitHandler}
      className=" flex flex-col gap-2 p-4
                     text-white
                     rounded-lg
                     "
    >
      <label className="text-lg font-semibold" htmlFor="desc">
        Description
      </label>
      <textarea
        className="bg-gray-200  text-black text-lg font-medium px-4 py-2
                    h-40 rounded-lg"
        id="desc"
        type="textarea"
        name=""
        value={note}
        placeholder="Noted that..."
        required
        onChange={noteChangeHandler}
      />
      <button
        type="submit"
        className=" rounded-lg
                     hover:cursor-pointer  hover:bg-gray-900 
                    hover:shadow-2xl 
                    border-2 border-white
                    font-semibold"
      >
        Add Note
      </button>
    </form>
  );
};

export default Form;
