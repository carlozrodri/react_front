// Import React
import React, { Component } from "react";

// Import Bootstrap

// Import Custom CSS
import "./App.css";
// import "./styleguide.css";

// Import from react-router-dom

// Import other React Component

import NavBar from "./Components/navbar/navbar";
import UpdateCompo from "./Components/home/updatecompo";
import EmailBar from "./Components/emailbar/emailbar";
import FooterBar from "./Components/footer/footer";

import JulioTest from "./Components/juliotest/julio";
// App Component
class App extends Component {
  render() {
    return (
      <div>
          <JulioTest />
   
        <NavBar />
     
        <UpdateCompo />
        <EmailBar />


        <FooterBar />
    
      </div>
    );
  }
}

export default App;
