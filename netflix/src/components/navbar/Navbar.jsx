import React, { useEffect, useRef } from 'react'
import logo from "../../assets/images/logo.png"
import search_icon from "../../assets/images/search_icon.svg"
import bell_icon from "../../assets/images/bell_icon.svg"
import profile_img from "../../assets/images/profile_img.png"
import caret_icon from "../../assets/images/caret_icon.svg"
import "./navbar.css"
import { logout } from '../../Firebase'
function Navbar() {

  const navRef=useRef()
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
if (window.scrollY >= 80) {
  navRef.current.classList.add("dark_nav");
} else {
  navRef.current.classList.remove("dark_nav");
}
    })

  },[])

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar_left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar_right">
        <div>
          <img src={search_icon} alt="" />
        </div>
        <p>children</p>
        <div>
          <img src={bell_icon} alt="" />
        </div>
        <div className="navbar_profile">
          <img src={profile_img} alt="" className="profile" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={()=>{logout()}}> Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar