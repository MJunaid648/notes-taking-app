import Card from "./UI/Card";
import {Link } from "react-router-dom";
import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const NotesList = (props) => {
  const ctx = useContext(AppContext)

  const List =
    ctx?.notes.length > 0 ? (
      ctx?.notes.map((note) => {
        return (
          <Link to={'/home/details'} key={note.id} className="w-[100%] md:w-[80%] lg:w-[70%]">
          <Card
           onClick={()=>ctx?.currentNoteHandler(note)}
            
            className={ 
              `flex justify-between items-center p-2 gap-4
          border-2 border-white
            hover:-translate-y-2 hover:cursor-pointer hover:transition-all hover:bg-gray-900 hover:shadow-2xl
          ` + props.className
            }
          >
            <p
              className="text-2xl 
                      overflow-hidden truncate 
                      font-bold text-white"
            >
              {note.title}
            </p>
            <div className="flex gap-4 items-center">
              <p className=" text-white text-xl">@</p>
              <div className="flex flex-col">
                <p className="text-white w-24">{note.date}</p>
                <p className="text-white">{note.time}</p>
              </div>
            </div>
          </Card>
          </Link>                       
        );
      })
    ) : (
      <p className="text-md text-white font-semibold">
        No saved notes at the moment
      </p>
    );
  return List;
};

export default NotesList;
