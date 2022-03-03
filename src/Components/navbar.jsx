import React from "react"

import { BrowserRouter as Router, Routes,
    Route, Link } from "react-router-dom";
import { Nav, Navbar, Container, Row, Col, Card, Button, CardGroup  } 
from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


function NavBar() {
    return ( 
        <div>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand>
                <Link to={"/create-student"} 
                  className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">

                <Nav>
                  <Link to={"/student-list"} 
                    className="nav-link">
                    Sign up!
                  </Link>
                </Nav>
              </Nav>
          </Navbar>
        </header>
        </div>
     );
}


export default NavBar;