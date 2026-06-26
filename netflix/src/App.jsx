import Navbar from "./components/navbar/Navbar"
import { Routes, useNavigate } from "react-router-dom"
import { Route } from "react-router-dom"
import Login from "./pages/login/Login"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./Firebase"
import { ToastContainer, toast } from "react-toastify";
import Home from "./pages/Home/Home"
import Player from "./pages/player/Player"



function App() {
const navigate=useNavigate()
useEffect(()=>{
onAuthStateChanged(auth,async (user)=>{
  if(user){
console.log("Logged in")
navigate('/')
  }
  else{
console.log("Logged out")
navigate('/login')
  }
})
},[])
  return (
    <>
      <ToastContainer theme="dark"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player/>}/>
      </Routes>
    </>
  );
}

export default App
