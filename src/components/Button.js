import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.myClick} className={props.bb}>{props.dan}</button>
    </div>
  )
}

export default Button