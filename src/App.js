// Import React
import React, { Component } from "react";

// Import Bootstrap

// Import Custom CSS
import "./App.css";

// Import from react-router-dom

// Import other React Component

import NavBar from "./Components/navbar";
import UpdateCompo from "./Components/updatecompo";
import EmailBar from "./Components/emailbar/emailbar";
import FooterBar from "./Components/footer/footer";

// App Component
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <UpdateCompo />
        <EmailBar />
        <FooterBar />
      </div>
    );
  }
}

export default App;
