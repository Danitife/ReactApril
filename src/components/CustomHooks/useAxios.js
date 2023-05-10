import {useState, useEffect} from 'react'
import axios from 'axios'


const useAxios = (url) => {
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true)

    useEffect(() => {
      try {
        axios.get(url)
        .then((res)=>{
            console.log(res);
            setdata(res.data)
            console.log(data);
            setloading(false)
        }).catch((err)=>{
            console.log(err);
        })
      } catch (error) {
        console.log(error);
      }
    }, [url])
    return {data, loading}
  return (
    <>
        
    </>
  )
}

export default useAxios