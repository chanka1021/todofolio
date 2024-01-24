import axios from "axios"
import { useEffect, useState } from "react"
import Home from "./pages/Home/Home";

function App() {

  /* const [todos,SetTodos] = useState(null)
 useEffect(()=>{
  GetTodos();
 },[])

  const GetTodos =  async () =>{
    const res = await axios.get('http://localhost:1937/todos')
    SetTodos(res.data)
    console.log(res.data)
  }
 */
  return (
    <>
     <Home/>
    </>
  )
}

export default App
