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
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"} 
                  className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} 
                    className="nav-link">
                    Create Student
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/student-list"} 
                    className="nav-link">
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        </div>
     );
}


export default NavBar;