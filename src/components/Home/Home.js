import React, {useState} from 'react'
import InpBut from './InpBut'
import DispUser from './DispUser'

const Home = () => {
    const [myName, setmyName] = useState("")
    const [myEmail, setMyEmail] = useState("")
    const [myNationality, setMyNationality] = useState("")
    const [allUser, setallUser] = useState([])
    const addMyUser = ()=>{
        let currUser = {myName, myEmail, myNationality}
        setallUser([...allUser, currUser])
        console.log(allUser);
    }
  return (
    
    <>
      <main>
        <InpBut
         myName={setmyName}
         myEmail={setMyEmail}
         myNationality={setMyNationality}
         addMyUser={addMyUser}
        />

        <DispUser theUser={allUser} />
      </main>  
    </>
  )
}

export default Home