import React from "react"

import { BrowserRouter as Router, Routes,
    Route, Link } from "react-router-dom";
import { Nav, Navbar  } 
from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./thetop8.png"
import AsyncSearch from "./asyncSearch"

function NavBar() {
    return ( 
        <div>
        <Navbar>
    <Navbar.Brand href="localhost:3000">
      <img
        src={logo}
        height="95"
      />
    </Navbar.Brand>
    <AsyncSearch/>
  </Navbar>
 

        </div>
     );
}


export default NavBar;