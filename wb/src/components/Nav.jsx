import { Fade } from 'react-reveal';
import './Nav.css';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { Link } from 'react-scroll';

const Nav = () => {
const [click, setClick] = React.useState(false);

const handleClick = () => setClick(!click);
const Close = () => setClick(false);

const [navstate,Setnavstate]=useState("navbar")


  useEffect(()=>{
     document.addEventListener("scroll", e => {
      
      if (window.scrollY >= 50) {
        if (navstate !== "nav-sticky") {
          Setnavstate("nav-sticky")
        }
      } else {
        if (navstate !== "navbar") {
          Setnavstate("navbar")
        }
      }
    })
   
    
  },[navstate])


return (
  <div>
   <div className={click ? "main-container" : ""} onClick={()=>Close()} />
    <nav className={navstate+" shadow-2xl shadow-black"} onClick={(e)=>e.stopPropagation()}>
      <div className="nav-container">
        <Link exact to="/" className="nav-logo">
          My Portfolio
          
        </Link>
        <Fade top cascade>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        
          <li className="nav-item">
            <Link
              exact
              to="top-div"
              smooth={true}
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              01.About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              02.Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/blog"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              03.Work
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="fourth"
              activeClassName="active"
              smooth={true}
              className="nav-links"
             onClick={click ? handleClick : null}
            >
              04.Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="fourth"
              activeClassName="active"
              smooth={true}
              className="nav-links"
             onClick={click ? handleClick : null}
            >
              <button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Yellow</button>
            </Link>
          </li>
          
        </ul>
        </Fade>

        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </div>
    </nav>
  </ div>
        
    )
}

export default Nav