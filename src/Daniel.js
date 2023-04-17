import React, {useState} from 'react'
import Button from './components/Button'
import './components/button.css'

const Daniel = () => {
    const [digit, setdigit] = useState(1);
    const [users, setusers] = useState(["Dan", "Sam"])
    const decrease = ()=>{
        if(digit == -5){
            return
        }
        setdigit(digit-1)
    }
  return (
    <>
        <div>Daniel</div>
        <ul>
            {users == "" ? "No user available":
                users.map((el, index)=>(
                    <div key={index}>
                    <li>{el}</li>
                    </div>
                ))
            }
        </ul>
        <Button myClick={decrease} bb="btn btn-danger" dan="Decrease" />
        <h1>{digit}</h1>
        <Button bb="btn btn-success" dan="Increase" />
        <Button bb="dan" dan="Checking" />
        <button className="btn btn-primary">Blue Button</button>
    </>
  )
}

export default Daniel