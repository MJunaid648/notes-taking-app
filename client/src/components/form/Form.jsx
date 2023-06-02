import { useState } from "react";
import TextEditor from "../TextEditor";

const Form = (props) => {
  const [title, setTitle] = useState(
    props.editNote ? props.editNote.title : ""
  );
  const [desc, setDesc] = useState(props.editNote ? props.editNote.desc : "");

  const descChangeHandler = (newContent) => {
    setDesc(newContent);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descSubmitHandler = (event) => {
    event.preventDefault();
    const now = new Date();
    const time = now.toLocaleTimeString("en-US");
    const date = now.toISOString().slice(0, 10);

    props.addNote({
      id: Math.random().toString(),
      title: title,
      desc: desc,
      date: date,
      time: time,
    });
    setDesc("");
    setTitle("");
  };
  return (
    <form
      onSubmit={descSubmitHandler}
      className=" flex flex-col gap-2 p-4 text-white rounded-lg"
    >
      <label className="text-lg font-semibold" htmlFor="title">
        Title
      </label>
      <input
        className="bg-gray-200  text-black text-lg font-medium px-4 py-2 h-8 rounded-lg"
        type="text"
        id="title"
        placeholder="title..."
        value={title}
        onChange={titleChangeHandler}
        required
      />

      <label className="text-lg font-semibold" htmlFor="desc">
        Description
      </label>

      <TextEditor desc={desc} descChangeHandler={descChangeHandler} />
      <button
        type="submit"
        className=" rounded-lg
                    hover:bg-gray-900 
                    hover:shadow-2xl 
                    border-2 border-white
                    font-semibold text-2xl"
      >
        Save Note
      </button>
    </form>
  );
};

export default Form;
