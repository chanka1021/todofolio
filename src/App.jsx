import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [todos,SetTodos] = useState(null)
 useEffect(()=>{
  GetTodos();
 },[])

  const GetTodos =  async () =>{
    const res = await axios.get('http://localhost:1937/todos')
    SetTodos(res.data)
    console.log(res.data)
  }

  return (
    <>
     <h1>s</h1>
    </>
  )
}

export default App
