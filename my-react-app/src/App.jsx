import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function App() {
  const [name,setName]=useState("")
  const [message,setMessage]=useState("")
  const [comments,setComments]=useState([])

  async function fetchComments(){
    const {data}=await supabase.from("comments").select("*").order("id",{ascending:false})
    setComments(data)
  }

  async function addComment(){
    if(!name || !message) return
    await supabase.from("comments").insert([{name,message}])
    setName("")
    setMessage("")
    fetchComments()
  }

  useEffect(()=>{
    fetchComments()
  },[])

  return(
  <div style={{
    padding:30,
    fontFamily:"Arial",
    maxWidth:600,
    margin:"auto"
  }}>
      <h1>My Personal Website</h1>

      <h2>Leave Comment</h2>

      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <br/><br/>
      <textarea placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} />
      <br/><br/>
      <button onClick={addComment}>Send</button>

      <h2>Comments</h2>
      {comments.map(c=>(
        <div key={c.id} style={{border:"1px solid gray",margin:10,padding:10}}>
          <b>{c.name}</b>
          <p>{c.message}</p>
        </div>
      ))}
    </div>
  )
}