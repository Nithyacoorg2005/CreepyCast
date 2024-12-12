import React, { useState } from "react";
import './Navbar.css'
import logo from '../../images/image.png'

import { FaHome, FaBook, FaFilm, FaTv, FaUser, FaPlusCircle } from "react-icons/fa";

const Navbar = () => {
  const [hover, setHover] = useState("");

  const handleHover = (item) => setHover(item);

  const handleLeave = () => setHover("");

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img style={{width:"200px"}} src={logo} alt="/"/>
      </div>
      <ul className="navbar-menu">
        <li
          className="navbar-item"
          onMouseEnter={() => handleHover("home")}
          onMouseLeave={handleLeave}
        >
       
          <a style={{color:"#fff"}} href="/main">Home</a>
        
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleHover("audiobooks")}
          onMouseLeave={handleLeave}
        >
  
          Audiobooks
          {hover === "audiobooks" && (
            <div className="subnavbar">
              <a href="/new-releases">New Releases</a>
             
              <a href="/genres">Genres</a>
            </div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleHover("movies")}
          onMouseLeave={handleLeave}
        >
    
          Horror Movies
          {hover === "movies" && (
            <div className="subnavbar">
              <a href="/classics">Classics</a>
              <a href="/modern">Modern</a>
              <a href="/thrillers">Thrillers</a>
            </div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleHover("tvshows")}
          onMouseLeave={handleLeave}
        >
        
          TV Shows
          {hover === "tvshows" && (
            <div className="subnavbar">
              <a href="/series">Series</a>
              <a href="/horrorstories">Horror Documentary</a>
              <a href="/anthologies">Anthologies</a>
            </div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleHover("Podcasts")}
          onMouseLeave={handleLeave}
        >
        
          Podcasts
        {hover === "Podcasts" && (
            <div className="subnavbar">
        <a style={{color:"#fff"}} href="/podcasts"> Podcasts</a>
        <a  style={{color:"#fff"}}href="/videopodcasts">Video Podcasts</a>
        </div>
        )}
        </li>
         
       
       
      </ul>
    </nav>
  );
};

export default Navbar;
