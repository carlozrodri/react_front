// Import React
import React, { Component } from "react";
  
// Import Bootstrap
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom

// Import other React Component


import NavBar from "./Components/navbar";
import FooterPage from "./Components/footerbar";
import UpdateCompo from "./Components/updatecompo"


// App Component
class App extends Component {
  render() {
  return (
    <div>
    <NavBar/>
    <UpdateCompo/>

    <FooterPage/>

    </div>
    
  );
  }
}
  
export default App;