import React, {useState} from 'react'
import Button from './Button'

const Users = () => {
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [allUsers, setallUsers] = useState([])
    const addUser = ()=>{
        let obj = {username, email, gender}
        setallUsers([...allUsers, obj])
    }
    const delUser = (index)=>{
        console.log(index);
        let alteredUser = [...allUsers];
        alteredUser.splice(index, 1)
        setallUsers(alteredUser)
    }
  return (
    <>
      <div className='w-50 p-3 mx-auto shadow'>
        <h1 className="text-warning text-center">List of users</h1>
        <div className="d-flex">
            <input onChange={(e)=>setusername(e.target.value)} type="text" className="form-control" />
            <input onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control" />
            <input onChange={(e)=>setGender(e.target.value)} type="text" className="form-control" />
            <Button myClick={addUser} bb="btn btn-success" dan="Add User" />
            
        </div>
        <table>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((eachUser, index)=>(
                        <>
                            <tr>
                                <td>{index+1}</td>
                                <td>{eachUser.username}</td>
                                <td>{eachUser.email}</td>
                                <td>{eachUser.gender}</td>
                                <td><Button myClick={(e)=>delUser(index)} bb="btn btn-sm btn-danger" dan="&times;" /></td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
      </div>  
    </>
  )
}

export default Users