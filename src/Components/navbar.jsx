import React from "react"

import { Navbar  } 
from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./thetop8.png"

function NavBar() {
    return ( 
        <div>
        <Navbar>
    <Navbar.Brand href="http://localhost:3000/">
      <img
        src={logo}
        height="95"
        alt="logo"
      />
    </Navbar.Brand>
  </Navbar>
 

        </div>
     );
}


export default NavBar;