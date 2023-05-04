import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StateHook = () => {
    const navigate = useNavigate()
    const [myArr, setmyArr] = useState([])
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const addme = ()=>{
        let blog_post = {author, title, text}
        console.log(blog_post);

        // FOR JS FETCH

        // fetch("http://localhost:3377/posts",{
        //     headers:{
        //         "Content-Type": "application/json"
        //     },
        //     method: "POST",
        //     body: JSON.stringify(blog_post)
        // }
        // )
        // .then((res)=>res.json())
        // .then((data)=>{
        //     console.log(data);
        // }).catch((err)=>{
        //     console.log(err);
        // })

        // FOR AXIOS

        axios.post("http://localhost:3377/posts",{
            // headers:{
            //     "Content-Type": "application/json"
            // },
            // method: "POST",
            author,title, body: text
        })
        .then((res)=>{
            console.log(res.data.body);
        }).catch((err)=>{
            console.log(err);
        })
    }
    const addyou = ()=>{
        console.log("ukytry");
    }
    // useEffect(()=>{
    //     localStorage.setItem("uuu", JSON.stringify(myArr))
    //     console.log(myArr);
    // },[myArr])

    // useEffect(()=>{
    //     fetch("http://localhost:3377/posts")
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //     })
    // })
    
  return (
    <>
        <input onChange={(e)=>setAuthor(e.target.value)} type="text" placeholder='author' /><br /><br />
        <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='title' /><br /><br />
        <input onChange={(e)=>setText(e.target.value)} type="text" placeholder='content' /><br />
        <button onClick={addme}>Add me</button>
        <button onClick={addyou}>Add you</button>
    </>
  )
}

export default StateHook