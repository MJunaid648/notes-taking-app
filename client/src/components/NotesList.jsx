import React from "react";
import Card from "./UI/Card";

const NotesList = (props) => {
  const List =
    props.notes.length > 0? (
      props.notes.map((note) => {
        return (
          <Card
            key={note.id}
            className={
              `flex justify-between items-center p-2 gap-4
          border-2 border-white
            hover:-translate-y-2 hover:cursor-pointer hover:transition-all hover:bg-gray-900 hover:shadow-2xl
          ` + props.className
            }
          >
            <p
              className="text-md text-base 
                      overflow-hidden truncate 
                      font-medium text-white"
            >
              {note.note}
            </p>
            <div className="flex gap-4 items-center">
              <p className=" text-white text-xl">@</p>
              <div className="flex flex-col">
                <p className="text-white w-24">{note.date}</p>
                <p className="text-white">{note.time}</p>
              </div>
            </div>
          </Card>
        );
      })
    ) : (
      <p className="text-md text-white font-semibold">No saved notes at the moment</p>
    );
  return List;
};

export default NotesList;
