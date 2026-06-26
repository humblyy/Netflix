import React from 'react'
import "./footer.css"
import facebook_icon from "../../assets/images/facebook_icon.png"
import instagram_icon from "../../assets/images/instagram_icon.png"
import twitter_icon from "../../assets/images/twitter_icon.png"
import youtube_icon from "../../assets/images/youtube_icon.png"
function Footer() {
  return (
    <div className="footer">
      <div className="footer_icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>

      <div>
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
        <p className="copy_write">©copy:1997-2024 Netflix. Inc.</p>
      </div>
    </div>
  );
}

export default Footer


       
  
   


