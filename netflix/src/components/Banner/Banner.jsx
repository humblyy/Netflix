import "./banner.css"
import React from 'react'
import hero_banner from "../../assets/images/hero_banner.jpg"
import hero_title from "../../assets/images/hero_title.png"
import info_icon from "../../assets/images/info_icon.png"
import play_icon from "../../assets/images/play_icon.png"
import Titlecards from "../titlecards/Titlecards"
function Banner() {
  return (
    <>
      <div className="hero">
        <img src={hero_banner} alt="" className="hero_img" />
        <div className="hero_caption">
          <img src={hero_title} alt="" className="caption_img" />
          <p>
            {" "}
            Discovering his ties to a secret ancient order a Young man living in
            Istanbul...
          </p>
          <div className="hero_buttons">
            <button className="btn">
              <img src={play_icon} alt="" /> Play
            </button>
            <button className="btn dark_btn">
              <img src={info_icon} alt="" /> More Info
            </button>
          </div>
          <Titlecards />
        </div>
      </div>
      <div className="more_cards">
        <Titlecards title="Blockbustor Movies" category="popular" />
        <Titlecards title="Only On Netflix" category="top_rated" />
        <Titlecards title="Upcoming" category="upcoming" />
        <Titlecards title="Top Pics For You" category="now_playing" />
      </div>
    </>
  );
}

export default Banner