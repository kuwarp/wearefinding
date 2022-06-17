import React, { useRef } from "react";
import { AiOutlineClose , AiOutlineBars } from "react-icons/ai";
import logo from "../../assets/1.png";
import "./nav.css";

function Navbar() {
  const navRef = useRef();
   
   const display = () =>{
       navRef.current.classList.onClick.toggle('responsive_nav')
   }
  return (
<div className="container">
<header>
     
          
      <nav ref={navRef}>
      <img src={logo} alt="" className="logo" />
        <a href="/#">Home</a>
        <a href="/#">About-us</a>
        <a href="/#">certificate</a>
        <a href="/#">Contacts</a>

      <button type="button" className="nav-btn nav-close-btn" onClick={display}>
        < AiOutlineClose /> 
         
        </button>
      </nav>

      <button className="nav-btn" onClick={display}>
      <AiOutlineBars />
        
      </button>
    </header>
    </div>
  );

}

export default Navbar;
