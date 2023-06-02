import React from 'react'

const Card = (props) => {
  return (
    <div onClick={props.onClick} className={props.className +"  rounded-md"}>
      {props.children}
    </div>
  )
}

export default Card
