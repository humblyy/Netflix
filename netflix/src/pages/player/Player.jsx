import React, { useEffect, useState } from 'react'
import "./player.css"
import back_arrow from "../../assets/images/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'

//the trailer component-displaying the movie trailer
function Player() {


const navigate=useNavigate()  
const {id}=useParams()
const [movieTrailer,setTrailer]=useState({
  name:"",
  key:"",
  published_at:"",
  type:""
})

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjUyYjY5MDg1NWM2NWYyNmRiN2Q1MGM5MzViYzMwYyIsIm5iZiI6MTc4MjEzNjE0NS45NzEsInN1YiI6IjZhMzkzZDUxYjQ5NWZkMWYwMTQ1NDIwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ykGxVMyK6-BbyJVfKoGmUjqW8SRhywD9GPhxHXlalM",
  },
};

useEffect(()=>{
fetch(
  `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
  options,
)
  .then((res) => res.json())
  .then((res) =>setTrailer(res.results[0]))
  .catch((err) => console.error(err));
},[])


  return (
    <div className="player">
      <img src={back_arrow} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe
        src=""
        frameborder="0"
        height="90%"
        width="90%"
        src={`https://www.youtube.com/embed/${movieTrailer.key}`}
        title="trailer"
        allowFullScreen
      ></iframe>

      <div className="player_info">
        <p>{movieTrailer.published_at.slice(0,10)}</p>
        <p>{movieTrailer.name}</p>
        <p>{movieTrailer.type}</p>
      </div>
    </div>
  );
}

export default Player