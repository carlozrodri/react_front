import React from "react"

import { BrowserRouter as Router, Routes,
    Route, Link } from "react-router-dom";
import { Nav, Navbar, Container, Row, Col, Card, Button, CardGroup, NavDropdown, Form, FormControl,  } 
from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./thetop8.png"
import AsyncSearch from "./asyncSearch";

function NavBar() {
    return ( 
        <div>
        <header className="App-header">
        <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src={logo}
        
        height="95"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <AsyncSearch/>

  </Container>
  </Navbar>
  <br />
        {/* <Navbar className="navbar fixed-top navbar-light bg-light">
        <img src={logo} height="70"/>

 
    <Navbar.Brand href="/localhost">Navbar scroll
    </Navbar.Brand>

      <Button variant="outline-success">Categories</Button>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>

      </Nav>
      
    </Navbar.Collapse>

</Navbar> */}
        </header>
        </div>
     );
}


export default NavBar;