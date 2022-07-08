import React from "react"

import { Navbar  } 
from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./thetop8.png"
import "./navbar.css"
import JulioTest from "../juliotest/julio";

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
    <JulioTest/>
  </Navbar>
 

        </div>
     );
}


export default NavBar;