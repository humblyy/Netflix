import React, { useEffect, useRef, useState } from 'react'
import "./titlecards.css"

import { Link } from 'react-router-dom'


//component for the cards which are displayed on the row
function Titlecards({title,category}) {
    const [cardData,setCardData]=useState([])
const cardRef = useRef();
//fetch movies from TMDB
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjUyYjY5MDg1NWM2NWYyNmRiN2Q1MGM5MzViYzMwYyIsIm5iZiI6MTc4MjEzNjE0NS45NzEsInN1YiI6IjZhMzkzZDUxYjQ5NWZkMWYwMTQ1NDIwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ykGxVMyK6-BbyJVfKoGmUjqW8SRhywD9GPhxHXlalM'
  }
};



 const handleWheel=(e)=>{
e.preventDefault()
useRef.current.scrollLeft +=e.deltaY
}

    useEffect(()=>{
        fetch(
          `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
          options,
        )
          .then((res) => res.json())
          .then((res) => setCardData(res.results))
          .catch((err) => console.error(err));
    cardRef.current.addEventListener("wheel",handleWheel)
    },[])
  return (
    <div className='title_cards'>    
            <h2>{title?title:'Popular on Netflix'} </h2>
            <div className='card_list' ref={cardRef}>
                {cardData.map((singleCard,index)=>{
                    return <Link to={`/player/${singleCard.id}`} className='card' key={index}> 
                        <img src={`https://image.tmdb.org/t/p/w500`+singleCard.backdrop_path} alt="" />
                        <p>{singleCard.original_title}</p>
                    </Link>
                })}
                
            </div>
    </div>
  )
}

export default Titlecards