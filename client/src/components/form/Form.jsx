import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import TextEditor from "../TextEditor";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const Form = () => {
  const navigate = useNavigate();
  const ctx = useContext(AppContext);
  const [title, setTitle] = useState(
    ctx?.currentNote ? ctx?.currentNote.title : ""
  );
  const [desc, setDesc] = useState(
    ctx?.currentNote ? ctx?.currentNote.description : ""
  );

  const descChangeHandler = (newContent) => {
    setDesc(newContent);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const now = new Date();
    const time = now.toLocaleTimeString("en-US");
    const date = now.toISOString().slice(0, 10);

    if (ctx?.currentNote) {
      try {
        const user = await axios.patch(
          `http://localhost:5000/notes/${ctx?.currentNote._id}`,
          { title, description: desc, date },
          { withCredentials: true }
        );
        if (user.data.status === 1) {
          console.log(user.data);
          ctx.getNotesHandler();
          ctx.EmptyCurrentNoteHandler()
          navigate("/home")
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const user = await axios.post(
          "http://localhost:5000/notes/",
          { title, description: desc, date },
          { withCredentials: true }
        );
        if (user.data.status === 1) {
          console.log(user.data);
          ctx.getNotesHandler();
          navigate("/home")

        }
      } catch (error) {
        console.log(error);
      }
    }

 
    setDesc("");
    setTitle("");
    // navigate("/home");
  };
  useEffect(() => {
    ctx.getNotesHandler();
  }, []);
  return (
    <form
      onSubmit={submitHandler}
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
