import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import IntroImg from "../assests/imdb-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {

  const [click, setClick] = useState(false);
  const ClickHandler = () => {
    setClick(!click);
    console.log(click);
  }

  return (
    <div className='header'>
      <div className="headerLeft">
        <Link to="/"> <img src={IntroImg} className='header-icon' /> </Link>
        <div className={click ? "headerLeft1" : "active"}>
          <Link to="/TopMovies"><span>Top Rated</span></Link>
          <Link to="/Upcoming"><span>Upcoming</span></Link>
          <Link to="/Popular"><span>Popular</span></Link>
        </div>
      </div>
      <div className='hamburger' onClick={ClickHandler}>

        {
          click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)
        }
      </div>
    </div>
  )
}

export default Header 
