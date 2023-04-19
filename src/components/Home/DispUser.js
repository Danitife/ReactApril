import React from 'react'

const DispUser = ({theUser}) => {
    console.log(theUser);
  return (
    <>
       <table>
        <thead>
            <tr>
                <th>S/N</th>
                <th>Username</th>
                <th>Email</th>
                <th>Nationality</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {theUser.map((eachUser, index)=>(
                <>
                    <tr>
                        <td>{index+1}</td>
                        <td>{eachUser.myName}</td>
                        <td>{eachUser.myEmail}</td>
                        <td>{eachUser.myNationality}</td>
                    </tr>
                </>
            ))}
        </tbody>
        </table> 
    </>
  )
}

export default DispUser