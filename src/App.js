// Import React
import React, { Component } from "react";
  
// Import Bootstrap
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Routes,
    Route, Link } from "react-router-dom";
  
// Import other React Component

import TarjetasComponent from
    "./Components/cardstest"
import NavBar from
  "./Components/navbar"
import FooterPage from "./Components/footerbar";
import MyComponent from "./Components/test";
import ItemDisplay from "./Components/item_display";
//import List from "./Components/efecto"
//import axios from "axios";

// App Component
class App extends Component {
  state = {
    visible: true
  };
  render() {
  return (
    <div className="App">
    <Router>
    <NavBar>
      </NavBar> 
            <ItemDisplay/>

      
            {/* <FooterPage>
        
        </FooterPage> */}

    </Router>
    </div>
    
  );
  }
}
  
export default App;