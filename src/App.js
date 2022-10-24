// Import React
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// App Component
import Home from "./pages/Home/Home";
import Contactame from "./pages/Contactame/Contactame";
import About from "./pages/About/About";
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path = "/about" children={<About />} />
          <Route path='/contactame' children={<Contactame />} />
          <Route path='*' children={<Home />} />
        </Switch>
      </div>
    </Router>
  );
}
