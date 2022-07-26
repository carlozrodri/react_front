// Import React
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from 'react-ga';

// App Component
import Home from "./pages/Home";
import Contactame from "./pages/Contactame";
const TRACKING_ID = "G-GJGG8F22EE"; // OUR_TRACKING_ID
ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.initialize(TRACKING_ID);

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
