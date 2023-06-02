import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Card from "../components/UI/Card";

function htmlToText(htmlString) {
  const temporaryElement = document.createElement("div");
  temporaryElement.innerHTML = htmlString;
  //   console.log(temporaryElement.textContent || temporaryElement.innerText);
  return temporaryElement.textContent || temporaryElement.innerText;
}

const NoteDetail = (props) => {
  return (
    <Card
      className="self-center border-2 gap-4 p-4 flex flex-col  justify-center
                    w-[100%] md:w-[80%] lg:w-[70%] 
                    text-white
                    "
    >
      <div className="flex gap-8 justify-between text-4xl">
        <Link to="/home">
          <button className="border-2 p-2 rounded-lg hover:bg-gray-900 hover:shadow-2xl">
            <AiOutlineHome />
          </button>
        </Link>
        <div className="flex gap-4">
          <button className="border-2 p-2 rounded-lg hover:bg-gray-900 hover:shadow-2xl">
            <MdDeleteOutline />
          </button>
          <Link to="/home/edit">
            <button className="border-2 p-2 rounded-lg hover:bg-gray-900 hover:shadow-2xl "
            onClick={props.editNoteHandler(props.currentNote)}
            >
              <AiOutlineEdit />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center gap-28 text-2xl font-bold ">
        <div className=""></div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 p-4  border-2 text-xl font-bold text-justify ">
        <p className="text-4xl">{props.currentNote.title}:</p>
        <p>{htmlToText(props.currentNote.desc)}</p>
        <div className="self-end flex gap-4">
          <p>{props.currentNote.time}</p>
          <p>{props.currentNote.date}</p>
        </div>
      </div>
    </Card>
  );
};

export default NoteDetail;
