import { Link } from 'react-router-dom'
import useAxios from './useAxios'
import axios from 'axios'

const Landing = () => {
  const {data, loading} = useAxios('http://localhost:9090/posts')
    const delStuff = (id)=>{
        console.log(id);
        axios.delete(`http://localhost:9090/posts/${id}`)
        .then(res=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    
  return (
    <>
        {/* {loading && "Loading..."} */}
        {!data && 'There is no data'}
        <div>
            {loading? "Loading": data.map((el, i)=>(
                <>
                    <div className='card' key={i}>
                        <span>{el.id}</span>
                        <h4>{el.author}</h4>
                        <p>{el.title}</p>
                        <p>{el.body}</p>
                        <Link to={`/show_one/${el.id}`}>See more</Link>
                        <button onClick={()=>delStuff(`${el.id}`)}>&times;</button>
                    </div>
                </>
            ))}
        </div>

    </>
  )
}

export default Landing