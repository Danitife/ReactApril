import React, {useEffect, useState} from 'react'

const AllInfo = () => {
    const [info, setinfo] = useState(null)
    useEffect(()=>{
        let theInfo = JSON.parse(localStorage.getItem("uuu"))
        console.log(theInfo);
    },[])
  return (
    <>
        
    </>
  )
}

export default AllInfo