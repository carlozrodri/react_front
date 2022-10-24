import React from "react"

import { Navbar  } 
from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./thetop8.png"
import "./navbar.css"
import NavButton from "./NavButton";

function NavBar() {
    return ( 
        <>
        <Navbar className="navbar">
    <Navbar.Brand href="/">
      <img
  
        src={logo}
        height="120"
        alt="logo"
      />
    </Navbar.Brand>
    <NavButton/>
  </Navbar>
 

        </>
     );
}


export default NavBar;