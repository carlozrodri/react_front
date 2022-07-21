// Import React
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// App Component
import Home from "./pages/Home";
import Contactame from "./pages/Contactame";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/Contactame' children={<Contactame />} />
          <Route path='*' children={<Home />} />
        </Switch>
      </div>
    </Router>
  );
}
