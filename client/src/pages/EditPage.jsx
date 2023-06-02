import React from 'react'
import Form from "../components/form/Form"
import Card from "../components/UI/Card"
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";



const EditPage = (props) => {
  return (
    <Card className=" self-center w-[100%] md:w-[80%] lg:w-[70%] border-2 border-white">
        <Link to="/home" className="text-white text-4xl">
          <button className="border-2 p-2 m-4 mb-0 rounded-lg hover:bg-gray-900 hover:shadow-2xl">
            <AiOutlineHome />
          </button>
        </Link>
        <Form editNote={props.note}/>
      </Card>
  )
}

export default EditPage
