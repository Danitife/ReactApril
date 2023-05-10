import React from 'react'
import { useParams } from 'react-router-dom'
import useAxios from './useAxios'

const ShowOne = () => {
    const {id} = useParams()
    console.log(id);
    const {data} = useAxios(`http://localhost:9090/posts/${id}`)
  return (
    <>
        { !data? "No data":
            <h1>{data.body}</h1>
        }
    </>
  )
}

export default ShowOne