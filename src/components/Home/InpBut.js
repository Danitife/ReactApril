import React from 'react'
import Button from '../Button'
const InpBut = (props) => {
  return (
    <>
      <input onChange={(e)=>props.myName(e.target.value)} type="text" />  
      <input onChange={(e)=>props.myEmail(e.target.value)} type="text" />  
      <input onChange={(e)=>props.myNationality(e.target.value)} type="text" />  
      <Button myClick={props.addMyUser} dan="Add My User" />
    </>
  )
}

export default InpBut