import React from 'react'

const Card = (props) => {
  return (
    <div className={props.className +"  rounded-md"}>
      {props.children}
    </div>
  )
}

export default Card
