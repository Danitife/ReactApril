import React, {useState} from 'react'
import Button from './Button'

const Users = () => {
    const [users, setusers] = useState("");
    const [allUsers, setallUsers] = useState([])
    const addUser = ()=>{
        setallUsers([...allUsers, users]);
        console.log(allUsers);
    }
  return (
    <>
      <div className='w-50 p-3 mx-auto shadow'>
        <h1 className="text-warning text-center">List of users</h1>
        <div className="d-flex">
            <input onChange={(e)=>setusers(e.target.value)} type="text" className="form-control" />
            <Button myClick={addUser} bb="btn btn-success" dan="Add User" />
        </div>
      </div>  
    </>
  )
}

export default Users