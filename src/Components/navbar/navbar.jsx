import React from "react"

import { Navbar  } 
from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./thetop8.png"
import "./navbar.css"

function NavBar() {
    return ( 
        <div>
        <Navbar>
    <Navbar.Brand href="/">
      <img
        src={logo}
        height="120"
        alt="logo"
      />
    </Navbar.Brand>
  </Navbar>
 

        </div>
     );
}


export default NavBar;