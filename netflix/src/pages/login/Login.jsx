import React from 'react'
import logo from "../../assets/images/logo.png"
import "./login.css"
import { useState } from 'react'
import {login,signup} from "../../Firebase"
import spinner_img from "../../assets/images/netflix_spinner.gif"


function Login() {
    const [userStatus,setUserStatus]=useState("Sign In")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [loading,setLoading]=useState(false)
async function user_auth(e){
    setLoading(true)
    e.preventDefault()
if(userStatus==="Sign Up"){
    await signup(name,email,password)
}
else{
    await login(email,password)
}
setLoading(false)
}

  return (
    loading?<div className='loading_img'>
        <img src={spinner_img} alt="" />
    </div> :
    <div className='login_page'>
        <img src={logo} alt="" className='logo'/>
        <div className='form'>
        <h1 >{userStatus}</h1>
        <form action="" >
            {userStatus==="Sign Up"?
            <input value={name} onChange={(e)=>{setName(e.target.value);}} type="text" placeholder='Your Name' />:<></>}
        
        <input value={email} onChange={(e)=>{setEmail(e.target.value);}} type="email" placeholder='Email' />
        <input value={password} onChange={(e)=>{setPassword(e.target.value);}} type="password" placeholder='Password' />
        <button type='submit' onClick={user_auth}> {userStatus}</button>
        <div className='help_center'>
        <div className='remember'>
            <input type="checkbox" />
            <label htmlFor="" >Remember Me</label>
            </div>
            <p >Need Help?</p>
            </div>
        </form>
        <div className='change_form'>
            {userStatus==="Sign Up"? <p>Already have an Account?<span onClick={()=>{setUserStatus("Sign In")}}>Sign In Now</span></p>
            : <p>New to Netflix?<span onClick={()=>{setUserStatus("Sign Up")}}>Sign Up Now</span></p>}
          
            
        </div>
        </div>

    </div>
  )
}

export default Login