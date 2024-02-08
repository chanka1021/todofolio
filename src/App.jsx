import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Nopage from "./pages/Nopage";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
