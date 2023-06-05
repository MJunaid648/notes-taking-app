import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import Card from "../components/UI/Card";
import AppContext from "../context/AppContext";
import { useContext } from "react";

const NoteDetail = () => {
  const ctx = useContext(AppContext);

  return (
    <Card
      className="self-center border-2 gap-4 p-4 flex flex-col  justify-center
                    w-[100%] md:w-[80%] lg:w-[70%] 
                    text-white
                    "
    >
      <div className="flex gap-8 justify-between text-4xl">
        <Link to="/home">
          <button
            onClick={() => ctx?.EmptyCurrentNoteHandler()}
            className="border-2 p-2 rounded-lg hover:bg-gray-900 hover:shadow-2xl"
          >
            <AiOutlineHome />
          </button>
        </Link>
        <div className="flex gap-4">
          <button
            className="border-2 p-2 rounded-lg hover:bg-gray-900 hover:shadow-2xl"
            onClick={() => ctx?.deleteNoteHandler(ctx)}
          >
            <MdDeleteOutline />
          </button>
          <Link to="/home/edit">
            <button className="border-2 p-2 rounded-lg hover:bg-gray-900 hover:shadow-2xl">
              <AiOutlineEdit />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center gap-28 text-2xl font-bold ">
        <div className=""></div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 p-4  border-2 text-xl font-bold text-justify ">
        <p className="text-4xl">{ctx?.currentNote.title}:</p>
        {ReactHtmlParser(ctx?.currentNote.description)}
        <div className="self-end flex gap-4">
          <p>{ctx?.currentNote.time}</p>
          <p>{ctx?.currentNote.date}</p>
        </div>
      </div>
    </Card>
  );
};

export default NoteDetail;
